import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import OnboardingClient from "./OnboardingClient";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Set up your profile — Career Cafe",
};

export default async function OnboardingPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    redirect("/login?callbackUrl=/onboarding");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { name: true }
  });

  return <OnboardingClient initialName={user?.name || ""} />;
}
