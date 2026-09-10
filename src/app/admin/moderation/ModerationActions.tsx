"use client"

import { useState, useTransition } from "react"
import { approveJob, rejectJob } from "./actions"

export default function ModerationActions({ jobId }: { jobId: string }) {
  const [isPending, startTransition] = useTransition()
  
  const handleApprove = () => {
    if (confirm("Are you sure you want to approve and publish this job?")) {
      startTransition(async () => {
        const res = await approveJob(jobId)
        if (res.error) alert(res.error)
      })
    }
  }

  const handleReject = () => {
    if (confirm("Are you sure you want to reject this job? It will not be published.")) {
      startTransition(async () => {
        const res = await rejectJob(jobId)
        if (res.error) alert(res.error)
      })
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={handleApprove}
        disabled={isPending}
        className="px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium text-sm rounded-lg transition-colors border border-emerald-200 disabled:opacity-50"
      >
        Approve
      </button>
      <button 
        onClick={handleReject}
        disabled={isPending}
        className="px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 font-medium text-sm rounded-lg transition-colors border border-red-200 disabled:opacity-50"
      >
        Reject
      </button>
    </div>
  )
}
