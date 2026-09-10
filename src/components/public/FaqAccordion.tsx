"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Career Cafe free to use?",
    answer: "Yes. Every opening, resource, video and roadmap is free. We do not charge students, and we do not run sponsored listings."
  },
  {
    question: "Do you accept payment to feature companies?",
    answer: "No. Openings are ranked by relevance to your profile and how recently they were posted - never by payment."
  },
  {
    question: "Do I apply through Career Cafe?",
    answer: "No. We take you to the company's own application page, so your details go straight to the employer."
  },
  {
    question: "Do you sell my data to recruiters?",
    answer: "No. Your profile stays with us. We do not sell, rent or share contact lists, and recruiters cannot message you through the product."
  },
  {
    question: "How do you decide which openings to show?",
    answer: "Relevance to your stated role and year, then how recently it was posted. Payment plays no part - companies cannot buy placement."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border border-border rounded-xl overflow-hidden bg-white">
            <button 
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:bg-navy-50"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span className="text-[14px] leading-[20px] font-medium text-navy-900">{faq.question}</span>
              <svg 
                className={`w-5 h-5 shrink-0 text-navy-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-5 pb-5">
                <p className="text-[13px] leading-[20px] text-navy-500">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
