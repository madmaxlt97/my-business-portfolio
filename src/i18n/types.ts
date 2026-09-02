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
