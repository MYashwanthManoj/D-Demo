import prisma from "@/lib/prisma"
import Link from "next/link"
import JobFilters from "@/components/jobs/JobFilters"

export const metadata = {
  title: "Job openings — Career Cafe",
}

export default async function JobsPage({ searchParams }: { searchParams: { q?: string; location?: string; workMode?: string; role?: string } }) {
  const q = searchParams.q || ""
  const location = searchParams.location || ""
  const workMode = searchParams.workMode || ""
  const role = searchParams.role || ""

  // Build the Prisma query
  const where: any = {
    verificationStatus: "VERIFIED"
  }

  if (q) {
    where.OR = [
      { title: { contains: q } },
      { company: { name: { contains: q } } },
      { skills: { contains: q } }
    ]
  }

  if (location) {
    where.location = { contains: location }
  }

  if (workMode) {
    where.workMode = { contains: workMode }
  }

  if (role) {
    where.title = { contains: role }
  }

  const jobs = await prisma.job.findMany({
    where,
    include: {
      company: true,
      _count: {
        select: { savedBy: true }
      }
    },
    orderBy: {
      postedDate: 'desc'
    }
  })

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar Filters */}
      <div className="w-full md:w-64 shrink-0">
        <div className="sticky top-[88px]">
          <JobFilters initialFilters={{ q, location, workMode, role }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900">Job openings</h1>
          <p className="text-[13px] leading-[20px] font-medium text-navy-500">{jobs.length} results</p>
        </div>

        {jobs.length === 0 ? (
          <div className="bg-white border border-border-strong rounded-xl p-10 text-center">
            <h2 className="text-[17px] leading-[24px] font-semibold text-navy-900 mb-2">No openings found</h2>
            <p className="text-[14px] leading-[20px] text-navy-500">We couldn&apos;t find any roles matching your filters. Try adjusting your criteria.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {jobs.map((job) => (
              <Link key={job.id} href={`/jobs/${job.id}`} className="block bg-white border border-border-strong rounded-xl p-5 hover:border-brand-300 hover:shadow-elevation-2 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100 overflow-hidden">
                    {job.company.logoUrl ? (
                      <img src={job.company.logoUrl} alt={job.company.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-brand-600 font-semibold text-[15px]">{job.company.name.substring(0, 2).toUpperCase()}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[17px] leading-[24px] font-medium text-navy-900 truncate">{job.title}</h3>
                    <p className="text-[15px] leading-[24px] text-navy-500 mt-0.5 truncate">{job.company.name} · {job.location}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="bg-navy-50 text-navy-700 px-2 py-0.5 rounded text-[12px] font-medium">{job.employmentType}</span>
                      <span className="bg-navy-50 text-navy-700 px-2 py-0.5 rounded text-[12px] font-medium">{job.experienceReq}</span>
                      <span className="bg-navy-50 text-navy-700 px-2 py-0.5 rounded text-[12px] font-medium">{job.workMode}</span>
                      {job.salary && (
                        <span className="bg-success-50 text-success-700 px-2 py-0.5 rounded text-[12px] font-medium">{job.salary}</span>
                      )}
                    </div>
                    <p className="text-[12px] leading-[18px] text-navy-400 mt-2.5">
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="hidden sm:inline-block text-[13px] font-medium text-navy-700 bg-white border border-border-strong px-3 py-1.5 rounded-lg shrink-0">View role</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
