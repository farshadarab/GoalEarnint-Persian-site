import React from 'react';
import { ArrowLeft, Target, Users, BookOpen } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (route: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
              <span>هویت و مأموریت ما</span>
              <span aria-hidden="true">·</span>
              <span>درباره گل‌اِرن بین‌المللی</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
              همراهی ساختارمند برای مسیرهای حرفه‌ای پیچیده
            </h2>

            <p className="text-base text-stone-600 leading-relaxed">
              گل‌اِرن خدمات و برنامه‌هایی برای توسعه مسیر شغلی، آمادگی حرفه‌ای بین‌المللی و تصمیم‌های کسب‌وکاری طراحی می‌کند. رویکرد ما بر شناخت شرایط، روشن‌کردن گزینه‌ها و تبدیل هدف به مراحل قابل‌پیگیری استوار است. به‌جای ارائه یک راه‌حل ثابت به همه، دامنه همکاری را با توجه به نیاز و امکان‌پذیری هر پرونده تعریف می‌کنیم.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/about')}
                className="cursor-pointer bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold px-5 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <span>بیشتر درباره رویکرد ما بدان</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-white border border-stone-200 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">برنامه‌ریزی مبتنی بر واقعیت</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                ترسیم مسیر شغلی و مهاجرتی بر پایه داده‌های واقعی بازار کار، نه وعده‌های تبلیغاتی.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-stone-200 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">همراهی مشاوره‌محور</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                همراهی مستقیم با متخصصان به جای بازاریابی انبوه یا پکیج‌های ضبط‌شده عمومی.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-stone-200 space-y-3 sm:col-span-2">
              <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">مستندسازی اخلاقی شواهد</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                ارزیابی و آماده‌سازی منسجم شواهد تجربی مطابق با استانداردهای کارفرمایان بین‌المللی.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
