"use server"

import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { revalidatePath } from "next/cache"

export async function toggleSaveJob(jobId: string) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return { error: "Not authenticated" }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  })
  if (!user) return { error: "User not found" }

  const existing = await prisma.savedJob.findUnique({
    where: {
      userId_jobId: {
        userId: user.id,
        jobId
      }
    }
  })

  if (existing) {
    await prisma.savedJob.delete({
      where: { id: existing.id }
    })
  } else {
    await prisma.savedJob.create({
      data: {
        userId: user.id,
        jobId
      }
    })
  }

  revalidatePath(`/jobs/${jobId}`)
  revalidatePath(`/jobs`)
  revalidatePath(`/saved`)
  return { success: true, saved: !existing }
}

export async function incrementJobViews(jobId: string) {
  try {
    await prisma.job.update({
      where: { id: jobId },
      data: { views: { increment: 1 } }
    })
  } catch (error) {
    console.error("Failed to increment view", error)
  }
}
