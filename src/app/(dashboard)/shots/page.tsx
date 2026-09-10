import prisma from "@/lib/prisma"
import Link from "next/link"

export const metadata = {
  title: "Shots — Career Cafe",
}

export default async function ShotsPage() {
  const shots = await prisma.shot.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900">Shots</h1>
          <p className="text-[15px] leading-[24px] text-navy-500 mt-1">Short-form videos to learn quickly.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {shots.map(shot => (
          <div key={shot.id} className="group relative aspect-[9/16] bg-navy-900 rounded-2xl overflow-hidden border border-border-strong hover:border-brand-400 transition-colors cursor-pointer shadow-sm hover:shadow-elevation-2">
            {shot.thumbnailUrl ? (
              <img src={shot.thumbnailUrl} alt={shot.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-navy-400 bg-gradient-to-b from-navy-800 to-navy-900">
                <svg className="w-10 h-10 mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/></svg>
                <span className="text-[11px] font-medium tracking-widest uppercase">Video</span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-[15px] leading-[20px] font-semibold text-white mb-1 line-clamp-2">{shot.title}</h3>
              {shot.duration && (
                <p className="text-[12px] text-navy-200">0:{String(shot.duration).padStart(2, '0')}</p>
              )}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4.5 3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .809.394l11-6.5a.5.5 0 0 0 0-.788l-11-6.5a.5.5 0 0 0-.309-.106z"/></svg>
            </div>
            
            {/* Play overlay link */}
            <Link href={`/shots/${shot.id}`} className="absolute inset-0 z-10">
               <span className="sr-only">Watch {shot.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
