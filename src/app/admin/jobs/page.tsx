import prisma from "@/lib/prisma"
import Link from "next/link"
import { Search, Plus, MoreVertical } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

export const dynamic = 'force-dynamic'

export default async function JobsPage() {
  const jobs = await prisma.job.findMany({
    include: { company: true },
    orderBy: { postedDate: 'desc' }
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Jobs Management</h1>
          <p className="text-navy-500 mt-1">Manage, verify, and publish job listings.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors shadow-elevation-2 font-medium">
          <Plus className="w-4 h-4" />
          Create Job
        </button>
      </div>

      <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 overflow-hidden">
        <div className="p-4 border-b border-navy-100 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
            <input 
              type="text" 
              placeholder="Search by job title or company..." 
              className="w-full pl-10 pr-4 py-2 bg-navy-50 border border-navy-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-50 text-navy-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Job Title</th>
                <th className="px-6 py-4 font-semibold">Company</th>
                <th className="px-6 py-4 font-semibold">Location / Mode</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Posted</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {jobs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-navy-400">
                    No jobs found in the database.
                  </td>
                </tr>
              ) : (
                jobs.map(job => (
                  <tr key={job.id} className="hover:bg-navy-25 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-navy-900">{job.title}</p>
                      <p className="text-xs text-navy-500">{job.employmentType} • {job.experienceReq}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-navy-700">{job.company?.name || 'Unknown'}</td>
                    <td className="px-6 py-4 text-sm text-navy-700">
                      {job.location}
                      <span className="block text-xs text-navy-500">{job.workMode}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        job.verificationStatus === 'PUBLISHED' ? 'bg-success-50 text-success-700' :
                        job.verificationStatus === 'PENDING_REVIEW' ? 'bg-amber-50 text-amber-700' :
                        'bg-navy-100 text-navy-700'
                      }`}>
                        {job.verificationStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-navy-500">
                      {formatDistanceToNow(new Date(job.postedDate), { addSuffix: true })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-navy-400 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
