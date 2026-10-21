import React, { useState } from 'react';
import { Mail, CheckCircle2, ChevronRight, ArrowLeft, ShieldCheck, Clock } from 'lucide-react';

interface ContactPageProps {
  onOpenAssessment: () => void;
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenAssessment, onNavigateHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-right">
        {/* Breadcrumb */}
        <nav aria-label="راهنمای مسیر" className="flex items-center gap-2 text-xs text-stone-500">
          <button onClick={onNavigateHome} className="hover:text-stone-900 cursor-pointer">
            صفحه اصلی
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 rotate-180" />
          <span className="font-semibold text-stone-900">تماس با گل‌اِرن</span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <Mail className="w-4 h-4 text-amber-800" />
            <span>ارتباط مستقیم و پشتیبانی</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight leading-tight">
            تماس با گل‌اِرن بین‌المللی
          </h1>

          <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
            اگر پیش از ارسال فرم ارزیابی اولیه، سؤالی درباره خدمات، دامنه‌های همکاری یا رویکرد ما دارید، می‌توانید از طریق فرم زیر یا درگاه رسمی با ما مکاتبه کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Info Card (Span 5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5">
              <h2 className="text-base font-bold text-stone-950">کانال‌های ارتباطی رسمی</h2>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600">
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/60 space-y-1">
                  <span className="text-[11px] font-semibold text-stone-500 block">پایگاه اینترنتی رسمی:</span>
                  <span className="font-mono text-stone-900 font-medium">goalearnint.com</span>
                </div>

                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/60 space-y-1">
                  <span className="text-[11px] font-semibold text-stone-500 block">پاسخ‌گویی به استعلامات:</span>
                  <span className="text-stone-800">شنبه تا چهارشنبه، ساعت ۹ تا ۱۷</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-500">
                <Clock className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <span>
                  زمان معمول پاسخ‌گویی به پیام‌های ارسالی ظرف ۴۸ ساعت کاری است.
                </span>
              </div>
            </div>

            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-amber-950">
                آیا می‌خواهید پرونده شما بررسی شود؟
              </h3>
              <p className="text-xs text-amber-900/80 leading-relaxed">
                برای بررسی پرونده و دریافت پیشنهاد برنامه، تکمیل فرم ارزیابی اولیه روش سریع‌تر و دقیق‌تری است.
              </p>
              <button
                onClick={onOpenAssessment}
                className="w-full text-center bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                تکمیل فرم ارزیابی اولیه
              </button>
            </div>
          </div>

          {/* Form (Span 7) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-stone-200 p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-stone-950">پیام شما دریافت شد</h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                  از ارتباط شما سپاسگزاریم. همکاران ما در اولین فرصت کاری از طریق ایمیل پاسخ خواهند داد.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-amber-800 hover:underline pt-2"
                >
                  ارسال پیام دیگر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-base font-bold text-stone-950 mb-2">
                  ارسال پیام یا پرسش عمومی
                </h2>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    نام و نام خانوادگی <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    آدرس ایمیل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    dir="ltr"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 text-left"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    موضوع پیام
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="مثال: استعلام درباره زمان‌بندی برنامه ارمنستان"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-900">
                    متن پیام <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="پرسش خود را بنویسید..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-stone-950 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold py-3 rounded-lg transition-colors cursor-pointer"
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
