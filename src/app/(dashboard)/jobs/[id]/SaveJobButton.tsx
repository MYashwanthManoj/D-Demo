"use client"

import { useState, useTransition } from "react"
import { toggleSaveJob } from "../actions"

export default function SaveJobButton({ jobId, initialSaved }: { jobId: string, initialSaved: boolean }) {
  const [isPending, startTransition] = useTransition()
  const [isSaved, setIsSaved] = useState(initialSaved)

  const handleToggle = () => {
    // Optimistic UI update
    setIsSaved(!isSaved)
    
    startTransition(async () => {
      const res = await toggleSaveJob(jobId)
      if (res.error) {
        // Revert on error
        setIsSaved(isSaved)
        alert(res.error)
      }
    })
  }

  return (
    <button 
      onClick={handleToggle}
      disabled={isPending}
      className={`p-2 rounded-lg transition-colors border ${isSaved ? 'bg-brand-50 border-brand-200 text-brand-600' : 'bg-white border-border-strong text-navy-500 hover:bg-navy-50'}`}
      aria-label={isSaved ? "Unsave job" : "Save job"}
    >
      <svg className="w-5 h-5" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
      </svg>
    </button>
  )
}
