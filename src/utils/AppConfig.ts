import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

import { BILLING_INTERVAL, type PricingPlan } from '@/types/Subscription';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'SaaS Template',
  locales: [
    {
      id: 'en',
      name: 'English',
    },
    { id: 'fr', name: 'Français' },
  ],
  defaultLocale: 'en',
  localePrefix,
};

export const AllLocales = AppConfig.locales.map(locale => locale.id);

export const PLAN_ID = {
  FREE: 'free',
  PREMIUM: 'premium',
  ENTERPRISE: 'enterprise',
} as const;

export const PricingPlanList: Record<string, PricingPlan> = {
  [PLAN_ID.FREE]: {
    id: PLAN_ID.FREE,
    price: 0,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: '',
    devPriceId: '',
    prodPriceId: '',
    features: {
      jobApplications: 30,
      resumeBuilder: true,
      saveJobAlerts: true,
    },
  },
  [PLAN_ID.PREMIUM]: {
    id: PLAN_ID.PREMIUM,
    price: 9,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: 'price_premium_test',
    devPriceId: 'price_1PNksvKOp3DEwzQlGOXO7YBK',
    prodPriceId: '',
    features: {
      jobApplications: 100,
      resumeBuilder: true,
      saveJobAlerts: true,
      basicAIJobSuggestions: true,
      priorityCVPlacement: true,
      viewCVViews: true,
      addPortfolio: true,
      addReferences: true,
    },
  },
  [PLAN_ID.ENTERPRISE]: {
    id: PLAN_ID.ENTERPRISE,
    price: 25,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: 'price_enterprise_test',
    devPriceId: 'price_1PNksvKOp3DEwzQli9IvXzgb',
    prodPriceId: 'price_123',
    features: {
      jobApplications: 'unlimited',
      resumeReviewAI: true,
      videoCVSpotlight: true,
      mockInterviewCoaching: true,
      verifiedSkills: 5,
      certificationBadge: true,
    },
  },
};
