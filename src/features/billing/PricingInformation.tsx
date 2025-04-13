import { useTranslations } from 'next-intl';

import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import { PricingPlanList } from '@/utils/AppConfig';

export const PricingInformation = (props: {
  buttonList: Record<string, React.ReactNode>;
}) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
      {Object.values(PricingPlanList).map(plan => (
        <PricingCard
          key={plan.id}
          planId={plan.id}
          price={plan.price}
          interval={plan.interval}
          button={props.buttonList[plan.id]}
        >

          <PricingFeature>
            {t('feature_job_applications', {
              number: plan.features.jobApplications,
            })}
          </PricingFeature>

          <PricingFeature>
            {t('feature_resume_builder')}
          </PricingFeature>

          <PricingFeature>
            {t('feature_save_job_alerts')}
          </PricingFeature>

          {plan.features.basicAIJobSuggestions && (
            <PricingFeature>
              {t('feature_basic_ai_job_suggestions')}
            </PricingFeature>
          )}

          {plan.features.priorityCVPlacement && (
            <PricingFeature>
              {t('feature_priority_cv_placement')}
            </PricingFeature>
          )}

          {plan.features.viewCVViews && (
            <PricingFeature>
              {t('feature_view_cv_views')}
            </PricingFeature>
          )}

          {plan.features.addPortfolio && (
            <PricingFeature>
              {t('feature_add_portfolio')}
            </PricingFeature>
          )}

          {plan.features.addReferences && (
            <PricingFeature>
              {t('feature_add_references')}
            </PricingFeature>
          )}

          {plan.features.resumeReviewAI && (
            <PricingFeature>
              {t('feature_resume_review_ai')}
            </PricingFeature>
          )}

          {plan.features.videoCVSpotlight && (
            <PricingFeature>
              {t('feature_video_cv_spotlight')}
            </PricingFeature>
          )}

          {plan.features.mockInterviewCoaching && (
            <PricingFeature>
              {t('feature_mock_interview_coaching')}
            </PricingFeature>
          )}

          {plan.features.verifiedSkills && (
            <PricingFeature>
              {t('feature_verified_skills', {
                number: plan.features.verifiedSkills,
              })}
            </PricingFeature>
          )}

          {plan.features.certificationBadge && (
            <PricingFeature>
              {t('feature_certification_badge')}
            </PricingFeature>
          )}
        </PricingCard>
      ))}
    </div>
  );
};
