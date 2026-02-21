import SEO from '../seo/SEO';
import Breadcrumb from '../ui/Breadcrumb';
import CTABanner from '../ui/CTABanner';
import FAQSection from '../ui/FAQSection';
import { createBreadcrumbList, createService } from '../../utils/structuredData';

export default function ServicePageLayout({
  title,
  subtitle,
  seoTitle,
  seoDescription,
  serviceName,
  priceRange,
  breadcrumbItems,
  faqItems,
  children,
}) {
  const bcItems = breadcrumbItems || [{ label: title }];
  const jsonLd = [
    createBreadcrumbList([{ label: 'ホーム', path: '/' }, ...bcItems]),
    createService({
      name: serviceName || title,
      description: seoDescription,
      priceRange,
    }),
  ];

  return (
    <div className="animate-fade-in pt-20">
      <SEO
        title={seoTitle || title}
        description={seoDescription}
        jsonLd={jsonLd}
      />
      <div className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-emerald-100">{subtitle}</p>}
      </div>
      <Breadcrumb items={bcItems} />

      <div className="container mx-auto max-w-4xl py-16 px-4 space-y-16">
        {children}

        {faqItems && faqItems.length > 0 && <FAQSection items={faqItems} />}

        <CTABanner compact />
      </div>

      <CTABanner />
    </div>
  );
}
