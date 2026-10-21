import type { AssessmentFormData, AssessmentValidationResult, ConsultationFormData } from '../types/index.ts';

/**
 * Validates initial assessment request form data.
 */
export function validateAssessmentForm(data: Partial<AssessmentFormData>): AssessmentValidationResult {
  const errors: Record<string, string> = {};

  const fullName = (data.fullName || '').trim();
  if (!fullName) {
    errors.fullName = 'لطفاً نام و نام خانوادگی خود را وارد کنید.';
  } else if (fullName.length < 3) {
    errors.fullName = 'نام وارد شده بسیار کوتاه است.';
  }

  const email = (data.email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = 'لطفاً آدرس ایمیل خود را وارد کنید.';
  } else if (!emailRegex.test(email)) {
    errors.email = 'فرمت آدرس ایمیل معتبر نیست.';
  }

  const currentCountry = (data.currentCountry || '').trim();
  if (!currentCountry) {
    errors.currentCountry = 'لطفاً کشور محل اقامت فعلی خود را مشخص کنید.';
  }

  const primaryGoal = (data.primaryGoal || '').trim();
  if (!primaryGoal) {
    errors.primaryGoal = 'لطفاً شرح مختصری از هدف اصلی خود را بنویسید.';
  } else if (primaryGoal.length < 10) {
    errors.primaryGoal = 'لطفاً برای بررسی دقیق‌تر، حداقل ۱۰ کاراکتر درباره هدف خود توضیح دهید.';
  }

  if (!data.serviceCategory) {
    errors.serviceCategory = 'لطفاً نوع خدمت یا مسیر موردنظر خود را انتخاب کنید.';
  }

  if (!data.agreedToPrivacy) {
    errors.agreedToPrivacy = 'پذیرش سیاست حریم خصوصی برای ثبت و بررسی درخواست الزامی است.';
  }

  const isValid = Object.keys(errors).length === 0;

  if (!isValid) {
    return { isValid: false, errors };
  }

  // Generate deterministic reference tracking code: GLN-YYYYMMDD-XXXX
  const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const referenceId = `GLN-${dateStr}-${randomSuffix}`;

  return {
    isValid: true,
    errors: {},
    referenceId,
    submissionDate: new Date().toISOString(),
    sanitizedData: {
      fullName,
      email,
      phone: (data.phone || '').trim(),
      currentCountry,
      serviceCategory: data.serviceCategory!,
      primaryGoal,
      targetTimeline: (data.targetTimeline || '').trim(),
      currentRole: (data.currentRole || '').trim(),
      yearsOfExperience: (data.yearsOfExperience || '').trim(),
      additionalInfo: (data.additionalInfo || '').trim(),
      agreedToPrivacy: true,
    },
  };
}

/**
 * Validates introductory consultation form data.
 */
export function validateConsultationForm(data: Partial<ConsultationFormData>): {
  isValid: boolean;
  errors: Record<string, string>;
  referenceId?: string;
} {
  const errors: Record<string, string> = {};

  const fullName = (data.fullName || '').trim();
  if (!fullName) {
    errors.fullName = 'لطفاً نام و نام خانوادگی خود را وارد کنید.';
  }

  const email = (data.email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'لطفاً یک ایمیل معتبر وارد کنید.';
  }

  if (!data.topic) {
    errors.topic = 'لطفاً موضوع جلسه را مشخص کنید.';
  }

  const consultationGoal = (data.consultationGoal || '').trim();
  if (!consultationGoal || consultationGoal.length < 5) {
    errors.consultationGoal = 'لطفاً به صورت کوتاه هدف خود از جلسه را توضیح دهید.';
  }

  if (!data.agreedToPrivacy) {
    errors.agreedToPrivacy = 'پذیرش سیاست حریم خصوصی الزامی است.';
  }

  const isValid = Object.keys(errors).length === 0;
  if (!isValid) {
    return { isValid: false, errors };
  }

  const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
  const referenceId = `GLN-MEET-${randomSuffix}`;

  return { isValid: true, errors: {}, referenceId };
}

/**
 * Service categorization helper with Persian title translation.
 */
export function getServiceCategoryLabel(category: string): string {
  switch (category) {
    case 'work-migration':
      return 'برنامه اختصاصی آمادگی جاب‌آفر بین‌المللی';
    case 'international-market-entry':
      return 'ورود کسب‌وکار به بازارهای بین‌المللی';
    case 'armenia-work-live':
      return 'هاب کار و زندگی در ارمنستان';
    case 'work-experience-verification':
      return 'بررسی و آماده‌سازی شواهد سابقه کار';
    case 'private-programs':
      return 'برنامه‌های خصوصی توسعه مهارت';
    case 'not-sure':
    default:
      return 'هنوز مطمئن نیستم / نیازمند بررسی';
  }
}
