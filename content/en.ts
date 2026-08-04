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
    method: 'Approach',
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
      copy: 'From the first request to the handover of the keys, the outcome stays our responsibility.'
    }
  ],

  services: {
    eyebrow: 'One office. Six directions.',
    title: { lead: 'Expertise that reaches wide.', accent: 'Execution that stays consistent.' },
    items: [
      {
        key: 'private-office',
        n: '01',
        title: 'Private Office',
        copy: 'Personal coordination, confidential requests, diary management and bespoke execution.'
      },
      {
        key: 'business',
        n: '02',
        title: 'Business & Advisory',
        copy: 'Sourcing, analysis, negotiation, trusted partners and hands-on operational support.'
      },
      {
        key: 'property',
        n: '03',
        title: 'Property',
        copy: 'Search, acquisition, villa management, renovation, household staff and long-term value.'
      },
      {
        key: 'mobility',
        n: '04',
        title: 'Mobility',
        copy: 'Chauffeur, private transfers, aviation, premium vehicles and international logistics.'
      },
      {
        key: 'yachting',
        n: '05',
        title: 'Yachting & Events',
        copy: 'Yachts, private experiences, hard-to-secure bookings and confidential events.'
      },
      {
        key: 'security',
        n: '06',
        title: 'Security & Staff',
        copy: 'Vetted personnel, close protection, discreet presence and supplier coordination.'
      }
    ]
  },

  method: {
    eyebrow: 'How we work',
    title: { lead: 'Simple for you.', accent: 'Rigorous for us.' },
    steps: [
      {
        n: '01',
        title: 'Listen',
        copy: 'Clarify the request, the priorities, the constraints and the level of confidentiality required.'
      },
      {
        n: '02',
        title: 'Structure',
        copy: 'Map the options, verify every counterparty and build the plan of action.'
      },
      {
        n: '03',
        title: 'Execute',
        copy: 'Coordinate partners, anticipate risk and keep the follow-up continuous.'
      },
      {
        n: '04',
        title: 'Deliver',
        copy: 'Confirm the result, hand over what matters and stay available once the mission closes.'
      }
    ]
  },

  territory: {
    eyebrow: 'Rooted locally · Operating internationally',
    title: { lead: 'Based on the French Riviera.', accent: 'Present wherever it matters.' },
    cities: [
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
  },

  manifesto: {
    quote:
      '“True quality is not noticed in what it shows, but in everything it makes simple.”'
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
