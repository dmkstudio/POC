/**
 * Single place for the firm's own details.
 * Change them here and they update across the site, metadata and JSON-LD.
 */
export const site = {
  name: 'Private Office Consulting',
  shortName: 'POC',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.privateofficeconsulting.fr',
  email: 'contact@privateofficeconsulting.fr',
  phone: '+33758034899',
  whatsapp: 'https://wa.me/33758034899',
  address: {
    locality: 'Cannes',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'FR'
  },
  /** Used for the map/geo hints in structured data. */
  geo: { lat: 43.5528, lng: 7.0174 },
  founded: '2024',
  /**
   * Where the firm operates. Not shown on the page — it feeds `areaServed` in
   * the structured data, so search engines still connect the office to these
   * cities. Kept in English, the language search engines index place names in.
   */
  areaServed: [
    'Cannes',
    'Monaco',
    'Nice',
    'Antibes',
    'Saint-Tropez',
    'Paris',
    'Geneva',
    'Milan',
    'London',
    'Dubai'
  ]
} as const;

export const ogImage = '/images/harbor-executive.webp';
