import type { Translation } from "./types";

export const en = {
  //------ Header & Footer
  header: {
    work: "Work",
    services: "Services",
    about: "About",
    contacts: "Contacts",
    prices: "Prices",
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
  //-------- How I work
  howIWork: {
    eyebrow: "How I Work",
    title: "A simple process, from idea to launch",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description:
          "We discuss your business, goals, target audience and ideas to understand what your website needs.",
      },
      {
        number: "02",
        title: "Free Concept",
        description:
          "Within 2–3 days, I create a preliminary website concept so you can see my approach before committing to the project.",
      },
      {
        number: "03",
        title: "Agreement & Deposit",
        description:
          "If you like the concept, we agree on the project scope, timeline and final price. A 20% deposit confirms the start of the project.",
      },
      {
        number: "04",
        title: "Design & Development",
        description:
          "I turn the approved concept into a fully functional, responsive website, keeping you updated throughout the process.",
      },
      {
        number: "05",
        title: "Review & Launch",
        description:
          "You review the finished website, I make the agreed adjustments, and once the remaining payment is completed, your website goes live.",
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

  //---------- FAQ

  faq: {
    eyebrow: "FAQ",
    title: "Got questions? I've got answers.",
    items: [
      {
        question: "How much does a website cost?",
        answer:
          "Website prices start at €300 for landing pages, €500 for business websites, and €400 for website redesigns. The final price depends on the project's scope, functionality, and specific requirements. I'll discuss your needs with you before confirming the price.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "It depends on the complexity of the project, the required content, and feedback during development. Once we discuss your requirements, I'll provide an estimated timeline before the project begins.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "Just an idea of what you need your website to achieve. We'll discuss your business, goals, and target audience together. If you already have text, images, branding, or examples you like, those can help too.",
      },
      {
        question: "Will my website work on mobile devices?",
        answer:
          "Yes. Every website I build is designed to work across mobile phones, tablets, and desktop screens, providing a consistent experience on different devices.",
      },
      {
        question: "Can I request changes during development?",
        answer:
          "Of course. Your feedback is part of the process. We'll agree on the project scope and review the website together. Requests that go beyond the agreed scope may affect the price and timeline.",
      },
      {
        question: "Do I need to pay for hosting and a domain separately?",
        answer:
          "Yes. Domain registration and hosting are separate ongoing costs, unless otherwise agreed. I can help you choose and set them up so your website is ready to go live.",
      },
      {
        question: "Can I see a concept before committing to the project?",
        answer:
          "Yes. I offer a free preliminary website concept within 2–3 days, so you can see my approach before deciding whether to proceed. This is an initial concept, not a fully developed website. The timeframe depends on receiving the information needed to get started.",
      },
    ],
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
