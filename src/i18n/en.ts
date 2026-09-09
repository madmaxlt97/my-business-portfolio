import type { Translation } from "./types";

export const en = {
  //------ Header & Footer
  header: {
    work: "Work",
    services: "Services",
    about: "About",
    contacts: "Contacts",
  },

  //------ Hero section
  hero: {
    eyebrow: "Freelance Web Developer",
    title: "Your business deserves a better website",
    description:
      "From first idea to final pixel, I build fast, modern websites designed around your business.",
    button: "Let's work together",
  },
  //------ Selected Works section
  selectedWork: {
    eyebrow: "Selected works",
    title: "A selection of projects I've built - and what's coming next",
  },
  //------- Project cards
  projects: {
    visitWebsite: "Visit website",

    items: {
      "event-masters": {
        title: "Event Masters",
        description:
          "A modern website designed to help an event studio showcase its services and turn visitors into potential clients.",
      },

      "mano-servisas": {
        title: "Mano servisas",
        description:
          "A service-focused website built to showcase an auto repair shop and make booking effortless.",
      },
    },
  },

  //--------- Coming Soon Card
  comingSoon: {
    nextProject: "Next project",
    title: "Coming soon",
    descriptionTitle: "Something new is coming",
    description: "Currently in development.",
  },
  //--------- Service section
  services: {
    eyebrow: "Services",
    title: "What can I build for your business",

    items: [
      {
        number: "01",
        title: "Business Websites",
        description:
          "Modern websites for companies, services and personal brands.",
      },
      {
        number: "02",
        title: "Landing Pages",
        description:
          "Focused pages designed around a specific product, service or campaign.",
      },
      {
        number: "03",
        title: "Website Redesign",
        description:
          "Turn an outdated website into a modern, fast and responsive experience.",
      },
    ],
  },
  //-------- Pricing
  prices: {
    eyebrow: "Pricing",
    title: "Simple pricing. No surprises.",

    items: [
      {
        title: "Landing Pages",
        price: "From €300",
        description:
          "Focused pages for a specific product, service or campaign.",
      },
      {
        title: "Business Websites",
        price: "From €500",
        description:
          "Modern websites built around your business, your customers and your goals.",
      },
      {
        title: "Website Redesign",
        price: "From €400",
        description:
          "Give an outdated website a cleaner design, better UX and stronger performance.",
      },
    ],
    includes: {
      title: "Every website includes:",
      items: [
        "Custom responsive design",
        "Mobile optimization",
        "Contact form",
        "Basic SEO setup",
        "Performance optimization",
        "Deployment",
        "Direct communication with the developer",
      ],
    },
    note: "Final pricing depends on the scope and requirements of your project.",
    cta: {
      title: "Not sure what you need?",
      description:
        "Tell me about your business and I'll recommend the right approach.",
      button: "Let's talk",
    },
  },
  //--------- About section
  about: {
    eyebrow: "Built for business",
    title:
      "I don't just build websites. I build digital experiences around the business behind them.",
    description:
      " I've worked directly with both customers and businesses, so I understand that a website has a job to do — not just look good.",

    description2:
      "Every business is different. That's why I don't believe in one-size-fits-all websites. I take the time to understand what you do, who you're trying to reach, and what your website needs to achieve.",

    description3:
      "Whether you need a simple landing page or a complete business website, I focus on clear structure, thoughtful design and performance — so your visitors know what you offer and what to do next.",
  },

  //---------- Contact (CTA) section
  contact: {
    eyebrow: "Let's work together",
    title: "Have a project in mind?",
    title2: "Let's build it.",
    description:
      "Have an idea for the website? Tell me about it and let's see what we can build together.",
    button: "Start a project",
  },
} satisfies Translation;
