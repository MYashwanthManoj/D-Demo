"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { completeOnboarding } from "./actions"

export default function OnboardingClient({ initialName }: { initialName: string }) {
  const router = useRouter()
  const totalSteps = 5
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  // Form State
  const [name, setName] = useState(initialName || "")
  const [degree, setDegree] = useState("")
  const [branch, setBranch] = useState("")
  const [college, setCollege] = useState("")
  
  const [year, setYear] = useState("")
  const [studyStatus, setStudyStatus] = useState("")
  
  const [roles, setRoles] = useState<string[]>([])
  
  const [cities, setCities] = useState<string[]>([])
  const [workstyles, setWorkstyles] = useState<string[]>([])

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
    else handleComplete()
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const toggleArrayItem = (item: string, array: string[], setArray: (arr: string[]) => void, max = Infinity) => {
    if (array.includes(item)) {
      setArray(array.filter((i) => i !== item))
    } else {
      if (array.length < max) {
        setArray([...array, item])
      }
    }
  }

  const handleComplete = async () => {
    setIsSubmitting(true)
    setError("")
    
    try {
      const res = await completeOnboarding({
        name,
        course: JSON.stringify({ degree, branch, college }),
        graduationYear: parseInt(year) || 0,
        workPreference: JSON.stringify({ status: studyStatus, roles, workstyle: workstyles }),
        location: cities.join(", ")
      })

      if (res.error) {
        setError(res.error)
        setIsSubmitting(false)
      } else {
        // Go to success step (6)
        setCurrentStep(6)
      }
    } catch (err) {
      console.error(err)
      setError("An unexpected error occurred.")
      setIsSubmitting(false)
    }
  }

  const handleSaveAndExit = async () => {
    await handleComplete()
    if (currentStep !== 6) { // if no error, we will just redirect manually here
      router.push("/")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-navy-25">
      {/* Header */}
      <header className="flex items-center justify-between px-6 h-16 bg-white border-b border-navy-100 shrink-0">
        <Link href="/" className="font-semibold text-[17px] leading-[24px] text-navy-900">Career Cafe</Link>
        {currentStep <= totalSteps && (
          <div className="flex items-center gap-4">
            <span className="text-[13px] leading-[20px] text-navy-500">Step {currentStep} of {totalSteps}</span>
            <button onClick={handleSaveAndExit} className="text-[13px] leading-[20px] font-medium text-navy-500 hover:text-navy-700 transition-colors">Save and exit</button>
          </div>
        )}
      </header>

      {/* Progress Bar */}
      {currentStep <= totalSteps && (
        <div className="bg-navy-100">
          <div 
            className="h-1 bg-brand-500 transition-all duration-300 ease-out rounded-r-full" 
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      )}

      {/* Steps Container */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-[480px] w-full">
          
          {error && (
            <div className="bg-danger-50 text-danger-700 p-3 rounded-lg text-[13px] border border-danger-500/20 mb-6">
              {error}
            </div>
          )}

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900 mb-1">What is your name?</h1>
              <p className="text-[15px] leading-[24px] text-navy-500 mb-6">This decides which openings we show you first. You can change it later.</p>

              <label className="block text-[14px] leading-[20px] font-medium text-navy-700 mb-1.5">Full name</label>
              <input 
                value={name} onChange={e => setName(e.target.value)}
                type="text" placeholder="e.g. Priya Sharma" 
                className="w-full px-3 py-2.5 text-[15px] text-navy-900 bg-white border border-border-strong rounded-lg focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 mb-5" 
              />

              <label className="block text-[14px] leading-[20px] font-medium text-navy-700 mb-1.5">Degree</label>
              <div className="flex flex-wrap gap-2 mb-5">
                {["B.Tech / B.E.", "BCA", "MCA", "M.Sc", "B.Sc", "M.Tech"].map(opt => (
                  <button 
                    key={opt} onClick={() => setDegree(opt)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 border rounded-lg text-[14px] leading-[20px] transition-all
                      ${degree === opt ? 'border-brand-500 bg-brand-50 text-brand-700 font-medium' : 'border-border-strong bg-white text-navy-700 hover:border-navy-300'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <label className="block text-[14px] leading-[20px] font-medium text-navy-700 mb-1.5">Branch or specialisation</label>
              <input 
                value={branch} onChange={e => setBranch(e.target.value)}
                type="text" placeholder="e.g. Computer Science and Engineering" 
                className="w-full px-3 py-2.5 text-[15px] text-navy-900 bg-white border border-border-strong rounded-lg focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 mb-1.5" 
              />
              <p className="text-[12px] leading-[18px] text-navy-400 mb-5">Start typing and pick from the list — this stays private.</p>

              <label className="block text-[14px] leading-[20px] font-medium text-navy-700 mb-1.5">College or university</label>
              <input 
                value={college} onChange={e => setCollege(e.target.value)}
                type="text" placeholder="e.g. Vellore Institute of Technology" 
                className="w-full px-3 py-2.5 text-[15px] text-navy-900 bg-white border border-border-strong rounded-lg focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10" 
              />
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900 mb-1">When do you graduate?</h1>
              <p className="text-[15px] leading-[24px] text-navy-500 mb-6">We use this to match eligibility criteria on listings so you do not waste an evening on a role you cannot apply for.</p>

              <label className="block text-[14px] leading-[20px] font-medium text-navy-700 mb-1.5">Graduation year</label>
              <div className="flex flex-wrap gap-2 mb-6">
                {["2025", "2026", "2027", "2028"].map(opt => (
                  <button 
                    key={opt} onClick={() => setYear(opt)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 border rounded-lg text-[14px] leading-[20px] transition-all
                      ${year === opt ? 'border-brand-500 bg-brand-50 text-brand-700 font-medium' : 'border-border-strong bg-white text-navy-700 hover:border-navy-300'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <label className="block text-[14px] leading-[20px] font-medium text-navy-700 mb-1.5">Study status</label>
              <div className="space-y-2">
                {[
                  { id: "Still studying", label: "Still studying — I am looking for internships." },
                  { id: "Final year", label: "In my final year — looking for a full-time role." },
                  { id: "Recently graduated", label: "Recently graduated — actively applying." },
                  { id: "Switching", label: "Switching into a new field." }
                ].map(opt => (
                  <button 
                    key={opt.id} onClick={() => setStudyStatus(opt.id)}
                    className={`w-full text-left inline-flex items-center gap-1.5 px-4 py-3 border rounded-lg text-[14px] leading-[20px] transition-all
                      ${studyStatus === opt.id ? 'border-brand-500 bg-brand-50 text-brand-700 font-medium' : 'border-border-strong bg-white text-navy-700 hover:border-navy-300'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900 mb-1">Which roles are you curious about?</h1>
              <p className="text-[15px] leading-[24px] text-navy-500 mb-6">Pick up to five. We will build your feed, resources and shots around these.</p>

              <div className="space-y-4">
                {[
                  { cat: "Software", items: ["Software Engineer", "Frontend Developer", "Backend Developer", "QA / Test Engineer", "DevOps", "Mobile Developer"] },
                  { cat: "Data", items: ["Data Analyst", "Data Engineer", "Business Analyst", "MIS Executive"] },
                  { cat: "Design and product", items: ["UX Designer", "UI Designer", "Product Analyst", "Technical Writer"] },
                  { cat: "Business and support", items: ["Product Support", "Customer Success", "Operations Executive", "HR Associate", "Sales Development", "Finance Analyst"] }
                ].map(section => (
                  <div key={section.cat}>
                    <p className="text-[11px] leading-[16px] font-semibold text-navy-400 uppercase tracking-wider mb-2">{section.cat}</p>
                    <div className="flex flex-wrap gap-2">
                      {section.items.map(opt => {
                        const isSelected = roles.includes(opt);
                        return (
                          <button 
                            key={opt} onClick={() => toggleArrayItem(opt, roles, setRoles, 5)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-[14px] leading-[20px] transition-all
                              ${isSelected ? 'border-brand-500 bg-brand-50 text-brand-700 font-medium' : 'border-border-strong bg-white text-navy-700 hover:border-navy-300'}`}
                          >
                            {opt}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-[20px] text-navy-500">{roles.length} of 5 selected</p>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900 mb-1">Where would you like to work?</h1>
              <p className="text-[15px] leading-[24px] text-navy-500 mb-6">We show openings in these places first, and never hide the ones that are remote.</p>

              <label className="block text-[14px] leading-[20px] font-medium text-navy-700 mb-1.5">Preferred cities</label>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Bengaluru", "Hyderabad", "Pune", "Chennai", "Mumbai", "Delhi NCR", "Kolkata", "Ahmedabad", "Coimbatore", "Anywhere in India"].map(opt => {
                  const isSelected = cities.includes(opt);
                  return (
                    <button 
                      key={opt} onClick={() => toggleArrayItem(opt, cities, setCities)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-[14px] leading-[20px] transition-all
                        ${isSelected ? 'border-brand-500 bg-brand-50 text-brand-700 font-medium' : 'border-border-strong bg-white text-navy-700 hover:border-navy-300'}`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              <label className="block text-[14px] leading-[20px] font-medium text-navy-700 mb-1.5">Work style</label>
              <div className="flex flex-wrap gap-2">
                {["On-site", "Remote", "Hybrid"].map(opt => {
                  const isSelected = workstyles.includes(opt);
                  return (
                    <button 
                      key={opt} onClick={() => toggleArrayItem(opt, workstyles, setWorkstyles)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 border rounded-lg text-[14px] leading-[20px] transition-all
                        ${isSelected ? 'border-brand-500 bg-brand-50 text-brand-700 font-medium' : 'border-border-strong bg-white text-navy-700 hover:border-navy-300'}`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {currentStep === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900 mb-1">Add your resume, or skip this</h1>
              <p className="text-[15px] leading-[24px] text-navy-500 mb-6">Optional. Having one on file lets us point out which of your listed skills a role is asking for.</p>

              <div className="border-2 border-dashed border-border-strong rounded-xl p-10 text-center hover:border-navy-300 transition-colors cursor-pointer bg-white">
                <svg className="w-10 h-10 mx-auto mb-3 text-navy-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                <p className="text-[14px] leading-[20px] text-navy-600 font-medium mb-1">Drop your resume here</p>
                <p className="text-[12px] leading-[18px] text-navy-400 max-w-[280px] mx-auto">PDF or DOCX, up to 5 MB. We store it so you can download it later — we never send it to an employer for you.</p>
                <p className="text-[12px] leading-[18px] text-navy-400 font-medium mt-3">Browse files</p>
              </div>

              <label className="flex items-start gap-3 mt-6 cursor-pointer">
                <input type="checkbox" className="mt-0.5 w-[18px] h-[18px] rounded border border-border-strong accent-brand-500" />
                <span className="text-[13px] leading-[20px] text-navy-500 flex-1">Email me a weekly digest — five openings that match, every Monday morning. No other email from us.</span>
              </label>
            </div>
          )}

          {/* STEP 6: Success */}
          {currentStep === 6 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-success-50 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h1 className="text-[24px] leading-[32px] font-semibold text-navy-900 mb-2">You are set up!</h1>
              <p className="text-[15px] leading-[24px] text-navy-500 mb-6">
                We found openings that match a {year || "2026"} {degree || "B.Tech"} graduate looking at {roles.length > 0 ? roles.join(', ') : "Software Engineer"} roles {cities.length > 0 ? `in ${cities.join(', ')}` : ''}.
              </p>
              
              <div className="flex justify-center gap-6 mb-8">
                <div className="text-center">
                  <p className="text-[24px] leading-[32px] font-semibold text-navy-900">148</p>
                  <p className="text-[11px] leading-[16px] text-navy-400 uppercase tracking-wider font-medium">openings</p>
                </div>
                <div className="text-center">
                  <p className="text-[24px] leading-[32px] font-semibold text-navy-900">36</p>
                  <p className="text-[11px] leading-[16px] text-navy-400 uppercase tracking-wider font-medium">resources</p>
                </div>
                <div className="text-center">
                  <p className="text-[24px] leading-[32px] font-semibold text-navy-900">12</p>
                  <p className="text-[11px] leading-[16px] text-navy-400 uppercase tracking-wider font-medium">shots</p>
                </div>
              </div>
              
              <Link href="/" className="block w-full py-2.5 bg-brand-500 text-white font-medium text-[14px] leading-[20px] rounded-lg hover:bg-brand-600 transition-colors shadow-brand text-center">
                Go to my feed
              </Link>
              <Link href="/roadmaps" className="block w-full mt-3 py-2.5 bg-white border border-border-strong text-navy-700 font-medium text-[14px] leading-[20px] rounded-lg hover:bg-navy-50 transition-colors text-center">
                Pick a roadmap first
              </Link>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep <= totalSteps && (
            <div className="flex items-center gap-3 mt-10">
              {currentStep > 1 && (
                <button 
                  onClick={prevStep}
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-white border border-border-strong text-navy-700 font-medium text-[14px] leading-[20px] rounded-lg hover:bg-navy-50 transition-colors disabled:opacity-50"
                >
                  Back
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button 
                  onClick={nextStep}
                  className="flex-1 py-2.5 bg-brand-500 text-white font-medium text-[14px] leading-[20px] rounded-lg hover:bg-brand-600 transition-colors shadow-brand"
                >
                  Continue
                </button>
              ) : (
                <>
                  <button 
                    onClick={handleComplete}
                    disabled={isSubmitting}
                    className="flex-1 py-2.5 bg-brand-500 text-white font-medium text-[14px] leading-[20px] rounded-lg hover:bg-brand-600 transition-colors shadow-brand disabled:opacity-70"
                  >
                    {isSubmitting ? "Saving..." : "Complete Setup"}
                  </button>
                  <button 
                    onClick={handleComplete}
                    disabled={isSubmitting}
                    className="px-5 py-2.5 bg-white border border-border-strong text-navy-500 font-medium text-[14px] leading-[20px] rounded-lg hover:bg-navy-50 transition-colors disabled:opacity-50"
                  >
                    Skip
                  </button>
                </>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
