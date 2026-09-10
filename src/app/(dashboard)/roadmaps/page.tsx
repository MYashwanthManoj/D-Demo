import prisma from "@/lib/prisma"
import Link from "next/link"

export const metadata = {
  title: "Roadmaps — Career Cafe",
}

export default async function RoadmapsPage() {
  const roadmaps = await prisma.roadmap.findMany({
    where: { status: "PUBLISHED" },
    include: {
      stages: true,
    },
    orderBy: {
      createdAt: 'asc'
    }
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900">Roadmaps</h1>
          <p className="text-[15px] leading-[24px] text-navy-500 mt-1">Structured learning paths to help you land your target role.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {roadmaps.map((roadmap) => (
          <Link 
            key={roadmap.id} 
            href={`/roadmaps/${roadmap.id}`}
            className="block bg-white border border-border-strong rounded-xl p-5 hover:border-brand-300 hover:shadow-elevation-2 transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-[17px] leading-[24px] font-semibold text-navy-900 group-hover:text-brand-600 transition-colors">{roadmap.title}</h3>
              <span className="bg-brand-50 text-brand-700 px-2 py-0.5 rounded text-[12px] font-medium whitespace-nowrap ml-3">
                {roadmap.stages.length} Stages
              </span>
            </div>
            <p className="text-[14px] leading-[22px] text-navy-500 mb-4 line-clamp-2">
              {roadmap.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-border-strong mt-auto">
              <span className="text-[13px] font-medium text-brand-500">View roadmap</span>
              <svg className="w-4 h-4 text-brand-500 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </div>
          </Link>
        ))}
        {roadmaps.length === 0 && (
          <div className="col-span-full text-center py-12 bg-white border border-border-strong rounded-xl">
            <h3 className="text-[15px] font-medium text-navy-900">No roadmaps available yet.</h3>
            <p className="text-[13px] text-navy-500 mt-1">Check back soon for new learning paths.</p>
          </div>
        )}
      </div>
    </div>
  )
}
