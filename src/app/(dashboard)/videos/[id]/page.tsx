import prisma from "@/lib/prisma"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const video = await prisma.video.findUnique({ where: { id: params.id } })
  if (!video) return { title: "Video not found" }
  return { title: `${video.title} | Career Cafe` }
}

export default async function VideoDetailPage({ params }: { params: { id: string } }) {
  const video = await prisma.video.findUnique({ where: { id: params.id } })
  if (!video) notFound()

  // Track view
  await prisma.video.update({
    where: { id: video.id },
    data: { views: { increment: 1 } }
  })

  // Since we are mocking videos, if it's a YouTube URL, we can convert it to an embed URL.
  let embedUrl = video.videoUrl
  if (embedUrl.includes("youtube.com/watch?v=")) {
    embedUrl = embedUrl.replace("youtube.com/watch?v=", "youtube.com/embed/")
  }

  return (
    <article className="max-w-4xl mx-auto py-4">
      <nav className="flex items-center gap-1.5 mb-6 text-[11px] leading-[16px] text-navy-400 font-medium uppercase tracking-wider">
        <Link href="/dashboard" className="hover:text-navy-600 transition-colors">Home</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        <Link href="/videos" className="hover:text-navy-600 transition-colors">Videos</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        <span className="text-navy-900 line-clamp-1">{video.title}</span>
      </nav>

      <div className="aspect-video w-full bg-navy-900 rounded-2xl overflow-hidden mb-8 shadow-elevation-2 border border-navy-800">
        <iframe 
          src={embedUrl} 
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <header className="mb-10">
        <h1 className="text-[28px] leading-[36px] font-semibold text-navy-900 mb-3">{video.title}</h1>
        <div className="flex items-center justify-between border-b border-border-strong pb-6 mb-6">
          <div className="flex items-center gap-4 text-[13px] text-navy-500 font-medium">
            <span className="bg-navy-50 text-navy-700 px-2 py-0.5 rounded">{video.category || 'General'}</span>
            <span>{video.views + 1} views</span>
            <span>{new Date(video.createdAt).toLocaleDateString()}</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border-strong text-navy-700 font-medium text-[14px] rounded-lg hover:bg-navy-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
            Save
          </button>
        </div>
        
        <h2 className="text-[17px] leading-[24px] font-semibold text-navy-900 mb-2">About this video</h2>
        <p className="text-[15px] leading-[26px] text-navy-600 whitespace-pre-wrap">{video.description}</p>
      </header>

      {video.transcript && (
        <div className="bg-white border border-border-strong rounded-xl p-6">
          <h2 className="text-[17px] leading-[24px] font-semibold text-navy-900 mb-4">Transcript</h2>
          <div className="text-[15px] leading-[26px] text-navy-600 whitespace-pre-wrap">
            {video.transcript}
          </div>
        </div>
      )}
    </article>
  )
}
