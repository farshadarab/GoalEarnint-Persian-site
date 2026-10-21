import React from 'react';
import { ArrowLeft, Compass, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenAssessment: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-stone-200/80 bg-stone-50">
      {/* Background architectural grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1c1917 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Eyebrow without pill enclosure */}
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 tracking-wider">
              <span className="text-amber-800 font-sans font-bold">GOALEARN INTERNATIONAL</span>
              <span aria-hidden="true">·</span>
              <span>برنامه‌ها و خدمات اختصاصی</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 leading-[1.25] tracking-tight max-w-2xl text-balance">
              برای مسیر بین‌المللی‌ات، یک راهکار عمومی کافی نیست.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              تصمیم برای رشد شغلی، ورود به بازار کار بین‌المللی، توسعه کسب‌وکار یا شروع مسیری تازه در ارمنستان، به شرایط واقعی هر فرد وابسته است. در گل‌اِرن ابتدا هدف و وضعیت تو را بررسی می‌کنیم؛ سپس در صورت تناسب، برنامه‌ای اختصاصی با مراحل، خدمات و انتظارات روشن پیشنهاد می‌دهیم.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAssessment}
                className="cursor-pointer bg-stone-950 hover:bg-stone-800 text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
              >
                <span>درخواست ارزیابی اولیه</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="cursor-pointer bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 text-sm font-medium px-6 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <span>بررسی خدمات اختصاصی</span>
                <ChevronDown className="w-4 h-4 text-stone-500" />
              </button>
            </div>

            {/* Editorial disclaimer note */}
            <div className="pt-1 flex items-center gap-2 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0" />
              <span>ثبت درخواست به‌معنای پذیرش قطعی یا تضمین نتیجه نیست.</span>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-8 space-y-6">
              {/* Strategic Path Diagram Header */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-stone-500">نقشه مسیر تصمیم‌گیری</div>
                  <div className="text-sm font-bold text-stone-900">چهارچوب ارزیابی اختصاصی</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
              </div>

              {/* Graphic Process Matrix */}
              <div className="space-y-3.5 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/60 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    ۱
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block mb-0.5">سنجش ابعاد وضعیت فردی یا شرکتی</span>
                    <span className="text-stone-500">سوابق، شواهد مستند، زبان، منابع مالی، زمان در دسترس و محدودیت‌ها</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/60 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    ۲
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block mb-0.5">غربالگری امکان‌پذیری و تناسب هدف</span>
                    <span className="text-stone-500">تحلیل الزامات قانونی و واقعیت‌های بازار مقصد بدون خوش‌بینی کاذب</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    ۳
                  </div>
                  <div>
                    <span className="font-semibold text-amber-950 block mb-0.5">طراحی برنامه اجرایی اختصاصی (در صورت تناسب)</span>
                    <span className="text-amber-900/80">تعیین دامنه مکتوب خدمات، شاخص‌های گام‌به‌گام و بودجه مشخص</span>
                  </div>
                </div>
              </div>

              {/* Trust markers footer inside card */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-stone-700" />
                  بدون پکیج‌های عمومی آماده
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-stone-700" />
                  مشاوره و تحلیل شفاف
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
