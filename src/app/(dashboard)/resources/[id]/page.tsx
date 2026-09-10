import prisma from "@/lib/prisma"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const resource = await prisma.resource.findUnique({ where: { id: params.id } })
  if (!resource) return { title: "Resource not found" }
  return { title: `${resource.title} | Career Cafe` }
}

export default async function ResourceDetailPage({ params }: { params: { id: string } }) {
  const resource = await prisma.resource.findUnique({ where: { id: params.id } })
  if (!resource) notFound()

  return (
    <article className="max-w-3xl mx-auto py-8">
      <nav className="flex items-center gap-1.5 mb-8 text-[11px] leading-[16px] text-navy-400 font-medium uppercase tracking-wider">
        <Link href="/dashboard" className="hover:text-navy-600 transition-colors">Home</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        <Link href="/resources" className="hover:text-navy-600 transition-colors">Resources</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        <span className="text-navy-900 line-clamp-1">{resource.title}</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-success-50 text-success-700 px-2.5 py-1 rounded text-[12px] font-semibold uppercase tracking-wider">{resource.category}</span>
          {resource.readingTime && (
            <span className="text-[13px] text-navy-500 font-medium">{resource.readingTime} min read</span>
          )}
        </div>
        <h1 className="text-[32px] leading-[40px] font-bold text-navy-900 mb-4">{resource.title}</h1>
        <p className="text-[17px] leading-[28px] text-navy-500">{resource.description}</p>
      </header>

      <div className="prose prose-navy max-w-none text-[16px] leading-[28px] text-navy-700 whitespace-pre-wrap">
        {resource.content}
      </div>
    </article>
  )
}
