import React, { useState, useRef } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Globe2, 
  UserCheck, 
  Briefcase, 
  Building2, 
  FileText, 
  Laptop, 
  Cpu, 
  Zap, 
  Play, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles,
  MessageCircleQuestion,
  ExternalLink
} from 'lucide-react';

interface GoalEarnCanvasLandingProps {
  onNavigateToAssessment?: () => void;
}

export const GoalEarnCanvasLanding: React.FC<GoalEarnCanvasLandingProps> = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeVideoTab, setActiveVideoTab] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // URLs as requested by user
  const CONTACT_PAGE_URL = "http://goalearnint.com/where-we-are/";
  const CONSULTING_URL = "https://goalearnint.com/int-consulting/";
  const JOBOFFER_PROGRAM_URL = "https://goalearnint.com/joboffer-readiness-program/";
  const INTERNATIONALIZATION_URL = "https://goalearnint.com/internationalization/";
  const ARMENIA_HUB_URL = "https://goalearnint.com/armenia-professional-path-fa/";
  const WORK_EXP_CERT_URL = "https://goalearnint.com/work-experience-certificate/";
  const BOOTCAMP_ASSESSMENT_URL = "https://goalearnint.com/int-bootcamp-assessment/";

  // Video assets provided by user
  const videoData = [
    {
      id: 0,
      title: 'معرفی جامع گُل اِرن (ویدئوی اصلی)',
      description: 'بررسی جامع فلسفه، مدل ارزیابی ۳۶۰ درجه و خدمات اختصاصی گُل اِرن بین‌الملل',
      url: 'https://goalearnint.com/wp-content/uploads/2026/10/GoalEarn-overview-and-services.mp4',
      poster: 'https://goalearnint.com/wp-content/uploads/2026/10/Goalearn-video-cover-main-page-scaled.webp',
      badge: 'ویدئوی اصلی'
    },
    {
      id: 1,
      title: 'راهنمای برنامه آمادگی جاب‌آفر',
      description: 'آشنایی با ۳ مسیر تخصصی Readiness، Job Offer Strategy و همراهی مهاجرت کاری',
      url: 'https://goalearnint.com/wp-content/uploads/2026/10/راهنمای-برنامه-آمادگی-جاب-آفر-گل-ارن-1.mp4',
      poster: '',
      badge: 'مسیر شغلی'
    },
    {
      id: 2,
      title: 'نقشه راه مارکت اینترنشنال',
      description: 'استراتژی توسعه فرامرزی کسب‌وکارها، اعتبارسنجی فرضیه‌ها و Go-To-Market',
      url: 'https://goalearnint.com/wp-content/uploads/2026/10/نقشه_راه_کاریابی_جهانی_.mp4',
      poster: '',
      badge: 'کسب‌وکار'
    },
    {
      id: 3,
      title: 'هاب کار و زندگی در ارمنستان',
      description: 'بررسی زیرساخت‌های واقعی کار، اینترنت نامحدود، حساب بانکی و استقرار دورکاری در ایروان',
      url: 'https://goalearnint.com/wp-content/uploads/2026/10/armenia-professional-path-fa-GoalEarn-video.mp4',
      poster: '',
      badge: 'هاب ارمنستان'
    }
  ];

  const handleVideoTabChange = (index: number) => {
    setActiveVideoTab(index);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  };

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const techBadges = [
    { name: 'React & Next.js', category: 'Frontend Architecture' },
    { name: 'AI & Large Language Models', category: 'Machine Learning' },
    { name: 'Python & PyTorch', category: 'Data & AI Systems' },
    { name: 'Node.js & TypeScript', category: 'Backend Engineering' },
    { name: 'Cloud & DevOps (AWS / GCP)', category: 'Infrastructure' },
    { name: 'Docker & Kubernetes', category: 'Cloud Native' },
    { name: 'Product Management', category: 'Product Strategy' },
    { name: 'PostgreSQL & Distributed DBs', category: 'Data Engineering' },
    { name: 'Remote Engineering Workflow', category: 'Global Teams' },
    { name: 'International GTM Strategy', category: 'Business Expansion' }
  ];

  const faqData = [
    {
      q: 'برنامه آمادگی جاب‌آفر بین‌المللی گُل اِرن (Goal-Earn) شامل چه مسیرهایی است؟',
      a: 'این برنامه شامل ۳ مسیر مجزاست: مسیر ۱ (Readiness) برای ساخت پروفایل، رزومه و نمونه‌کار جهانی؛ مسیر ۲ (Job Offer) برای استراتژی اپلای هدفمند و شبکه‌سازی؛ و مسیر ۳ (Migration) برای همراهی در فرآیند استخدامی و ویزای کاری مرتبط.'
    },
    {
      q: 'فرایند ارائه خدمات در گُل اِرن (Goal-Earn) چگونه انجام می‌شود؟',
      a: 'تمامی خدمات ۱۰۰٪ آنلاین و اختصاصی هستند. فرایند از هدایت شما به برگه ارزیابی اولیه، بررسی تناسب پرونده، جلسه آنلاین آشنایی، ارزیابی ۳۶۰ درجه، و تدوین پروپوزال اختصاصی (شامل زمان‌بندی، دامنه کار و هزینه) آغاز می‌شود.'
    },
    {
      q: 'بوت‌کمپ‌های خصوصی مهاجرت کاری گُل اِرن چه تفاوتی با دوره‌های عمومی دارند؟',
      a: 'این بوت‌کمپ‌ها ۶ تا ۸ ماهه و کاملاً ۱-به-۱ هستند؛ شامل تسک ارزیابی اولیه با AI، ۱۲ پروژه واقعی ۲ هفته‌ای، ۲۴ جلسه منتورینگ اختصاصی، امکان ۲ ماه وقفه بدون افت کیفیت و امکان ۱ بار تغییر مسیر شغلی (Career Switch) رایگان می‌باشد.'
    },
    {
      q: 'خدمت «تأییدیه و ارزیابی سابقه کار با روش جدید» دقیقاً چیست؟',
      a: 'تیم گُل اِرن شواهد واقعی پروژه‌ها، کدهای اجرا شده، فعالیت‌های فریلنسری و دورکاری گذشته شما را استخراج و مستندسازی می‌کند تا به‌صورت ساختاریافته و قابل دفاع به کارفرمایان بین‌المللی ارائه شوند (بدون مدرک‌سازی جعلی).'
    },
    {
      q: 'هاب کاری و زندگی ارمنستان (Armenia Hub) چه امکاناتی ارائه می‌دهد؟',
      a: 'ارمنستان یک پایگاه استراتژیک برای دورکاران IT جهت دسترسی به اینترنت نامحدود و حساب بانکی بین‌المللی است. ما پکیج‌های فضای کار اشتراکی (Coworking)، کار و اقامت یکپارچه (Work + Live)، و پشتیبانی ثبت شرکت و حساب بانکی ارائه می‌دهیم.'
    },
    {
      q: 'برنامه ورود کسب‌وکار به مارکت بین‌المللی برای چه کسانی مناسب است؟',
      a: 'این برنامه ویژه بنیان‌گذاران فناوری، صاحبان محصولات دیجیتال و AI است که قصد اعتبارسنجی تقاضای واقعی بازار هدف، تحلیل رقبا، اعتبارسنجی ارزش پیشنهادی و تدوین نقشه راه ورود به بازار (Go-To-Market) را دارند.'
    },
    {
      q: 'آیا گُل اِرن تضمین قطعی دریافت جاب‌آفر یا ویزا می‌دهد؟',
      a: 'خیر. گُل اِرن کیفیت فرآیند آماده‌سازی، ساخت پورتفولیوی استاندارد و اجرای منظم برنامه‌ها را تضمین می‌کند. تصمیم نهایی استخدام بر عهده کارفرمای خارجی است و ادعاهای تضمین ۱۰۰٪ فاقد اعتبار علمی و قانونی هستند.'
    },
    {
      q: 'هزینه برنامه‌ها و جلسات مشاوره چگونه محاسبه می‌شود؟',
      a: 'هزینه‌ها متغیر و متناسب با سطح فنی، سوابق و میزان خدمات موردنیاز شما تعیین می‌شوند. تمام هزینه‌ها پس از ارزیابی ۳۶۰ درجه و در قالب پروپوزال شفاف قبل از عقد قرارداد اعلام می‌گردند.'
    },
    {
      q: 'آیا متخصصان داخل ایران امکان استفاده از خدمات ریموت را دارند؟',
      a: 'بله، تمام زیرساخت‌های منتورینگ، ارزیابی، مدیریت پروژه‌ها و ارتباط با منتورهای ارشد به‌صورت ۱۰۰٪ آنلاین و متناسب با شرایط متخصصان حاضر در ایران طراحی شده است.'
    },
    {
      q: 'چگونه می‌توانم فرایند ارزیابی اولیه را شروع کنم؟',
      a: 'کافی است روی دکمه‌های «مشاوره و ارزیابی» کلیک کنید تا به فرم اختصاصی هدایت شوید. پس از ثبت اطلاعات، پرونده شما توسط تیم فنی بررسی خواهد شد.'
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white relative">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden border-b border-slate-800/80">
        {/* Tech Grid Background Accent */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/60 mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>برنامه‌ها و خدمات اختصاصی بین‌المللی ویژه متخصصان Tech & AI</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-snug lg:leading-tight mb-6 tracking-tight text-balance">
            برای مسیر بین‌المللی‌ات، به یک <span className="text-blue-500 underline decoration-blue-800 underline-offset-8">برنامه متناسب با شرایط واقعی</span> نیاز داری.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 text-balance">
            گُل اِرن (Goal-Earn) ابتدا هدف، سطح فنی، سوابق و محدودیت‌هایت را ارزیابی می‌کند. سپس در صورت داشتن شرایط اولیه، برنامه‌ای کاملاً اختصاصی برای آمادگی جاب‌آفر، توسعه بین‌المللی کسب‌وکار یا استقرار ریموت ارائه می‌دهد.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={CONSULTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>مشاوره و ارزیابی</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a 
              href="#video-intro" 
              className="w-full sm:w-auto bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm px-8 py-4 rounded-xl border border-slate-800 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 text-blue-400 fill-current" />
              <span>مشاهده ویدئوی معرفی</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>تمام مراحل به صورت ۱۰۰٪ آنلاین، اختصاصی و با محرمانگی کامل اجرا می‌شوند.</span>
          </div>
        </div>
      </section>

      {/* TECH TICKER / HORIZONTAL SCROLLING SECTION (Item 1) */}
      <section className="py-6 bg-slate-900/90 border-b border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>فناوری‌ها، ابزارها و حوزه‌های تخصصی تحت پوشش در گُل اِرن:</span>
          </div>
          <span className="text-[11px] text-blue-400/90 font-mono hidden sm:inline-block">Tech & AI Stack · Global Standards</span>
        </div>

        {/* Marquee Container with duplicate track for smooth infinite scroll */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 items-center w-max animate-marquee">
            {/* First batch */}
            {techBadges.map((badge, idx) => (
              <div
                key={`badge-1-${idx}`}
                className="flex items-center gap-3 bg-slate-950/80 border border-slate-800/90 rounded-xl px-4 py-2.5 text-xs shrink-0 hover:border-blue-500/40 transition-colors shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="font-bold text-white font-mono text-xs">{badge.name}</span>
                <span className="text-[10px] text-slate-400 border-r border-slate-800 pr-2">{badge.category}</span>
              </div>
            ))}
            {/* Repeated batch for seamless loop */}
            {techBadges.map((badge, idx) => (
              <div
                key={`badge-2-${idx}`}
                className="flex items-center gap-3 bg-slate-950/80 border border-slate-800/90 rounded-xl px-4 py-2.5 text-xs shrink-0 hover:border-blue-500/40 transition-colors shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="font-bold text-white font-mono text-xs">{badge.name}</span>
                <span className="text-[10px] text-slate-400 border-r border-slate-800 pr-2">{badge.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OFFICIAL VIDEO INTRO SECTION (Item 4) */}
      <section id="video-intro" className="py-20 bg-slate-900 border-b border-slate-800 scroll-mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-semibold text-blue-400 mb-2">ویدئوهای رسمی معرفی گُل اِرن</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              آشنایی با الگوی اختصاصی گُل اِرن (Goal-Earn)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              برای آشنایی دقیق با ساختار هر برنامه، یکی از ویدئوهای زیر را انتخاب و مشاهده فرمایید
            </p>
          </div>

          {/* Video Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {videoData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleVideoTabChange(idx)}
                className={`p-3 rounded-xl border text-right transition-all cursor-pointer flex flex-col gap-1 ${
                  activeVideoTab === idx
                    ? 'bg-blue-600/15 border-blue-500 text-white shadow-md'
                    : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className={`font-semibold ${activeVideoTab === idx ? 'text-blue-400' : 'text-slate-500'}`}>
                    {item.badge}
                  </span>
                  <Play className={`w-3 h-3 ${activeVideoTab === idx ? 'text-blue-400 fill-current' : 'text-slate-600'}`} />
                </div>
                <div className="font-bold text-xs truncate text-white">
                  {item.title}
                </div>
              </button>
            ))}
          </div>

          {/* Video Player Container */}
          <div className="relative aspect-video bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              key={videoData[activeVideoTab].url}
              controls
              playsInline
              preload="metadata"
              poster={videoData[activeVideoTab].poster || undefined}
              className="w-full h-full object-cover bg-black"
            >
              <source src={videoData[activeVideoTab].url} type="video/mp4" />
              مرورگر شما از پخش ویدئو پشتیبانی نمی‌کند.
            </video>
          </div>

          {/* Current Video Info */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-white block">
                {videoData[activeVideoTab].title}
              </span>
              <p className="text-slate-400 text-[11px]">
                {videoData[activeVideoTab].description}
              </p>
            </div>
            <a
              href={CONSULTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto shrink-0 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>مشاوره و ارزیابی</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUE PILLARS - JOB OFFER & BUSINESS ENTRY (Item 5) */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold text-blue-400 mb-2">ستون‌های بنیادین ارزش</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              دو محور اصلی خدمات گُل اِرن بین‌الملل
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              طراحی شده برای متخصصان ارشد فناوری و بنیان‌گذاران محصولات دیجیتال
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CARD 1: JOB OFFER READINESS */}
            <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  ۱. برنامه آمادگی جاب‌آفر بین‌المللی
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  برای متخصصان با‌تجربه‌ای که قصد ساخت رزومه استاندارد جهانی، رفع شکاف‌های فنی، تمرین مصاحبه بین‌المللی و اقدام هدفمند برای فرصت‌های ریموت یا با اسپانسرشیپ را دارند.
                </p>

                <div className="space-y-3 mb-8 bg-slate-950 p-5 rounded-2xl border border-slate-800/80">
                  <div className="text-xs font-bold text-blue-400 mb-2">شامل ۳ مسیر تخصصی متناسب با سطح شما:</div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">مسیر ۱ (Readiness):</strong> آمادگی شغلی و بهینه‌سازی پروفایل و نمونه‌کار
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">مسیر ۲ (Job Offer):</strong> استراتژی جست‌وجو، شبکه‌سازی و اقدام هدفمند
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">مسیر ۳ (Migration):</strong> همراهی در فرآیند استخدامی و ویزای کاری مرتبط
                  </div>
                </div>
              </div>

              <a 
                href={JOBOFFER_PROGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md cursor-pointer group"
              >
                <span>بررسی برنامه آمادگی جاب‌آفر</span>
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100" />
              </a>
            </div>

            {/* CARD 2: BUSINESS MARKET ENTRY */}
            <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/30">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  ۲. برنامه ورود کسب‌وکار به مارکت بین‌المللی
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  ویژه بنیان‌گذاران فناوری، محصولات دیجیتال و AI که می‌خواهند قبل از هزینه کرد سنگین، تقاضای واقعی بازار هدف، رفتار مشتری و ارزش پیشنهادی خود را اعتبارسنجی کنند.
                </p>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>تحلیل بازار هدف، رقبای منطقه‌ای و تقاضای واقعی مشتری</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>اعتبارسنجی ارزش پیشنهادی (Value Proposition) با تست‌های کم‌هزینه</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>طراحی نقشه راه Go-To-Market و برنامه اجرایی مرحله‌به‌مرحله</span>
                  </li>
                </ul>
              </div>

              <a 
                href={INTERNATIONALIZATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm border border-slate-700 cursor-pointer group"
              >
                <span>بررسی برنامه بازار بین‌المللی</span>
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRIVATE BOOTCAMPS (Item 6) */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold text-blue-400 mb-2">توسعه مهارت و ارتقای استاندارد</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              ۳. بوت‌کمپ‌های خصوصی مسیر مهاجرت کاری
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              برنامه ۶ تا ۸ ماهه کاملاً آنلاین و اختصاصی بر پایه پروژه‌های واقعی و منتورینگ یک‌به‌یک
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
              <Zap className="w-7 h-7 text-blue-400 mb-3" />
              <h4 className="font-bold text-white text-sm">۱۲ پروژه ۲ هفته‌ای</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                تمرکز بر پروژه‌های واقعی و شبیه‌سازی کامل محیط کار بین‌المللی بدون اتلاف وقت روی تئوری‌های تکراری.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
              <UserCheck className="w-7 h-7 text-blue-400 mb-3" />
              <h4 className="font-bold text-white text-sm">۲۴ جلسه منتورینگ ۱-به-۱</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                جلسات آنلاین خصوصی با منتورهای ارشد صنعت برای رفع اشکال فنی، تحلیل کد و استانداردسازی خروجی‌ها.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
              <Cpu className="w-7 h-7 text-blue-400 mb-3" />
              <h4 className="font-bold text-white text-sm">ارزیابی اولیه با AI</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                تسک ارزیابی سطح بدون دخالت انسانی برای تنظیم دقیق مسیر یادگیری و شناسایی دقیق شکاف مهارتی.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
              <Laptop className="w-7 h-7 text-blue-400 mb-3" />
              <h4 className="font-bold text-white text-sm">مرخصی و Career Switch</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                امکان استفاده از ۲ ماه وقفه بدون افت کیفیت و یک‌بار تغییر مسیر شغلی کاملاً رایگان در طول دوره.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href={BOOTCAMP_ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer group"
            >
              <span>درخواست ارزیابی بوت‌کمپ‌های خصوصی</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: ARMENIA HUB & WORK HISTORY REVIEW (Item 5) */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* ARMENIA HUB */}
            <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 flex flex-col justify-between">
              <div>
                <Globe2 className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  ۴. هاب کاری و زندگی ارمنستان (Armenia Hub)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  پایگاه استراتژیک برای دورکاران و متخصصان IT جهت دسترسی بدون محدودیت به اینترنت، سیستم بانکی بین‌المللی و تعامل با بازارهای جهانی.
                </p>
                <div className="space-y-2.5 mb-6 text-xs text-slate-400">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span><strong>پکیج Coworking:</strong> فضای کار اختصاصی با اینترنت پایدار و زیرساخت حرفه‌ای</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span><strong>پکیج Work + Live:</strong> کار و اقامت یکپارچه بدون درگیری با پیش‌پرداخت‌های سنگین</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span><strong>پشتیبانی کسب‌وکار:</strong> مشاوره در ثبت شرکت، امور مالیاتی و افتتاح حساب بانکی</span>
                  </div>
                </div>
              </div>
              <a 
                href={ARMENIA_HUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 cursor-pointer pt-2 group"
              >
                <span>مشاهده و بررسی هاب ارمنستان</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
              </a>
            </div>

            {/* WORK HISTORY REVIEW */}
            <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 flex flex-col justify-between">
              <div>
                <FileText className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  ۵. تأییدیه و ارزیابی سابقه کار (روش جدید)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  سامان‌دهی و استخراج شواهد واقعی از سوابق کاری، پروژه‌های فریلنسری و فعالیت‌های دورکاری گذشته جهت ارائه‌پذیری به کارفرمایان و مراتب ارزیابی جهانی (کاملاً اخلاقی و بدون مدارک غیرواقعی).
                </p>
                <div className="space-y-2.5 mb-6 text-xs text-slate-400">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>بررسی کدهای اجرا شده، قراردادها و مستندات فنی واقعی</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>ساخت پورتفولیوی مستند و گزارش فنی از تجربیات گذشته</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>ارائه بسته شواهد مستند جهت مصاحبه و احراز صلاحیت شغلی</span>
                  </div>
                </div>
              </div>
              <a 
                href={WORK_EXP_CERT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 cursor-pointer pt-2 group"
              >
                <span>بررسی تایید سابقه کار ویژه مهاجرت</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ONBOARDING FLOW */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold text-blue-400 mb-2">مسیر شفاف همکاری</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              فرایند ۶ مرحله‌ای همکاری در گُل اِرن
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              از ارزیابی اولیه تا همراهی مستمر در اجرای برنامه
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { step: '۱', title: 'تکمیل فرم ارزیابی', desc: 'ثبت اطلاعات و شرایط' },
              { step: '۲', title: 'بررسی تناسب پرونده', desc: 'غربالگری امکان‌پذیری' },
              { step: '۳', title: 'جلسه آنلاین آشنایی', desc: 'شفاف‌سازی انتظارات' },
              { step: '۴', title: 'ارزیابی ۳۶۰ درجه', desc: 'سنجش مهارت و بازار' },
              { step: '۵', title: 'ارائه پروپوزال اختصاصی', desc: 'زمان‌بندی و هزینه مکتوب' },
              { step: '۶', title: 'شروع اجرا و بازبینی', desc: 'همراهی گام‌به‌گام' },
            ].map((st, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl text-center space-y-2 hover:border-blue-500/40 transition-colors">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto shadow-md">
                  {st.step}
                </div>
                <h4 className="font-bold text-xs text-slate-200">{st.title}</h4>
                <p className="text-[11px] text-slate-500">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: EXPANDED FAQ ACCORDION (10 Comprehensive Q&As) */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold text-blue-400 mb-2">پاسخ‌های شفاف و بهینه‌سازی‌شده برای جست‌وجو (AEO)</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              پرسش‌های متداول (FAQ)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              پاسخ‌های کامل و شفاف به سؤالات اصلی متقاضیان بین‌المللی
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-white text-xs sm:text-sm cursor-pointer focus-visible:outline-none focus-visible:bg-slate-800"
                  aria-expanded={faqOpen === idx}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-200 ${faqOpen === idx ? 'rotate-180' : ''}`} />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 bg-slate-900/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA BANNER (Item 3) */}
      <section className="py-24 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400">
            <span>آغاز فرآیند ارزیابی</span>
            <span aria-hidden="true">·</span>
            <span>بدون تعهد مالی اولیه</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            اول مسیر را روشن کنیم؛ بعد درباره خدمات تصمیم بگیریم.
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            برای شروع، درخواست مشاوره و ارزیابی اولیه را ثبت کنید تا پرونده شما توسط تیم فنی گُل اِرن (Goal-Earn) بررسی شود.
          </p>

          <div className="pt-2">
            <a
              href={CONSULTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-10 py-4 rounded-xl shadow-2xl shadow-blue-600/40 transition-all cursor-pointer group"
            >
              <span>مشاوره و ارزیابی</span>
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>

          <div className="text-[11px] text-slate-400 pt-2">
            دامنه رسمی: <span className="font-mono text-slate-300">goalearnint.com</span> · تمامی حقوق برای گُل اِرن بین‌المللی محفوظ است.
          </div>
        </div>
      </section>

      {/* FLOATING SUPPORT & CONTACT BUTTON */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href={CONTACT_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-blue-600/50 flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer font-bold text-xs sm:text-sm border border-blue-400/40 group"
          aria-label="تماس با ما و پشتیبانی گُل اِرن"
        >
          <MessageCircleQuestion className="w-5 h-5 transition-transform group-hover:rotate-12" />
          <span>پشتیبانی و تماس با ما</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
        </a>
      </div>

    </div>
  );
};
