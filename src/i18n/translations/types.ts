export interface Translations {
  nav: {
    problems: string;
    transformation: string;
    visualExamples: string;
    services: string;
    process: string;
    pricing: string;
    contact: string;
    blog: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    primaryButton: string;
    secondaryButton: string;
    stickyConsultation: string;
    stickyPortfolio: string;
    accepting: string;
  };
  problems: {
    sectionTitle: string;
    items: { title: string; description: string }[];
  };
  transformation: {
    sectionTitle: string;
    before: string;
    after: string;
    metrics: {
      monthlyVisitors: string;
      bounceRate: string;
      avgDuration: string;
      mobileReady: string;
      pageSpeed: string;
    };
  };
  visualTransformation: {
    sectionTitle: string;
    description: string;
    prevProject: string;
    nextProject: string;
  };
  projects: { description: string; tags: string[] }[];
  services: {
    sectionTitle: string;
    items: { title: string; description: string }[];
  };
  process: {
    sectionTitle: string;
    steps: { title: string; description: string }[];
  };
  pricing: {
    sectionTitle: string;
    sectionDescription: string;
    websiteDev: {
      title: string;
      description: string;
      priceLabel: string;
      priceNote: string;
      durationLabel: string;
      duration: string;
      durationNote: string;
      includedLabel: string;
      includedItems: string[];
    };
    monthlyPlansTitle: string;
    monthlyPlansDescription: string;
    popularBadge: string;
    plans: {
      description: string;
      features: string[];
      ctaText: string;
    }[];
  };
  contact: {
    sectionTitle: string;
    sectionDescription: string;
    companyLabel: string;
    nameLabel: string;
    emailLabel: string;
    websiteLabel: string;
    messageLabel: string;
    submitButton: string;
    submitting: string;
  };
  form: {
    sendingTitle: string;
    sendingMessage: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
    serverError: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    quickLinkItems: {
      services: string;
      pricing: string;
      transformation: string;
      blog: string;
      contact: string;
    };
    legalTitle: string;
    legalItems: {
      privacy: string;
      terms: string;
      commerce: string;
    };
  };
}
