import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import CTABanner from '../components/ui/CTABanner';
import FAQSection from '../components/ui/FAQSection';
import { faqData } from '../data/faq';
import { createBreadcrumbList, createFAQPage } from '../utils/structuredData';

export default function FAQPage() {
  const bcItems = [{ label: 'よくある質問' }];

  const allFaqs = Object.values(faqData).flatMap((cat) => cat.items);
  const jsonLd = [
    createBreadcrumbList([{ label: 'ホーム', path: '/' }, ...bcItems]),
    createFAQPage(allFaqs),
  ];

  return (
    <div className="animate-fade-in pt-20">
      <SEO
        title="よくある質問"
        description="建築鈑金はたに寄せられるよくある質問をまとめました。屋根リフォーム・雨漏り修理・外壁・雨樋工事の費用や工期など、お客様の疑問にお答えします。"
        jsonLd={jsonLd}
      />
      <div className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">よくある質問</h1>
        <p className="text-xl text-emerald-100">
          お客様からよくいただくご質問にお答えします
        </p>
      </div>
      <Breadcrumb items={bcItems} />

      <div className="container mx-auto max-w-4xl py-16 px-4 space-y-16">
        {Object.entries(faqData).map(([key, category]) => (
          <FAQSection
            key={key}
            title={category.label}
            items={category.items}
          />
        ))}
      </div>

      <CTABanner />
    </div>
  );
}
