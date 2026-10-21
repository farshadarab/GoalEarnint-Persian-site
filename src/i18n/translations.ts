export type Language = 'fa' | 'en' | 'hy';

export interface TranslationStructure {
  dir: 'rtl' | 'ltr';
  hero: {
    badge: string;
    h1: string;
    sub: string;
    ctaPrimary: string;
    microTrust: string[];
  };
  marquee: {
    title: string;
    items: Array<{ name: string; category: string }>;
  };
  pillars: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSub: string;
    jobOffer: {
      badge: string;
      title: string;
      desc: string;
      tracks: string[];
      cta: string;
    };
    market: {
      badge: string;
      title: string;
      desc: string;
      tracks: string[];
      cta: string;
    };
  };
  video: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSub: string;
    videos: Array<{
      id: number;
      title: string;
      description: string;
      badge: string;
    }>;
  };
  bootcamps: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSub: string;
    features: Array<{
      title: string;
      desc: string;
    }>;
    cta: string;
  };
  grid: {
    armenia: {
      badge: string;
      title: string;
      desc: string;
      bullets: string[];
      cta: string;
    };
    workExp: {
      badge: string;
      title: string;
      desc: string;
      bullets: string[];
      cta: string;
    };
  };
  flow: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSub: string;
    steps: Array<{
      step: string;
      title: string;
      desc: string;
    }>;
  };
  faq: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSub: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  ctaBanner: {
    title: string;
    desc: string;
    button: string;
    subText: string;
  };
  support: {
    buttonText: string;
  };
  languageName: {
    fa: string;
    en: string;
    hy: string;
  };
}

