import prisma from "@/lib/prisma"
import { Search, MoreVertical } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

export const dynamic = 'force-dynamic'

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { joinedDate: 'desc' }
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Users Management</h1>
          <p className="text-navy-500 mt-1">Manage platform members and permissions.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 overflow-hidden">
        <div className="p-4 border-b border-navy-100 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              className="w-full pl-10 pr-4 py-2 bg-navy-50 border border-navy-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-50 text-navy-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">User</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Joined</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-navy-25 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-navy-900">{user.name || 'Unknown'}</p>
                    <p className="text-xs text-navy-500">{user.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.role === 'SUPER_ADMIN' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                      user.role === 'USER' ? 'bg-slate-50 text-slate-700' :
                      'bg-blue-50 text-blue-700'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'ACTIVE' ? 'bg-success-50 text-success-700' :
                      user.status === 'SUSPENDED' ? 'bg-danger-50 text-danger-700' :
                      'bg-navy-100 text-navy-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-navy-500">
                    {formatDistanceToNow(new Date(user.joinedDate), { addSuffix: true })}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-navy-400 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
