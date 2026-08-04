/**
 * Shape of the whole site's copy.
 *
 * Every locale file in this folder must satisfy `SiteContent`, so TypeScript
 * fails the build if a translation drifts out of sync with the others.
 *
 * `Headline` renders as two lines: `lead` in ivory, `accent` in gold italic.
 */
export type Headline = {
  lead: string;
  accent: string;
};

export type ServiceKey =
  | 'private-office'
  | 'business'
  | 'property'
  | 'mobility'
  | 'yachting'
  | 'security';

export type SiteContent = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };

  nav: {
    philosophy: string;
    services: string;
    method: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    skipToContent: string;
  };

  hero: {
    eyebrow: string;
    lines: [string, string, string];
    intro: string;
    cta: string;
  };

  philosophy: {
    eyebrow: string;
    title: Headline;
    columns: [string, string];
  };

  /** Five cinematic scenes, matched to `sceneImages` by index. */
  scenes: {
    kicker: string;
    title: Headline;
    copy: string;
  }[];

  services: {
    eyebrow: string;
    title: Headline;
    items: {
      key: ServiceKey;
      n: string;
      title: string;
      copy: string;
    }[];
  };

  method: {
    eyebrow: string;
    title: Headline;
    steps: {
      n: string;
      title: string;
      copy: string;
    }[];
  };

  territory: {
    eyebrow: string;
    title: Headline;
    cities: string[];
  };

  manifesto: {
    quote: string;
  };

  contact: {
    eyebrow: string;
    title: Headline;
    intro: string;
    form: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; optional: string; placeholder: string };
      subject: { label: string; other: string };
      message: { label: string; placeholder: string };
      consent: string;
      submit: string;
      submitting: string;
      success: { title: string; copy: string };
      errors: {
        name: string;
        email: string;
        message: string;
        generic: string;
      };
    };
    direct: {
      label: string;
      whatsapp: string;
    };
  };

  footer: {
    tagline: string;
    rights: string;
  };
};

/** Scene imagery is locale-independent. */
export const sceneImages = [
  '/images/harbor-executive.webp',
  '/images/signing-desk.webp',
  '/images/agreement-meeting.webp',
  '/images/handshake.webp',
  '/images/key-exchange.webp'
] as const;
