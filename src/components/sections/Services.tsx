import Container from "../ui/Container";
import { services } from "@/data/services";
import ServiceItem from "../ui/ServiceItem";
import { translations, type Locale } from "@/i18n";

type ServiceProps = {
  locale: Locale;
};

export default function Services({ locale }: ServiceProps) {
  const t = translations[locale];
  return (
    <section id="services" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {t.services.title}
          </h2>
        </div>
        <div>
          {t.services.items.map((service) => (
            <ServiceItem key={service.number} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
