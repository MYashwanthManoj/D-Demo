import SignupForm from "./SignupForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata = {
  title: "Create free account — Career Cafe",
};

export default async function SignupPage() {
  const session = await getServerSession(authOptions);
  
  if (session?.user) {
    if (session.user.role === "SUPER_ADMIN" || session.user.role === "CONTENT_ADMIN") {
      redirect("/admin");
    }
    redirect("/");
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Panel — Branding */}
      <div className="hidden md:flex flex-col justify-between p-10 lg:p-14 w-[440px] bg-navy-900 shrink-0">
        <Link href="/" className="font-semibold text-[17px] leading-[24px] text-white">Career Cafe</Link>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-lg bg-brand-700 flex items-center justify-center font-semibold text-[13px] text-brand-300">PS</div>
            <div>
              <p className="font-medium text-[14px] leading-[20px] text-white">Priya Sharma</p>
              <p className="text-[12px] leading-[18px] text-brand-300">B.Tech 2026 · Now at Zoho</p>
            </div>
          </div>
          <p className="text-[17px] leading-[28px] text-brand-200 italic">&ldquo;I found my first internship here in three weeks. The one-minute shots told me what the job was actually like before I applied.&rdquo;</p>
        </div>
        <div>
          <p className="text-[13px] leading-[20px] text-navy-500">Only openings that accept freshers</p>
          <p className="text-[13px] leading-[20px] text-navy-500">Resources tied to each specific role</p>
          <p className="text-[13px] leading-[20px] text-navy-500">Sixty-second shots on what the job is like</p>
          <p className="text-[13px] leading-[20px] text-navy-500">Free, with no premium tier</p>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[400px] mx-auto w-full">
          <Link href="/" className="inline-flex items-center gap-1.5 mb-8 text-[13px] leading-[20px] text-navy-500 hover:text-navy-900 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            Back
          </Link>
          
          <SignupForm />
          
          <p className="text-center mt-6 text-[13px] leading-[20px] text-navy-500">
            Already have an account? <Link href="/login" className="text-brand-500 font-medium hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
