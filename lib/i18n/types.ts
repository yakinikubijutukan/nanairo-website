/**
 * The full shape of a language dictionary. Every locale file must satisfy
 * this type exactly — TypeScript will error if a translation is missing a
 * key, which is the main safety net for keeping four languages in sync.
 */

export type PageMeta = {
  title: string;
  description: string;
};

export type TitleCopy = {
  title: string;
  copy: string;
};

export type PillarCopy = {
  title: string;
  tagline: string;
  description: string;
  outcomes: [string, string, string];
};

export type StageCopy = {
  title: string;
  duration: string;
  happens: string;
  deliver: [string, string, string];
  expected: string;
};

export type Dictionary = {
  meta: {
    home: PageMeta;
    whyJapan: PageMeta;
    services: PageMeta;
    process: PageMeta;
    about: PageMeta;
    contact: PageMeta;
    ogDescription: string;
  };

  nav: {
    home: string;
    whyJapan: string;
    services: string;
    process: string;
    about: string;
    contact: string;
    startConversation: string;
    toggleMenu: string;
  };

  languageSwitcher: {
    label: string;
  };

  footer: {
    description: string;
    navigate: string;
    expertise: string;
    contact: string;
    location: string;
    linkedin: string;
    privacyPolicy: string;
    terms: string;
    rights: string;
  };

  home: {
    heroKicker: string;
    heroHeadline: string;
    heroSubhead: string;
    seeHowItWorks: string;
    trustStrip: string;
    positioning: {
      leftEyebrow: string;
      leftItems: [string, string, string, string];
      rightEyebrow: string;
      rightItems: [string, string, string, string];
    };
    whyJapanTeaser: {
      eyebrow: string;
      headline: string;
      stat1Label: string;
      stat2Label: string;
      stat3Label: string;
      linkText: string;
    };
    expertise: {
      scrollLabel: string;
    };
    amazonJapan: {
      headline: string;
      body: string;
      cta: string;
    };
    distribution: {
      headline: string;
      body: string;
    };
    marketing: {
      quote: string;
    };
    longTermPartnership: {
      eyebrow: string;
      headline: string;
      steps: [string, string, string, string, string, string];
      linkText: string;
    };
    closingCta: {
      message: string;
      cta: string;
    };
  };

  whyJapan: {
    heroEyebrow: string;
    heroHeadline: string;
    heroBody: string;
    stats: {
      populationLabel: string;
      rankLabel: string;
      researchLabel: string;
    };
    split: {
      sectionLabel: string;
      valuableLabel: string;
      hardLabel: string;
      valuable: [TitleCopy, TitleCopy, TitleCopy, TitleCopy];
      hard: [TitleCopy, TitleCopy, TitleCopy, TitleCopy];
    };
    resolution: {
      quote: string;
      body: string;
      cta: string;
    };
  };

  services: {
    heroEyebrow: string;
    heroHeadline: string;
    pillars: {
      amazonJapan: PillarCopy;
      ecommerce: PillarCopy;
      marketing: PillarCopy;
      logistics: PillarCopy;
      localization: PillarCopy;
      branding: PillarCopy;
      distribution: PillarCopy;
      longTermPartnership: PillarCopy;
    };
    closing: {
      quote: string;
      cta: string;
    };
  };

  process: {
    heroEyebrow: string;
    heroHeadline: string;
    heroBody: string;
    deliversLabel: string;
    expectedLabel: string;
    scrollHint: string;
    stages: {
      discovery: StageCopy;
      strategy: StageCopy;
      launchPrep: StageCopy;
      goToMarket: StageCopy;
      growth: StageCopy;
      partnership: StageCopy;
    };
    closing: {
      quote: string;
      cta: string;
    };
  };

  about: {
    heroEyebrow: string;
    heroHeadline: string;
    narrative: {
      quote: string;
      paragraphs: [string, string, string];
    };
    valuesLabel: string;
    values: {
      craftsmanship: TitleCopy;
      trust: TitleCopy;
      longTermThinking: TitleCopy;
      culturalFluency: TitleCopy;
    };
    team: {
      quote: string;
      body: string;
    };
    platformsLabel: string;
    platforms: [string, string, string, string];
    closing: {
      headline: string;
      cta: string;
    };
  };

  contact: {
    heroEyebrow: string;
    heroHeadline: string;
    reassurance: string;
    form: {
      name: string;
      company: string;
      country: string;
      category: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      error: string;
      successTitle: string;
      successBody: string;
    };
  };
};
