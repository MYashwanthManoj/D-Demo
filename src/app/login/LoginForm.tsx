"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"

function LoginFormInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (res?.error) {
      setError("Invalid email or password.")
      setLoading(false)
    } else {
      // The server will handle redirecting admins to /admin if they try to access / login page again
      // But for the initial login, we just push to the callbackUrl or home
      router.push(callbackUrl)
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900 mb-1">Log in to Career Cafe</h1>
      <p className="text-[13px] leading-[20px] text-navy-500 mb-6">Welcome back. Your saved roles are waiting.</p>

      {error && (
        <div className="bg-danger-50 text-danger-700 p-3 rounded-lg text-[13px] border border-danger-500/20 mb-4">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-[14px] leading-[20px] font-medium text-navy-700 mb-1.5">Email address</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2.5 text-[15px] text-navy-900 bg-white border border-border-strong rounded-lg focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow" 
          placeholder="you@university.edu" 
        />
      </div>

      <div className="mb-6">
        <label className="block text-[14px] leading-[20px] font-medium text-navy-700 mb-1.5">Password</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2.5 text-[15px] text-navy-900 bg-white border border-border-strong rounded-lg focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-shadow" 
          placeholder="••••••••" 
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full py-2.5 bg-brand-500 text-white font-medium text-[14px] leading-[20px] rounded-lg hover:bg-brand-600 transition-colors shadow-brand disabled:opacity-70"
      >
        {loading ? "Logging in..." : "Log in"}
      </button>

      <div className="flex items-center gap-3 my-6">
        <hr className="flex-1 border-border-strong" />
        <span className="text-[12px] leading-[18px] text-navy-400">or</span>
        <hr className="flex-1 border-border-strong" />
      </div>

      <button type="button" className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-border-strong rounded-lg text-[14px] leading-[20px] font-medium text-navy-700 hover:bg-navy-50 transition-colors">
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>

      {/* Dev Hint */}
      <div className="mt-8 p-4 bg-navy-50 rounded-lg text-xs text-navy-600">
        <p className="font-semibold mb-1">Development Credentials:</p>
        <p>Admin: admin@careercafe.com / password123</p>
        <p>User: user@careercafe.com / password123</p>
      </div>
    </form>
  )
}

export default function LoginForm() {
  return (
    <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
      <LoginFormInner />
    </Suspense>
  )
}
