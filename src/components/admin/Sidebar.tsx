"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Building2, 
  FileText, 
  Video, 
  PlaySquare, 
  Map, 
  ShieldAlert, 
  BarChart3, 
  History, 
  Settings 
} from "lucide-react"

const NAV_ITEMS = [
  { group: "Overview", items: [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard }
  ]},
  { group: "Content", items: [
    { label: "Jobs", href: "/admin/jobs", icon: Briefcase },
    { label: "Companies", href: "/admin/companies", icon: Building2 },
    { label: "Resources", href: "/admin/resources", icon: FileText },
    { label: "Videos", href: "/admin/videos", icon: Video },
    { label: "Shots", href: "/admin/shots", icon: PlaySquare },
    { label: "Roadmaps", href: "/admin/roadmaps", icon: Map },
  ]},
  { group: "Users & Moderation", items: [
    { label: "Users", href: "/admin/users", icon: Users },
    { label: "Moderation Queue", href: "/admin/moderation", icon: ShieldAlert },
  ]},
  { group: "System", items: [
    { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { label: "Audit Logs", href: "/admin/audit-logs", icon: History },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ]}
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-navy-100 flex flex-col h-full sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-navy-900 tracking-tight">Career Cafe</span>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-4 pb-6 space-y-6 custom-scrollbar">
        {NAV_ITEMS.map((group) => (
          <div key={group.group}>
            <h3 className="px-3 text-xs font-semibold text-navy-400 uppercase tracking-wider mb-2">
              {group.group}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                const Icon = item.icon
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? "bg-brand-50 text-brand-600 font-medium" 
                          : "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-brand-500" : "text-navy-400"}`} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
