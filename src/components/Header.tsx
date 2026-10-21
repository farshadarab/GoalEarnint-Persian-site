import React, { useState } from 'react';
import { Menu, X, ArrowUpLeft } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenAssessment: (category?: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenAssessment,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => handleLinkClick('/')}
          className="text-right cursor-pointer group shrink-0 flex items-center gap-2 text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded"
          aria-label="صفحه اصلی گل‌اِرن اینترنشنال"
        >
          <span className="font-extrabold text-xl tracking-tight text-stone-950 font-sans">
            GoalEarn<span className="text-amber-700">.</span>
          </span>
          <span className="text-xs font-semibold text-stone-500 border-r border-stone-300 pr-2 mr-1">
            گل‌اِرن بین‌المللی
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single-line, unboxed) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => handleLinkClick('/')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentRoute === '/' ? 'border-stone-900 text-stone-950 font-semibold' : 'border-transparent'
            }`}
          >
            صفحه اصلی
          </button>
          <button
            onClick={() => handleLinkClick('/work-migration')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentRoute === '/work-migration' ? 'border-stone-900 text-stone-950 font-semibold' : 'border-transparent'
            }`}
          >
            مسیر شغلی بین‌المللی
          </button>
          <button
            onClick={() => handleLinkClick('/international-market-entry')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentRoute === '/international-market-entry' ? 'border-stone-900 text-stone-950 font-semibold' : 'border-transparent'
            }`}
          >
            ورود به بازارهای جهانی
          </button>
          <button
            onClick={() => handleLinkClick('/armenia-work-live')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentRoute === '/armenia-work-live' ? 'border-stone-900 text-stone-950 font-semibold' : 'border-transparent'
            }`}
          >
            هاب ارمنستان
          </button>
          <button
            onClick={() => handleLinkClick('/work-experience-verification')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentRoute === '/work-experience-verification' ? 'border-stone-900 text-stone-950 font-semibold' : 'border-transparent'
            }`}
          >
            بررسی سابقه کار
          </button>
          <button
            onClick={() => handleLinkClick('/about')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentRoute === '/about' ? 'border-stone-900 text-stone-950 font-semibold' : 'border-transparent'
            }`}
          >
            درباره گل‌اِرن
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="text-xs font-medium text-stone-600 hover:text-stone-950 px-3 py-2 cursor-pointer transition-colors whitespace-nowrap"
          >
            جلسه آشنایی
          </button>
          <button
            onClick={() => onOpenAssessment()}
            className="cursor-pointer bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-stone-950"
          >
            <span>درخواست ارزیابی اولیه</span>
            <ArrowUpLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenAssessment()}
            className="bg-stone-900 text-white text-xs font-medium px-3 py-1.5 rounded-md"
          >
            ارزیابی
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-950 focus:outline-none"
            aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-stone-50 px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => handleLinkClick('/')}
            className="block w-full text-right py-2 text-sm font-medium text-stone-800 border-b border-stone-200/50"
          >
            صفحه اصلی
          </button>
          <button
            onClick={() => handleLinkClick('/work-migration')}
            className="block w-full text-right py-2 text-sm font-medium text-stone-800 border-b border-stone-200/50"
          >
            مسیر شغلی بین‌المللی (آمادگی جاب‌آفر)
          </button>
          <button
            onClick={() => handleLinkClick('/international-market-entry')}
            className="block w-full text-right py-2 text-sm font-medium text-stone-800 border-b border-stone-200/50"
          >
            ورود کسب‌وکار به بازارهای بین‌المللی
          </button>
          <button
            onClick={() => handleLinkClick('/armenia-work-live')}
            className="block w-full text-right py-2 text-sm font-medium text-stone-800 border-b border-stone-200/50"
          >
            هاب کار و زندگی در ارمنستان
          </button>
          <button
            onClick={() => handleLinkClick('/work-experience-verification')}
            className="block w-full text-right py-2 text-sm font-medium text-stone-800 border-b border-stone-200/50"
          >
            بررسی و آماده‌سازی شواهد سابقه کار
          </button>
          <button
            onClick={() => handleLinkClick('/private-programs')}
            className="block w-full text-right py-2 text-sm font-medium text-stone-800 border-b border-stone-200/50"
          >
            برنامه‌های خصوصی توسعه مهارت
          </button>
          <button
            onClick={() => handleLinkClick('/resources')}
            className="block w-full text-right py-2 text-sm font-medium text-stone-800 border-b border-stone-200/50"
          >
            راهنماها و منابع تخصصی
          </button>
          <button
            onClick={() => handleLinkClick('/about')}
            className="block w-full text-right py-2 text-sm font-medium text-stone-800 border-b border-stone-200/50"
          >
            درباره گل‌اِرن
          </button>
          <button
            onClick={() => handleLinkClick('/contact')}
            className="block w-full text-right py-2 text-sm font-medium text-stone-800 border-b border-stone-200/50"
          >
            تماس با ما
          </button>

          <div className="pt-4 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="w-full text-center bg-stone-900 text-white text-sm font-semibold py-2.5 rounded-lg"
            >
              درخواست ارزیابی اولیه
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center border border-stone-300 text-stone-800 text-sm font-medium py-2 rounded-lg"
            >
              درخواست جلسه آشنایی
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
