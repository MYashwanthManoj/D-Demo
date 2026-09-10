"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  
  if (!name || !email || !password) {
    return { error: "Name, email, and password are required." };
  }
  
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return { error: "An account with this email already exists." };
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "USER",
        status: "ACTIVE", // Active by default for prototyping
      },
    });
    
    return { success: true };
  } catch (err: any) {
    console.error("Signup error:", err);
    return { error: "An error occurred while creating your account. Please try again." };
  }
}
