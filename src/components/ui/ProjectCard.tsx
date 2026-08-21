import { Project } from "@/types/projects";

type projectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: projectCardProps) {
  return (
    <article>
      <div>
        <h3>{project.title}</h3>
      </div>
    </article>
  );
}
