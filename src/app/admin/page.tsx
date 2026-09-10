import prisma from "@/lib/prisma"
import { Users, Briefcase, FileText, Video, PlaySquare, Map, ShieldAlert, Heart, MousePointer2 } from "lucide-react"

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  // Execute real database queries in parallel
  const [
    totalUsers,
    activeUsers,
    activeJobs,
    pendingJobs,
    totalResources,
    totalVideos,
    totalShots,
    totalRoadmaps,
    savedJobsCount,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { status: "ACTIVE" } }),
    prisma.job.count({ where: { verificationStatus: "PUBLISHED" } }),
    prisma.job.count({ where: { verificationStatus: "PENDING_REVIEW" } }),
    prisma.resource.count(),
    prisma.video.count(),
    prisma.shot.count(),
    prisma.roadmap.count(),
    prisma.savedJob.count(),
  ])

  // Mocked for now until we implement event tracking for clicks
  const outboundClicks = "No data yet"

  const STAT_CARDS = [
    { label: "Total Users", value: totalUsers, icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Active Users", value: activeUsers, icon: Users, color: "text-indigo-500", bg: "bg-indigo-50" },
    { label: "Active Jobs", value: activeJobs, icon: Briefcase, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Pending Reviews", value: pendingJobs, icon: ShieldAlert, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Resources", value: totalResources, icon: FileText, color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Videos", value: totalVideos, icon: Video, color: "text-rose-500", bg: "bg-rose-50" },
    { label: "Shots", value: totalShots, icon: PlaySquare, color: "text-pink-500", bg: "bg-pink-50" },
    { label: "Roadmaps", value: totalRoadmaps, icon: Map, color: "text-cyan-500", bg: "bg-cyan-50" },
    { label: "Saved Jobs", value: savedJobsCount, icon: Heart, color: "text-red-500", bg: "bg-red-50" },
    { label: "Outbound Clicks", value: outboundClicks, icon: MousePointer2, color: "text-slate-500", bg: "bg-slate-50" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Dashboard Overview</h1>
        <p className="text-navy-500 mt-1">What is happening on Career Cafe right now?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        {STAT_CARDS.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="bg-white p-5 rounded-xl border border-navy-100 shadow-elevation-1">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-navy-900 mt-1">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl border border-navy-100 shadow-elevation-1">
          <h2 className="text-lg font-semibold text-navy-900 mb-4">Needs Attention</h2>
          {pendingJobs > 0 ? (
            <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-100">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-600" />
                <span className="font-medium text-amber-900">{pendingJobs} jobs awaiting verification</span>
              </div>
              <a href="/admin/moderation" className="text-sm font-semibold text-amber-700 hover:text-amber-800">Review Now &rarr;</a>
            </div>
          ) : (
            <p className="text-navy-500 text-sm">No pending items. Great job!</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl border border-navy-100 shadow-elevation-1">
          <h2 className="text-lg font-semibold text-navy-900 mb-4">Recent Activity</h2>
          <p className="text-navy-500 text-sm">Audit log stream will appear here.</p>
        </div>
      </div>
    </div>
  )
}
