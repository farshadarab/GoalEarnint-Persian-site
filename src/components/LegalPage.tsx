import React from 'react';
import { ChevronRight, ShieldCheck, Scale } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigateHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigateHome }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-right">
        {/* Breadcrumb */}
        <nav aria-label="راهنمای مسیر" className="flex items-center gap-2 text-xs text-stone-500">
          <button onClick={onNavigateHome} className="hover:text-stone-900 cursor-pointer">
            صفحه اصلی
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 rotate-180" />
          <span className="font-semibold text-stone-900">
            {isPrivacy ? 'سیاست حفظ حریم خصوصی' : 'شرایط استفاده از خدمات'}
          </span>
        </nav>

        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            {isPrivacy ? (
              <ShieldCheck className="w-4 h-4 text-amber-800" />
            ) : (
              <Scale className="w-4 h-4 text-amber-800" />
            )}
            <span>اسناد حقوقی و تعهدات رسمی</span>
          </div>

          <h1 className="text-3xl font-extrabold text-stone-950 tracking-tight">
            {isPrivacy ? 'سیاست حفظ حریم خصوصی' : 'شرایط و ضوابط استفاده از خدمات'}
          </h1>

          <p className="text-xs text-stone-500">
            آخرین به‌روزرسانی: مهرماه ۱۴۰۳ · وب‌سایت بین‌المللی GoalEarn
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 space-y-8 text-sm text-stone-700 leading-relaxed">
          {isPrivacy ? (
            <>
              <section className="space-y-3">
                <h2 className="text-base font-bold text-stone-900">۱. داده‌های جمع‌آوری‌شده و هدف آن</h2>
                <p>
                  اطلاعاتی که در فرم‌های ارزیابی اولیه، درخواست جلسه آشنایی یا تماس دریافت می‌شوند (شامل نام، ایمیل، شماره تماس اختیاری، سوابق و اهداف شغلی) منحصراً به منظور سنجش تناسب اولیه و ارتباط بعدی جهت تنظیم پیشنهاد اختصاصی استفاده می‌شوند.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-stone-900">۲. عدم واگذاری و فروش داده‌ها</h2>
                <p>
                  گل‌اِرن متعهد است که به هیچ عنوان داده‌های هویتی، شغلی یا اطلاعات تماس متقاضیان را در اختیار اشخاص ثالث، شرکت‌های تبلیغاتی یا واسطه‌ها قرار ندهد.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-stone-900">۳. مدارک و شواهد حساس سابقه کار</h2>
                <p>
                  مدارک و اطلاعات حساس سوابق کاری در فرم‌های عمومی وب‌سایت دریافت نمی‌شوند. در صورت توافق بر سر خدمت بررسی سابقه کار، انتقال اسناد صرفاً از کانال‌های امن پس از رضایت صریح متقاضی صورت خواهد پذیرفت.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-stone-900">۴. حق حذف و بازبینی اطلاعات</h2>
                <p>
                  شما در هر زمان می‌توانید با ارسال پیام، درخواست حذف کامل سوابق ارزیابی اولیه خود را از سیستم ثبت نمایید.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-3">
                <h2 className="text-base font-bold text-stone-900">۱. ماهیت خدمات اختصاصی</h2>
                <p>
                  کلیه خدمات گل‌اِرن بر اساس ارزیابی و مشاوره خصوصی طراحی می‌شوند. ثبت درخواست اولیه یا برگزاری جلسه آشنایی به‌منزله تعهد متقابل جهت شروع همکاری، پذیرش حتمی پرونده یا شروع خدمات اجرایی نیست.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-stone-900">۲. عدم تضمین نتیجه در امور خارج از اختیار</h2>
                <p>
                  دریافت پیشنهاد شغلی (Job Offer)، صدور ویزا، اجازه کار یا اعطای اقامت در حیطه اختیارات انحصاری کارفرمایان و دولت‌های مربوطه است. گل‌اِرن هیچ‌گونه تضمین قطعی در این موارد ارائه نمی‌دهد و تعهد ما منحصر به کیفیت آمادگی، صحت ممیزی مدارک و اجرای مفاد قرارداد مکتوب است.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-stone-900">۳. ممنوعیت جعل یا تقلب در سوابق کاری</h2>
                <p>
                  گل‌اِرن پیرو چارچوب‌های سخت‌گیرانه اخلاقی و بین‌المللی است. هرگونه تقاضا برای تولید مدارک غیرواقعی، گواهی جعلی سابقه یا تحریف سوابق پذیرفته نخواهد شد. خدمت بررسی سابقه کار صرفاً محدود به سامان‌دهی و ارائه شواهد تجربی حقیقی است.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-stone-900">۴. تغییرات قوانین و دامنه‌های اجرایی</h2>
                <p>
                  قوانین مربوط به کشورها، بازارها و مراجع بین‌المللی به طور مداوم در حال تحول است. شرایط پیشنهادی در جلسات بر مبنای آخرین اطلاعات روز بررسی می‌گردند.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
