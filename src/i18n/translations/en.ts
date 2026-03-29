import type { Translations } from "./types";
import type { LocalizedPageContent } from "@/i18n/translations/types";

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
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
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
    laptop: "Laptop",
    phone: "Phone",
    viewLiveSite: "View live site",
    loadingPreview: "Loading preview...",
    desktopPreview: "Desktop preview",
    mobilePreview: "Mobile preview",
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
  languageSwitcher: {
    switcher: "Language switcher",
    selectLanguage: "Select language",
    switchTo: "Switch to",
    options: {
      ja: "Japanese",
      en: "English",
      ar: "Arabic",
    },
  },
  blogUi: {
    allBlogsTitle: "All Blogs",
    allBlogsAria: "All blog posts",
    blogPost: "Blog post",
    untitled: "Untitled",
    noDescription: "No description available",
    noDate: "No date",
    noTags: "No tags",
    blogImage: "Blog image",
    readPost: "Read blog post",
  },
  notFoundPage: {
    message: "The page you are looking for could not be found.",
    backHome: "Back to Home",
  },
};

export const enPageContent: LocalizedPageContent = {
  layout: {
    titleDefault:
      "Website Transformation Service | Turn low-performing websites into professional assets",
    titleTemplate: "%s | Website Transformation Service",
    description:
      "We transform poorly designed, low-traffic websites into professional platforms using modern Next.js and SEO strategies.",
    applicationName: "Website Transformation Service",
    keywords: [
      "website optimization",
      "UI UX improvement",
      "Next.js development",
      "SEO",
      "Google Ads",
      "web design",
      "site redesign",
    ],
    ogTitle:
      "Website Transformation Service | Turn low-performing websites into professional assets",
    ogDescription:
      "Transform poorly designed, low-traffic websites into professional websites with modern technologies.",
    ogImageAlt: "Website Transformation Service OG image",
  },
  notFound: {
    title: "404 - Page Not Found",
    description:
      "Sorry, the page you are looking for could not be found. Visit our homepage for more information.",
  },
  blogs: {
    title: "All Blogs",
    description: "Browse all blog posts about our project.",
  },
  missingBlog: {
    title: "Not Found",
    description: "This blog post does not exist.",
  },
  privacyPolicy: {
    metadataTitle: "Privacy Policy | Nipporia",
    metadataDescription:
      "Learn how Nipporia collects, uses, and protects your personal information.",
    pageTitle: "Privacy Policy",
    sections: [
      {
        title: "1. Collection of Personal Information",
        paragraphs: [
          "When you use our contact form, we may collect personal information such as your name, email address, and company name. We use this information to respond to inquiries and provide our services.",
        ],
      },
      {
        title: "2. Purpose of Use",
        paragraphs: [
          "We use collected personal information for the following purposes:",
        ],
        listItems: [
          "Responding to inquiries",
          "Providing and improving services",
          "Sending updates about new services and announcements",
          "Contacting you regarding contracts and billing",
        ],
      },
      {
        title: "3. Disclosure to Third Parties",
        paragraphs: [
          "We do not disclose personal information to third parties without your consent, except where required by law. We may share necessary information with trusted service providers for operational purposes.",
        ],
      },
      {
        title: "4. Information Management",
        paragraphs: [
          "We keep personal information accurate and up to date, and take appropriate security measures to prevent unauthorized access, loss, damage, falsification, or leakage.",
        ],
      },
      {
        title: "5. Use of Cookies",
        paragraphs: [
          "We use cookies to improve user experience and analyze website usage. You can disable cookies in your browser settings, but some features may not function properly.",
        ],
      },
      {
        title: "6. Contact",
        paragraphs: [
          "For inquiries about personal data handling, please contact us through the contact form on this website.",
        ],
      },
      {
        title: "7. Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy when necessary. The revised policy becomes effective when published on this website.",
        ],
      },
    ],
    establishedDate: "Established: January 1, 2025",
    updatedDate: "Last updated: February 1, 2025",
  },
  termsOfService: {
    metadataTitle: "Terms of Service | Nipporia",
    metadataDescription:
      "Read the terms governing the use of Nipporia services.",
    pageTitle: "Terms of Service",
    sections: [
      {
        title: "Article 1 (Scope)",
        paragraphs: [
          'These Terms define the conditions for using all services provided by our company (the "Service"). Users agree to use the Service in accordance with these Terms.',
        ],
      },
      {
        title: "Article 2 (Service Details)",
        paragraphs: ["We provide the following services:"],
        listItems: [
          "Website planning, design, and development",
          "SEO and web marketing support",
          "Website maintenance and operation support",
          "Google Ads operation support",
          "Other related services",
        ],
      },
      {
        title: "Article 3 (Contract Formation)",
        paragraphs: [
          "A service contract is established when we accept a customer's application. Contract details are governed by the applicable individual agreement or quotation.",
        ],
      },
      {
        title: "Article 4 (Fees and Payment)",
        paragraphs: [
          "Service fees are stated in the individual agreement or quotation. Payment terms are as follows:",
        ],
        listItems: [
          "Initial production fee: 50% at contract signing, 50% upon delivery",
          "Monthly support fee: billed monthly, payable by the end of the following month",
          "Payment methods: bank transfer or credit card",
        ],
      },
      {
        title: "Article 5 (Prohibited Conduct)",
        paragraphs: [
          "Users must not engage in the following actions when using the Service:",
        ],
        listItems: [
          "Violating laws or public order and morals",
          "Infringing intellectual property rights of our company or third parties",
          "Interfering with the operation of our services",
          "Providing false information",
          "Any other conduct deemed inappropriate by our company",
        ],
      },
      {
        title: "Article 6 (Intellectual Property)",
        paragraphs: [
          "Copyright of deliverables created through the Service transfers to the customer after full payment is completed. However, programs and libraries independently developed by our company remain our property.",
        ],
      },
      {
        title: "Article 7 (Disclaimer)",
        paragraphs: [
          "We make no guarantees regarding completeness, accuracy, reliability, or usefulness of the Service. We are not liable for damages resulting from use of the Service, except in cases of willful misconduct or gross negligence by our company.",
        ],
      },
      {
        title: "Article 8 (Termination)",
        paragraphs: [
          "We may terminate a contract without prior notice if a customer violates these Terms. In such cases, fees already paid are non-refundable.",
        ],
      },
      {
        title: "Article 9 (Changes to Terms)",
        paragraphs: [
          "We may revise these Terms without prior notice when deemed necessary. Revised Terms become effective when posted on this website.",
        ],
      },
      {
        title: "Article 10 (Governing Law and Jurisdiction)",
        paragraphs: [
          "These Terms are governed by the laws of Japan. Any dispute related to the Service shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.",
        ],
      },
    ],
    establishedDate: "Established: January 1, 2025",
    updatedDate: "Last updated: February 1, 2025",
  },
  commerceDisclosure: {
    metadataTitle: "Commercial Disclosure | Nipporia",
    metadataDescription:
      "Information provided in accordance with Japan's Act on Specified Commercial Transactions.",
    pageTitle: "Commercial Disclosure (Specified Commercial Transactions Act)",
    rows: [
      { label: "Business Name", lines: ["Nipporia"] },
      { label: "Representative", lines: ["Mohamad Ghaith Alzin"] },
      {
        label: "Address",
        lines: ["1-9-4-902 Kukichuo, Kuki City, Saitama, Japan"],
      },
      { label: "Phone Number", lines: ["(+81) 070-8905-8857"] },
      { label: "Email Address", lines: ["info@nipporia.com"] },
      {
        label: "Service Fees",
        lines: [
          "[Initial Production Fee]",
          "JPY 1,000,000 - 3,000,000 (tax included)",
          "[Monthly Support Fee]",
          "Basic: JPY 250,000 / month (tax included)",
          "Growth: JPY 350,000 / month (tax included)",
          "Enterprise: JPY 500,000 / month (tax included)",
        ],
      },
      {
        label: "Additional Costs",
        listItems: [
          "Domain registration and renewal fees (actual cost)",
          "Server usage fees (actual cost)",
          "Third-party service fees (actual cost)",
          "Bank transfer fees (borne by customer)",
        ],
      },
      {
        label: "Payment Methods",
        listItems: ["Bank transfer", "Credit card (Stripe)"],
      },
      {
        label: "Payment Timing",
        lines: [
          "[Initial Production Fee]",
          "50% at contract signing, 50% upon delivery",
          "[Monthly Support Fee]",
          "Billed monthly, payable by the end of the following month",
        ],
      },
      {
        label: "Service Delivery Timing",
        lines: [
          "Services are provided after contract formation and by the separately agreed delivery date.",
          "Initial production typically takes around 1 to 3 months.",
        ],
      },
      {
        label: "Returns and Cancellation",
        lines: [
          "[Before Production Starts]",
          "Full refund is available within 7 days after contract signing.",
          "[After Production Starts]",
          "Fees will be charged according to actual production progress.",
          "[Monthly Support]",
          "Please submit cancellation by the end of the month before the intended cancellation month.",
        ],
      },
      {
        label: "System Requirements",
        lines: ["[Recommended Browsers]"],
        listItems: [
          "Google Chrome (latest version)",
          "Safari (latest version)",
          "Firefox (latest version)",
          "Microsoft Edge (latest version)",
        ],
      },
    ],
    establishedDate: "Established: January 1, 2025",
    updatedDate: "Last updated: February 1, 2025",
  },
};

export default en;
