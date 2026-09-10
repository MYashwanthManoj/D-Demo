"use client"

import { signOut } from "next-auth/react"
import { useState } from "react"

export default function TopBar({ initials }: { initials: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 h-16 flex items-center gap-4 px-6 bg-white/85 backdrop-blur-md border-b border-navy-100">
      <button className="md:hidden p-2 -ml-2 text-navy-700" aria-label="Menu">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      
      <div className="flex-1 max-w-[480px]">
        <div className="relative">
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input 
            type="text" 
            placeholder="Search roles, companies, skills or resources" 
            className="w-full pl-9 pr-4 py-2 text-[13px] text-navy-900 bg-white border border-border-strong rounded-lg focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow" 
          />
        </div>
      </div>
      
      <div className="ml-auto relative">
        <button 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center text-[13px] font-semibold text-brand-600 hover:bg-brand-200 transition-colors"
        >
          {initials}
        </button>
        
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-elevation-3 border border-navy-100 py-1 z-50">
            <button 
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full text-left px-4 py-2 text-[13px] text-danger-600 hover:bg-danger-50 transition-colors"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
