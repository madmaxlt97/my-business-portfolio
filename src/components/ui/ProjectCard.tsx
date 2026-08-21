import Image from "next/image";
import { Project } from "@/types/projects";

type projectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: projectCardProps) {
  return (
    <article className="group border-1 border-red-500">
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.technologies}</p>
        </div>
      </div>
    </article>
  );
}
