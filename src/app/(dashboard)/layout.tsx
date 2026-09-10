import Sidebar from "@/components/dashboard/Sidebar"
import TopBar from "@/components/dashboard/TopBar"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"

function getInitials(name: string) {
  if (!name) return "U"
  const parts = name.trim().split(" ")
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.email) {
    redirect("/login")
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { name: true, course: true }
  })

  if (!user) {
    redirect("/login")
  }

  const initials = getInitials(user.name || session.user.email || "")

  return (
    <div className="min-h-screen bg-navy-25 font-inter text-navy-700">
      <Sidebar user={{ name: user.name || "User", course: user.course, initials }} />
      <div className="md:ml-[240px] min-h-screen flex flex-col">
        <TopBar initials={initials} />
        <main className="flex-1 p-6 max-w-[960px] w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
