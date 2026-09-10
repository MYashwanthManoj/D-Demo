"use client"

import { signOut, useSession } from "next-auth/react"
import { useState } from "react"
import { Bell, Search } from "lucide-react"

export default function Topbar() {
  const { data: session } = useSession()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const initials = session?.user?.name
    ? session.user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "AD"

  return (
    <header className="sticky top-0 z-20 h-16 flex items-center justify-between px-8 bg-white border-b border-navy-100">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
          <input
            type="text"
            placeholder="Search anything in admin..."
            className="w-full pl-9 pr-4 py-2 text-sm text-navy-900 bg-navy-50 border border-navy-200 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 transition-shadow"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-navy-400 hover:text-navy-600 rounded-lg hover:bg-navy-50 transition-colors relative" aria-label="Notifications">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-500 rounded-full" />
        </button>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-navy-50 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center text-xs font-semibold">
              {initials}
            </div>
            <div className="text-left hidden md:block">
              <p className="text-xs font-semibold text-navy-900 leading-none">{session?.user?.name || "Admin"}</p>
              <p className="text-[11px] text-navy-400 leading-none mt-1">{session?.user?.email || "admin@careercafe.com"}</p>
            </div>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-elevation-3 border border-navy-100 py-1 z-50">
              <div className="px-4 py-2 border-b border-navy-50 md:hidden">
                <p className="text-xs font-semibold text-navy-900">{session?.user?.name || "Admin"}</p>
                <p className="text-[11px] text-navy-400 truncate">{session?.user?.email || "admin@careercafe.com"}</p>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="w-full text-left px-4 py-2 text-sm text-danger-600 hover:bg-danger-50 transition-colors"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
