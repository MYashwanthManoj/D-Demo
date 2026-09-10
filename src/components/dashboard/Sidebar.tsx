"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { 
  Home, 
  Briefcase, 
  FileText, 
  Video, 
  PlaySquare, 
  Map, 
  Heart, 
  MessageSquare, 
  Settings 
} from "lucide-react"

export default function Sidebar({ user }: { user: { name: string; course: string | null; initials: string } }) {
  const pathname = usePathname()

  const links = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Job openings", href: "/jobs", icon: Briefcase },
    { name: "Resources", href: "/resources", icon: FileText },
    { name: "Videos", href: "/videos", icon: Video },
    { name: "Shots", href: "/shots", icon: PlaySquare },
    { name: "Roadmaps", href: "/roadmaps", icon: Map },
  ]

  const bottomLinks = [
    { name: "Saved", href: "/saved", badge: 6, icon: Heart },
    { name: "Give feedback", href: "/feedback", icon: MessageSquare },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  let courseSubtitle = "Set up your profile"
  if (user.course) {
    try {
      const c = JSON.parse(user.course)
      if (c.degree && c.year) {
        courseSubtitle = `${c.degree} · ${c.year}`
      } else if (c.degree) {
        courseSubtitle = c.degree
      }
    } catch {}
  }

  return (
    <aside className="hidden md:flex fixed top-0 left-0 h-full z-40 flex-col w-[240px] bg-white border-r border-navy-100 transition-transform">
      <div className="px-5 h-16 flex items-center border-b border-navy-100">
        <Link href="/" className="text-[17px] leading-[24px] font-semibold text-navy-900">Career Cafe</Link>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {links.map(link => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
          const Icon = link.icon
          return (
            <Link 
              key={link.name} href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] leading-[20px] font-medium transition-colors
                ${isActive ? 'bg-brand-50 text-brand-600' : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900'}`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-brand-500' : 'text-navy-400'}`} />
              {link.name}
            </Link>
          )
        })}
        
        <div className="border-t border-navy-100 my-3"></div>
        
        {bottomLinks.map(link => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
          const Icon = link.icon
          return (
            <Link 
              key={link.name} href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] leading-[20px] font-medium transition-colors
                ${isActive ? 'bg-brand-50 text-brand-600' : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900'}`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-brand-500' : 'text-navy-400'}`} />
              {link.name}
              {link.badge && (
                <span className="ml-auto text-[11px] leading-[16px] bg-brand-50 text-brand-500 px-1.5 py-0.5 rounded font-medium">
                  {link.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
      <div className="px-3 py-4 border-t border-navy-100">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center text-[13px] font-semibold text-brand-600 shrink-0">
            {user.initials}
          </div>
          <div className="min-w-0">
            <p className="text-[13px] leading-[18px] font-medium text-navy-900 whitespace-nowrap overflow-hidden text-ellipsis">
              {user.name}
            </p>
            <p className="text-[11px] leading-[16px] text-navy-400 whitespace-nowrap overflow-hidden text-ellipsis">
              {courseSubtitle}
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
