import React from 'react';
import { ArrowUpLeft, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAssessment,
  onOpenConsultation,
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-white font-sans">
                GoalEarn<span className="text-amber-500">.</span>
              </span>
              <span className="text-xs text-stone-400 border-r border-stone-700 pr-2 mr-1">
                International
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              برنامه‌ها و خدمات خصوصی برای مسیرهای حرفه‌ای و کسب‌وکاری بین‌المللی. ارزیابی دقیق شرایط واقعی پیش از هر پیشنهاد اجرایی.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-amber-500/80 shrink-0" />
              <span>مبتنی بر اصول اخلاقی و شفافیت بدون وعده‌های تضمینی کاذب</span>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">
              برنامه‌ها و خدمات
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('/work-migration')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  مسیر شغلی بین‌المللی
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/international-market-entry')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  ورود به بازارهای جهانی
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/armenia-work-live')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  هاب کار و زندگی در ارمنستان
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/work-experience-verification')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  بررسی و آماده‌سازی سابقه کار
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/private-programs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  برنامه‌های خصوصی توسعه مهارت
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">
              راهنما و شناخت
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  درباره گل‌اِرن
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/resources')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  منابع و راهنماها
                </button>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                    setTimeout(() => {
                      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  پرسش‌های پرتکرار
                </a >
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  تماس با ما
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">
              شروع همکاری
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={onOpenAssessment}
                className="w-full text-center bg-stone-100 hover:bg-white text-stone-950 text-xs font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>درخواست ارزیابی اولیه</span>
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenConsultation}
                className="w-full text-center border border-stone-800 hover:border-stone-600 text-stone-300 text-xs font-medium py-2 px-3 rounded-lg transition-colors"
              >
                درخواست جلسه آشنایی
              </button>
            </div>
            <div className="pt-2 text-[11px] text-stone-500">
              دامنه رسمی: <span className="font-mono text-stone-400">goalearnint.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} GoalEarn International · کلیه حقوق محفوظ است.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('/privacy')}
              className="hover:text-stone-300 transition-colors"
            >
              حریم خصوصی
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate('/terms')}
              className="hover:text-stone-300 transition-colors"
            >
              شرایط استفاده از خدمات
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