export const translations: Record<Language, TranslationStructure> = {
  fa: {
    dir: 'rtl',
    hero: {
      badge: 'پلتفرم بین‌المللی ارزیابی، آماده‌سازی و استقرار تکنولوژی',
      h1: 'مسیر اختصاصی ورود به بازار کار و تجارت جهانی تکنولوژی',
      sub: 'گُل اِرن بین‌المللی (Goal-Earn) با تلفیق ارزیابی ۳۶۰ درجه، منتورینگ ۱-به-۱ تخصصی و زیرساخت‌های حقوقی و مالی واقعی، متخصصان و کسب‌وکارهای فناوری را برای فعالیت ۱۰۰٪ آنلاین در مقیاس جهانی آماده می‌سازد.',
      ctaPrimary: 'مشاوره و ارزیابی',
      microTrust: [
        'ارزیابی تخصصی بدون ادعای کاذب',
        'منتورینگ ۱-به-۱ با منتورهای ارشد',
        'زیرساخت قانونی کار و حساب بین‌المللی'
      ]
    },
    marquee: {
      title: 'حوزه‌ها و تکنولوژی‌های تحت پوشش در برنامه‌های گُل اِرن:',
      items: [
        { name: 'React & Next.js', category: 'معماری فرانت‌اند' },
        { name: 'AI & LLMs', category: 'هوش مصنوعی و یادگیری ماشین' },
        { name: 'Python & PyTorch', category: 'سیستم‌های داده و AI' },
        { name: 'Node.js & TypeScript', category: 'مهندسی بک‌اند' },
        { name: 'Cloud & DevOps (AWS / GCP)', category: 'زیرساخت ابری' },
        { name: 'Docker & Kubernetes', category: 'کلاود نیتیو' },
        { name: 'Product Management', category: 'استراتژی محصول' },
        { name: 'PostgreSQL & Distributed DBs', category: 'مهندسی داده' },
        { name: 'Remote Engineering Workflow', category: 'تیم‌های جهانی' },
        { name: 'International GTM Strategy', category: 'توسعه بین‌المللی' }
      ]
    },
    pillars: {
      sectionBadge: 'خدمات پایه و تخصصی گُل اِرن',
      sectionTitle: '۱. دو ستون اصلی ارزش‌آفرینی بین‌المللی',
      sectionSub: 'خدمات گُل اِرن بر پایه دو نیاز کلیدی متخصصان فنی و صاحبان کسب‌وکارهای فناوری طراحی شده است',
      jobOffer: {
        badge: 'مسیر اول: متخصصان فنی و مهندسان',
        title: 'برنامه آمادگی جاب‌آفر بین‌المللی',
        desc: 'آماده‌سازی عمیق و همه‌جانبه مهندسان نرم‌افزار، مدیران محصول و متخصصان AI برای دریافت جاب‌آفر ریموت یا مهاجرت کاری قانونی.',
        tracks: [
          'مسیر ۱ (Readiness): استانداردسازی رزومه، پورتفولیو، گیت‌هاب و پروفایل لینکدین طبق شیوه‌نامه‌های کارفرمایان غربی',
          'مسیر ۲ (Job Offer Strategy): استراتژی اپلای هدفمند، تمرین مصاحبه‌های رفتارشناسی و الگوریتمی، و شبکه‌سازی مؤثر',
          'مسیر ۳ (Work-Based Migration): همراهی در فرآیند استخدامی، مذاکره قرارداد و فرایند حقوقی ویزای کاری'
        ],
        cta: 'بررسی برنامه آمادگی جاب‌آفر'
      },
      market: {
        badge: 'مسیر دوم: بنیان‌گذاران و صاحبان محصول',
        title: 'برنامه ورود کسب‌وکار به بازار بین‌المللی',
        desc: 'توسعه فرامرزی استارتاپ‌ها، محصولات نرم‌افزاری و راه‌کارهای AI با تمرکز بر اعتبارسنجی ارزش پیشنهادی و ورود به بازار (GTM).',
        tracks: [
          'تحلیل بازار هدف، رقبای منطقه‌ای و تقاضای واقعی مشتری در مارکت بین‌المللی',
          'اعتبارسنجی ارزش پیشنهادی (Value Proposition) با تست‌های کم‌هزینه و بازخورد واقعی کاربران',
          'طراحی نقشه راه Go-To-Market و برنامه اجرایی مرحله‌به‌مرحله جهت جذب مشتری جهانی'
        ],
        cta: 'بررسی برنامه بازار بین‌المللی'
      }
    },
    video: {
      sectionBadge: 'شفافیت و معرفی ویدئویی',
      sectionTitle: '۲. آشنایی با الگوی اختصاصی گُل اِرن (Goal-Earn)',
      sectionSub: 'ویدئوهای راهنما جهت آشنایی دقیق با فلسفه، روش‌شناسی و خدمات عملیاتی مجموعه',
      videos: [
        {
          id: 0,
          title: 'معرفی جامع گُل اِرن (ویدئوی اصلی)',
          description: 'بررسی جامع فلسفه، مدل ارزیابی ۳۶۰ درجه و خدمات اختصاصی گُل اِرن بین‌الملل',
          badge: 'ویدئوی اصلی'
        },
        {
          id: 1,
          title: 'راهنمای برنامه آمادگی جاب‌آفر',
          description: 'آشنایی با ۳ مسیر تخصصی Readiness، Job Offer Strategy و همراهی مهاجرت کاری',
          badge: 'مسیر شغلی'
        },
        {
          id: 2,
          title: 'نقشه راه مارکت اینترنشنال',
          description: 'استراتژی توسعه فرامرزی کسب‌وکارها، اعتبارسنجی فرضیه‌ها و Go-To-Market',
          badge: 'کسب‌وکار'
        },
        {
          id: 3,
          title: 'هاب کار و زندگی در ارمنستان',
          description: 'بررسی زیرساخت‌های واقعی کار، اینترنت نامحدود، حساب بانکی و استقرار دورکاری در ایروان',
          badge: 'هاب ارمنستان'
        }
      ]
    },
    bootcamps: {
      sectionBadge: 'توسعه مهارت و ارتقای استاندارد',
      sectionTitle: '۳. بوت‌کمپ‌های خصوصی مسیر مهاجرت کاری',
      sectionSub: 'برنامه ۶ تا ۸ ماهه کاملاً آنلاین و اختصاصی بر پایه پروژه‌های واقعی و منتورینگ یک‌به‌یک',
      features: [
        {
          title: '۱۲ پروژه ۲ هفته‌ای',
          desc: 'تمرکز بر پروژه‌های واقعی و شبیه‌سازی کامل محیط کار بین‌المللی بدون اتلاف وقت روی تئوری‌های تکراری.'
        },
        {
          title: '۲۴ جلسه منتورینگ ۱-به-۱',
          desc: 'جلسات آنلاین خصوصی با منتورهای ارشد صنعت برای رفع اشکال فنی، تحلیل کد و استانداردسازی خروجی‌ها.'
        },
        {
          title: 'ارزیابی اولیه با AI',
          desc: 'تسک ارزیابی سطح بدون دخالت انسانی برای تنظیم دقیق مسیر یادگیری و شناسایی دقیق شکاف مهارتی.'
        },
        {
          title: 'انعطاف و تغییر مسیر',
          desc: 'امکان ۲ ماه وقفه (Pause) بدون افت کیفیت و امکان ۱ بار تغییر مسیر شغلی (Career Switch) رایگان در طول دوره.'
        }
      ],
      cta: 'ارزیابی و درخواست بوت‌کمپ خصوصی'
    },
    grid: {
      armenia: {
        badge: 'زیرساخت فیزیکی و مالی',
        title: '۴. هاب کار و زندگی در ارمنستان (Armenia Hub)',
        desc: 'محیطی واقعی و استراتژیک برای دورکاران فناوری و بنیان‌گذاران جهت حل مشکلات پرداخت بین‌المللی و اینترنت نامحدود.',
        bullets: [
          'پکیج‌های فضای کار اشتراکی (Coworking Space) مدرن در مرکز ایروان',
          'اقامت، سیم‌کارت رسمی و دسترسی به اینترنت پرسرعت بدون محدودیت',
          'افتتاح حساب بانکی بین‌المللی معتبر و ثبت شرکت فناوری در ارمنستان'
        ],
        cta: 'مشاهده جزئیات هاب ارمنستان'
      },
      workExp: {
        badge: 'مستندسازی اخلاقی و فنی',
        title: '۵. ارزیابی و تأیید سابقه کار (Work Experience Certificate)',
        desc: 'بررسی دقیق کدهای گذشته، پروژه‌های فریلنسری و دورکاری جهت تبدیل سوابق شما به مستندات رسمی قابل دفاع در ارزیابی بین‌المللی.',
        bullets: [
          'بازبینی دقیق کدها، کامیتی‌های گیت‌هاب و اسناد پروژه‌های واقعی شما',
          'تدوین گزارش ارزیابی فنی و توصیه نامه حرفه‌ای از سوی گُل اِرن بین‌الملل',
          'کاملاً اخلاقی، واقعی و شفاف (بدون صادر کردن مدارک جعلی یا غیرقانونی)'
        ],
        cta: 'بررسی تاییدیه سابقه کار'
      }
    },
    flow: {
      sectionBadge: 'مسیر شفاف همکاری',
      sectionTitle: '۶. فرایند ۶ مرحله‌ای آنبوردینگ در گُل اِرن',
      sectionSub: 'از اولین قدم ثبت درخواست تا اجرای گام به گام نقشه راه اختصاصی شما',
      steps: [
        { step: '۰۱', title: 'تکمیل فرم ارزیابی', desc: 'ورود به برگه اختصاصی و ثبت اطلاعات فنی، سوابق و اهداف بین‌المللی' },
        { step: '۰۲', title: 'غربالگری اولیه پرونده', desc: 'بررسی سوابق شما توسط تیم فنی جهت سنجش تناسب اولیه با برنامه‌ها' },
        { step: '۰۳', title: 'جلسه آنلاین معارفه', desc: 'گفتگوی مستقیم ۳۰ دقیقه‌ای برای پاسخ به سوالات اولیه و تبیین چشم‌انداز' },
        { step: '۰۴', title: 'ارزیابی ۳۶۰ درجه', desc: 'تحلیل دقیق سطح زبان، مهارت‌های سخت، نرم، پورتفولیو و گیت‌هاب' },
        { step: '۰۵', title: 'تدوین پروپوزال اختصاصی', desc: 'ارائه سند جامع شامل زمان‌بندی دقیق، هزینه‌ها و تعهدات طرفین' },
        { step: '۰۶', title: 'آغاز فاز اجرای برنامه', desc: 'شروع جلسات ۱-به-۱ منتورینگ، انجام پروژه‌ها و پیگیری برنامه‌ها' }
      ]
    },
    faq: {
      sectionBadge: 'پاسخ‌های صریح و شفاف (AEO Optimized)',
      sectionTitle: '۷. پرسش‌های متداول (FAQ)',
      sectionSub: 'پاسخ مستقیم و ۵۰ کلمه‌ای به ابهامات رایج متقاضیان و کسب‌وکارها',
      items: [
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
      ]
    },
    ctaBanner: {
      title: 'آماده ارزیابی سنجیده مسیر بین‌المللی خود هستید؟',
      desc: 'بدون وعده‌های پوچ و ادعاهای غیرواقعی، ظرفیت و تناسب فنی خود را برای حضور در بازار فناوری جهانی بسنجید.',
      button: 'ورود به فرم مشاوره و ارزیابی',
      subText: 'پاسخ‌گویی اولیه و بررسی پرونده ظرف کمتر از ۲۴ ساعت کاری انجام خواهد شد.'
    },
    support: {
      buttonText: 'پشتیبانی و تماس با ما'
    },
    languageName: {
      fa: 'فارسی',
      en: 'English',
      hy: 'Հայերեն'
    }
  },
  en: {
    dir: 'ltr',
    hero: {
      badge: 'International Tech Assessment, Readiness & Relocation Platform',
      h1: 'Your Dedicated Pathway to the Global Tech Market & Remote Careers',
      sub: 'Goal-Earn International combines 360-degree assessment, 1-on-1 expert mentoring, and legal/financial infrastructure to empower tech professionals and startups to operate 100% online at a global scale.',
      ctaPrimary: 'Consultation & Assessment',
      microTrust: [
        'Rigorous Tech Assessment Without False Claims',
        '1-on-1 Mentoring by Senior Industry Engineers',
        'Legal Remote Work & Banking Infrastructure'
      ]
    },
    marquee: {
      title: 'Technologies & Domains Supported in Goal-Earn Programs:',
      items: [
        { name: 'React & Next.js', category: 'Frontend Architecture' },
        { name: 'AI & LLMs', category: 'Artificial Intelligence & ML' },
        { name: 'Python & PyTorch', category: 'Data & AI Systems' },
        { name: 'Node.js & TypeScript', category: 'Backend Engineering' },
        { name: 'Cloud & DevOps (AWS / GCP)', category: 'Cloud Infrastructure' },
        { name: 'Docker & Kubernetes', category: 'Cloud Native' },
        { name: 'Product Management', category: 'Product Strategy' },
        { name: 'PostgreSQL & Distributed DBs', category: 'Data Engineering' },
        { name: 'Remote Engineering Workflow', category: 'Global Teams' },
        { name: 'International GTM Strategy', category: 'Global Expansion' }
      ]
    },
    pillars: {
      sectionBadge: 'Goal-Earn Core Services',
      sectionTitle: '1. Two Main Pillars of International Value Creation',
      sectionSub: 'Engineered specifically for the growth needs of tech professionals and digital product founders',
      jobOffer: {
        badge: 'Track 1: Tech Professionals & Engineers',
        title: 'International Job Offer Readiness Program',
        desc: 'Comprehensive preparation for software engineers, product managers, and AI specialists to secure remote international offers or work-based relocation.',
        tracks: [
          'Track 1 (Readiness): Resume, portfolio, GitHub, and LinkedIn standardization matching Western hiring benchmarks',
          'Track 2 (Job Offer Strategy): Targeted application strategies, behavioral & technical mock interviews, and effective networking',
          'Track 3 (Work-Based Migration): Full guidance through hiring offers, contract negotiations, and employment visa processes'
        ],
        cta: 'Explore Job Offer Readiness Program'
      },
      market: {
        badge: 'Track 2: Founders & Product Owners',
        title: 'International Market Entry Program',
        desc: 'Cross-border growth for tech startups, SaaS products, and AI solutions with emphasis on value proposition validation and GTM execution.',
        tracks: [
          'In-depth target market research, regional competitor analysis, and demand validation',
          'Value Proposition testing with cost-effective validation experiments and real user feedback',
          'Go-To-Market roadmap design and step-by-step execution plan for acquiring global clients'
        ],
        cta: 'Explore Internationalization Program'
      }
    },
    video: {
      sectionBadge: 'Transparency & Video Introduction',
      sectionTitle: '2. Discover the Goal-Earn Proprietary Model',
      sectionSub: 'Video guides detailing our methodology, philosophy, and practical operational services',
      videos: [
        {
          id: 0,
          title: 'Goal-Earn Comprehensive Overview (Main Video)',
          description: 'Detailed breakdown of Goal-Earn International philosophy, 360-degree evaluation model, and services',
          badge: 'Main Overview'
        },
        {
          id: 1,
          title: 'Job Offer Readiness Guide',
          description: 'Introduction to Readiness, Job Offer Strategy, and Work Migration tracks',
          badge: 'Career Track'
        },
        {
          id: 2,
          title: 'International Market Roadmap',
          description: 'Cross-border expansion strategy, hypothesis validation, and GTM execution for startups',
          badge: 'Business Track'
        },
        {
          id: 3,
          title: 'Armenia Work & Live Hub Guide',
          description: 'Overview of work infrastructure, unlimited internet, international banking, and remote hub setup in Yerevan',
          badge: 'Armenia Hub'
        }
      ]
    },
    bootcamps: {
      sectionBadge: 'Skill Development & Standard Elevation',
      sectionTitle: '3. Private Work Relocation Bootcamps',
      sectionSub: '6 to 8-month 100% online personalized program based on real projects and 1-on-1 mentorship',
      features: [
        {
          title: '12 Bi-weekly Real Projects',
          desc: 'Simulating actual global team environments with hands-on deliverables without wasting time on theory.'
        },
        {
          title: '24 1-on-1 Mentorship Sessions',
          desc: 'Private online sessions with senior engineering leaders to review code, refine architecture, and elevate standards.'
        },
        {
          title: 'AI-Powered Baseline Assessment',
          desc: 'Objective automated skills evaluation to customize learning trajectories and pinpoint technical gaps.'
        },
        {
          title: 'Flexibility & Career Pivot',
          desc: 'Includes up to 2 months pause option without quality loss and 1 free career switch pathway during the program.'
        }
      ],
      cta: 'Apply for Private Bootcamp Assessment'
    },
    grid: {
      armenia: {
        badge: 'Physical & Financial Infrastructure',
        title: '4. Armenia Work & Live Hub',
        desc: 'A strategic gateway for tech remoters and founders to resolve global payment hurdles and secure high-speed unlimited connectivity.',
        bullets: [
          'Modern coworking space packages in central Yerevan',
          'Relocation support, official SIM card, and high-speed uncapped internet access',
          'Valid international bank account opening and tech company registration in Armenia'
        ],
        cta: 'View Armenia Hub Details'
      },
      workExp: {
        badge: 'Ethical & Technical Verification',
        title: '5. Work Experience Certificate & Review',
        desc: 'Audit and formal documentation of past codebase contributions, freelance work, and remote projects into verifiable proof for global evaluation.',
        bullets: [
          'Rigorous code audits, GitHub commit reviews, and project archive verifications',
          'Technical assessment report and formal reference letters issued by Goal-Earn International',
          '100% ethical, authentic, and transparent (no fake credentials or unlawful promises)'
        ],
        cta: 'Explore Experience Verification'
      }
    },
    flow: {
      sectionBadge: 'Transparent Collaboration Path',
      sectionTitle: '6. 6-Step Onboarding Process',
      sectionSub: 'From initial application to step-by-step execution of your custom roadmap',
      steps: [
        { step: '01', title: 'Assessment Form', desc: 'Complete the specialized form with your technical background and international goals' },
        { step: '02', title: 'Initial Screening', desc: 'Evaluation of your profile by our technical team to measure alignment' },
        { step: '03', title: 'Introductory Call', desc: 'Direct 30-minute online session to address initial questions and align expectations' },
        { step: '04', title: '360° Tech Evaluation', desc: 'In-depth audit of language proficiency, hard & soft skills, portfolio, and code' },
        { step: '05', title: 'Tailored Proposal', desc: 'Comprehensive document outlining exact timeline, scope, costs, and commitments' },
        { step: '06', title: 'Program Execution', desc: 'Initiation of 1-on-1 mentoring, project sprints, and active execution' }
      ]
    },
    faq: {
      sectionBadge: 'Direct & Transparent Answers (AEO Optimized)',
      sectionTitle: '7. Frequently Asked Questions (FAQ)',
      sectionSub: 'Concise, direct 50-word answer snippets optimized for search and AI answer engines',
      items: [
        {
          q: 'What pathways are included in the Goal-Earn International Job Offer Readiness Program?',
          a: 'The program includes 3 distinct tracks: Track 1 (Readiness) for international resume, portfolio, and GitHub standardization; Track 2 (Job Offer Strategy) for targeted applications and mock interviews; and Track 3 (Migration) for hiring process and employment visa guidance.'
        },
        {
          q: 'How are services delivered at Goal-Earn International?',
          a: 'All services are 100% online and tailored. The process begins with your assessment application, initial profile screening, introductory session, 360-degree tech evaluation, and a transparent proposal detailing scope, timeline, and investment.'
        },
        {
          q: 'How do Goal-Earn private bootcamps differ from general tech courses?',
          a: 'Goal-Earn bootcamps are 6 to 8-month 1-on-1 online programs featuring AI baseline testing, 12 bi-weekly real projects, 24 private mentoring sessions, up to 2 months pause option, and 1 free career switch.'
        },
        {
          q: 'What does the Work Experience Certificate & Review service entail?',
          a: 'Goal-Earn audits your real past project code, freelance work, and remote commit history to build a structured, verifiable, and legally defensible technical documentation portfolio for international employers without fake credentials.'
        },
        {
          q: 'What facilities does the Armenia Work & Live Hub provide?',
          a: 'Armenia Hub offers a strategic gateway for IT remoters featuring central Yerevan coworking spaces, high-speed uncapped internet, official residency support, corporate registration, and international banking access.'
        },
        {
          q: 'Who should enroll in the International Market Entry Program?',
          a: 'This program is tailored for tech founders and digital product owners seeking to validate cross-border market demand, perform competitor analysis, validate value propositions, and execute structured Go-To-Market strategies.'
        },
        {
          q: 'Does Goal-Earn guarantee job offers or visas?',
          a: 'No. Goal-Earn guarantees the highest standard of preparation, portfolio audit, and structured execution. Final hiring decisions rest with international employers; 100% placement guarantees are scientifically and legally invalid.'
        },
        {
          q: 'How are consulting fees and program investments calculated?',
          a: 'Investments vary based on technical level, past experience, and selected services. All pricing is fully transparent and detailed in your custom proposal following the 360-degree assessment prior to contract signing.'
        },
        {
          q: 'Can engineers based in Iran access remote international services?',
          a: 'Yes. All mentorship, assessment infrastructure, project management, and senior engineer sessions are designed 100% online to accommodate remote engineers seamlessly.'
        },
        {
          q: 'How can I start the initial assessment process?',
          a: 'Simply click any "Consultation & Assessment" button to open the dedicated application form. After submission, our technical team will review your profile within 24 business hours.'
        }
      ]
    },
    ctaBanner: {
      title: 'Ready for a Realistic Assessment of Your Global Tech Career?',
      desc: 'Evaluate your true technical alignment for international remote roles and global markets without exaggerated claims.',
      button: 'Start Consultation & Assessment',
      subText: 'Initial profile review and response delivered within 24 business hours.'
    },
    support: {
      buttonText: 'Support & Contact'
    },
    languageName: {
      fa: 'فارسی',
      en: 'English',
      hy: 'Հայերեն'
    }
  },
  hy: {
    dir: 'ltr',
    hero: {
      badge: 'Տեխնոլոգիական գնահատման, պատրաստվածության և տեղափոխման միջազգային հարթակ',
      h1: 'Ձեր մասնագիտական ուղին դեպի տեխնոլոգիական համաշխարհային շուկա',
      sub: 'Goal-Earn International-ը համադրում է 360 աստիճանի տեխնիկական գնահատումը, 1-ը-1-ի վրա անհատական մենթորությունը և իրավական/ֆինանսական ենթակառուցվածքները՝ ապահովելով 100% հեռավար աշխատանք գլոբալ մակարդակում:',
      ctaPrimary: 'Խորհրդատվություն և Գնահատում',
      microTrust: [
        'Ճշգրիտ գնահատում առանց կեղծ խոստումների',
        '1-ը-1-ի վրա մենթորություն ավագ ինժեներների հետ',
        'Օրինական հեռավար աշխատանք և բանկային հաշիվ'
      ]
    },
    marquee: {
      title: 'Goal-Earn ծրագրերում աջակցվող տեխնոլոգիաները և ոլորտները.',
      items: [
        { name: 'React & Next.js', category: 'Frontend Ճարտարապետություն' },
        { name: 'AI & LLMs', category: 'Արհեստական Բանականություն' },
        { name: 'Python & PyTorch', category: 'Տվյալներ և AI Համակարգեր' },
        { name: 'Node.js & TypeScript', category: 'Backend Ճարտարագիտություն' },
        { name: 'Cloud & DevOps (AWS / GCP)', category: 'Ամպային Ենթակառուցվածք' },
        { name: 'Docker & Kubernetes', category: 'Cloud Native' },
        { name: 'Product Management', category: 'Ապրանքի Ստրատեգիա' },
        { name: 'PostgreSQL & Distributed DBs', category: 'Տվյալների Ճարտարագիտություն' },
        { name: 'Remote Engineering Workflow', category: 'Գլոբալ Թիմեր' },
        { name: 'International GTM Strategy', category: 'Միջազգային Զարգացում' }
      ]
    },
    pillars: {
      sectionBadge: 'Goal-Earn Հիմնական Ծառայությունները',
      sectionTitle: '1. Միջազգային արժեքի ստեղծման երկու հիմնական սյուները',
      sectionSub: 'Մշակված է հատուկ տեխնիկական մասնագետների և տեխնոլոգիական հիմնադիրների համար',
      jobOffer: {
        badge: 'Ուղղություն 1. Տեխնիկական մասնագետներ և ինժեներներ',
        title: 'Միջազգային աշխատանքի առաջարկի պատրաստման ծրագիր',
        desc: 'Խորացված պատրաստություն ծրագրավորողների, ապրանքի մենեջերների և AI մասնագետների համար՝ հեռավար աշխատանքի կամ տեղափոխման համար:',
        tracks: [
          'Ուղղություն 1 (Readiness). Ռեզյումեի, պորտֆոլիոյի և LinkedIn-ի ստանդարտացում արևմտյան չափանիշներով',
          'Ուղղություն 2 (Job Offer Strategy). Նպատակային դիմումների ստրատեգիա, հարցազրույցների փորձարկում և ցանցային կապեր',
          'Ուղղություն 3 (Work-Based Migration). Աջակցություն աշխատանքի ընդունման, պայմանագրերի և աշխատանքային վիզաների հարցում'
        ],
        cta: 'Ուսումնասիրել Job Offer Ծրագիրը'
      },
      market: {
        badge: 'Ուղղություն 2. Հիմնադիրներ և Ապրանքի Սեփականատերեր',
        title: 'Միջազգային շուկա դուրս գալու ծրագիր',
        desc: 'Ստարտափների և AI լուծումների միջսահմանային աճ՝ շուկայական պահանջարկի և GTM ռազմավարության ստուգմամբ:',
        tracks: [
          'Նպատակային շուկայի վերլուծություն, տարածաշրջանային մրցակիցներ և իրական պահանջարկ',
          'Արժեքային առաջարկի (Value Proposition) ստուգում ցածր ծախսատար թեստերով և իրական օգտատերերի կարծիքներով',
          'Go-To-Market քարտեզի մշակում և քայլ առ քայլ իրականացում գլոբալ հաճախորդներ ներգրավելու համար'
        ],
        cta: 'Ուսումնասիրել Միջազգայնացման Ծրագիրը'
      }
    },
    video: {
      sectionBadge: 'Թափանցիկություն և Տեսանյութեր',
      sectionTitle: '2. Ծանոթացեք Goal-Earn-ի հայեցակարգին',
      sectionSub: 'Տեսաուղեցույցներ՝ մեր մեթոդաբանությանը և գործնական ծառայություններին ծանոթանալու համար',
      videos: [
        {
          id: 0,
          title: 'Goal-Earn Ընդհանուր Ակնարկ (Հիմնական Տեսանյութ)',
          description: 'Goal-Earn International-ի փիլիսոփայության, 360 աստիճանի գնահատման և ծառայությունների մանրամասն ներկայացում',
          badge: 'Հիմնական Տեսանյութ'
        },
        {
          id: 1,
          title: 'Job Offer Պատրաստվածության Ուղեցույց',
          description: 'Ծանոթություն Readiness, Job Offer Strategy և Միգրացիոն ուղղություններին',
          badge: 'Կարիերայի Ուղի'
        },
        {
          id: 2,
          title: 'Միջազգային Շուկայի Քարտեզ',
          description: 'Միջսահմանային զարգացման ստրատեգիա և GTM իրականացում ստարտափների համար',
          badge: 'Բիզնես Ուղի'
        },
        {
          id: 3,
          title: 'Հայաստանի Աշխատանքային և Կյանքի Հաբ',
          description: 'Անսահմանափակ ինտերնետի, բանկային հաշիվների և Երևանում հեռավար աշխատանքի ենթակառուցվածքներ',
          badge: 'Հայաստանի Հաբ'
        }
      ]
    },
    bootcamps: {
      sectionBadge: 'Հմտությունների Զարգացում',
      sectionTitle: '3. Անհատական Բութքեմփեր Միգրացիոն Ուղղությամբ',
      sectionSub: '6-ից 8 ամսյա 100% առցանց անհատական ծրագիր՝ իրական նախագծերի և 1-ը-1-ի մենթորության հիման վրա',
      features: [
        {
          title: '12 Երկշաբաթյա Իրական Նախագծեր',
          desc: 'Կենտրոնացում իրական նախագծերի վրա՝ առանց տեսական կրկնությունների վրա ժամանակ կորցնելու:'
        },
        {
          title: '24 1-ը-1-ի Մենթորական Հանդիպումներ',
          desc: 'Անհատական առցանց հանդիպումներ ավագ ինժեներների հետ՝ կոդի վերլուծության և ստանդարտացման համար:'
        },
        {
          title: 'AI Գնահատում',
          desc: 'Հմտությունների օբյեկտիվ գնահատում AI-ի միջոցով՝ ուսուցման ճշգրիտ ուղին կարգավորելու համար:'
        },
        {
          title: 'Ճկունություն և Ուղղության Փոփոխություն',
          desc: 'Մինչև 2 ամիս դադարի (Pause) հնարավորություն և 1 անվճար կարիերայի ուղղության փոփոխություն:'
        }
      ],
      cta: 'Դիմել Անհատական Բութքեմփի Գնահատման Համար'
    },
    grid: {
      armenia: {
        badge: 'Ֆիզիկական և Ֆինանսական Ենթակառուցվածք',
        title: '4. Հայաստանի Աշխատանքային և Կյանքի Հաբ (Armenia Hub)',
        desc: 'Ռազմավարական միջավայր IT հեռավար աշխատողների համար՝ միջազգային վճարումների և ինտերնետի հարցերը լուծելու համար:',
        bullets: [
          'Ժամանակակից համատեղ աշխատանքային տարածքներ (Coworking) Երևանի կենտրոնում',
          'Կացություն, պաշտոնական SIM քարտ և անսահմանափակ արագագործ ինտերնետ',
          'Միջազգային բանկային հաշվի բացում և ՏՏ ընկերության գրանցում Հայաստանում'
        ],
        cta: 'Տեսնել Հայաստանի Հաբի Մանրամասները'
      },
      workExp: {
        badge: 'Էթիկական և Տեխնիկական Վավերացում',
        title: '5. Աշխատանքային Փորձի Գնահատում և Վավերացում',
        desc: 'Անցյալի աշխատանքների, ֆրիլանս նախագծերի և կոդի ուսումնասիրում՝ միջազգային չափանիշներով պաշտոնական փաստաթղթավորման համար:',
        bullets: [
          'Կոդի, GitHub commit-ների և իրական նախագծերի մանրամասն ուսումնասիրություն',
          'Տեխնիկական գնահատման զեկույց և պաշտոնական երաշխավորագիր Goal-Earn International-ի կողմից',
          '100% էթիկական, իրական և թափանցիկ (առանց կեղծ փաստաթղթերի)'
        ],
        cta: 'Ուսումնասիրել Փորձի Վավերացումը'
      }
    },
    flow: {
      sectionBadge: 'Թափանցիկ Համագործակցության Ուղի',
      sectionTitle: '6. 6-Քայլանի Ընդունման Գործընթաց',
      sectionSub: 'Առաջին հայտից մինչև անհատական ծրագրի քայլ առ քայլ իրականացում',
      steps: [
        { step: '01', title: 'Գնահատման Հայտ', desc: 'Լրացրեք հայտադիմումը ձեր տեխնիկական փորձով և նպատակներով' },
        { step: '02', title: 'Նախնական Ընտրություն', desc: 'Ձեր տվյալների ուսումնասիրություն մեր տեխնիկական թիմի կողմից' },
        { step: '03', title: 'Ծանոթության Հանդիպում', desc: 'Direct 30-րոպեանոց առցանց հանդիպում հարցերին պատասխանելու համար' },
        { step: '04', title: '360° Գնահատում', desc: 'Լեզվի, տեխնիկական և soft skills-ի, պորտֆոլիոյի խորացված վերլուծություն' },
        { step: '05', title: 'Անհատական Առաջարկ', desc: 'Մանրամասն փաստաթուղթ՝ ժամանակացույցով, ծախսերով և պարտավորություններով' },
        { step: '06', title: 'Ծրագրի Մեկնարկ', desc: '1-ը-1-ի մենթորության և նախագծերի իրականացման մեկնարկ' }
      ]
    },
    faq: {
      sectionBadge: 'Հստակ և Թափանցիկ Պատասխաններ (AEO Optimized)',
      sectionTitle: '7. Հաճախ Տրվող Հարցեր (FAQ)',
      sectionSub: 'Ուղիղ պատասխաններ հաճախ տրվող հարցերին',
      items: [
        {
          q: 'Ի՞նչ ուղղություններ է ներառում Goal-Earn International Job Offer ծրագիրը:',
          a: 'Ծրագիրը ներառում է 3 ուղղություն. Ուղղություն 1 (Readiness)՝ ռեզյումեի և պորտֆոլիոյի ստանդարտացում, Ուղղություն 2 (Job Offer Strategy)՝ նպատակային դիմումներ և հարցազրույցների փորձարկում, և Ուղղություն 3 (Migration)՝ աշխատանքային վիզայի աջակցություն:'
        },
        {
          q: 'Ինչպե՞ս են մատուցվում ծառայությունները Goal-Earn-ում:',
          a: 'Բոլոր ծառայությունները 100% առցանց են և անհատական: Գործընթացը սկսվում է հայտից, նախնական ուսումնասիրությունից, ծանոթության հանդիպումից, 360 աստիճանի գնահատումից և թափանցիկ առաջարկից:'
        },
        {
          q: 'Ինչո՞վ են տարբերվում Goal-Earn-ի անհատական բութքեմփերը ընդհանուր դասընթացներից:',
          a: 'Goal-Earn բութքեմփերը 6-ից 8-ամսյա 1-ը-1-ի առցանց ծրագրեր են՝ AI գնահատմամբ, 12 իրական նախագծերով, 24 անհատական մենթորական հանդիպումներով և 2 ամիս դադարի հնարավորությամբ:'
        },
        {
          q: 'Ի՞նչ է ենթադրում Աշխատանքային Փորձի Վավերացման ծառայությունը:',
          a: 'Goal-Earn-ը ուսումնասիրում է ձեր իրական անցյալի կոդը, ֆրիլանս նախագծերը և GitHub commit-ները՝ միջազգային գործատուների համար պաշտոնական տեխնիկական փաստաթղթավորում ստեղծելու համար:'
        },
        {
          q: 'Ի՞նչ հնարավորություններ է ընձեռում Հայաստանի Հաբը (Armenia Hub):',
          a: 'Հայաստանի Հաբը առաջարկում է coworking տարածքներ Երևանի կենտրոնում, անսահմանափակ արագագործ ինտերնետ, կացության աջակցություն, ընկերության գրանցում և միջազգային բանկային հաշիվներ:'
        },
        {
          q: 'Ո՞ւմ համար է նախատեսված Միջազգային Շուկա Դուրս Գալու Ծրագիրը:',
          a: 'Այս ծրագիրը նախատեսված է տեխնոլոգիական հիմնադիրների և թվային ապրանքների սեփականատերերի համար, ովքեր ցանկանում են ստուգել միջազգային շուկայի պահանջարկը և իրականացնել GTM ռազմավարություն:'
        },
        {
          q: 'Արդյո՞ք Goal-Earn-ը տալիս է աշխատանքի կամ վիզայի երաշխիք:',
          a: 'Ոչ: Goal-Earn-ը երաշխավորում է պատրաստվածության և պորտֆոլիոյի ամենաբարձր որակը: Վերջնական աշխատանքի ընդունման որոշումը կայացնում է արտասահմանյան գործատուն:'
        },
        {
          q: 'Ինչպե՞ս են հաշվարկվում ծառայությունների արժեքները:',
          a: 'Արժեքները կախված են տեխնիկական մակարդակից, փորձից և ընտրված ծառայություններից: Բոլոր գները թափանցիկ կերպով ներկայացվում են անհատական առաջարկում 360 աստիճանի գնահատումից հետո:'
        },
        {
          q: 'Կարո՞ղ են արդյոք հեռավար ինժեներները օգտվել ծառայություններից:',
          a: 'Այո: Բոլոր մենթորական հանդիպումները, գնահատումները և նախագծերի կառավարումը նախագծված են 100% առցանց:'
        },
        {
          q: 'Ինչպե՞ս կարող եմ սկսել նախնական գնահատման գործընթացը:',
          a: 'Պարզապես սեղմեք «Խորհրդատվություն և Գնահատում» կոճակներից որևէ մեկը՝ հայտադիմումը լրացնելու համար: Ձեր հայտը կուսումնասիրվի 24 աշխատանքային ժամվա ընթացքում:'
        }
      ]
    },
    ctaBanner: {
      title: 'Պատրա՞ստ եք Ձեր Միջազգային Կարիերայի Իրական Գնահատմանը',
      desc: 'Գնահատեք ձեր իրական տեխնիկական համապատասխանությունը գլոբալ տեխնոլոգիական շուկային առանց չափազանցված խոստումների:',
      button: 'Սկսել Խորհրդատվություն և Գնահատում',
      subText: 'Նախնական ուսումնասիրությունը և պատասխանը կտրամադրվեն 24 աշխատանքային ժամվա ընթացքում:'
    },
    support: {
      buttonText: 'Աջակցություն և Կապ'
    },
    languageName: {
      fa: 'فارسی',
      en: 'English',
      hy: 'Հայերեն'
    }
  }
};
