import React from 'react';
import { PROCESS_STEPS } from '../data/servicesData';
import { ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-right mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <span>فرآیند اجرایی</span>
            <span aria-hidden="true">·</span>
            <span>شفافیت در مراحل</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            از ارزیابی تا اقدام، مرحله‌به‌مرحله
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            هیچ پیشنهاد اجرایی بدون شناخت اولیه ارائه نمی‌شود. ترتیب و دامنه مراحل با توجه به نوع خدمت و شرایط هر پرونده تنظیم خواهد شد.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((stepItem) => (
            <div
              key={stepItem.step}
              className="bg-white p-7 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-stone-400 transition-colors"
            >
              <div className="space-y-3">
                <div className="text-amber-800 font-sans font-extrabold text-2xl tracking-tight">
                  {stepItem.step}
                </div>
                <h3 className="text-base font-bold text-stone-900">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="pt-2 text-[11px] text-stone-400 border-t border-stone-100">
                گام رسمی فرآیند همکاری
              </div>
            </div>
          ))}
        </div>

        {/* Notice Disclaimer */}
        <div className="mt-10 p-4 rounded-lg bg-stone-200/60 border border-stone-300/60 flex items-center gap-3 text-xs text-stone-600">
          <ShieldCheck className="w-4 h-4 text-stone-700 shrink-0" />
          <span>
            ثبت درخواست یا برگزاری جلسه به‌معنای تعهد به ارائه خدمت، پذیرش پرونده یا تضمین نتیجه نیست.
          </span>
        </div>
      </div>
    </section>
  );
};
