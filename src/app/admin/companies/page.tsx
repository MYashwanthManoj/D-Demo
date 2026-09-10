import prisma from "@/lib/prisma"
import { Building2, Plus, MoreVertical } from "lucide-react"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Companies Management — Admin | Career Cafe"
}

export default async function AdminCompaniesPage() {
  const companies = await prisma.company.findMany({
    orderBy: { name: 'asc' },
    include: {
      _count: {
        select: { jobs: true }
      }
    }
  }).catch(() => [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Companies</h1>
          <p className="text-navy-500 mt-1">Manage partner companies and their profiles.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors shadow-elevation-2 font-medium">
          <Plus className="w-4 h-4" />
          Add Company
        </button>
      </div>

      <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-50 border-b border-navy-100 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                <th className="p-4">Company Name</th>
                <th className="p-4">Industry</th>
                <th className="p-4">Total Jobs</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {companies.map(company => (
                <tr key={company.id} className="hover:bg-navy-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-navy-100 border border-navy-200 overflow-hidden flex items-center justify-center">
                        {company.logoUrl ? (
                          <img src={company.logoUrl} alt={company.name} className="w-full h-full object-cover" />
                        ) : (
                          <Building2 className="w-5 h-5 text-navy-400" />
                        )}
                      </div>
                      <span className="font-medium text-navy-900">{company.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-navy-600">Technology</td>
                  <td className="p-4">
                    <span className="inline-flex items-center justify-center px-2 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full min-w-[2rem]">
                      {company._count.jobs}
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
              {companies.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-navy-500">No companies found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
