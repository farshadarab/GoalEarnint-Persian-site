import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles,
  Compass
} from 'lucide-react';
import { AssessmentFormData, ServiceCategory } from '../types/index';
import { validateAssessmentForm, getServiceCategoryLabel } from '../logic/assessment';

interface AssessmentPageProps {
  onNavigateHome: () => void;
}

export const AssessmentPage: React.FC<AssessmentPageProps> = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState<Partial<AssessmentFormData>>({
    fullName: '',
    email: '',
    phone: '',
    currentCountry: 'ایران',
    serviceCategory: 'work-migration',
    primaryGoal: '',
    targetTimeline: '۳ تا ۶ ماه آینده',
    currentRole: '',
    yearsOfExperience: '۳ تا ۵ سال',
    additionalInfo: '',
    agreedToPrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResult, setSuccessResult] = useState<{
    referenceId: string;
    submissionDate: string;
    sanitizedData: AssessmentFormData;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = validateAssessmentForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const submission = {
        referenceId: validation.referenceId!,
        submissionDate: validation.submissionDate!,
        sanitizedData: validation.sanitizedData!,
      };

      try {
        const existing = JSON.parse(localStorage.getItem('goalearn_assessments') || '[]');
        existing.unshift(submission);
        localStorage.setItem('goalearn_assessments', JSON.stringify(existing));
      } catch (err) {
        console.warn('LocalStorage save skipped', err);
      }

      setSuccessResult(submission);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 700);
  };

  const handleCopyCode = () => {
    if (successResult) {
      navigator.clipboard.writeText(successResult.referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Bar for Dedicated Assessment Canvas */}
      <div className="max-w-3xl mx-auto flex items-center justify-between border-b border-slate-800 pb-6 mb-10">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>بازگشت به صفحه اصلی گُل اِرن</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="font-black text-lg text-white font-sans tracking-tight">
            Goal-Earn<span className="text-blue-500">.</span>
          </span>
          <span className="text-xs text-slate-500 border-r border-slate-800 pr-2 mr-1">
            ارزیابی ۳۶۰ درجه
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {successResult ? (
          /* Success Screen */
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                درخواست ارزیابی ۳۶۰ درجه با موفقیت ثبت شد
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                اطلاعات شما جهت بررسی اولیه، غربالگری فنی و سنجش تناسب با دامنه‌های بین‌المللی ثبت شد. تیم فنی گُل اِرن ظرف ۲ تا ۳ روز کاری از طریق ایمیل با شما تماس خواهد گرفت.
              </p>
            </div>

            {/* Tracking Reference Code */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 max-w-md mx-auto text-right space-y-3">
              <div className="text-xs text-slate-400">کد رهگیری اختصاصی پرونده شما:</div>
              <div className="flex items-center justify-between font-mono font-bold text-sm text-white bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="tracking-widest text-blue-400">{successResult.referenceId}</span>
                <button
                  onClick={handleCopyCode}
                  className="p-1 text-slate-400 hover:text-white cursor-pointer"
                  title="کپی کد رهگیری"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-xs text-slate-400">
                مسیر انتخابی: <span className="text-slate-200">{getServiceCategoryLabel(successResult.sanitizedData.serviceCategory)}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onNavigateHome}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-colors cursor-pointer"
              >
                بازگشت به صفحه اصلی
              </button>
              <button
                onClick={() => {
                  setSuccessResult(null);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    currentCountry: 'ایران',
                    serviceCategory: 'work-migration',
                    primaryGoal: '',
                    targetTimeline: '۳ تا ۶ ماه آینده',
                    currentRole: '',
                    yearsOfExperience: '۳ تا ۵ سال',
                    additionalInfo: '',
                    agreedToPrivacy: false,
                  });
                }}
                className="w-full sm:w-auto border border-slate-800 hover:bg-slate-800 text-slate-300 font-medium text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
              >
                ثبت ارزیابی جدید
              </button>
            </div>
          </div>
        ) : (
          /* Assessment Form */
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800/60">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>غربالگری تخصصی و طراحی پروپوزال</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                برگه اختصاصی ارزیابی ۳۶۰ درجه گُل اِرن (Goal-Earn)
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                لطفاً اطلاعات زیر را با دقت تکمیل کنید. این ارزیابی اولیه کاملاً محرمانه است و هیچ‌گونه تعهد مالی یا وعده غیرواقعی ایجاد نمی‌کند.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Category */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-200">
                  مسیر یا خدمت موردنظر برای بررسی اولیه <span className="text-red-400">*</span>
                </label>
                <select
                  value={formData.serviceCategory}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceCategory: e.target.value as ServiceCategory })
                  }
                  className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="work-migration">۱. برنامه آمادگی جاب‌آفر بین‌المللی (Job Offer Strategy & Readiness)</option>
                  <option value="international-market-entry">۲. ورود کسب‌وکار به مارکت بین‌المللی (GTM & Market Validation)</option>
                  <option value="private-programs">۳. بوت‌کمپ‌های خصوصی مهاجرت کاری (۱۲ پروژه واقعی + ۲۴ جلسه منتورینگ)</option>
                  <option value="armenia-work-live">۴. هاب کار و زندگی ارمنستان (Coworking / Work + Live)</option>
                  <option value="work-experience-verification">۵. تأییدیه و ارزیابی شواهد سابقه کار (مستندسازی اخلاقی)</option>
                  <option value="not-sure">هنوز مطمئن نیستم / نیازمند راهنمایی تشخیصی</option>
                </select>
                {errors.serviceCategory && (
                  <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.serviceCategory}</span>
                  </p>
                )}
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-200">
                    نام و نام خانوادگی <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: نیما صادقی"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 text-xs sm:text-sm bg-slate-950 border rounded-xl text-white focus:outline-none focus:border-blue-500 ${
                      errors.fullName ? 'border-red-500/80' : 'border-slate-800'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-200">
                    آدرس ایمیل کاری یا اصلی <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    dir="ltr"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 text-xs sm:text-sm bg-slate-950 border rounded-xl text-white focus:outline-none focus:border-blue-500 text-left ${
                      errors.email ? 'border-red-500/80' : 'border-slate-800'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Current Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-200">
                    شماره تماس یا آیدی تلگرام (جهت هماهنگی)
                  </label>
                  <input
                    type="text"
                    dir="ltr"
                    placeholder="+98 912 ... یا @telegram"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 text-left"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-200">
                    کشور محل اقامت فعلی <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.currentCountry}
                    onChange={(e) => setFormData({ ...formData, currentCountry: e.target.value })}
                    className={`w-full px-4 py-3 text-xs sm:text-sm bg-slate-950 border rounded-xl text-white focus:outline-none focus:border-blue-500 ${
                      errors.currentCountry ? 'border-red-500/80' : 'border-slate-800'
                    }`}
                  />
                  {errors.currentCountry && (
                    <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.currentCountry}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Technical Role & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-200">
                    نقش شغلی یا زمینه تخصص فعلی
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: مهندس ارشد فرانت‌اند، مدیر محصول، مهندس یادگیری ماشین"
                    value={formData.currentRole}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-200">
                    میزان سابقه کار حرفه‌ای
                  </label>
                  <select
                    value={formData.yearsOfExperience}
                    onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="کمتر از ۲ سال">کمتر از ۲ سال (Junior)</option>
                    <option value="۲ تا ۵ سال">۲ تا ۵ سال (Mid-Level)</option>
                    <option value="۵ تا ۸ سال">۵ تا ۸ سال (Senior)</option>
                    <option value="بیش از ۸ سال">بیش از ۸ سال (Lead / Architect / Founder)</option>
                  </select>
                </div>
              </div>

              {/* Primary Goal */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-200">
                  شرح هدف اصلی و چالش فعلی شما <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="مختصری درباره هدف خود، چالش‌های فعلی در اپلای یا گسترش بازار و انتظارات خود از گُل اِرن بنویسید..."
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className={`w-full px-4 py-3 text-xs sm:text-sm bg-slate-950 border rounded-xl text-white focus:outline-none focus:border-blue-500 ${
                    errors.primaryGoal ? 'border-red-500/80' : 'border-slate-800'
                  }`}
                />
                {errors.primaryGoal && (
                  <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.primaryGoal}</span>
                  </p>
                )}
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-200">
                  بازه زمانی ترجیحی برای اقدام
                </label>
                <select
                  value={formData.targetTimeline}
                  onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                  className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="فوری (۱ تا ۳ ماه آینده)">فوری (۱ تا ۳ ماه آینده)</option>
                  <option value="۳ تا ۶ ماه آینده">۳ تا ۶ ماه آینده</option>
                  <option value="۶ تا ۱۲ ماه آینده">۶ تا ۱۲ ماه آینده</option>
                  <option value="صرفاً در مرحله تحقیق و تصمیم‌گیری اولیه">صرفاً در مرحله تحقیق و تصمیم‌گیری اولیه</option>
                </select>
              </div>

              {/* Privacy Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedToPrivacy}
                    onChange={(e) => setFormData({ ...formData, agreedToPrivacy: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-400 leading-relaxed">
                    با <span className="text-white font-bold">سیاست حریم خصوصی گُل اِرن</span> موافقم و تایید می‌کنم که اطلاعات ثبت‌شده صرفاً جهت ارزیابی فنی و ارتباط اولیه بررسی خواهند شد. هیچ داده‌ای به شخص ثالث واگذار نمی‌گردد.
                  </span>
                </label>
                {errors.agreedToPrivacy && (
                  <p className="text-xs text-red-400 flex items-center gap-1 mt-1 pr-7">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.agreedToPrivacy}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-bold text-sm py-4 rounded-xl shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>در حال ثبت و تولید کد رهگیری...</span>
                  ) : (
                    <>
                      <span>ارسال درخواست برای ارزیابی ۳۶۰ درجه</span>
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>گُل اِرن (Goal-Earn) ادعای تضمین ویزا یا استخدام ساختگی ارائه نمی‌دهد.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
