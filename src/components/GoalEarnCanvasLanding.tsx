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
import { translations, Language } from '../i18n/translations';

interface GoalEarnCanvasLandingProps {
  onNavigateToAssessment?: () => void;
}

export const GoalEarnCanvasLanding: React.FC<GoalEarnCanvasLandingProps> = () => {
  const [lang, setLang] = useState<Language>('fa');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeVideoTab, setActiveVideoTab] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const t = translations[lang];

  // URLs as requested by user
  const CONTACT_PAGE_URL = "http://goalearnint.com/where-we-are/";
  const CONSULTING_URL = "https://goalearnint.com/int-consulting/";
  const JOBOFFER_PROGRAM_URL = "https://goalearnint.com/joboffer-readiness-program/";
  const INTERNATIONALIZATION_URL = "https://goalearnint.com/internationalization/";
  const ARMENIA_HUB_URL = "https://goalearnint.com/armenia-professional-path-fa/";
  const WORK_EXP_CERT_URL = "https://goalearnint.com/work-experience-certificate/";
  const BOOTCAMP_ASSESSMENT_URL = "https://goalearnint.com/int-bootcamp-assessment/";

  // Video media files provided by user
  const videoMedia = [
    {
      url: 'https://goalearnint.com/wp-content/uploads/2026/10/GoalEarn-overview-and-services.mp4',
      poster: 'https://goalearnint.com/wp-content/uploads/2026/10/Goalearn-video-cover-main-page-scaled.webp',
    },
    {
      url: 'https://goalearnint.com/wp-content/uploads/2026/10/راهنمای-برنامه-آمادگی-جاب-آفر-گل-ارن-1.mp4',
      poster: '',
    },
    {
      url: 'https://goalearnint.com/wp-content/uploads/2026/10/نقشه_راه_کاریابی_جهانی_.mp4',
      poster: '',
    },
    {
      url: 'https://goalearnint.com/wp-content/uploads/2026/10/armenia-professional-path-fa-GoalEarn-video.mp4',
      poster: '',
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

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    setIsLangMenuOpen(false);
  };

  return (
    <div 
      dir={t.dir} 
      className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white relative"
    >
      
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
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-snug lg:leading-tight mb-6 tracking-tight text-balance">
            {t.hero.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 text-balance">
            {t.hero.sub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={CONSULTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowLeft className={`w-4 h-4 transition-transform ${t.dir === 'rtl' ? 'group-hover:-translate-x-1' : 'rotate-180 group-hover:translate-x-1'}`} />
            </a>
            <a 
              href="#video-intro" 
              className="w-full sm:w-auto bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm px-8 py-4 rounded-xl border border-slate-800 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 text-blue-400 fill-current" />
              <span>{lang === 'fa' ? 'مشاهده ویدئوی معرفی' : lang === 'en' ? 'Watch Overview Video' : 'Դիտել Ներկայացման Տեսանյութը'}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 border-t border-slate-800/60 pt-6">
            {t.hero.microTrust.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH TICKER / HORIZONTAL SCROLLING SECTION */}
      <section className="py-6 bg-slate-900/90 border-b border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.marquee.title}</span>
          </div>
          <span className="text-[11px] text-blue-400/90 font-mono hidden sm:inline-block">Tech & AI Stack · Global Standards</span>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 items-center w-max animate-marquee">
            {/* First batch */}
            {t.marquee.items.map((badge, idx) => (
              <div
                key={`badge-1-${idx}`}
                className="flex items-center gap-3 bg-slate-950/80 border border-slate-800/90 rounded-xl px-4 py-2.5 text-xs shrink-0 hover:border-blue-500/40 transition-colors shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="font-bold text-white font-mono text-xs">{badge.name}</span>
                <span className={`text-[10px] text-slate-400 ${t.dir === 'rtl' ? 'border-r border-slate-800 pr-2' : 'border-l border-slate-800 pl-2'}`}>
                  {badge.category}
                </span>
              </div>
            ))}
            {/* Repeated batch */}
            {t.marquee.items.map((badge, idx) => (
              <div
                key={`badge-2-${idx}`}
                className="flex items-center gap-3 bg-slate-950/80 border border-slate-800/90 rounded-xl px-4 py-2.5 text-xs shrink-0 hover:border-blue-500/40 transition-colors shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="font-bold text-white font-mono text-xs">{badge.name}</span>
                <span className={`text-[10px] text-slate-400 ${t.dir === 'rtl' ? 'border-r border-slate-800 pr-2' : 'border-l border-slate-800 pl-2'}`}>
                  {badge.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OFFICIAL VIDEO INTRO SECTION */}
      <section id="video-intro" className="py-20 bg-slate-900 border-b border-slate-800 scroll-mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-semibold text-blue-400 mb-2">{t.video.sectionBadge}</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {t.video.sectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.video.sectionSub}
            </p>
          </div>

          {/* Video Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {t.video.videos.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleVideoTabChange(idx)}
                className={`p-3 rounded-xl border ${t.dir === 'rtl' ? 'text-right' : 'text-left'} transition-all cursor-pointer flex flex-col gap-1 ${
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
              key={videoMedia[activeVideoTab].url}
              controls
              playsInline
              preload="metadata"
              poster={videoMedia[activeVideoTab].poster || undefined}
              className="w-full h-full object-cover bg-black"
            >
              <source src={videoMedia[activeVideoTab].url} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>

          {/* Current Video Info */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-white block">
                {t.video.videos[activeVideoTab].title}
              </span>
              <p className="text-slate-400 text-[11px]">
                {t.video.videos[activeVideoTab].description}
              </p>
            </div>
            <a
              href={CONSULTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto shrink-0 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowLeft className={`w-3.5 h-3.5 ${t.dir === 'rtl' ? '' : 'rotate-180'}`} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUE PILLARS */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold text-blue-400 mb-2">{t.pillars.sectionBadge}</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {t.pillars.sectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.pillars.sectionSub}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CARD 1: JOB OFFER READINESS */}
            <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-blue-400 mb-2">{t.pillars.jobOffer.badge}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t.pillars.jobOffer.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {t.pillars.jobOffer.desc}
                </p>

                <div className="space-y-3 mb-8 bg-slate-950 p-5 rounded-2xl border border-slate-800/80">
                  {t.pillars.jobOffer.tracks.map((tr, i) => (
                    <div key={i} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{tr}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={JOBOFFER_PROGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md cursor-pointer group"
              >
                <span>{t.pillars.jobOffer.cta}</span>
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100" />
              </a>
            </div>

            {/* CARD 2: BUSINESS MARKET ENTRY */}
            <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/30">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-indigo-400 mb-2">{t.pillars.market.badge}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t.pillars.market.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {t.pillars.market.desc}
                </p>

                <div className="space-y-3 mb-8 bg-slate-950 p-5 rounded-2xl border border-slate-800/80">
                  {t.pillars.market.tracks.map((tr, i) => (
                    <div key={i} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{tr}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={INTERNATIONALIZATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm border border-slate-700 cursor-pointer group"
              >
                <span>{t.pillars.market.cta}</span>
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRIVATE BOOTCAMPS */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold text-blue-400 mb-2">{t.bootcamps.sectionBadge}</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {t.bootcamps.sectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.bootcamps.sectionSub}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {t.bootcamps.features.map((feat, i) => {
              const icons = [Zap, UserCheck, Cpu, Laptop];
              const IconComp = icons[i % icons.length];
              return (
                <div key={i} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                  <IconComp className="w-7 h-7 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white text-sm">{feat.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a 
              href={BOOTCAMP_ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer group"
            >
              <span>{t.bootcamps.cta}</span>
              <ArrowLeft className={`w-4 h-4 transition-transform ${t.dir === 'rtl' ? 'group-hover:-translate-x-1' : 'rotate-180 group-hover:translate-x-1'}`} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: ARMENIA HUB & WORK HISTORY REVIEW */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* ARMENIA HUB */}
            <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 flex flex-col justify-between">
              <div>
                <Globe2 className="w-8 h-8 text-blue-400 mb-4" />
                <div className="text-xs font-semibold text-blue-400 mb-2">{t.grid.armenia.badge}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {t.grid.armenia.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {t.grid.armenia.desc}
                </p>
                <div className="space-y-2.5 mb-6 text-xs text-slate-400">
                  {t.grid.armenia.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a 
                href={ARMENIA_HUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 cursor-pointer pt-2 group"
              >
                <span>{t.grid.armenia.cta}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
              </a>
            </div>

            {/* WORK HISTORY REVIEW */}
            <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 flex flex-col justify-between">
              <div>
                <FileText className="w-8 h-8 text-blue-400 mb-4" />
                <div className="text-xs font-semibold text-blue-400 mb-2">{t.grid.workExp.badge}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {t.grid.workExp.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {t.grid.workExp.desc}
                </p>
                <div className="space-y-2.5 mb-6 text-xs text-slate-400">
                  {t.grid.workExp.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a 
                href={WORK_EXP_CERT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 cursor-pointer pt-2 group"
              >
                <span>{t.grid.workExp.cta}</span>
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
            <div className="text-xs font-semibold text-blue-400 mb-2">{t.flow.sectionBadge}</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {t.flow.sectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.flow.sectionSub}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {t.flow.steps.map((st, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl text-center space-y-2 hover:border-blue-500/40 transition-colors">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto shadow-md">
                  {st.step}
                </div>
                <h4 className="font-bold text-xs text-slate-200">{st.title}</h4>
                <p className="text-[11px] text-slate-500 leading-tight">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: EXPANDED FAQ ACCORDION */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold text-blue-400 mb-2">{t.faq.sectionBadge}</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {t.faq.sectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.faq.sectionSub}
            </p>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className={`w-full ${t.dir === 'rtl' ? 'text-right' : 'text-left'} p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-white text-xs sm:text-sm cursor-pointer focus-visible:outline-none focus-visible:bg-slate-800`}
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

      {/* SECTION 8: FINAL CTA BANNER */}
      <section className="py-24 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {t.ctaBanner.title}
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t.ctaBanner.desc}
          </p>

          <div className="pt-2">
            <a
              href={CONSULTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-10 py-4 rounded-xl shadow-2xl shadow-blue-600/40 transition-all cursor-pointer group"
            >
              <span>{t.ctaBanner.button}</span>
              <ArrowLeft className={`w-5 h-5 transition-transform ${t.dir === 'rtl' ? 'group-hover:-translate-x-1' : 'rotate-180 group-hover:translate-x-1'}`} />
            </a>
          </div>

          <div className="text-[11px] text-slate-400 pt-2">
            {t.ctaBanner.subText}
          </div>
        </div>
      </section>

      {/* FLOATING SUPPORT & CONTACT BUTTON (Bottom Left Corner) */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href={CONTACT_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-blue-600/50 flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer font-bold text-xs sm:text-sm border border-blue-400/40 group"
          aria-label="Contact & Support"
        >
          <MessageCircleQuestion className="w-5 h-5 transition-transform group-hover:rotate-12" />
          <span>{t.support.buttonText}</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
        </a>
      </div>

      {/* FLOATING LANGUAGE SWITCHER (Bottom Right Corner) */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <button
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="bg-slate-900/90 hover:bg-slate-800 text-white px-4 py-3 rounded-full shadow-2xl shadow-slate-950/80 flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer font-bold text-xs sm:text-sm border border-slate-700/80 backdrop-blur-md"
            aria-label="تغییر زبان / Select Language / Ընտրել լեզուն"
          >
            <Globe2 className="w-5 h-5 text-blue-400" />
            <span className="uppercase tracking-wider font-mono text-xs">{lang.toUpperCase()}</span>
            <span className="text-slate-300 font-medium hidden sm:inline-block">({t.languageName[lang]})</span>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangMenuOpen && (
            <div className={`absolute bottom-14 ${t.dir === 'rtl' ? 'left-0 sm:right-0' : 'right-0'} w-44 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl p-2 space-y-1 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 z-50`}>
              <button
                onClick={() => handleLanguageChange('fa')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  lang === 'fa' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>🇮🇷 فارسی</span>
                {lang === 'fa' && <CheckCircle2 className="w-4 h-4 text-white" />}
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>🇬🇧 English</span>
                {lang === 'en' && <CheckCircle2 className="w-4 h-4 text-white" />}
              </button>
              <button
                onClick={() => handleLanguageChange('hy')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  lang === 'hy' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>🇦🇲 Հայերեն</span>
                {lang === 'hy' && <CheckCircle2 className="w-4 h-4 text-white" />}
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
