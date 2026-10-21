import React from 'react';
import { ServiceDetail } from '../types/index';
import { ArrowLeft, ShieldAlert, CheckCircle2, ChevronRight, HelpCircle, ArrowUpLeft } from 'lucide-react';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onOpenAssessment: (category: string) => void;
  onOpenConsultation: () => void;
  onNavigateHome: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onOpenAssessment,
  onOpenConsultation,
  onNavigateHome,
}) => {
  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <nav aria-label="راهنمای مسیر" className="flex items-center gap-2 text-xs text-stone-500">
          <button
            onClick={onNavigateHome}
            className="hover:text-stone-900 transition-colors cursor-pointer"
          >
            صفحه اصلی
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 rotate-180" />
          <span>خدمات اختصاصی</span>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 rotate-180" />
          <span className="font-semibold text-stone-900">{service.shortTitle}</span>
        </nav>

        {/* Hero of Service */}
        <div className="space-y-6 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <span className="text-amber-800 font-sans font-bold">GOALEARN PROGRAM</span>
            <span aria-hidden="true">·</span>
            <span>{service.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 tracking-tight leading-[1.25] text-balance">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
            {service.summary}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenAssessment(service.id)}
              className="cursor-pointer bg-stone-950 hover:bg-stone-800 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>درخواست ارزیابی اولیه برای این مسیر</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="cursor-pointer bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 text-sm font-medium px-5 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>درخواست جلسه آشنایی</span>
            </button>
          </div>
        </div>

        {/* Ideal Candidates Section */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 space-y-6">
          <h2 className="text-xl font-bold text-stone-950">
            این برنامه برای چه شرایطی مناسب است؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.idealFor.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3.5 rounded-lg bg-stone-50 border border-stone-100 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modules & Key Focus Areas */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-stone-950">
              محورها و موارد قابل بررسی در این برنامه
            </h2>
            <p className="text-sm text-stone-600">
              سرفصل‌ها و دامنه نهایی پس از سنجش اولیه و بر اساس نیاز مشخص هر پرونده تنظیم می‌شوند:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.keyModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-stone-200/90 space-y-3"
              >
                <div className="font-sans font-bold text-amber-800 text-sm">
                  <span dir="ltr">0{idx + 1}.</span>
                </div>
                <h3 className="text-base font-bold text-stone-900">
                  {module.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency & Ethical Boundaries Box */}
        <div className="p-8 rounded-2xl bg-stone-900 text-stone-100 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>شفافیت و حدود مسئولیت قانونی و اخلاقی</span>
          </div>

          <h3 className="text-lg font-bold text-white">
            نکات ضروری پیش از هرگونه اقدام در این مسیر
          </h3>

          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
            {service.transparencyNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                <span className="leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service-Specific FAQs */}
        {service.faq && service.faq.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
              <HelpCircle className="w-4 h-4 text-amber-800" />
              <span>پرسش‌های ویژه این برنامه</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-950">
              پاسخ به سؤالات متداول
            </h2>
            <div className="space-y-3">
              {service.faq.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-xl border border-stone-200 space-y-2">
                  <h4 className="text-sm font-bold text-stone-900">{item.question}</h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Bottom Card */}
        <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-right">
            <h3 className="text-base sm:text-lg font-bold text-amber-950">
              آیا این برنامه با وضعیت فعلی شما همخوانی دارد؟
            </h3>
            <p className="text-xs sm:text-sm text-amber-900/80">
              فرم اولیه را تکمیل کنید تا شرایط شما با دقت بررسی شود.
            </p>
          </div>
          <button
            onClick={() => onOpenAssessment(service.id)}
            className="cursor-pointer bg-stone-950 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 shrink-0"
          >
            <span>شروع ارزیابی شرایط</span>
            <ArrowUpLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
