import Image from "next/image";
import { Project } from "@/types/projects";
import { translations, type Locale } from "@/i18n";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
};

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = translations[locale];
  const projectTranslation = t.projects.items[project.id];
  return (
    <article className="group">
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-black/5">
        <Image
          src={project.images[0]}
          alt={projectTranslation.title}
          fill
          quality={60}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold tracking-tight">
          {projectTranslation.title}
        </h3>
        <p className="mt-1 text-gray-600">{projectTranslation.description}</p>
        <p className="mt-3 text-sm text-gray-500">
          {project.technologies.join(" · ")}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-300 hover:opacity-60"
        >
          {t.projects.visitWebsite}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}
