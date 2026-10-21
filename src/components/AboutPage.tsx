import React from 'react';
import { ArrowLeft, Compass, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

interface AboutPageProps {
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenAssessment,
  onOpenConsultation,
  onNavigateHome,
}) => {
  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 text-right">
        {/* Breadcrumb */}
        <nav aria-label="راهنمای مسیر" className="flex items-center gap-2 text-xs text-stone-500">
          <button onClick={onNavigateHome} className="hover:text-stone-900 cursor-pointer">
            صفحه اصلی
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 rotate-180" />
          <span className="font-semibold text-stone-900">درباره گل‌اِرن بین‌المللی</span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <span className="text-amber-800 font-sans font-bold">GOALEARN INTERNATIONAL</span>
            <span aria-hidden="true">·</span>
            <span>هویت و ارزش‌های بنیادی</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight leading-tight">
            همراهی ساختارمند برای تصمیم‌های بزرگ حرفه‌ای
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            گل‌اِرن یک آژانس عمومی مهاجرت یا فروشگاه دوره‌های آموزشی نیست. ما ارائه‌دهنده برنامه‌ها و خدمات خصوصی و اختصاصی برای توسعه مسیر شغلی بین‌المللی، ورود به بازارهای جهانی، هاب کار و زندگی در ارمنستان و بررسی و مستندسازی اخلاقی سوابق کاری هستیم.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 space-y-6">
          <h2 className="text-xl font-bold text-stone-950">چرا گل‌اِرن متولد شد؟</h2>
          <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
            <p>
              در سال‌های اخیر، بازار پر از وعده‌های وسوسه‌انگیز اما غیرواقعی شده است: «جاب‌آفر تضمینی در ۳۰ روز»، «مهاجرت بدون ریسک»، «پکیج طلایی اقامت». در دنیای واقعی کار و تجارت بین‌الملل، هیچ میانبر تضمینی وجود ندارد.
            </p>
            <p>
              هر فرد توانمندی‌ها، سطح زبان، بودجه، سابقه کاری و محدودیت‌های زمانی منحصر‌به‌فردی دارد. رویکرد ما در گل‌اِرن این است که ابتدا پرونده و وضعیت شما را با دقت و بدون تعصب ارزیابی کنیم. اگر ببینیم زمینه معقولی برای پیشرفت وجود دارد، برنامه‌ای شفاف با گام‌های عملی پیشنهاد می‌دهیم؛ و اگر شرایط فعلی شما با هدف همخوانی نداشته باشد، صریحاً این موضوع را بیان می‌کنیم تا از هدررفت منابع جلوگیری شود.
            </p>
          </div>
        </div>

        {/* What we do and what we don't */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
            <div className="text-sm font-bold text-stone-950 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>آنچه ما انجام می‌دهیم</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <li>• ارزیابی دقیق و واقع‌بینانه سوابق و اهداف</li>
              <li>• استراتژی سفارشی آمادگی برای فرصت‌های بین‌المللی</li>
              <li>• سامان‌دهی و مستندسازی تجربیات و پروژه‌های حقیقی</li>
              <li>• اعتبارسنجی فرضیه‌های ورود کسب‌وکار به بازار مقصد</li>
              <li>• ارائه راهنمایی‌های عملی کار و زندگی در ارمنستان</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
            <div className="text-sm font-bold text-stone-950 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>مرزهای اخلاقی و خطوط قرمز ما</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <li>• به هیچ وجه سابقه کار، مدارک یا شرکت جعلی ساخته نمی‌شود.</li>
              <li>• استخدام تضمینی یا دریافت قطعی جاب‌آفر وعده داده نمی‌شود.</li>
              <li>• وعده صدور تضمینی ویزا یا اقامت که در اختیار دولت‌هاست داده نمی‌شود.</li>
              <li>• خدمات عمومی بدون ارزیابی و غربالگری فروخته نمی‌شود.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-stone-900 text-stone-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-right">
            <h3 className="text-lg font-bold text-white">آماده‌اید شرایط خود را ارزیابی کنید؟</h3>
            <p className="text-xs text-stone-300">
              یک ارزیابی شفاف و واقع‌بینانه اولین گام برای هر تصمیم مهم بین‌المللی است.
            </p>
          </div>
          <button
            onClick={onOpenAssessment}
            className="bg-white hover:bg-stone-100 text-stone-950 text-xs font-semibold px-5 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>درخواست ارزیابی اولیه</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
