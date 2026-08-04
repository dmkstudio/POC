import { getContent } from '@/content';
import { htmlLang, locales, type Locale } from '@/lib/i18n';
import { ogImage, site } from '@/lib/site';

/**
 * Structured data for search engines: who the firm is, where it operates
 * and what it offers. Rendered server-side, one script per page.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  const graph = [
    {
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#organization`,
      name: site.name,
      alternateName: site.shortName,
      description: content.meta.description,
      url: `${site.url}/${locale}`,
      email: site.email,
      telephone: site.phone,
      image: `${site.url}${ogImage}`,
      foundingDate: site.founded,
      priceRange: '$$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: site.geo.lat,
        longitude: site.geo.lng
      },
      areaServed: content.territory.cities.map((name) => ({ '@type': 'City', name })),
      availableLanguage: locales.map((l) => htmlLang[l]),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: content.services.title.lead,
        itemListElement: content.services.items.map((item) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: item.title,
            description: item.copy
          }
        }))
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: `${site.url}/${locale}`,
      name: site.name,
      inLanguage: htmlLang[locale],
      publisher: { '@id': `${site.url}/#organization` }
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
      }}
    />
  );
}
