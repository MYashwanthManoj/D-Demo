import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import Link from "next/link"

export const metadata = {
  title: "Dashboard — Career Cafe",
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email || "" }
  })
  const firstName = user?.name?.split(" ")[0] || "User"

  // Fetch some real or mock job data
  // Currently, we just mock the 3 recommended jobs and the metrics for now,
  // since the engine requires full implementation of jobs search.
  
  return (
    <>
      <div className="mb-8">
        <h1 className="text-[30px] leading-[38px] font-semibold text-navy-900">Good morning, {firstName}</h1>
        <p className="text-[15px] leading-[24px] text-navy-500 mt-1">148 openings match your profile. 12 are new since yesterday.</p>
      </div>

      {/* Profile Completion */}
      <div className="bg-brand-50 border border-brand-100 p-5 rounded-xl mb-8">
        <div className="flex flex-col items-start gap-3 mb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </div>
            <div>
              <p className="text-[14px] leading-[20px] font-medium text-navy-900">Profile 80% complete</p>
              <p className="text-[13px] leading-[20px] text-navy-500">Add your resume to unlock skill matching</p>
            </div>
          </div>
          <Link href="/settings" className="shrink-0 text-[13px] font-medium text-navy-700 bg-white border border-border-strong px-3 py-1.5 rounded-lg hover:bg-navy-50 transition-colors">
            Complete profile
          </Link>
        </div>
        <div className="h-1.5 bg-brand-200 rounded-full overflow-hidden">
          <div className="h-full bg-brand-500 rounded-full w-4/5"></div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <Link href="/jobs" className="bg-white border border-border-strong rounded-xl p-4 text-center hover:shadow-elevation-2 transition-shadow">
          <div className="text-[24px] font-semibold text-brand-500">42</div>
          <p className="text-[12px] leading-[18px] text-navy-500 mt-0.5">Openings</p>
        </Link>
        <Link href="/resources" className="bg-white border border-border-strong rounded-xl p-4 text-center hover:shadow-elevation-2 transition-shadow">
          <div className="text-[24px] font-semibold text-brand-500">31</div>
          <p className="text-[12px] leading-[18px] text-navy-500 mt-0.5">Resources</p>
        </Link>
        <Link href="/shots" className="bg-white border border-border-strong rounded-xl p-4 text-center hover:shadow-elevation-2 transition-shadow">
          <div className="text-[24px] font-semibold text-brand-500">12</div>
          <p className="text-[12px] leading-[18px] text-navy-500 mt-0.5">Shots</p>
        </Link>
        <Link href="/roadmaps" className="bg-white border border-border-strong rounded-xl p-4 text-center hover:shadow-elevation-2 transition-shadow">
          <div className="text-[24px] font-semibold text-brand-500">2</div>
          <p className="text-[12px] leading-[18px] text-navy-500 mt-0.5">Roadmaps</p>
        </Link>
      </div>

      {/* Recommended Openings */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] leading-[28px] font-semibold text-navy-900">Recommended for you</h2>
          <Link href="/jobs" className="text-[13px] leading-[20px] font-medium text-brand-500 hover:text-brand-600">View all openings</Link>
        </div>
        <div className="space-y-3">
          <Link href="/jobs/1" className="block bg-white border border-border-strong rounded-xl p-5 hover:border-brand-300 hover:shadow-elevation-2 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 font-semibold text-[15px] flex items-center justify-center shrink-0">IN</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] leading-[24px] font-medium text-navy-900">Associate Software Engineer</h3>
                <p className="text-[15px] leading-[24px] text-navy-500 mt-0.5">Infosys · Bengaluru, India</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="bg-navy-50 text-navy-700 px-2 py-0.5 rounded text-[12px] font-medium">Full-time</span>
                  <span className="bg-navy-50 text-navy-700 px-2 py-0.5 rounded text-[12px] font-medium">0–2 yrs</span>
                  <span className="bg-navy-50 text-navy-700 px-2 py-0.5 rounded text-[12px] font-medium">Hybrid</span>
                  <span className="bg-success-50 text-success-700 px-2 py-0.5 rounded text-[12px] font-medium">₹6–9 LPA</span>
                </div>
                <p className="text-[12px] leading-[18px] text-navy-400 mt-2.5">Posted 4 hours ago</p>
              </div>
              <span className="hidden sm:inline-block text-[13px] font-medium text-navy-700 bg-white border border-border-strong px-3 py-1.5 rounded-lg">View role</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
