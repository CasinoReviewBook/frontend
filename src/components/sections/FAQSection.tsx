'use client';

import { useState } from 'react';
import { Check, ChevronDown, ChevronRight } from 'lucide-react';
import { useFaqs } from '@/hooks/useRedux';

export function FAQSection() {
  const { faqs, loading } = useFaqs();
  const [openIndex, setOpenIndex] = useState(0);

  if (loading) {
    return (
      <section className="w-full flex justify-center py-[72px] bg-gradient-to-br from-emerald-50/40 via-blue-50/80 to-indigo-50/80 rounded-[50px] overflow-hidden">
        <div className="w-full max-w-[1184px]">
          <div className="text-center text-slate-500">Loading FAQs...</div>
        </div>
      </section>
    );
  }

  if (faqs.length === 0) {
    return null;
  }

  return (
   <section className="w-full flex justify-center py-[72px] bg-gradient-to-br from-emerald-50/40 via-blue-50/80 to-indigo-50/80 rounded-[50px] overflow-hidden">
      <div className="w-full max-w-[1184px]">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 max-w-[1152px] mx-auto">

          {/* Left column */}
          <div className="w-full lg:w-[498px] flex flex-col gap-[15px]">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-500 text-base leading-relaxed">
              Everything you need to know about online casinos, bonuses, payments,
              and responsible gambling. Can&apos;t find your answer? Reach out to our team.
            </p>

            <div className="flex items-start gap-3 mt-2">
              <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-500 shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </span>
              <div>
                <h3 className="font-bold text-slate-900">Security &amp; Licensing</h3>
                <p className="text-slate-500 text-sm mt-1">
                  We evaluate casinos based on licensing, security, and responsible
                  gambling standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-500 shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </span>
              <div>
                <h3 className="font-bold text-slate-900">24/7 Hour Support</h3>
                <p className="text-slate-500 text-sm mt-1">
                  With lots of unique blocks, you can easily build a page without
                  coding.
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div
            className="w-full lg:w-[526px] bg-white rounded-[10px] shadow-xl px-[27px] py-[26px] flex flex-col gap-[27px]"
            style={{ borderTop: '8px solid #2E68FB' }}
          >
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div
                  key={faq.id}
                  className={index !== faqs.length - 1 ? 'border-b border-slate-100 pb-[27px]' : ''}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between text-left gap-4"
                  >
                    <span
                      className={`font-bold ${
                        isOpen ? 'text-blue-600' : 'text-slate-900'
                      }`}
                    >
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <p className="text-slate-400 text-sm leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}