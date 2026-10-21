import React, { useState } from 'react';
import { MAIN_FAQ } from '../data/servicesData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FaqSectionProps {
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAssessment, onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaq = MAIN_FAQ.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-stone-50 border-b border-stone-200/80 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 text-right mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <HelpCircle className="w-4 h-4 text-amber-800" />
            <span>پاسخ به ابهامات رایج</span>
            <span aria-hidden="true">·</span>
            <span>پرسش‌های پرتکرار</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            پرسش‌های پرتکرار درباره نحوه همکاری
          </h2>

          <p className="text-base text-stone-600 leading-relaxed">
            پاسخ به مهم‌ترین سؤالات متقاضیان درباره رویکرد اختصاصی، هزینه‌ها، تعهدات و نحوه شروع کار با گل‌اِرن.
          </p>

          {/* Quick Search */}
          <div className="relative pt-2">
            <label htmlFor="faq-search" className="sr-only">جست‌وجو در پرسش‌ها</label>
            <input
              id="faq-search"
              type="text"
              placeholder="جست‌وجو در پرسش‌ها (مثلاً: تضمین، هزینه، سابقه کار...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-colors"
            />
            <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-5 pointer-events-none" />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaq.length > 0 ? (
            filteredFaq.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.question}
                  className="bg-white rounded-xl border border-stone-200/90 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-4.5 text-right flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:bg-stone-50"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-stone-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-800' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white rounded-xl border border-stone-200 text-stone-500 text-sm">
              پرسشی متناسب با جست‌وجوی شما پیدا نشد. می‌توانید با ما تماس بگیرید.
            </div>
          )}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 p-6 rounded-xl bg-stone-100 border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <span>سؤال دیگری دارید که در اینجا مطرح نشده است؟</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="font-semibold text-stone-900 hover:text-amber-800 cursor-pointer underline"
            >
              درخواست جلسه آشنایی
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenAssessment}
              className="bg-stone-900 text-white px-3.5 py-1.5 rounded-md hover:bg-stone-800 transition-colors"
            >
              ارزیابی اولیه
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
