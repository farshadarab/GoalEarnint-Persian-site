import React from 'react';
import { Check, XCircle, AlertCircle, ArrowLeft } from 'lucide-react';

interface TrustSectionProps {
  onOpenAssessment: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenAssessment }) => {
  return (
    <section className="py-24 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section 1: Exclusivity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4 text-right">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
              <span>تفاوت رویکرد گل‌اِرن</span>
              <span aria-hidden="true">·</span>
              <span>شخصی‌سازی حقیقی</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight text-balance">
              «اختصاصی بودن» در عمل یعنی چه؟
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              بسیاری از خدمات در بازار تنها نام شخصی‌سازی دارند، اما در عمل یک پکیج از پیش آماده به همه متقاضیان پیشنهاد می‌شود. در گل‌اِرن فرآیند بر پایه واقعیت طراحی شده است.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-stone-200 space-y-2">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-800 shrink-0" />
                <span>ارزیابی متناسب با هدف</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                معیارهای بررسی بر اساس نوع خدمت و هدف مشخص شما تغییر می‌کنند؛ نه یک فرم ارزیابی یکسان.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200 space-y-2">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-800 shrink-0" />
                <span>دامنه روشن همکاری</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                دقیقاً مشخص می‌شود چه مواردی داخل دامنه خدمت هستند و چه موضوعاتی از حیطه مسئولیت خارج‌اند.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200 space-y-2">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-800 shrink-0" />
                <span>پیشنهاد بر اساس نیاز واقعی</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                همه متقاضیان به یک محصول یا خدمت ثابت هدایت نمی‌شوند؛ اولویت با اثربخشی برای پرونده شماست.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200 space-y-2">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-800 shrink-0" />
                <span>تصمیم‌گیری شفاف و مکتوب</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                هزینه‌ها، پیش‌نیازها، زمان‌بندی واقع‌بینانه و موانع احتمالی پیش از هر پرداخت بررسی می‌شوند.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Trust & Transparency Commitments */}
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <AlertCircle className="w-4 h-4" />
              <span>اصول اخلاقی و شفافیت حرفه‌ای</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              اعتماد با شفافیت ساخته می‌شود.
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              پیش از آغاز همکاری، انتظارات، مسئولیت‌ها، مراحل، هزینه و محدودیت‌ها را روشن می‌کنیم. اگر در بررسی اولیه مشخص شود خدمت ما با شرایط یا هدف تو تناسب ندارد، این موضوع صریحاً بیان خواهد شد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-800">
            <div className="space-y-2">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>تناسب پیش از فروش</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                اگر پرونده متقاضی دارای شانس موفقیت یا ارزش افزوده قابل‌قبول نباشد، پیشنهاد همکاری داده نمی‌شود.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>محدوده و مسئولیت روشن</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                هیچ ابهامی درباره وظایف گل‌اِرن و تعهدات شخص متقاضی باقی نمی‌ماند.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>عدم تضمین نتیجه خارج از کنترل</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                تصمیم کارفرمایان و مراجع قانونی ویزا در اختیار هیچ مشاور متعهدی نیست و ادعای خلاف آن غیرحرفه‌ای است.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800">
            <div className="flex items-center gap-3 text-xs text-stone-400">
              <XCircle className="w-4 h-4 text-stone-500" />
              <span>بدون ادعای ساختگی، بدون گواهی جعلی، بدون وعده تضمینی ویزا یا کار</span>
            </div>
            <button
              onClick={onOpenAssessment}
              className="cursor-pointer bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>درخواست بررسی و ارزیابی</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
