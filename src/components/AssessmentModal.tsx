import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Copy, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceCategory, AssessmentFormData } from '../types/index';
import { validateAssessmentForm, getServiceCategoryLabel } from '../logic/assessment';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: ServiceCategory | string;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'work-migration',
}) => {
  const [formData, setFormData] = useState<Partial<AssessmentFormData>>({
    fullName: '',
    email: '',
    phone: '',
    currentCountry: 'ایران',
    serviceCategory: (initialCategory as ServiceCategory) || 'work-migration',
    primaryGoal: '',
    targetTimeline: '۳ تا ۶ ماه آینده',
    currentRole: '',
    yearsOfExperience: '',
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

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: (initialCategory as ServiceCategory) || 'work-migration',
      }));
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = validateAssessmentForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Realistic processing
    setTimeout(() => {
      setIsSubmitting(false);
      const submission = {
        referenceId: validation.referenceId!,
        submissionDate: validation.submissionDate!,
        sanitizedData: validation.sanitizedData!,
      };

      // Persist locally for user reference
      try {
        const existing = JSON.parse(localStorage.getItem('goalearn_assessments') || '[]');
        existing.unshift(submission);
        localStorage.setItem('goalearn_assessments', JSON.stringify(existing));
      } catch (err) {
        console.warn('LocalStorage save skipped', err);
      }

      setSuccessResult(submission);
    }, 700);
  };

  const handleCopyCode = () => {
    if (successResult) {
      navigator.clipboard.writeText(successResult.referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
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
      yearsOfExperience: '',
      additionalInfo: '',
      agreedToPrivacy: false,
    });
    setErrors({});
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="assessment-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-stone-200 shadow-xl text-right">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4.5 border-b border-stone-200 flex items-center justify-between z-10">
          <div className="space-y-0.5">
            <h2 id="assessment-modal-title" className="text-lg font-bold text-stone-950">
              درخواست ارزیابی اولیه
            </h2>
            <p className="text-xs text-stone-500">
              شناخت شرایط، بررسی تناسب و طراحی مسیر اختصاصی
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="بستن پنجره ارزیابی"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {successResult ? (
            /* Success State */
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-stone-950">درخواستت با موفقیت ثبت شد</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  اطلاعاتت برای بررسی اولیه شرایط استفاده می‌شود. در صورت تناسب و امکان ایجاد ارزش مشخص، ظرف ۲ تا ۳ روز کاری درباره گام بعدی با تو تماس می‌گیریم.
                </p>
              </div>

              {/* Reference ID card */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 inline-block text-right max-w-sm w-full mx-auto space-y-2">
                <div className="text-[11px] text-stone-500">کد رهگیری اختصاصی:</div>
                <div className="flex items-center justify-between font-mono font-bold text-sm text-stone-900 bg-white p-2.5 rounded border border-stone-200">
                  <span className="tracking-wider">{successResult.referenceId}</span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 text-stone-500 hover:text-stone-900 cursor-pointer"
                    title="کپی کد رهگیری"
                    aria-label="کپی کد رهگیری"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-[11px] text-stone-500">
                  مسیر انتخابی: {getServiceCategoryLabel(successResult.sanitizedData.serviceCategory)}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  متوجه شدم، بستن پنجره
                </button>
                <button
                  onClick={handleReset}
                  className="border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-medium px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  ثبت درخواست جدید
                </button>
              </div>
            </div>
          ) : (
            /* Form Input State */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200/60 text-xs text-amber-950 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <span>
                  چند سؤال کوتاه به ما کمک می‌کند هدف و شرایط کلی تو را بشناسیم. این ارزیابی اولیه هیچ‌گونه تعهد مالی یا تضمین نتیجه به همراه ندارد.
                </span>
              </div>

              {/* Service Category */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-900">
                  مسیر یا خدمت موردنظر برای بررسی <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.serviceCategory}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceCategory: e.target.value as ServiceCategory })
                  }
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900"
                >
                  <option value="work-migration">برنامه اختصاصی آمادگی جاب‌آفر بین‌المللی</option>
                  <option value="international-market-entry">ورود کسب‌وکار به بازارهای بین‌المللی</option>
                  <option value="armenia-work-live">هاب کار و زندگی در ارمنستان</option>
                  <option value="work-experience-verification">بررسی و آماده‌سازی شواهد سابقه کار</option>
                  <option value="private-programs">برنامه خصوصی توسعه مهارت</option>
                  <option value="not-sure">هنوز مطمئن نیستم / نیازمند راهنمایی</option>
                </select>
                {errors.serviceCategory && (
                  <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.serviceCategory}</span>
                  </p>
                )}
              </div>

              {/* Two columns: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    نام و نام خانوادگی <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: آرش سلیمانی"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    آدرس ایمیل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    dir="ltr"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 text-left ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Method & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    شماره تماس / تلگرام (اختیاری)
                  </label>
                  <input
                    type="text"
                    dir="ltr"
                    placeholder="+98 912 ... یا @username"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 text-left"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    کشور محل اقامت فعلی <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: ایران، ارمنستان، آلمان..."
                    value={formData.currentCountry}
                    onChange={(e) => setFormData({ ...formData, currentCountry: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 ${
                      errors.currentCountry ? 'border-red-400' : 'border-stone-300'
                    }`}
                  />
                  {errors.currentCountry && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.currentCountry}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Primary Goal */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-900">
                  شرح هدف و پرسش اصلی تو <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="مختصری درباره هدف، وضعیت فعلی و اصلی‌ترین چالش یا نیازمندی خود بنویسید..."
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 ${
                    errors.primaryGoal ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                  }`}
                />
                {errors.primaryGoal && (
                  <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.primaryGoal}</span>
                  </p>
                )}
              </div>

              {/* Current Role & Experience (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-stone-700">
                    نقش شغلی یا زمینه تخصص (اختیاری)
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: مدیر محصول، توسعه‌دهنده بک‌اند، بنیان‌گذار"
                    value={formData.currentRole}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-stone-700">
                    بازه زمانی موردنظر برای اقدام (اختیاری)
                  </label>
                  <select
                    value={formData.targetTimeline}
                    onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                  >
                    <option value="فوری (۱ تا ۳ ماه آینده)">فوری (۱ تا ۳ ماه آینده)</option>
                    <option value="۳ تا ۶ ماه آینده">۳ تا ۶ ماه آینده</option>
                    <option value="۶ تا ۱۲ ماه آینده">۶ تا ۱۲ ماه آینده</option>
                    <option value="صرفاً در مرحله تحقیق و بررسی اولیه">صرفاً در مرحله تحقیق و بررسی اولیه</option>
                  </select>
                </div>
              </div>

              {/* Privacy Agreement Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedToPrivacy}
                    onChange={(e) => setFormData({ ...formData, agreedToPrivacy: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-stone-900"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed">
                    با <span className="font-semibold text-stone-900">سیاست حریم خصوصی</span> گل‌اِرن موافقم و اجازه می‌دهم از این اطلاعات صرفاً جهت بررسی تناسب درخواست و ارتباط با من استفاده شود. هیچ داده‌ای به شخص ثالث فروخته نخواهد شد.
                  </span>
                </label>
                {errors.agreedToPrivacy && (
                  <p className="text-xs text-red-600 flex items-center gap-1 mt-1 pr-6">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.agreedToPrivacy}</span>
                  </p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer bg-stone-950 hover:bg-stone-800 disabled:bg-stone-400 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>در حال ثبت اطلاعات...</span>
                  ) : (
                    <>
                      <span>ارسال درخواست برای بررسی</span>
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
