export type ProjectTranslation = {
  title: string;
  description: string;
};

export type ProjectsTranslation = {
  visitWebsite: string;
  items: Record<string, ProjectTranslation>;
};

export type Translation = {
  header: {
    work: string;
    services: string;
    prices: string;
    about: string;
    contacts: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };

  selectedWork: {
    eyebrow: string;
    title: string;
  };

  projects: ProjectsTranslation;

  comingSoon: {
    nextProject: string;
    title: string;
    descriptionTitle: string;
    description: string;
  };

  services: {
    eyebrow: string;
    title: string;
    items: {
      number: string;
      title: string;
      description: string;
    }[];
  };

  prices: {
    eyebrow: string;
    title: string;
    items: {
      title: string;
      price: string;
      description: string;
    }[];
    includes: {
      title: string;
      items: string[];
    };
    note: string;
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  about: {
    eyebrow: string;
    title: string;
    description: string;
    description2: string;
    description3: string;
  };

  contact: {
    eyebrow: string;
    title: string;
    title2: string;
    description: string;
    button: string;
  };
};
