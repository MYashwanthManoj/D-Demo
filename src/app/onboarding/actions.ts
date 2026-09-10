"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function completeOnboarding(data: {
  name: string;
  course: string; // JSON string of { degree, branch, college }
  graduationYear: number;
  workPreference: string; // JSON string of { status, roles, workstyle }
  location: string; // Comma separated cities
}) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return { error: "You must be logged in to save onboarding details." };
  }

  try {
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: data.name,
        course: data.course,
        graduationYear: data.graduationYear,
        workPreference: data.workPreference,
        location: data.location,
      },
    });
    
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to complete onboarding:", error);
    return { error: "Failed to save details. Please try again." };
  }
}
