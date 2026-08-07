import type { SiteContent } from './types';

export const en: SiteContent = {
  meta: {
    title: 'Private Office Consulting — Discretion. Strategy. Execution.',
    description:
      'A private office on the French Riviera. One trusted relationship to advise, coordinate and execute across your private, professional and family interests.',
    ogTitle: 'Private Office Consulting',
    ogDescription: 'A private advisory and concierge house. Cannes · Monaco · International.'
  },

  nav: {
    philosophy: 'Essentials',
    services: 'Expertise',
    contact: 'Contact',
    openMenu: 'Menu',
    closeMenu: 'Close',
    languageLabel: 'Choose language',
    skipToContent: 'Skip to content'
  },

  hero: {
    eyebrow: 'Cannes · Monaco · International',
    lines: ['Discretion.', 'Strategy.', 'Execution.'],
    intro:
      'A private advisory and concierge house for discerning individuals, families and business leaders.',
    cta: 'Explore'
  },

  philosophy: {
    eyebrow: 'Why we exist',
    title: {
      lead: 'One call.',
      accent: 'We take it from there.'
    },
    columns: [
      'Private Office Consulting brings advisory, concierge and coordination together in one team, with a single point of contact who sees things through to the end. We step in wherever speed, sound judgement and absolute confidentiality are required.',
      'No impersonal packages. Every engagement starts with a single question — what genuinely matters here — and only then do we build the shortest, most reliable answer.'
    ]
  },

  scenes: [
    {
      kicker: 'Private Office · French Riviera',
      title: { lead: 'Every request.', accent: 'Resolved.' },
      copy: 'One trusted relationship to orchestrate your private, professional and family interests.'
    },
    {
      kicker: 'Advisory',
      title: { lead: 'Decide with', accent: 'precision.' },
      copy: 'We analyse, verify and coordinate every step before it ever takes up your time.'
    },
    {
      kicker: 'Execution',
      title: { lead: 'One vision.', accent: 'One point of contact.' },
      copy: 'Hand-picked specialists, centrally managed, held to a constant standard.'
    },
    {
      kicker: 'Trust',
      title: { lead: 'Discretion', accent: 'as the foundation.' },
      copy: 'A relationship built on confidentiality, availability and accountability.'
    },
    {
      kicker: 'Delivery',
      title: { lead: 'Down to the last', accent: 'detail.' },
      copy: 'From the first conversation to the final step, the outcome stays our responsibility.'
    }
  ],

  services: {
    eyebrow: 'One office. Five directions.',
    title: { lead: 'Expertise that reaches wide.', accent: 'Execution that stays consistent.' },
    toggleLabel: 'Show the services under {name}',
    discussLabel: 'Discuss a request',
    custom: {
      question: 'Your request does not fit any of these categories? That is exactly where we are most useful.',
      cta: 'Bespoke request'
    },
    items: [
      {
        key: 'business',
        n: '01',
        title: 'Business & administration',
        copy: 'Your project. Our expertise.',
        services: [
          'Company formation',
          'Recruitment and HR',
          'Legal support',
          'Banking and insurance',
          'Business introductions',
          'Administrative procedures'
        ]
      },
      {
        key: 'property',
        n: '02',
        title: 'Property & management',
        copy: 'Your home. Under control.',
        services: [
          'Search and rental',
          'Property management',
          'Renovation and construction',
          'Upkeep and maintenance',
          'Security and protection'
        ]
      },
      {
        key: 'relocation',
        n: '03',
        title: 'Relocation & integration',
        copy: 'A new life. From day one.',
        services: [
          'End-to-end support',
          'Schools and education',
          'Documents and residency',
          'Moving and settling in',
          'Integration and local network'
        ]
      },
      {
        key: 'mobility',
        n: '04',
        title: 'Mobility & comfort',
        copy: 'Every day. Effortless.',
        services: [
          'Transfers and chauffeur',
          'Personal shopping',
          'Medical assistance',
          'Household staff',
          'Logistics and deliveries'
        ]
      },
      {
        key: 'brand',
        n: '05',
        title: 'Personal brand',
        copy: 'Your image. Wherever it matters.',
        services: ['Website and digital presence', 'Reputation and media relations']
      }
    ]
  },

  contact: {
    eyebrow: 'A confidential conversation',
    title: { lead: 'Let’s talk about what', accent: 'needs to be resolved.' },
    intro:
      'Tell us what you need. You will hear back quickly, with a first clear and confidential view on how we would handle it.',
    form: {
      name: { label: 'Name', placeholder: 'Your name' },
      email: { label: 'Email', placeholder: 'you@example.com' },
      phone: { label: 'Phone', optional: 'optional', placeholder: '+33 6 00 00 00 00' },
      subject: { label: 'Nature of the request', other: 'Something else' },
      message: {
        label: 'Your request',
        placeholder: 'In a few lines, tell us what you would like to hand over to us.'
      },
      consent: 'Your details stay strictly confidential and are never shared.',
      submit: 'Send request',
      submitting: 'Sending…',
      success: {
        title: 'Request received.',
        copy: 'Thank you. We will come back to you within 24 hours, in full confidence.'
      },
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email address.',
        message: 'Please describe your request in a few words.',
        generic:
          'Something went wrong. Write to us directly at contact@privateofficeconsulting.fr.'
      }
    },
    direct: {
      label: 'Or reach us directly',
      whatsapp: 'Private WhatsApp'
    }
  },

  footer: {
    tagline: 'Discretion. Strategy. Execution.',
    rights: '© 2026 · Cannes · French Riviera'
  }
};
