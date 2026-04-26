import type { Translations } from "./types";
import type { LocalizedPageContent } from "@/i18n/translations/types";

const en: Translations = {
  // Header nav
  nav: {
    home: "Home",
    problems: "Challenges",
    transformation: "Results",
    visualExamples: "Projects",
    services: "Services",
    process: "How We Work?",
    pricing: "Pricing",
    contact: "Contact",
    blog: "Blog",
    templates: "Templates",
    businessOverview: "Business Overview",
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
  },

  templatesPage: {
    title: "Our Templates",
    subtitle: "Explore premium website templates crafted by Nipporia. Each template is built with modern design principles and cutting-edge technology.",
    viewLive: "View Live",
    category: "Category",
    items: [
      {
        title: "LuxEstate — Real Estate",
        description: "A luxury real estate platform with dark, premium aesthetics. Features property search with filters, elegant typography, and gold/beige accents on a deep charcoal background.",
        category: "Real Estate",
        tags: ["HTML/CSS/JS", "Dark Theme", "Responsive", "Luxury"],
      },
      {
        title: "JSOMS — Medical Portal Redesign",
        description: "A professional medical portal redesign for the Japanese Society of Oral and Maxillofacial Surgeons. Clean institutional layout with modern navigation and hero image slider.",
        category: "Medical / Healthcare",
        tags: ["HTML/CSS/JS", "Light Theme", "Institutional", "Redesign"],
      },
    ],
  },

  // Hero
  hero: {
    title: "high quality software solutions to bring you profit.",
    titleTagline: "Exclusive opportunities for your business, designed with precision, and long-term value",
    subtitle: "Maximize traffic and sales with Mobile Apps, Websites, SaaS, UI/UX Design, SEO, and Digital Marketing. Free consultation (60 min) - Improvement plan within 7 days.",
    cta: "",
    primaryButton: "Free Consultation",
    secondaryButton: "Explore Projects",
    stickyConsultation: "Free Consultation",
    stickyPortfolio: "Sample Projects",
    accepting: "Available",
    services: ["Mobile Apps", "Websites", "AI Solutions", "UI/UX Design"],
  },

  heroWorkflow: {
    steps: [
      { label: "Online Meeting", notification: "Meeting started!", detail: "4 members joined" },
      { label: "Requirements", notification: "Specs defined!", detail: "Priority: High" },
      { label: "UI/UX Design", notification: "Designs ready!", detail: "Mobile + Desktop" },
      { label: "Client Feedback", notification: "Feedback received!", detail: "3 comments" },
      { label: "Development", notification: "Building product...", detail: "Progress: 67%" },
      { label: "Client Review", notification: "Approved!", detail: "Rating: ★★★★★" },
      { label: "QA Testing", notification: "All tests passed!", detail: "Coverage: 94%" },
      { label: "Deployment", notification: "Launched!", detail: "Status: Live" },
    ],
  },

  // Problems
  problems: {
    sectionTitle: "Challenges & Solutions",
    problemLabel: "Challenge",
    solutionLabel: "Solution",
    items: [
      {
        problem:
          "You have a problem you want to solve with generative AI, but you're not sure how to approach it…",
        solution: {
          title: "Clarifying the Right Approach",
          description:
            "Our experts unpack the background of your challenge and the underlying user needs to clarify *how* it should be solved. Even starting from a vague problem statement, we deepen the requirements and select the right technology to translate it into a concrete, optimal approach.",
        },
      },
      {
        problem:
          "You have an idea of the system you want to build, but aren't confident it's the right one…",
        solution: {
          title: "PoC Design That Maximizes Success",
          description:
            "Drawing on extensive generative AI development experience, we validate feasibility from multiple angles. Through UX flows and MVP definition, we design a PoC that clarifies what to build and how far to go — minimizing the risk of project failure.",
        },
      },
      {
        problem:
          "You want to keep initial costs down, but the estimates always blow the budget…",
        solution: {
          title: "Optimized Cost Design for a Lean Start",
          description:
            "Milestone-based phasing, small-scale PoC, co-development — we propose the cost structure that fits your situation. Keep upfront investment low and build out your generative AI system in steady, sustainable steps.",
        },
      },
    ],
  },

  // Transformation
  transformation: {
    sectionTitle: "Client Results",
    before: "Before",
    after: "After",
    metrics: {
      monthlyLeads: "Monthly Leads",
      acquisitionCost: "Customer Acquisition Cost",
      conversionRate: "Conversion Rate",
      digitalChannels: "Digital Channels",
      automationRate: "Process Automation",
    },
  },

  // Visual Transformation
  visualTransformation: {
    sectionTitle: "Our Projects",
    description: "See real projects we've delivered for our clients",
    prevProject: "Previous project",
    nextProject: "Next project",
    laptop: "PC",
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
        title: "UI/UX Design",
        description:
          "Beautiful, user-friendly designs focused on converting visitors into customers.",
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
        title: "AI Solutions",
        description:
          "Integrating practical AI features like smart automation and conversational assistants to boost efficiency.",
      },
      {
        title: "Digital Marketing",
        description:
          "Executing data-driven campaigns across search, social, and content channels to generate qualified leads.",
      },
      {
        title: "SEO Optimization",
        description:
          "Achieving top search rankings and dramatically increasing organic traffic.",
      },
      {
        title: "Google Ads Management",
        description:
          "Designing and running effective ad campaigns for immediate traffic results.",
      },
      {
        title: "Blog Management",
        description:
          "Creating and publishing professional blog articles monthly for ongoing customer acquisition.",
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
          "We listen to your business challenges and goals, and propose the optimal digital strategy.",
      },
      {
        title: "Analysis & Proposal",
        description:
          "We analyze your challenges in detail and present a concrete plan combining the right services, with estimates.",
      },
      {
        title: "Design & Development",
        description:
          "We build the optimal solution — web, app, AI, or more — leveraging the latest technologies.",
      },
      {
        title: "Delivery & Operations",
        description:
          "Ongoing support and improvement proposals to drive business growth after delivery.",
      },
    ],
  },

  // Pricing
  pricing: {
    sectionTitle: "Plans & Pricing",
    sectionDescription:
      "From development projects to ongoing operations — one-stop support for your digital growth",
    websiteDev: {
      title: "Project Development",
      description:
        "End-to-end delivery for websites, apps, SaaS, and AI solutions — from planning to deployment",
      priceLabel: "Price",
      priceNote: "Varies based on project complexity",
      durationLabel: "Timeline",
      duration: "1–3 months",
      durationNote: "Adjusted based on project scope",
      includedLabel: "Included Services",
      includedItems: [
        "UI/UX Design",
        "Frontend & Backend Development",
        "Testing & QA",
        "Deployment & Handover",
      ],
      ctaText: "Get Started",
    },
    monthlyPlansTitle: "Monthly Support Plans",
    monthlyPlansDescription: "Ongoing improvement and growth support",
    popularBadge: "✨ Popular Plan ✨",
    plans: [
      {
        description:
          "Essential maintenance and operational support after project delivery. Ensuring stable operations",
        features: [
          "Bug fix support",
          "Uptime monitoring",
          "Google Ads support (basic)",
          "2 content & feature additions/month",
          "2 blog articles/month",
          "Basic SEO support",
          "Up to 4 change requests",
          "Performance optimization",
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
          "4 content & feature additions/month",
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
    customizePlan: {
      title: "Or Customize Your Own Plan !",
      description: "Contact Us To Customize A Plan That Fits With Your Goals",
      ctaText: "Contact Us",
    },
  },

  // CTA / Contact
  contact: {
    sectionTitle: "Start Your Digital Transformation Today",
    sectionDescription:
      "Let us propose the best digital strategy for your business — with a free consultation",
    companyLabel: "Company Name",
    nameLabel: "Your Name",
    emailLabel: "Email Address",
    websiteLabel: "Company Website URL (optional)",
    messageLabel: "What can we help you with?",
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
    tagline: "high quality software solutions to bring you profit.",
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
    tableOfContents: "Table of Contents",
  },
  requirementsSheet: {
    tag: "Free template",
    title: "Requirements Brief Sheet",
    description:
      "A ready-made template to organize your challenges, users, required features, timeline, and budget before reaching out to a development company. Review the preview below, then download to fill it in.",
    viewOnly: "View only",
    viewOnlyNote:
      "This preview is view-only. You cannot edit or copy the document content. Please download the file to fill it in.",
    downloadButton: "Download",
    pageLabel: "Page",
    previous: "Previous",
    next: "Next",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    modal: {
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      submit: "Download",
      submitting: "Sending…",
      cancel: "Cancel",
      privacyNote:
        "Your information is handled under our privacy policy and will not be sold or shared for marketing purposes.",
      successTitle: "Download started",
      successMessage:
        "Your file should begin downloading automatically. If it does not, please try again.",
      errorMessage:
        "Something went wrong. Please try again in a moment.",
      invalidEmail: "Please enter a valid email address.",
      close: "Close",
    },
  },
  businessOverview: {
    pageTitle: "Business Overview",
    heroDescription:
      "Founded in 2024. We provide end-to-end support for AI, Web, App, and SaaS development — from strategic planning to operational improvement. Accelerating business growth through the power of technology.",
    breadcrumbHome: "Home",
    breadcrumbBusinessOverview: "Business Overview",
    companyName: { label: "Business Name", value: "Nipporia" },
    established: { label: "Established", value: "April 2024" },
    capital: { label: "Capital", value: "" },
    representative: {
      label: "Representative",
      value: "Mohamad Ghaith Alzin",
    },
    employees: { label: "Employees", value: "" },
    business: {
      label: "Business Activities",
      values: [
        "UI/UX Design",
        "Mobile App Development",
        "SaaS Application Development",
        "AI Solution Implementation",
        "Digital Marketing",
        "SEO Optimization",
        "Google Ads Management",
        "Blog Management",
        "Website, App, SaaS & AI Design, Development & Engineering",
      ],
    },
    address: {
      label: "Headquarters",
      postalCode: "〒346-0003",
      value: "1-9-4-902 Kukichuo, Kuki City, Saitama, Japan",
    },
  },
  notFoundPage: {
    message: "The page you are looking for could not be found.",
    backHome: "Back to Home",
  },
};

export const enPageContent: LocalizedPageContent = {
  layout: {
    titleDefault:
      "Nipporia | Software Development, Apps, SaaS, AI & Digital Marketing",
    titleTemplate: "%s | Nipporia",
    description:
      "Websites, mobile apps, SaaS, AI solutions, SEO, and digital marketing — all in one place. Fast, high-quality development to grow your business.",
    applicationName: "Nipporia",
    keywords: [
      "software development",
      "UI UX improvement",
      "Next.js development",
      "SEO",
      "Google Ads",
      "SaaS development",
      "AI solutions",
      "digital marketing",
      "mobile app development",
    ],
    ogTitle:
      "Nipporia | Software Development, Apps, SaaS, AI & Digital Marketing",
    ogDescription:
      "Websites, apps, SaaS, and AI solutions — all in one place. Fast, quality development for business growth.",
    ogImageAlt: "Nipporia OG image",
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
  templates: {
    title: "Templates | Nipporia",
    description: "Explore premium website templates crafted by Nipporia. Modern design, cutting-edge technology.",
  },
  businessOverview: {
    metadataTitle: "Business Overview | Nipporia",
    metadataDescription: "Business overview for Nipporia. Providing UI/UX design, mobile app development, SaaS development, AI solutions, and digital marketing.",
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
