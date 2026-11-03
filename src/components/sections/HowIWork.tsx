import Container from "../ui/Container";
import { translations, type Locale } from "@/i18n";

type HowIWorkProps = {
  locale: Locale;
};

export default function HowIWork({ locale }: HowIWorkProps) {
  const t = translations[locale];

  return (
    <section id="how-i-work" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {t.howIWork.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {t.howIWork.title}
          </h2>
        </div>
        <div>
          {t.howIWork.steps.map((step) => (
            <div
              className="group grid border-t border-gray-200 px-4 py-8 transition-colors duration-300 hover:bg-black/[0.02] md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:gap-8"
              key={step.number}
              title={step.title}
            >
              <span className="text-sm text-gray-500">{step.number}</span>
              <h3 className="text-2xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 max-w-md text-gray-600 md:mt-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
