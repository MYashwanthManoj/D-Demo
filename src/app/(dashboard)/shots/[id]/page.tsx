import prisma from "@/lib/prisma"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const shot = await prisma.shot.findUnique({ where: { id: params.id } })
  if (!shot) return { title: "Shot not found" }
  return { title: `${shot.title} | Career Cafe` }
}

export default async function ShotDetailPage({ params }: { params: { id: string } }) {
  const shot = await prisma.shot.findUnique({ where: { id: params.id } })
  if (!shot) notFound()

  // Track view
  await prisma.shot.update({
    where: { id: shot.id },
    data: { views: { increment: 1 } }
  })

  let embedUrl = shot.videoUrl
  if (embedUrl.includes("youtube.com/watch?v=")) {
    // For youtube shorts styling we can use embed
    embedUrl = embedUrl.replace("youtube.com/watch?v=", "youtube.com/embed/")
  }

  return (
    <article className="max-w-md mx-auto py-4">
      <nav className="flex items-center gap-1.5 mb-6 text-[11px] leading-[16px] text-navy-400 font-medium uppercase tracking-wider">
        <Link href="/dashboard" className="hover:text-navy-600 transition-colors">Home</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        <Link href="/shots" className="hover:text-navy-600 transition-colors">Shots</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        <span className="text-navy-900 line-clamp-1">{shot.title}</span>
      </nav>

      <div className="aspect-[9/16] w-full bg-navy-900 rounded-3xl overflow-hidden mb-6 shadow-elevation-3 border-4 border-navy-900 relative group">
        <iframe 
          src={embedUrl} 
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <header className="mb-8 px-2">
        <h1 className="text-[20px] leading-[28px] font-semibold text-navy-900 mb-2">{shot.title}</h1>
        <p className="text-[14px] leading-[22px] text-navy-500 mb-4">{shot.description}</p>
        
        <div className="flex items-center gap-4 text-[13px] text-navy-500 font-medium">
          <span className="bg-navy-50 text-navy-700 px-2 py-0.5 rounded">{shot.views + 1} views</span>
          <button className="flex items-center gap-1.5 hover:text-brand-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
            Save
          </button>
        </div>
      </header>
    </article>
  )
}
