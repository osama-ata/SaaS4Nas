To change the pricing plan and its features in the SaaS Boilerplate, you can follow these steps:

1. **Locate the Configuration for Pricing Plans**:
   - The pricing plans are defined in the `src/utils/AppConfig.ts` file within the `PricingPlanList` object. This file includes details like plan IDs, prices, billing intervals, and features (e.g., team members, websites, storage, transfer limits).

2. **Update the Pricing Plan Details**:
   - Modify the relevant fields such as `price`, `interval`, and `features` in `PricingPlanList`. For example:
     ```typescript
     {
       id: PLAN_ID.PREMIUM,
       price: 100, // Updated price
       features: {
         teamMember: 10, // Updated team member limit
         website: 3,     // Updated website limit
       },
     }
     ```

3. **Adjust the Presentation of Pricing Plans**:
   - The pricing plans are displayed in the UI using the `PricingCard` component in files like `src/templates/Pricing.tsx` and `src/features/billing/PricingInformation.tsx`. Ensure these files reflect any changes to the plan details.

4. **Test Your Changes**:
   - Test the updated plans locally to ensure that the changes are properly reflected in the UI and that any associated functionality (e.g., Stripe integration) still works as expected.

5. **Commit and Push Changes**:
   - Once satisfied, commit your changes and push them to the repository.

If you need assistance with a specific part of the process, let me know!
