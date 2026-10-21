import React from 'react';
import { ArrowLeft, Home, Compass } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onOpenAssessment: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome, onOpenAssessment }) => {
  return (
    <div className="py-24 bg-stone-50 min-h-[70vh] flex items-center justify-center text-center px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-800 mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 text-amber-800" />
        </div>

        <div className="space-y-2">
          <div className="text-amber-800 font-sans font-extrabold text-3xl">404</div>
          <h1 className="text-2xl font-bold text-stone-950">صفحه مورد نظر پیدا نشد</h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            آدرس وارد شده معتبر نیست یا ممکن است صفحه جابه‌جا شده باشد.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto bg-stone-950 text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>بازگشت به صفحه اصلی</span>
          </button>
          <button
            onClick={onOpenAssessment}
            className="w-full sm:w-auto border border-stone-300 text-stone-800 text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            ارزیابی اولیه
          </button>
        </div>
      </div>
    </div>
  );
};
