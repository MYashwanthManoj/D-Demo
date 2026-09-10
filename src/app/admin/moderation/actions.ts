"use server"

import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { revalidatePath } from "next/cache"

export async function approveJob(jobId: string) {
  const session = await getServerSession(authOptions)
  if (!session || !["SUPER_ADMIN", "CONTENT_ADMIN", "MODERATOR"].includes(session.user?.role as string)) {
    return { error: "Unauthorized" }
  }

  await prisma.job.update({
    where: { id: jobId },
    data: { verificationStatus: "VERIFIED" } // In the frontend query it uses VERIFIED, wait, the admin dashboard checked PUBLISHED, let me check. Let's use VERIFIED since jobs/page.tsx uses VERIFIED.
  })

  // Create an audit log
  if (session.user?.id) {
    await prisma.auditLog.create({
      data: {
        adminId: session.user.id,
        action: "APPROVE_JOB",
        entityType: "JOB",
        entityId: jobId
      }
    })
  }

  revalidatePath("/admin/moderation")
  revalidatePath("/admin")
  revalidatePath("/jobs")
  return { success: true }
}

export async function rejectJob(jobId: string) {
  const session = await getServerSession(authOptions)
  if (!session || !["SUPER_ADMIN", "CONTENT_ADMIN", "MODERATOR"].includes(session.user?.role as string)) {
    return { error: "Unauthorized" }
  }

  await prisma.job.update({
    where: { id: jobId },
    data: { verificationStatus: "REJECTED" }
  })

  if (session.user?.id) {
    await prisma.auditLog.create({
      data: {
        adminId: session.user.id,
        action: "REJECT_JOB",
        entityType: "JOB",
        entityId: jobId
      }
    })
  }

  revalidatePath("/admin/moderation")
  revalidatePath("/admin")
  return { success: true }
}
