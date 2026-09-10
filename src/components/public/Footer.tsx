import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-white pt-16 pb-8 px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="font-semibold text-[17px] leading-[24px] text-navy-900">Career Cafe</Link>
            <p className="text-[13px] leading-[20px] text-navy-500 mt-3">
              Real openings, honest resources and short explainers for students and fresh graduates. Free, always.
            </p>
          </div>
          <div>
            <p className="type-overline mb-4 text-navy-400 font-semibold tracking-wider text-[11px] uppercase">Explore</p>
            <ul className="space-y-2.5">
              <li><Link href="/jobs" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">Job openings</Link></li>
              <li><Link href="/resources" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">Resources</Link></li>
              <li><Link href="/videos" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">Videos</Link></li>
              <li><Link href="/shots" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">Shots</Link></li>
              <li><Link href="/roadmaps" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">Roadmaps</Link></li>
            </ul>
          </div>
          <div>
            <p className="type-overline mb-4 text-navy-400 font-semibold tracking-wider text-[11px] uppercase">Company</p>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">About us</Link></li>
              <li><Link href="/how-it-works" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">How it works</Link></li>
              <li><Link href="/contact" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">Contact</Link></li>
              <li><Link href="/feedback" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">Feedback</Link></li>
            </ul>
          </div>
          <div>
            <p className="type-overline mb-4 text-navy-400 font-semibold tracking-wider text-[11px] uppercase">Legal</p>
            <ul className="space-y-2.5">
              <li><Link href="/privacy" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">Privacy policy</Link></li>
              <li><Link href="/terms" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">Terms of use</Link></li>
              <li><Link href="/cookie-policy" className="text-[13px] leading-[20px] text-navy-600 hover:text-brand-500 transition-colors">Cookie policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-strong">
          <p className="text-[12px] leading-[18px] text-navy-400">&copy; {new Date().getFullYear()} Career Cafe</p>
        </div>
      </div>
    </footer>
  );
}
