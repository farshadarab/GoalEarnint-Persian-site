import test from 'node:test';
import assert from 'node:assert/strict';
import { validateAssessmentForm, validateConsultationForm, getServiceCategoryLabel } from './assessment.ts';

test('validateAssessmentForm rejects empty fields and privacy false', () => {
  const result = validateAssessmentForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.currentCountry);
  assert.ok(result.errors.primaryGoal);
  assert.ok(result.errors.serviceCategory);
  assert.ok(result.errors.agreedToPrivacy);
});

test('validateAssessmentForm rejects invalid email', () => {
  const result = validateAssessmentForm({
    fullName: 'فرشاد محمدی',
    email: 'invalid-email',
    currentCountry: 'ایران',
    primaryGoal: 'بررسی فرصت‌های بین‌المللی در مهندسی نرم‌افزار',
    serviceCategory: 'work-migration',
    agreedToPrivacy: true,
  });
  assert.equal(result.isValid, false);
  assert.equal(result.errors.email, 'فرمت آدرس ایمیل معتبر نیست.');
});

test('validateAssessmentForm succeeds with complete valid data and generates reference code', () => {
  const result = validateAssessmentForm({
    fullName: 'فرشاد تهرانی',
    email: 'farshad@example.com',
    phone: '+989123456789',
    currentCountry: 'ایران',
    primaryGoal: 'بررسی امکان ورود خدمات نرم‌افزاری به بازارهای منطقه و ارمنستان',
    serviceCategory: 'international-market-entry',
    targetTimeline: '۳ تا ۶ ماه آینده',
    currentRole: 'بنیان‌گذار و مدیر محصول',
    yearsOfExperience: '۸ سال',
    additionalInfo: 'دارای تیم ۴ نفره',
    agreedToPrivacy: true,
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
  assert.ok(result.referenceId && result.referenceId.startsWith('GLN-'));
  assert.equal(result.sanitizedData?.fullName, 'فرشاد تهرانی');
  assert.equal(result.sanitizedData?.serviceCategory, 'international-market-entry');
});

test('validateConsultationForm validates requirements accurately', () => {
  const invalid = validateConsultationForm({});
  assert.equal(invalid.isValid, false);

  const valid = validateConsultationForm({
    fullName: 'سارا رضایی',
    email: 'sara@example.com',
    topic: 'armenia-work-live',
    consultationGoal: 'بررسی هزینه‌های اولیه و نوع ویزا جهت دورکاری',
    agreedToPrivacy: true,
  });
  assert.equal(valid.isValid, true);
  assert.ok(valid.referenceId?.startsWith('GLN-MEET-'));
});

test('getServiceCategoryLabel returns proper Persian service title', () => {
  assert.equal(getServiceCategoryLabel('work-migration'), 'برنامه اختصاصی آمادگی جاب‌آفر بین‌المللی');
  assert.equal(getServiceCategoryLabel('armenia-work-live'), 'هاب کار و زندگی در ارمنستان');
  assert.equal(getServiceCategoryLabel('unknown'), 'هنوز مطمئن نیستم / نیازمند بررسی');
});
