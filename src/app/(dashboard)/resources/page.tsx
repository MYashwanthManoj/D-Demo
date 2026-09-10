import prisma from "@/lib/prisma"
import Link from "next/link"

export const metadata = {
  title: "Resources — Career Cafe",
}

export default async function ResourcesPage() {
  const resources = await prisma.resource.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900">Resources</h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map(resource => (
          <Link 
            key={resource.id} 
            href={`/resources/${resource.id}`}
            className="block bg-white border border-border-strong rounded-xl p-5 hover:border-brand-300 hover:shadow-elevation-2 transition-all group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-success-50 text-success-700 px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider">{resource.category}</span>
              {resource.readingTime && (
                <span className="text-[12px] text-navy-400 font-medium">{resource.readingTime} min read</span>
              )}
            </div>
            <h3 className="text-[16px] leading-[24px] font-semibold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
              {resource.title}
            </h3>
            <p className="text-[13px] leading-[20px] text-navy-500 line-clamp-2">
              {resource.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
