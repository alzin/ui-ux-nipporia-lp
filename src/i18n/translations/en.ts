import type { Translations } from "./types";

const en: Translations = {
  // Header nav
  nav: {
    problems: "Challenges",
    transformation: "Results",
    visualExamples: "Sample Projects",
    services: "Services",
    process: "How We Work",
    pricing: "Pricing",
    contact: "Contact",
    blog: "Blog",
  },

  // Hero
  hero: {
    title: "Transform your website to drive business growth.",
    subtitle: "Professional design that attracts more customers.",
    cta: "Free consultation (60 min) - Improvement plan within 7 days",
    primaryButton: "Book Free Consultation",
    secondaryButton: "Sample Projects",
    stickyConsultation: "Free Consultation",
    stickyPortfolio: "Sample Projects",
    accepting: "Available",
  },

  // Problems
  problems: {
    sectionTitle: "Are you facing these challenges?",
    items: [
      {
        title: "Outdated Design",
        description:
          "Your website looks a decade old, falling behind competitors. No mobile responsiveness either.",
      },
      {
        title: "Low Traffic",
        description:
          "Barely any search engine traffic, with monthly visitors stagnating at just a few hundred.",
      },
      {
        title: "Hard to Maintain",
        description:
          "Built with legacy code — even small changes require significant time and cost.",
      },
    ],
  },

  // Transformation
  transformation: {
    sectionTitle: "Real Transformation Results",
    before: "Before",
    after: "After",
    metrics: {
      monthlyVisitors: "Monthly Visitors",
      bounceRate: "Bounce Rate",
      avgDuration: "Avg. Session Duration",
      mobileReady: "Mobile Ready",
      pageSpeed: "Page Load Speed",
    },
  },

  // Visual Transformation
  visualTransformation: {
    sectionTitle: "Sample Projects",
    description: "See real projects we've delivered for our clients",
    prevProject: "Previous project",
    nextProject: "Next project",
  },

  // Projects
  projects: [
    {
      description:
        "A clean, modern website showcasing professional services and expertise.",
      tags: ["Corporate", "Responsive", "Next.js"],
    },
    {
      description:
        "A comprehensive platform supporting life and opportunities in Japan, with rich content and resources.",
      tags: ["Platform", "Multilingual", "Content"],
    },
    {
      description:
        "An innovative Japanese platform with a modern interface, delivering seamless experiences across all devices.",
      tags: ["UI/UX Design", "Innovation", "SEO"],
    },
  ],

  // Services
  services: {
    sectionTitle: "Our Services",
    items: [
      {
        title: "Next.js Development",
        description:
          "Building fast, maintainable websites using the latest React framework.",
      },
      {
        title: "SEO Optimization",
        description:
          "Achieving top search rankings and dramatically increasing organic traffic.",
      },
      {
        title: "Blog Management",
        description:
          "Creating and publishing professional blog articles monthly for ongoing customer acquisition.",
      },
      {
        title: "Google Ads Management",
        description:
          "Designing and running effective ad campaigns for immediate traffic results.",
      },
      {
        title: "UI/UX Design",
        description:
          "Beautiful, user-friendly designs focused on converting visitors into customers.",
      },
      {
        title: "AI Solutions",
        description:
          "Integrating practical AI features like smart automation and conversational assistants to boost efficiency.",
      },
      {
        title: "Mobile Applications",
        description:
          "Designing and developing high-performance iOS and Android apps with seamless user experiences.",
      },
      {
        title: "SaaS Applications",
        description:
          "Building scalable SaaS platforms with subscription workflows, dashboards, and secure multi-tenant architecture.",
      },
      {
        title: "Digital Marketing",
        description:
          "Executing data-driven campaigns across search, social, and content channels to generate qualified leads.",
      },
      {
        title: "Maintenance & Improvement",
        description:
          "Ongoing support after launch — quickly responding to new features and improvement requests.",
      },
    ],
  },

  // Process
  process: {
    sectionTitle: "How We Work",
    steps: [
      {
        title: "Free Consultation",
        description:
          "We listen to your current website challenges and propose improvement directions.",
      },
      {
        title: "Analysis & Proposal",
        description:
          "We conduct a detailed analysis and present a concrete improvement plan with estimates.",
      },
      {
        title: "Design & Development",
        description:
          "We build a high-quality website leveraging the latest technologies.",
      },
      {
        title: "Launch & Operations",
        description:
          "Ongoing support to drive growth even after your site goes live.",
      },
    ],
  },

  // Pricing
  pricing: {
    sectionTitle: "Services & Pricing",
    sectionDescription:
      "End-to-end services from website creation to operations — supporting your business growth",
    websiteDev: {
      title: "Website Development",
      description:
        "End-to-end service from UI/UX design to implementation and deployment",
      priceLabel: "Price",
      priceNote: "Varies based on project complexity",
      durationLabel: "Timeline",
      duration: "1–3 months",
      durationNote: "Adjusted based on project scope",
      includedLabel: "Included Services",
      includedItems: [
        "UI/UX Design",
        "Frontend Development",
        "Backend Development",
        "Deployment",
      ],
    },
    monthlyPlansTitle: "Monthly Support Plans",
    monthlyPlansDescription: "Ongoing improvement and growth support",
    popularBadge: "✨ Popular Plan ✨",
    plans: [
      {
        description:
          "Essential maintenance and operational support after website completion. Ensuring stable operations",
        features: [
          "Bug fix support",
          "Uptime monitoring",
          "Google Ads support (basic)",
          "2 new product pages/month",
          "2 blog articles/month",
          "Basic SEO support",
          "Up to 4 change requests",
          "Mobile speed optimization",
          "SLA/Response time: 48 hours",
        ],
        ctaText: "Get Started",
      },
      {
        description:
          "Ideal for businesses aiming for continuous improvement and growth. Enhanced support included",
        features: [
          "All Basic plan features",
          "Google Ads support (intermediate)",
          "4 new product pages/month",
          "4 blog articles/month",
          "Intermediate SEO support",
          "Up to 6 change requests",
          "UI/UX enhancements",
          "SLA/Response time: 24 hours",
        ],
        ctaText: "Get Started",
      },
      {
        description:
          "Supporting large-scale operations and strategic growth. Comprehensive service by a dedicated team",
        features: [
          "All Growth plan features",
          "Google Ads support (advanced)",
          "Advanced SEO support",
          "Unlimited change requests",
          "New feature implementation (LiveChat, etc.)",
          "Social media marketing support",
          "Strategic growth consulting",
          "24/7 support",
          "Dedicated project manager",
          "SLA/Response time: 2 hours",
        ],
        ctaText: "Contact Us",
      },
    ],
  },

  // CTA / Contact
  contact: {
    sectionTitle: "Transform Your Website Today",
    sectionDescription:
      "Let us show you your website's potential with a free consultation",
    companyLabel: "Company Name",
    nameLabel: "Your Name",
    emailLabel: "Email Address",
    websiteLabel: "Current Website URL (optional)",
    messageLabel: "Your Challenges & Requirements",
    submitButton: "Book Free Consultation",
    submitting: "Sending...",
  },

  // Form handler messages
  form: {
    sendingTitle: "Sending...",
    sendingMessage: "Please wait a moment.",
    successTitle: "Successfully Sent",
    successMessage:
      "Your message has been sent.<br />A confirmation email has been sent to you.<br />Please check your inbox.",
    errorTitle: "Error!",
    errorMessage: "An error occurred while sending",
    serverError: "A server error occurred. Please try again.",
  },

  // Footer
  footer: {
    tagline:
      "Transform your website to drive business growth. Professional design that attracts more customers.",
    quickLinks: "Quick Links",
    quickLinkItems: {
      services: "Services",
      pricing: "Pricing",
      transformation: "Case Studies",
      blog: "Blog",
      contact: "Contact",
    },
    legalTitle: "Legal",
    legalItems: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      commerce: "Commercial Disclosure",
    },
  },
};

export default en;
