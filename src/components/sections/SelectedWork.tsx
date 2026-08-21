import ComingSoonCard from "../ui/ComingSoonCard";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section id="work" className="py-14 sm:py-16 lg:py-20 border-red border-1">
      <Container>
        <div>
          <p className="mb-4 uppercase tracking-widest text-gray-500">
            Selected works
          </p>

          <h2>A selection of projects I've build - and what's coming next</h2>
        </div>

        <div>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          <ComingSoonCard />
        </div>
      </Container>
    </section>
  );
}
