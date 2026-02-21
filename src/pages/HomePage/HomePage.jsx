import SEO from '../../components/seo/SEO';
import { createLocalBusiness } from '../../utils/structuredData';
import HeroSection from './sections/HeroSection';
import DegradationSection from './sections/DegradationSection';
import CguardSection from './sections/CguardSection';
import WorksPreview from './sections/WorksPreview';
import TestimonialsPreview from './sections/TestimonialsPreview';
import PricingOverview from './sections/PricingOverview';
import ProcessSection from './sections/ProcessSection';
import CTASection from './sections/CTASection';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <SEO
        description="福井県の屋根・外壁・雨樋リフォーム専門店。C/guard（シーガード）カバー工法で費用を抑えた屋根リフォームをご提案。無料点検・お見積り実施中。"
        jsonLd={createLocalBusiness()}
      />
      <HeroSection />
      <DegradationSection />
      <CguardSection />
      <WorksPreview />
      <TestimonialsPreview />
      <PricingOverview />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
