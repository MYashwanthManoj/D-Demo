import Link from "next/link";
import FaqAccordion from "@/components/public/FaqAccordion";

export default function Home() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="hero-aurora pt-32 pb-20 px-6 bg-navy-25">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-[12px] font-semibold tracking-wider text-brand-600">
              <span className="w-1.5 h-1.5 rounded-full bg-success-500 shadow-[0_0_0_3px_rgba(18,161,80,.16)]"></span>
              For students and fresh graduates
            </span>
          </div>
          <h1 className="mb-6 max-w-3xl mx-auto text-[clamp(34px,8.5vw,56px)] leading-[1.08] font-semibold tracking-tight text-navy-900">
            Find the job you <span className="text-gradient">deserve</span>
          </h1>
          <p className="max-w-[560px] mx-auto mb-10 text-[clamp(15px,4.2vw,17px)] leading-[1.6] text-navy-500">
            Curated openings from companies that hire graduates. Honest resources and sixty-second explainers — all free.
          </p>

          {/* Action Buttons */}
          <div className="max-w-[640px] mx-auto mb-6 flex flex-wrap justify-center gap-4">
            <Link href="/jobs" className="btn-primary px-7 py-3 text-[16px]">View Jobs</Link>
            <Link href="/resources" className="btn-secondary px-7 py-3 text-[16px]">Resources</Link>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            <span className="tag tag-default cursor-pointer">Software Engineer</span>
            <span className="tag tag-default cursor-pointer">Frontend Developer</span>
            <span className="tag tag-default cursor-pointer">Data Analyst</span>
            <span className="tag tag-default cursor-pointer">Product Support</span>
            <span className="tag tag-default cursor-pointer">QA Engineer</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-[800px] mx-auto">
            <div className="text-center">
              <div className="font-semibold text-[30px] leading-[38px] text-navy-900">4,280</div>
              <p className="type-overline mt-1 text-navy-400">openings</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-[30px] leading-[38px] text-navy-900">1,900</div>
              <p className="type-overline mt-1 text-navy-400">resources</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-[30px] leading-[38px] text-navy-900">620</div>
              <p className="type-overline mt-1 text-navy-400">shots</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-[30px] leading-[38px] text-navy-900">24</div>
              <p className="type-overline mt-1 text-navy-400">roadmaps</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="font-semibold text-[30px] leading-[38px] text-brand-500">Free</div>
              <p className="type-overline mt-1 text-navy-400">always</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT WE GIVE ==================== */}
      <section className="relative py-24 px-6 overflow-hidden bg-navy-900">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-500 to-success-500 opacity-[0.04] blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative max-w-[1200px] mx-auto z-10">
          <h2 className="mb-14 text-center text-[42px] leading-[1.2] font-bold text-white tracking-tight">What you can expect from us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group p-7 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(59,98,246,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-500/5 border border-brand-500/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,98,246,0.1)]">
                  <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                </div>
                <h3 className="mb-3 text-[20px] font-semibold text-white tracking-tight">100% Merit-Based</h3>
                <p className="text-[15px] leading-relaxed text-brand-300/80 group-hover:text-brand-300 transition-colors duration-300">Companies cannot buy a higher position. You only see what matches your profile.</p>
              </div>
            </div>

            <div className="relative group p-7 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(18,161,80,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-success-500/20 to-success-500/5 border border-success-500/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(18,161,80,0.1)]">
                  <svg className="w-6 h-6 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <h3 className="mb-3 text-[20px] font-semibold text-white tracking-tight">Complete Privacy</h3>
                <p className="text-[15px] leading-relaxed text-brand-300/80 group-hover:text-brand-300 transition-colors duration-300">Your profile stays entirely with us. Recruiters do not get access to your contact list.</p>
              </div>
            </div>

            <div className="relative group p-7 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(217,136,0,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-warning-500/20 to-warning-500/5 border border-warning-500/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(217,136,0,0.1)]">
                  <svg className="w-6 h-6 text-warning-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="mb-3 text-[20px] font-semibold text-white tracking-tight">Honest Insights</h3>
                <p className="text-[15px] leading-relaxed text-brand-300/80 group-hover:text-brand-300 transition-colors duration-300">No countdown timers, no fake viewer counts, and absolutely no invented scarcity.</p>
              </div>
            </div>

            <div className="relative group p-7 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(229,72,77,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-danger-500/20 to-danger-500/5 border border-danger-500/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(229,72,77,0.1)]">
                  <svg className="w-6 h-6 text-danger-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                </div>
                <h3 className="mb-3 text-[20px] font-semibold text-white tracking-tight">Always Free</h3>
                <p className="text-[15px] leading-relaxed text-brand-300/80 group-hover:text-brand-300 transition-colors duration-300">Every part of Career Cafe is completely free for students and graduates forever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <p className="type-overline mb-3 text-brand-500">About us</p>
          <h2 className="mb-3 text-[36px] leading-[44px] font-semibold text-navy-900">How it works</h2>
          <p className="max-w-[480px] mb-14 text-[17px] leading-[28px] text-navy-500">Four steps, about ten minutes</p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(59,98,246,0.08)] hover:border-brand-500/30 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="font-bold mb-5 text-gradient inline-block group-hover:scale-110 transition-transform duration-300 text-[48px] leading-[48px]">01</div>
              <h3 className="mb-3 text-[19px] font-semibold leading-tight text-navy-900">Tell us your year and the roles you are curious about</h3>
              <p className="text-[15px] leading-relaxed text-navy-500">We ask five short questions — course, graduation year, roles, location and work preference. No resume upload required to start.</p>
            </div>
            <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(59,98,246,0.08)] hover:border-brand-500/30 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="font-bold mb-5 text-gradient inline-block group-hover:scale-110 transition-transform duration-300 text-[48px] leading-[48px]">02</div>
              <h3 className="mb-3 text-[19px] font-semibold leading-tight text-navy-900">Browse openings you can actually get</h3>
              <p className="text-[15px] leading-relaxed text-navy-500">We pull verified openings from established companies and mark the ones that genuinely accept freshers.</p>
            </div>
            <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(59,98,246,0.08)] hover:border-brand-500/30 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="font-bold mb-5 text-gradient inline-block group-hover:scale-110 transition-transform duration-300 text-[48px] leading-[48px]">03</div>
              <h3 className="mb-3 text-[19px] font-semibold leading-tight text-navy-900">Understand the role before you spend an evening on it</h3>
              <p className="text-[15px] leading-relaxed text-navy-500">Open a one-minute shot to hear what the work involves, then read the resources attached to that exact role.</p>
            </div>
            <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(59,98,246,0.08)] hover:border-brand-500/30 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="font-bold mb-5 text-gradient inline-block group-hover:scale-110 transition-transform duration-300 text-[48px] leading-[48px]">04</div>
              <h3 className="mb-3 text-[19px] font-semibold leading-tight text-navy-900">Apply on the company&apos;s own site</h3>
              <p className="text-[15px] leading-relaxed text-navy-500">We hand you off to the employer&apos;s application page. Save the listing here to keep track.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="mb-4 text-[36px] leading-[44px] font-semibold text-white">Start where you are.</h2>
          <p className="mb-8 text-[17px] leading-[28px] text-brand-300">Create a free account and we will keep the openings, resources and shots for your role in one place. Takes about two minutes.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/signup" className="btn-primary">Create free account</Link>
            <Link href="/jobs" className="btn-secondary text-navy-300 border-navy-300 hover:border-white hover:text-white">Browse without an account</Link>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[680px] mx-auto">
          <p className="type-overline mb-3 text-brand-500">Questions</p>
          <h2 className="mb-10 text-[30px] leading-[38px] font-semibold text-navy-900">Straight answers</h2>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
