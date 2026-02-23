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

      {/* 結論ボックス（LLMO/AIO対応） */}
      <section className="container mx-auto max-w-4xl px-4 -mt-8 relative z-10">
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg shadow-md">
          <p className="text-lg text-slate-800 leading-relaxed">
            <strong className="text-emerald-800">結論：</strong>
            築15〜30年のコロニアル屋根は、C/guard（シーガード）カバー工法で
            費用を抑えた改修が可能な場合があります。建築鈑金はたは福井県で
            屋根・外壁・雨樋のリフォームを専門に行う地域密着の鈑金店です。
          </p>
        </div>
      </section>

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
