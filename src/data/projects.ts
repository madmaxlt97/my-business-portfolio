import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "event-masters",
    title: "Event Masters",
    description:
      "A modern website designed to help an event studio showcase its services and turn visitors into potential clients.",
    images: ["/event-masters/event-masters-hero.avif"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://event-masters-six.vercel.app/",
  },
  {
    id: "mano-servisas",
    title: "Mano servisas",
    description:
      "A service-focused website built to showcase an auto repair shop and make booking effortless.",
    images: ["/mano-servisas/mano-servisas-hero.avif"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://mano-servisas.vercel.app/",
  },
];
