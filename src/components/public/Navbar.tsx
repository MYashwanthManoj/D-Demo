"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-[17px] leading-[24px] text-navy-900">
            Career Cafe
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/jobs" className="text-navy-700 hover:text-brand-500 transition-colors font-medium text-[15px]">Jobs</Link>
            <Link href="/resources" className="text-navy-700 hover:text-brand-500 transition-colors font-medium text-[15px]">Resources</Link>
            <Link href="/videos" className="text-navy-700 hover:text-brand-500 transition-colors font-medium text-[15px]">Videos</Link>
            <Link href="/shots" className="text-navy-700 hover:text-brand-500 transition-colors font-medium text-[15px]">Shots</Link>
            <Link href="/roadmaps" className="text-navy-700 hover:text-brand-500 transition-colors font-medium text-[15px]">Roadmaps</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <>
                <Link href="/settings" className="text-navy-700 hover:text-brand-500 font-medium text-[15px]">Profile</Link>
                {session.user.role !== "USER" && (
                   <Link href="/admin" className="text-navy-700 hover:text-brand-500 font-medium text-[15px]">Admin</Link>
                )}
                <button 
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-navy-100 text-navy-700 rounded-md font-medium text-[14px] hover:bg-navy-200 transition-colors"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-navy-700 hover:text-brand-500 font-medium text-[15px]">Log in</Link>
                <Link href="/signup" className="px-5 py-2.5 bg-brand-500 text-white rounded-lg font-medium text-[15px] hover:bg-brand-600 transition-colors shadow-brand">
                  Create free account
                </Link>
              </>
            )}
          </div>

          <button 
            className="md:hidden flex flex-col gap-1.5 p-2" 
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block h-0.5 bg-navy-700 transition-all ${mobileMenuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`}></span>
            <span className={`block h-0.5 bg-navy-700 transition-all ${mobileMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
            <span className={`block h-0.5 bg-navy-700 transition-all ${mobileMenuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-3.5'}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 space-y-4 bg-white border-b border-border shadow-elevation-2">
            <Link href="/jobs" className="block text-[16px] font-medium text-navy-700">Jobs</Link>
            <Link href="/resources" className="block text-[16px] font-medium text-navy-700">Resources</Link>
            <Link href="/videos" className="block text-[16px] font-medium text-navy-700">Videos</Link>
            <Link href="/shots" className="block text-[16px] font-medium text-navy-700">Shots</Link>
            <Link href="/roadmaps" className="block text-[16px] font-medium text-navy-700">Roadmaps</Link>
            <hr className="border-border" />
            
            {session ? (
              <>
                <Link href="/settings" className="block text-[16px] font-medium text-navy-700">Profile</Link>
                {session.user.role !== "USER" && (
                   <Link href="/admin" className="block text-[16px] font-medium text-navy-700">Admin Panel</Link>
                )}
                <button 
                  onClick={() => signOut()}
                  className="w-full text-left text-[16px] font-medium text-navy-700"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block text-[16px] font-medium text-navy-700">Log in</Link>
                <Link href="/signup" className="block text-center w-full py-3 bg-brand-500 text-white rounded-lg font-medium text-[16px]">
                  Create free account
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}
