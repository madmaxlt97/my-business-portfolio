import Container from "../ui/Container";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-16">
          <p className="mb-4 uppercase tracking-widest text-gray-500">
            Our services
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            What can I build for your business
          </h2>
        </div>
        <div>
          {services.map((service) => (
            <div
              key={service.number}
              className="grid border-t border-gray-300 py-8 md:grid-cols-[80px_1fr_1fr] md:gap-8"
            >
              <span className="text-sm text-gray-400">{service.number}</span>
              <h3 className="text-2xl font-medium tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md text-gray-600 md:mt-0">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
