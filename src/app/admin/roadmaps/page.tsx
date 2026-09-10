import prisma from "@/lib/prisma"
import { Map, Plus, MoreVertical } from "lucide-react"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Roadmaps Management — Admin | Career Cafe"
}

export default async function AdminRoadmapsPage() {
  const roadmaps = await prisma.roadmap.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      stages: true
    }
  }).catch(() => [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Roadmaps</h1>
          <p className="text-navy-500 mt-1">Manage career pathways and learning journeys.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors shadow-elevation-2 font-medium">
          <Plus className="w-4 h-4" />
          Create Roadmap
        </button>
      </div>

      <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-50 border-b border-navy-100 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                <th className="p-4">Title</th>
                <th className="p-4">Description</th>
                <th className="p-4">Stages</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {roadmaps.map(roadmap => (
                <tr key={roadmap.id} className="hover:bg-navy-50/50 transition-colors">
                  <td className="p-4">
                    <span className="font-medium text-navy-900 block">{roadmap.title}</span>
                  </td>
                  <td className="p-4 text-sm text-navy-600 max-w-md truncate">
                    {roadmap.description}
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center justify-center px-2 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full min-w-[2rem]">
                      {roadmap.stages.length}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      roadmap.status === 'PUBLISHED' ? 'bg-emerald-50 text-emerald-700' :
                      'bg-amber-50 text-amber-700'
                    }`}>
                      {roadmap.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-navy-400 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {roadmaps.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-navy-500">No roadmaps found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
