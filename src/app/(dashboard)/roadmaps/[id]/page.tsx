import prisma from "@/lib/prisma"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const roadmap = await prisma.roadmap.findUnique({ where: { id: params.id } })
  if (!roadmap) return { title: "Roadmap not found" }
  return { title: `${roadmap.title} Roadmap | Career Cafe` }
}

export default async function RoadmapDetailPage({ params }: { params: { id: string } }) {
  const roadmap = await prisma.roadmap.findUnique({
    where: { id: params.id },
    include: {
      stages: {
        orderBy: { order: 'asc' },
        include: {
          resources: { include: { resource: true } },
          videos: { include: { video: true } }
        }
      }
    }
  })

  if (!roadmap) notFound()

  return (
    <>
      <nav className="flex items-center gap-1.5 mb-5 text-[11px] leading-[16px] text-navy-400 font-medium uppercase tracking-wider">
        <Link href="/dashboard" className="hover:text-navy-600 transition-colors">Home</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        <Link href="/roadmaps" className="hover:text-navy-600 transition-colors">Roadmaps</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        <span className="text-navy-900">{roadmap.title}</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-[28px] leading-[36px] font-semibold text-navy-900 mb-2">{roadmap.title} Roadmap</h1>
        <p className="text-[15px] leading-[24px] text-navy-500 max-w-2xl">{roadmap.description}</p>
      </div>

      <div className="relative pb-16 max-w-5xl mx-auto mt-8">
        {/* Central timeline line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-200 -translate-x-1/2 z-0"></div>
        {/* Left timeline line for mobile */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-brand-200 z-0"></div>

        <div className="space-y-12">
          {roadmap.stages.map((stage, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={stage.id} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Desktop Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-100 items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-brand-500"></div>
                </div>

                {/* Mobile Timeline Node */}
                <div className="md:hidden absolute left-[5px] top-6 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-brand-100 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className="bg-white border border-border-strong rounded-xl p-6 hover:shadow-elevation-2 transition-shadow shadow-sm">
                    <div className="flex flex-col md:items-start justify-between gap-4">
                      <div className="w-full">
                        <h3 className="text-[14px] font-bold text-brand-600 mb-1 uppercase tracking-wider">Stage {stage.order}</h3>
                        <h2 className="text-[20px] leading-[28px] font-semibold text-navy-900 mb-2">{stage.title}</h2>
                        <p className="text-[15px] leading-[24px] text-navy-600">{stage.description}</p>
                        
                        {stage.skills && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {stage.skills.split(",").map(skill => (
                              <span key={skill} className="bg-navy-50 text-navy-700 px-2.5 py-1 rounded text-[13px] font-medium border border-navy-100">
                                {skill.trim()}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Resources for this stage */}
                    {(stage.resources.length > 0 || stage.videos.length > 0) && (
                      <div className="mt-6 pt-5 border-t border-border-strong">
                        <h4 className="text-[12px] font-bold text-navy-400 uppercase tracking-widest mb-3">Materials</h4>
                        <div className="grid grid-cols-1 gap-2.5">
                          {stage.videos.map(v => (
                            <Link key={v.videoId} href={`/videos/${v.videoId}`} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-navy-50 border border-transparent hover:border-border-strong transition-all group">
                              <div className="w-8 h-8 rounded-lg bg-navy-100 text-navy-500 flex items-center justify-center shrink-0 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/></svg>
                              </div>
                              <div>
                                <p className="text-[13px] font-semibold text-navy-900 line-clamp-1">{v.video.title}</p>
                              </div>
                            </Link>
                          ))}
                          {stage.resources.map(r => (
                            <Link key={r.resourceId} href={`/resources/${r.resourceId}`} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-navy-50 border border-transparent hover:border-border-strong transition-all group">
                              <div className="w-8 h-8 rounded-lg bg-navy-100 text-navy-500 flex items-center justify-center shrink-0 group-hover:bg-success-50 group-hover:text-success-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                              </div>
                              <div>
                                <p className="text-[13px] font-semibold text-navy-900 line-clamp-1">{r.resource.title}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
