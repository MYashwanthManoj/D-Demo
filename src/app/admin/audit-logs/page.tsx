import prisma from "@/lib/prisma"
import { History, Search } from "lucide-react"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Audit Logs — Admin | Career Cafe"
}

export default async function AdminAuditLogsPage() {
  const logs = await prisma.auditLog.findMany({
    orderBy: { timestamp: 'desc' },
    include: {
      admin: {
        select: { name: true, email: true }
      }
    },
    take: 100 // Limit to recent 100 logs for performance
  }).catch(() => [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Audit Logs</h1>
          <p className="text-navy-500 mt-1">Track admin actions and system events.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 overflow-hidden">
        <div className="p-4 border-b border-navy-100 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
            <input 
              type="text" 
              placeholder="Filter logs by admin or action..." 
              className="w-full pl-10 pr-4 py-2 bg-navy-50 border border-navy-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-50 border-b border-navy-100 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                <th className="p-4">Timestamp</th>
                <th className="p-4">Admin</th>
                <th className="p-4">Action</th>
                <th className="p-4">Entity Type</th>
                <th className="p-4">Entity ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {logs.map(log => (
                <tr key={log.id} className="hover:bg-navy-50/50 transition-colors">
                  <td className="p-4 text-sm text-navy-600 whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                  <td className="p-4">
                    <span className="font-medium text-navy-900 block">{log.admin?.name || 'System / Admin'}</span>
                    <span className="text-xs text-navy-500">{log.admin?.email || 'N/A'}</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                      log.action.includes('APPROVE') || log.action.includes('CREATE') ? 'bg-emerald-50 text-emerald-700' :
                      log.action.includes('REJECT') || log.action.includes('DELETE') ? 'bg-red-50 text-red-700' :
                      'bg-brand-50 text-brand-700'
                    }`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-medium text-navy-700">
                    {log.entityType}
                  </td>
                  <td className="p-4 text-xs font-mono text-navy-500">
                    {log.entityId}
                  </td>
                </tr>
              ))}
              {logs.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-navy-500">
                    <div className="flex flex-col items-center justify-center">
                      <History className="w-8 h-8 text-navy-300 mb-2" />
                      <p>No audit logs recorded yet.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
