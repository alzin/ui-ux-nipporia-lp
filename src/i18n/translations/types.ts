export interface Translations {
  nav: {
    home: string;
    problems: string;
    transformation: string;
    visualExamples: string;
    services: string;
    process: string;
    pricing: string;
    contact: string;
    blog: string;
    templates: string;
    businessOverview: string;
    menu: {
      open: string;
      close: string;
    };
  };
  templatesPage: {
    title: string;
    subtitle: string;
    viewLive: string;
    category: string;
    items: {
      title: string;
      description: string;
      category: string;
      tags: string[];
    }[];
  };
  hero: {
    title: string;
    titleTagline: string;
    subtitle: string;
    cta: string;
    primaryButton: string;
    secondaryButton: string;
    stickyConsultation: string;
    stickyPortfolio: string;
    accepting: string;
    services: string[];
  };
  heroWorkflow: {
    steps: { label: string; notification: string; detail: string }[];
  };
  problems: {
    sectionTitle: string;
    problemLabel: string;
    solutionLabel: string;
    items: {
      problem: string;
      solution: { title: string; description: string };
    }[];
  };
  transformation: {
    sectionTitle: string;
    before: string;
    after: string;
    metrics: {
      monthlyLeads: string;
      acquisitionCost: string;
      conversionRate: string;
      digitalChannels: string;
      automationRate: string;
    };
  };
  visualTransformation: {
    sectionTitle: string;
    description: string;
    prevProject: string;
    nextProject: string;
    laptop: string;
    phone: string;
    viewLiveSite: string;
    loadingPreview: string;
    desktopPreview: string;
    mobilePreview: string;
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
      ctaText: string;
    };
    monthlyPlansTitle: string;
    monthlyPlansDescription: string;
    popularBadge: string;
    plans: {
      description: string;
      features: string[];
      ctaText: string;
    }[];
    customizePlan: {
      title: string;
      description: string;
      ctaText: string;
    };
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
  languageSwitcher: {
    switcher: string;
    selectLanguage: string;
    switchTo: string;
    options: {
      ja: string;
      en: string;
      ar: string;
    };
  };
  blogUi: {
    allBlogsTitle: string;
    allBlogsAria: string;
    blogPost: string;
    untitled: string;
    noDescription: string;
    noDate: string;
    noTags: string;
    blogImage: string;
    readPost: string;
    tableOfContents: string;
  };
  requirementsSheet: {
    tag: string;
    title: string;
    description: string;
    viewOnly: string;
    viewOnlyNote: string;
    downloadButton: string;
    pageLabel: string;
    previous: string;
    next: string;
    zoomIn: string;
    zoomOut: string;
    modal: {
      emailLabel: string;
      emailPlaceholder: string;
      submit: string;
      submitting: string;
      cancel: string;
      privacyNote: string;
      successTitle: string;
      successMessage: string;
      errorMessage: string;
      invalidEmail: string;
      close: string;
    };
  };
  notFoundPage: {
    message: string;
    backHome: string;
  };
  businessOverview: {
    pageTitle: string;
    heroDescription: string;
    breadcrumbHome: string;
    breadcrumbBusinessOverview: string;
    companyName: { label: string; value: string };
    established: { label: string; value: string };
    capital: { label: string; value: string };
    representative: { label: string; value: string };
    employees: { label: string; value: string };
    business: { label: string; values: string[] };
    address: { label: string; postalCode: string; value: string };
  };
} 
export type SeoMetadata = {
  title: string;
  description: string;
};

export type LayoutSeoContent = {
  titleDefault: string;
  titleTemplate: string;
  description: string;
  applicationName: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
};

export type PrivacySection = {
  title: string;
  paragraphs: string[];
  listItems?: string[];
};

export type PrivacyContent = {
  metadataTitle: string;
  metadataDescription: string;
  pageTitle: string;
  sections: PrivacySection[];
  establishedDate: string;
  updatedDate: string;
};

export type TermsSection = {
  title: string;
  paragraphs: string[];
  listItems?: string[];
};

export type TermsContent = {
  metadataTitle: string;
  metadataDescription: string;
  pageTitle: string;
  sections: TermsSection[];
  establishedDate: string;
  updatedDate: string;
};

export type DisclosureRow = {
  label: string;
  lines?: string[];
  listItems?: string[];
};

export type CommerceContent = {
  metadataTitle: string;
  metadataDescription: string;
  pageTitle: string;
  rows: DisclosureRow[];
  establishedDate: string;
  updatedDate: string;
};

export type BusinessOverviewContent = {
  metadataTitle: string;
  metadataDescription: string;
};

export type LocalizedPageContent = {
  layout: LayoutSeoContent;
  notFound: SeoMetadata;
  blogs: SeoMetadata;
  missingBlog: SeoMetadata;
  templates: SeoMetadata;
  businessOverview: BusinessOverviewContent;
  privacyPolicy: PrivacyContent;
  termsOfService: TermsContent;
  commerceDisclosure: CommerceContent;
};
