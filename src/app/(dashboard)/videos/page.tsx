import prisma from "@/lib/prisma"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Videos — Career Cafe",
}

export default async function VideosPage() {
  const videos = await prisma.video.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900">Videos</h1>
          <p className="text-[15px] leading-[24px] text-navy-500 mt-1">Deep dives, tutorials, and mock interviews.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map(video => (
          <Link 
            key={video.id} 
            href={`/videos/${video.id}`}
            className="block group"
          >
            <div className="aspect-video bg-navy-900 rounded-xl mb-3 overflow-hidden relative border border-border-strong group-hover:border-brand-300 transition-colors">
              {video.thumbnailUrl ? (
                <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-navy-400 bg-gradient-to-b from-navy-800 to-navy-900">
                  <svg className="w-12 h-12 mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/></svg>
                  <span className="text-[11px] font-medium tracking-widest uppercase">Video</span>
                </div>
              )}
              {video.duration && (
                <div className="absolute bottom-2 right-2 bg-navy-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-1.5 py-0.5 rounded">
                  {Math.floor(video.duration / 60)}:{String(video.duration % 60).padStart(2, '0')}
                </div>
              )}
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 shadow-elevation-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100">
                  <svg className="w-5 h-5 text-brand-600 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4.5 3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .809.394l11-6.5a.5.5 0 0 0 0-.788l-11-6.5a.5.5 0 0 0-.309-.106z"/></svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-[15px] leading-[22px] font-semibold text-navy-900 mb-1 group-hover:text-brand-600 transition-colors line-clamp-2">
              {video.title}
            </h3>
            <p className="text-[13px] leading-[20px] text-navy-500 line-clamp-1">{video.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
