import React, { useState } from 'react';
import { BookOpen, FileText, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';

interface ResourcesPageProps {
  onOpenAssessment: () => void;
  onNavigateHome: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenAssessment, onNavigateHome }) => {
  const [activeGuide, setActiveGuide] = useState<number>(0);

  const guides = [
    {
      id: 0,
      title: 'چک‌لیست واقع‌بینانه آمادگی برای جاب‌آفر بین‌المللی',
      category: 'مسیر شغلی',
      readTime: '۶ دقیقه خواندن',
      intro:
        'پیش از ارسال صدها رزومه به درگاه‌های استخدامی خارجی، این ۵ معیار بنیادی را در پرونده خود بررسی کنید.',
      content: [
        {
          heading: '۱. هم‌راستایی ساختار رزومه با سیستم‌های ATS',
          body: 'بسیاری از رزومه‌ها پیش از رسیدن به دست مسئول جذب (Recruiter)، توسط نرم‌افزارهای اسکن اولیه رد می‌شوند. استفاده از قالب‌های تک‌ستونه تمیز، حذف گرافیک‌های فانتزی و استفاده از کلیدواژه‌های تخصصی مرتبط با عنوان شغلی ضرورت اولیه است.',
        },
        {
          heading: '۲. سنجش توانایی مکالمه تخصصی به زبان انگلیسی',
          body: 'داشتن مدرک زبان مثل آیلتس همیشه تضمین‌کننده ارتباط راحت در مصاحبه نیست. کارفرما می‌خواهد بداند آیا در جلسات فنی و اسکرام می‌توانید چالش‌های پیچیده را به صورت شفاف بیان کنید یا خیر.',
        },
        {
          heading: '۳. شواهد ملموس خروجی‌ها (Impact Metrics)',
          body: 'به‌جای نوشتن لیست وظایف عمومی، بر دستاوردهای قابل‌اندازه‌گیری تمرکز کنید؛ مانند «کاهش ۳۰ درصدی زمان پاسخ‌دهی سرور» یا «افزایش نرخ تبدیل کاربر در محصول».',
        },
      ],
    },
    {
      id: 1,
      title: 'ارمنستان به عنوان هاب منطقه‌ای برای متخصصان و فریلنسرها',
      category: 'هاب ارمنستان',
      readTime: '۵ دقیقه خواندن',
      intro:
        'بررسی زیرساخت‌های واقعی کار، بانک، اینترنت، و هزینه‌های زندگی در ایروان بدون بزرگ‌نمایی.',
      content: [
        {
          heading: '۱. فضای استارتاپی و اکوسیستم فناوری در ایروان',
          body: 'ارمنستان در سال‌های اخیر میزبان شرکت‌های بین‌المللی متعددی بوده است. با این حال، زبان محیطی، فرهنگ کاری و دستمزدها باید با دقت و بر مبنای توانایی شما در جذب پروژه‌های فرامرزی تحلیل شود.',
        },
        {
          heading: '۲. هزینه‌های زندگی و مسکن',
          body: 'هزینه‌ها در ایروان بسته به منطقه سکونت و سبک زندگی متفاوت است. داشتن یک بودجه احتیاطی برای حداقل ۳ تا ۶ ماه نخست از اصول حیاتی پیش از هرگونه اقدام به سفر است.',
        },
        {
          heading: '۳. امور بانکی و ارزی',
          body: 'قوانین و الزامات افتتاح حساب برای افراد خارجی به صورت دوره‌ای توسط بانک‌های مرکزی و محلی بازبینی می‌شود. همواره استعلام آخرین مقررات را در دستور کار قرار دهید.',
        },
      ],
    },
    {
      id: 2,
      title: 'چگونه سوابق کاری واقعی خود را مستند و قابل‌ارائه کنیم؟',
      category: 'سابقه کار',
      readTime: '۴ دقیقه خواندن',
      intro:
        'رویکرد اصولی به سامان‌دهی مدارک برای شرکت‌هایی که مدارک رسمی بیمه‌ای یا گواهی کار استاندارد ندارند.',
      content: [
        {
          heading: '۱. تجمیع شواهد پروژه و دستاوردهای عینی',
          body: 'مخازن گیت‌هاب، لینک‌های زنده محصولات، مکاتبات رسمی، گزارش‌های دوره‌ای و نمونه‌کارهای اجراشده شواهد قدرتمندی برای اثبات تجربه شما هستند.',
        },
        {
          heading: '۲. معرفی مراجع حرفه‌ای معتبر (References)',
          body: 'داشتن همکاران، مدیران ارشد یا مشتریانی که بتوانند کیفیت کار، صداقت حرفه‌ای و نقش شما را تأیید کنند از مهم‌ترین ابزارهای اعتبارسنجی است.',
        },
      ],
    },
  ];

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-right">
        {/* Breadcrumb */}
        <nav aria-label="راهنمای مسیر" className="flex items-center gap-2 text-xs text-stone-500">
          <button onClick={onNavigateHome} className="hover:text-stone-900 cursor-pointer">
            صفحه اصلی
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 rotate-180" />
          <span className="font-semibold text-stone-900">راهنماها و منابع تخصصی</span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <BookOpen className="w-4 h-4 text-amber-800" />
            <span>دانش، تحلیل و ابزارهای تصمیم‌گیری</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight leading-tight">
            راهنماهای کاربردی برای مسیرهای حرفه‌ای بین‌المللی
          </h1>

          <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
            مجموعه نوشتارهای تحلیلی و چک‌لیست‌های کاربردی تدوین‌شده توسط تیم گل‌اِرن برای کمک به ارزیابی واقع‌بینانه فرصت‌ها و تصمیم‌گیری آگاهانه.
          </p>
        </div>

        {/* Guides layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Guide Selector (Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-stone-700 px-1">فهرست راهنماها:</div>
            {guides.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGuide(g.id)}
                className={`w-full text-right p-4 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                  activeGuide === g.id
                    ? 'bg-white border-stone-900 shadow-xs'
                    : 'bg-white/60 hover:bg-white border-stone-200 text-stone-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="font-medium text-amber-800">{g.category}</span>
                  <span className="text-[11px]">{g.readTime}</span>
                </div>
                <div className="text-sm font-bold text-stone-900 leading-snug">
                  {g.title}
                </div>
              </button>
            ))}
          </div>

          {/* Guide Reader (Span 8) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 p-8 space-y-6">
            <div className="space-y-3 border-b border-stone-100 pb-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                <FileText className="w-4 h-4" />
                <span>{guides[activeGuide].category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-stone-500">{guides[activeGuide].readTime}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-950">
                {guides[activeGuide].title}
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed italic bg-stone-50 p-3.5 rounded-lg border border-stone-200/60">
                {guides[activeGuide].intro}
              </p>
            </div>

            <div className="space-y-6">
              {guides[activeGuide].content.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-base font-bold text-stone-900">
                    {sec.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">نیاز به تحلیل متناسب با شرایط خودت داری؟</span>
              <button
                onClick={onOpenAssessment}
                className="bg-stone-950 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>درخواست ارزیابی اولیه</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
