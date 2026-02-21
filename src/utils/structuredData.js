import { company } from '../data/company';

export function createLocalBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    description: company.description,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      addressRegion: company.address.prefecture,
      addressLocality: company.address.city,
      streetAddress: company.address.street,
      addressCountry: 'JP',
    },
    openingHours: 'Mo-Sa 08:00-18:00',
    areaServed: company.areas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    url: company.url,
  };
}

export function createService({ name, description, priceRange }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      telephone: company.phone,
    },
    areaServed: {
      '@type': 'State',
      name: company.address.prefecture,
    },
    ...(priceRange && {
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'JPY',
          description: priceRange,
        },
      },
    }),
  };
}

export function createBreadcrumbList(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.path && { item: `${company.url}${item.path}` }),
    })),
  };
}

export function createFAQPage(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
