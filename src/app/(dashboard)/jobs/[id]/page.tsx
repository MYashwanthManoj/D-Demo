import prisma from "@/lib/prisma"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import SaveJobButton from "./SaveJobButton"
import { incrementJobViews } from "../actions"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const job = await prisma.job.findUnique({
    where: { id: params.id },
    include: { company: true }
  })
  if (!job) return { title: "Job not found" }
  return { title: `${job.title} — ${job.company.name} | Career Cafe` }
}

export default async function JobDetailPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  
  const job = await prisma.job.findUnique({
    where: { id: params.id },
    include: { company: true }
  })

  if (!job) notFound()

  // Track view
  await incrementJobViews(job.id)

  // Check if saved
  let isSaved = false
  if (session?.user?.email) {
    const user = await prisma.user.findUnique({ where: { email: session.user.email } })
    if (user) {
      const savedJob = await prisma.savedJob.findUnique({
        where: { userId_jobId: { userId: user.id, jobId: job.id } }
      })
      isSaved = !!savedJob
    }
  }

  // Parse requirement strings which are stored as raw HTML/markdown or just paragraphs. 
  // For safety, we will just render them as text blocks or basic HTML if we trust the DB (which we do for now).
  // In a real app we'd use a markdown parser.

  return (
    <>
      {/* BREADCRUMB */}
      <nav className="flex items-center gap-1.5 mb-5 text-[11px] leading-[16px] text-navy-400 font-medium uppercase tracking-wider">
        <Link href="/dashboard" className="hover:text-navy-600 transition-colors">Home</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        <Link href="/jobs" className="hover:text-navy-600 transition-colors">Jobs</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        <span className="text-navy-900">{job.title}</span>
      </nav>

      {/* JOB HEADER */}
      <div className="flex flex-col sm:flex-row items-start gap-5 mb-8">
        <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center border border-brand-100 shrink-0 overflow-hidden">
          {job.company.logoUrl ? (
            <img src={job.company.logoUrl} alt={job.company.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-[18px] font-semibold text-brand-600">{job.company.name.substring(0, 2).toUpperCase()}</span>
          )}
        </div>
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900">{job.title}</h1>
              <p className="text-[15px] leading-[24px] text-navy-500">{job.company.name} · {job.location}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <SaveJobButton jobId={job.id} initialSaved={isSaved} />
              <button className="p-2 bg-white border border-border-strong text-navy-500 rounded-lg hover:bg-navy-50 transition-colors" aria-label="Share">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-4">
            <span className="bg-navy-50 text-navy-700 px-2.5 py-1 rounded text-[13px] font-medium">{job.employmentType}</span>
            <span className="bg-navy-50 text-navy-700 px-2.5 py-1 rounded text-[13px] font-medium">{job.experienceReq}</span>
            <span className="bg-navy-50 text-navy-700 px-2.5 py-1 rounded text-[13px] font-medium">{job.workMode}</span>
            {job.salary && (
              <span className="bg-success-50 text-success-700 px-2.5 py-1 rounded text-[13px] font-medium">{job.salary}</span>
            )}
          </div>
        </div>
      </div>

      {/* JOB CONTENT */}
      <div className="mt-10 max-w-3xl space-y-10 pb-16">
        <div>
          <h2 className="text-[20px] leading-[28px] font-semibold text-navy-900 mb-4">About the role</h2>
          <div className="text-[15px] leading-[26px] text-navy-600 whitespace-pre-wrap">
            {job.description}
          </div>
        </div>

        <div>
          <h2 className="text-[20px] leading-[28px] font-semibold text-navy-900 mb-4">Requirements</h2>
          <div className="text-[15px] leading-[26px] text-navy-600 whitespace-pre-wrap">
            {job.requirements}
          </div>
        </div>

        <div>
          <h2 className="text-[20px] leading-[28px] font-semibold text-navy-900 mb-4">Responsibilities</h2>
          <div className="text-[15px] leading-[26px] text-navy-600 whitespace-pre-wrap">
            {job.responsibilities}
          </div>
        </div>

        {job.benefits && (
          <div>
            <h2 className="text-[20px] leading-[28px] font-semibold text-navy-900 mb-4">Benefits</h2>
            <div className="text-[15px] leading-[26px] text-navy-600 whitespace-pre-wrap">
              {job.benefits}
            </div>
          </div>
        )}

        <div className="pt-8 border-t border-border-strong">
          <a 
            href={job.applicationUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white font-medium text-[15px] rounded-lg hover:bg-brand-600 transition-colors shadow-brand"
          >
            Apply on company site
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </div>
    </>
  )
}
