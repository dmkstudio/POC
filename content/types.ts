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
  | 'business'
  | 'property'
  | 'relocation'
  | 'mobility'
  | 'brand';

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

  /**
   * Five directions, rendered as a single-open accordion: the row states the
   * direction and its promise, the individual services stay folded away until
   * that row is opened.
   */
  services: {
    eyebrow: string;
    title: Headline;
    /** Screen-reader label for the disclosure button. `{name}` is substituted. */
    toggleLabel: string;
    /** Link at the foot of an opened panel, through to the contact form. */
    discussLabel: string;
    /** Catch-all under the list, for requests that fit none of the directions. */
    custom: {
      question: string;
      cta: string;
    };
    items: {
      key: ServiceKey;
      n: string;
      title: string;
      /** The promise, shown beside the title. */
      copy: string;
      /** Revealed only when the direction is opened. */
      services: string[];
    }[];
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

/**
 * Scene imagery is locale-independent. Each entry is matched to the scene of
 * the same index in every locale file, so the picture always states what the
 * copy beside it says:
 *
 *   1  every request, resolved      — one advisor at work late, in control
 *   2  decide with precision        — documents studied before anything is signed
 *   3  one vision, one contact      — deliberately a single person, alone
 *   4  discretion as the foundation — an unmarked door, nobody in frame
 *   5  down to the last detail      — the handover, the very end of the job
 */
export const sceneImages = [
  '/images/office-night.webp',
  '/images/documents-study.webp',
  '/images/single-advisor.webp',
  '/images/discreet-entrance.webp',
  '/images/key-exchange.webp'
] as const;
