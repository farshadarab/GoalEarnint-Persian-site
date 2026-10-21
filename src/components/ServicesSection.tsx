import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ArrowLeft, Briefcase, Globe, Compass, FileCheck, Target } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (route: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'work-migration':
        return <Briefcase className="w-5 h-5 text-amber-800" />;
      case 'international-market-entry':
        return <Globe className="w-5 h-5 text-stone-800" />;
      case 'armenia-work-live':
        return <Compass className="w-5 h-5 text-amber-800" />;
      case 'work-experience-verification':
        return <FileCheck className="w-5 h-5 text-stone-800" />;
      case 'private-programs':
        return <Target className="w-5 h-5 text-amber-800" />;
      default:
        return <Briefcase className="w-5 h-5 text-stone-800" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-stone-50 border-b border-stone-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-right mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <span>دسته‌بندی برنامه‌ها</span>
            <span aria-hidden="true">·</span>
            <span>انتخاب مسیر بر اساس هدف</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            مسیر مناسب تو از کجا شروع می‌شود؟
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            هدف خود را انتخاب کن تا ببینی کدام برنامه برای بررسی اولیه مناسب‌تر است. هر برنامه پس از ارزیابی با جزئیات اجرایی، زمان‌بندی و بودجه شفاف تنظیم می‌شود.
          </p>
        </div>

        {/* Bento Grid layout with asymmetric hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Work Migration (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-8 flex flex-col justify-between space-y-6 hover:shadow-sm transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-sans font-bold text-amber-800">01</span>
                  <span aria-hidden="true">·</span>
                  <span>متخصصان و کارشناسان باتجربه</span>
                </div>
                <div className="p-2.5 rounded-lg bg-stone-100">
                  {getServiceIcon('work-migration')}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-amber-800 transition-colors">
                {SERVICES_DATA['work-migration'].title}
              </h3>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                برای متخصصانی که می‌خواهند آمادگی حرفه‌ای خود را برای فرصت‌های شغلی بین‌المللی تقویت کنند و مسیر واقع‌بینانه‌ای برای اقدام داشته باشند.
              </p>

              <div className="pt-2 space-y-2 text-xs text-stone-500">
                <div className="font-semibold text-stone-800 mb-1">محورهای مورد بررسی:</div>
                <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                  <li>ارزیابی رزومه، حضور در لینکدین و سطح زبان تخصصی</li>
                  <li>شناسایی نقش‌ها و شرکت‌های متناسب با سابقه در بازار مقصد</li>
                  <li>تمرین مصاحبه‌های رفتاری و فنی بین‌المللی</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-400">بدون تضمین غیرواقعی شغل یا ویزا</span>
              <button
                onClick={() => onNavigate('/work-migration')}
                className="cursor-pointer text-xs font-semibold text-stone-900 group-hover:text-amber-800 flex items-center gap-1.5"
              >
                <span>بررسی برنامه آمادگی جاب‌آفر</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: International Market Entry (Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-8 flex flex-col justify-between space-y-6 hover:shadow-sm transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-sans font-bold text-amber-800">02</span>
                  <span aria-hidden="true">·</span>
                  <span>کسب‌وکارها و بنیان‌گذاران</span>
                </div>
                <div className="p-2.5 rounded-lg bg-stone-100">
                  {getServiceIcon('international-market-entry')}
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-950 group-hover:text-amber-800 transition-colors">
                ورود کسب‌وکار به بازار بین‌المللی
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                برای کسب‌وکارهایی که می‌خواهند بازار مقصد، مشتری، رقبا، مدل ورود و فرضیه‌های اصلی را پیش از صرف منابع بیشتر بررسی کنند.
              </p>

              <div className="pt-1 text-xs text-stone-500 space-y-1">
                <div>تحلیل مشتری، رقبا و تدوین ارزش پیشنهادی متمایز</div>
                <div>طراحی آزمایش‌های کم‌هزینه اعتبارسنجی فرضیه‌ها</div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-400">تحقیقات و اعتبارسنجی</span>
              <button
                onClick={() => onNavigate('/international-market-entry')}
                className="cursor-pointer text-xs font-semibold text-stone-900 group-hover:text-amber-800 flex items-center gap-1.5"
              >
                <span>بررسی برنامه ورود به بازار</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Armenia Work & Live (Span 4) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-7 flex flex-col justify-between space-y-6 hover:shadow-sm transition-all group">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-sans font-bold text-amber-800">03</span>
                  <span aria-hidden="true">·</span>
                  <span>دورکاران و مهاجران حرفه‌ای</span>
                </div>
                <div className="p-2 rounded-lg bg-stone-100">
                  {getServiceIcon('armenia-work-live')}
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-950 group-hover:text-amber-800 transition-colors">
                کار و زندگی در ارمنستان
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                برای افرادی که می‌خواهند امکان‌پذیری کار و زندگی در ارمنستان و نیازهای عملی خود را با دید روشن‌تری بررسی کنند.
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100">
              <button
                onClick={() => onNavigate('/armenia-work-live')}
                className="cursor-pointer text-xs font-semibold text-stone-900 group-hover:text-amber-800 flex items-center gap-1.5"
              >
                <span>آشنایی با هاب ارمنستان</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Work Experience Verification (Span 4) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-7 flex flex-col justify-between space-y-6 hover:shadow-sm transition-all group">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-sans font-bold text-amber-800">04</span>
                  <span aria-hidden="true">·</span>
                  <span>مستندسازی اخلاقی و معتبر</span>
                </div>
                <div className="p-2 rounded-lg bg-stone-100">
                  {getServiceIcon('work-experience-verification')}
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-950 group-hover:text-amber-800 transition-colors">
                بررسی و آماده‌سازی سابقه کار
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                برای متخصصانی که تجربه واقعی دارند اما نیازمند بررسی مدارک، شواهد، شرح نقش و نحوه ارائه منسجم سابقه خود هستند.
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100">
              <button
                onClick={() => onNavigate('/work-experience-verification')}
                className="cursor-pointer text-xs font-semibold text-stone-900 group-hover:text-amber-800 flex items-center gap-1.5"
              >
                <span>بررسی خدمات سابقه کار</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: Private Programs (Span 4) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-7 flex flex-col justify-between space-y-6 hover:shadow-sm transition-all group">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-sans font-bold text-amber-800">05</span>
                  <span aria-hidden="true">·</span>
                  <span>توسعه مهارت فردی</span>
                </div>
                <div className="p-2 rounded-lg bg-stone-100">
                  {getServiceIcon('private-programs')}
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-950 group-hover:text-amber-800 transition-colors">
                برنامه خصوصی توسعه مهارت
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                برای افرادی که به‌جای دوره عمومی، به برنامه‌ای متناسب با شکاف مهارتی، پروژه عملی، بازخورد و همراهی متخصص نیاز دارند.
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100">
              <button
                onClick={() => onNavigate('/private-programs')}
                className="cursor-pointer text-xs font-semibold text-stone-900 group-hover:text-amber-800 flex items-center gap-1.5"
              >
                <span>بررسی برنامه‌های خصوصی</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
