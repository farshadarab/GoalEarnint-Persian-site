import React from 'react';
import { CORE_PRINCIPLES } from '../data/servicesData';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface ApproachSectionProps {
  onOpenAssessment: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onOpenAssessment }) => {
  return (
    <section className="py-20 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-right mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <span>فلسفه و مدل کاری</span>
            <span aria-hidden="true">·</span>
            <span>رویکرد اختصاصی گل‌اِرن</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            ما از یک خدمت آماده شروع نمی‌کنیم؛ از شرایط تو شروع می‌کنیم.
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            دو نفر با هدف مشابه ممکن است به برنامه‌های متفاوتی نیاز داشته باشند. سابقه، مهارت، زبان، زمان، بودجه، بازار هدف و محدودیت‌ها روی تصمیم درست اثر می‌گذارند. به همین دلیل، همکاری با ارزیابی شروع می‌شود و دامنه کار پیش از آغاز شفاف خواهد شد.
          </p>
        </div>

        {/* 3 Core Principles - Editorial Numbered List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-4 hover:border-stone-400 transition-colors"
            >
              <div className="space-y-4">
                <div className="text-amber-800 font-sans font-extrabold text-xl tracking-tight" dir="ltr">
                  {principle.number}.
                </div>
                <h3 className="text-lg font-bold text-stone-900">
                  {principle.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-2 text-xs text-stone-400 flex items-center gap-1.5 border-t border-stone-100">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>شخصی‌سازی بر اساس شواهد واقعی</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet in-section prompt */}
        <div className="mt-12 p-6 rounded-xl bg-stone-900 text-stone-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-right">
            <h4 className="text-base font-bold text-white">آیا می‌خواهی تناسب شرایطت با برنامه‌های گل‌اِرن بررسی شود؟</h4>
            <p className="text-xs text-stone-300">
              ارزیابی اولیه رایگان است و به روشن‌شدن اولویت‌ها و موانع احتمالی کمک می‌کند.
            </p>
          </div>
          <button
            onClick={onOpenAssessment}
            className="cursor-pointer bg-white hover:bg-stone-100 text-stone-950 text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>شروع ارزیابی شرایط</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
