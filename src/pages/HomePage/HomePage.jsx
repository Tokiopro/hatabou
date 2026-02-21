import HeroSection from './sections/HeroSection';
import DegradationSection from './sections/DegradationSection';
import CguardSection from './sections/CguardSection';
import PricingOverview from './sections/PricingOverview';
import ProcessSection from './sections/ProcessSection';
import CTASection from './sections/CTASection';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <DegradationSection />
      <CguardSection />
      <PricingOverview />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
