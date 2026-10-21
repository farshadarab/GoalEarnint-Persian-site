import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { ServiceCategory, ConsultationFormData } from '../types/index';
import { validateConsultationForm, getServiceCategoryLabel } from '../logic/assessment';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<Partial<ConsultationFormData>>({
    fullName: '',
    email: '',
    phone: '',
    topic: 'work-migration',
    consultationGoal: '',
    preferredTimeWindow: 'روزهای کاری هفته بعد (ساعات بعدازظهر)',
    agreedToPrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successCode, setSuccessCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = validateConsultationForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessCode(validation.referenceId!);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-xl text-right">
        {/* Header */}
        <div className="px-6 py-4.5 border-b border-stone-200 flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 id="consultation-modal-title" className="text-lg font-bold text-stone-950">
              درخواست جلسه آشنایی
            </h2>
            <p className="text-xs text-stone-500">
              گفت‌وگوی مقدماتی جهت بررسی هدف و امکان‌پذیری همکاری
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="بستن پنجره"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {successCode ? (
            <div className="space-y-5 text-center py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-stone-950">درخواست جلسه ثبت شد</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
                  درخواست شما جهت هماهنگی جلسه دریافت شد. شرایط، تاریخ‌های ممکن و پیش‌نیازهای جلسه پیش از نهایی‌شدن از طریق ایمیل برای شما ارسال خواهد شد.
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 inline-block font-mono">
                کد پیگیری: <span className="font-bold text-stone-900">{successCode}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="bg-stone-900 text-white text-xs font-semibold px-6 py-2.5 rounded-lg hover:bg-stone-800 transition-colors"
                >
                  بستن پنجره
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="p-4 rounded-lg bg-stone-100 border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                <span>
                  اگر می‌خواهی پیش از تصمیم‌گیری درباره هدف و نیازت گفت‌وگو کنیم، درخواستت را ثبت کن. جزئیات، مدت، هزینه احتمالی و امکان رزرو باید پیش از نهایی‌شدن جلسه روشن باشند.
                </span>
              </div>

              {/* Name & Email */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    نام و نام خانوادگی <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 ${
                      errors.fullName ? 'border-red-400' : 'border-stone-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    آدرس ایمیل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    dir="ltr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 text-left ${
                      errors.email ? 'border-red-400' : 'border-stone-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    موضوع جلسه <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({ ...formData, topic: e.target.value as ServiceCategory })
                    }
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                  >
                    <option value="work-migration">برنامه آمادگی جاب‌آفر بین‌المللی</option>
                    <option value="international-market-entry">ورود کسب‌وکار به بازار</option>
                    <option value="armenia-work-live">هاب کار و زندگی در ارمنستان</option>
                    <option value="work-experience-verification">بررسی و آماده‌سازی سابقه کار</option>
                    <option value="private-programs">برنامه خصوصی توسعه مهارت</option>
                    <option value="not-sure">مشاوره کلی و تشخیص مسیر</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    هدف و سؤالات اصلی در جلسه <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="مهم‌ترین موضوعی که می‌خواهید در جلسه بررسی شود چیست؟"
                    value={formData.consultationGoal}
                    onChange={(e) => setFormData({ ...formData, consultationGoal: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 ${
                      errors.consultationGoal ? 'border-red-400' : 'border-stone-300'
                    }`}
                  />
                  {errors.consultationGoal && (
                    <p className="text-xs text-red-600 mt-1">{errors.consultationGoal}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-stone-700">
                    بازه زمانی ترجیحی (اختیاری)
                  </label>
                  <input
                    type="text"
                    value={formData.preferredTimeWindow}
                    onChange={(e) => setFormData({ ...formData, preferredTimeWindow: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreedToPrivacy}
                      onChange={(e) => setFormData({ ...formData, agreedToPrivacy: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-stone-900"
                    />
                    <span className="text-xs text-stone-600 leading-relaxed">
                      با سیاست حریم خصوصی و دریافت هماهنگی جلسه از طریق ایمیل موافقم.
                    </span>
                  </label>
                  {errors.agreedToPrivacy && (
                    <p className="text-xs text-red-600 mt-1">{errors.agreedToPrivacy}</p>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  {isSubmitting ? 'در حال ثبت...' : 'ثبت درخواست جلسه'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
