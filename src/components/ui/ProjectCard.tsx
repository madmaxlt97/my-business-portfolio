import Image from "next/image";
import { Project } from "@/types/projects";

type projectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: projectCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-black/5">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          quality={60}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-gray-600">{project.description}</p>
        <p className="mt-3 text-sm text-gray-500">
          {project.technologies.join(" · ")}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-300 hover:opacity-60"
        >
          Visit website
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}
