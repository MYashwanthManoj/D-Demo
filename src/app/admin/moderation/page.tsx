import prisma from "@/lib/prisma"
import Link from "next/link"
import ModerationActions from "./ModerationActions"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Moderation Queue — Admin | Career Cafe"
}

export default async function ModerationQueuePage() {
  const pendingJobs = await prisma.job.findMany({
    where: { verificationStatus: "PENDING_REVIEW" },
    include: { company: true },
    orderBy: { postedDate: 'asc' }
  }).catch(() => [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Job Moderation Queue</h1>
          <p className="text-navy-500 mt-1">Review and approve new job postings.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 overflow-hidden">
        {pendingJobs.length === 0 ? (
          <div className="p-10 text-center">
            <h3 className="text-lg font-medium text-navy-900 mb-2">No pending jobs</h3>
            <p className="text-navy-500">The moderation queue is currently empty.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-50 border-b border-navy-100 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                  <th className="p-4 w-1/3">Job & Company</th>
                  <th className="p-4 w-1/4">Details</th>
                  <th className="p-4 w-1/6">Posted</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100">
                {pendingJobs.map(job => (
                  <tr key={job.id} className="hover:bg-navy-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center shrink-0 border border-navy-200 overflow-hidden">
                           {job.company.logoUrl ? (
                              <img src={job.company.logoUrl} alt={job.company.name} className="w-full h-full object-cover" />
                           ) : (
                              <span className="text-navy-600 font-semibold text-xs">{job.company.name.substring(0,2).toUpperCase()}</span>
                           )}
                        </div>
                        <div>
                          <Link href={`/jobs/${job.id}`} target="_blank" className="font-medium text-navy-900 hover:text-brand-600 transition-colors block">
                            {job.title}
                          </Link>
                          <span className="text-sm text-navy-500">{job.company.name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1 text-sm text-navy-600">
                        <span>{job.location} • {job.workMode}</span>
                        <span className="text-xs text-navy-400 truncate max-w-[200px]">{job.skills}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-navy-600">
                      {new Date(job.postedDate).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end">
                        <ModerationActions jobId={job.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
