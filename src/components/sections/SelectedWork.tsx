import ComingSoonCard from "../ui/ComingSoonCard";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";
import { translations, type Locale } from "@/i18n";

type SelectedWorkProps = {
  locale: Locale;
};

export default function SelectedWork({ locale }: SelectedWorkProps) {
  const t = translations[locale];

  return (
    <section id="work" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {t.selectedWork.eyebrow}
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {t.selectedWork.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} />
          ))}

          <ComingSoonCard locale={locale} />
        </div>
      </Container>
    </section>
  );
}
