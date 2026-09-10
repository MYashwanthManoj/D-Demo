"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function JobFilters({ initialFilters }: { initialFilters: any }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [q, setQ] = useState(initialFilters.q)
  const [location, setLocation] = useState(initialFilters.location)
  const [workMode, setWorkMode] = useState(initialFilters.workMode)
  const [role, setRole] = useState(initialFilters.role)

  // Use debounce to update URL
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      
      if (q) params.set("q", q)
      else params.delete("q")

      if (location) params.set("location", location)
      else params.delete("location")

      if (workMode) params.set("workMode", workMode)
      else params.delete("workMode")

      if (role) params.set("role", role)
      else params.delete("role")

      router.push(`/jobs?${params.toString()}`)
    }, 400) // 400ms debounce

    return () => clearTimeout(handler)
  }, [q, location, workMode, role, router, searchParams])

  return (
    <div className="bg-white border border-border-strong rounded-xl p-5 shadow-sm">
      <h2 className="text-[15px] leading-[24px] font-semibold text-navy-900 mb-4">Filters</h2>
      
      <div className="space-y-5">
        <div>
          <label className="block text-[13px] leading-[20px] font-medium text-navy-700 mb-1.5">Search</label>
          <input 
            type="text" 
            placeholder="Keywords, skills..." 
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full px-3 py-2 text-[13px] text-navy-900 bg-white border border-border-strong rounded-lg focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10" 
          />
        </div>

        <div>
          <label className="block text-[13px] leading-[20px] font-medium text-navy-700 mb-1.5">Location</label>
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 text-[13px] text-navy-900 bg-white border border-border-strong rounded-lg focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
          >
            <option value="">All Locations</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi NCR">Delhi NCR</option>
          </select>
        </div>

        <div>
          <label className="block text-[13px] leading-[20px] font-medium text-navy-700 mb-1.5">Work Mode</label>
          <div className="space-y-2">
            {["Hybrid", "On-site", "Remote"].map((mode) => (
              <label key={mode} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="workMode" 
                  value={mode}
                  checked={workMode === mode}
                  onChange={(e) => setWorkMode(e.target.value)}
                  className="w-4 h-4 text-brand-500 focus:ring-brand-500 border-border-strong" 
                />
                <span className="text-[13px] text-navy-700">{mode}</span>
              </label>
            ))}
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="workMode" 
                value=""
                checked={workMode === ""}
                onChange={(e) => setWorkMode(e.target.value)}
                className="w-4 h-4 text-brand-500 focus:ring-brand-500 border-border-strong" 
              />
              <span className="text-[13px] text-navy-700">Any</span>
            </label>
          </div>
        </div>

      </div>
    </div>
  )
}
