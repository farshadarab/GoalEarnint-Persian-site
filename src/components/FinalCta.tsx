import React from 'react';
import { ArrowLeft, MessageSquare } from 'lucide-react';

interface FinalCtaProps {
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenAssessment, onOpenConsultation }) => {
  return (
    <section className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
          <span>شروع گام اول</span>
          <span aria-hidden="true">·</span>
          <span>بررسی بدون تعهد اولیه</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
          پیش از انتخاب راه‌حل، مسیرت را روشن کن.
        </h2>

        <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
          هدف و شرایطت را با ما در میان بگذار. درخواستت بررسی می‌شود و اگر زمینه مناسبی برای همکاری وجود داشته باشد، گام بعدی را شفاف پیشنهاد می‌کنیم.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAssessment}
            className="w-full sm:w-auto cursor-pointer bg-white hover:bg-stone-100 text-stone-950 text-sm font-bold px-7 py-3.5 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>درخواست ارزیابی اولیه</span>
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto cursor-pointer border border-stone-700 hover:border-stone-500 bg-stone-800/80 text-stone-200 text-sm font-medium px-6 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>درخواست جلسه آشنایی</span>
          </button>
        </div>

        <div className="text-xs text-stone-400 pt-2">
          پاسخ به درخواست‌های ارزیابی معمولاً ظرف ۲ تا ۳ روز کاری پس از بررسی سوابق ارسال می‌شود.
        </div>
      </div>
    </section>
  );
};
