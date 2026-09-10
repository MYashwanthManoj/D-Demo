import prisma from "@/lib/prisma"
import Link from "next/link"
import { Plus, MoreVertical } from "lucide-react"

export const metadata = {
  title: "Videos Management — Admin | Career Cafe"
}

export default async function AdminVideosPage() {
  const videos = await prisma.video.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Videos</h1>
          <p className="text-navy-500 mt-1">Manage long-form video content.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors shadow-elevation-2 font-medium">
          <Plus className="w-4 h-4" />
          Add Video
        </button>
      </div>

      <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-50 border-b border-navy-100 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                <th className="p-4">Video Title</th>
                <th className="p-4">Duration</th>
                <th className="p-4">Status</th>
                <th className="p-4">Created</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {videos.map(video => (
                <tr key={video.id} className="hover:bg-navy-50/50 transition-colors">
                  <td className="p-4">
                    <span className="font-medium text-navy-900 block line-clamp-1 max-w-sm">{video.title}</span>
                  </td>
                  <td className="p-4 text-sm text-navy-600">
                    {video.duration ? `${Math.floor(video.duration / 60)}m ${video.duration % 60}s` : '-'}
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      video.status === 'PUBLISHED' ? 'bg-emerald-50 text-emerald-700' :
                      'bg-amber-50 text-amber-700'
                    }`}>
                      {video.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-navy-600">
                    {new Date(video.createdAt).toLocaleDateString()}
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
              {videos.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-navy-500">No videos found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
