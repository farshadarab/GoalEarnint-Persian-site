export type ServiceCategory =
  | 'work-migration'
  | 'international-market-entry'
  | 'armenia-work-live'
  | 'work-experience-verification'
  | 'private-programs'
  | 'not-sure';

export interface AssessmentFormData {
  fullName: string;
  email: string;
  phone?: string;
  currentCountry: string;
  serviceCategory: ServiceCategory;
  primaryGoal: string;
  targetTimeline?: string;
  currentRole?: string;
  yearsOfExperience?: string;
  additionalInfo?: string;
  agreedToPrivacy: boolean;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone?: string;
  topic: ServiceCategory;
  consultationGoal: string;
  preferredTimeWindow?: string;
  agreedToPrivacy: boolean;
}

export interface AssessmentValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: AssessmentFormData;
  referenceId?: string;
  submissionDate?: string;
}

export interface ServiceDetail {
  id: ServiceCategory;
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  idealFor: string[];
  keyModules: {
    title: string;
    description: string;
  }[];
  transparencyNotes: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}
