import Container from "../ui/Container";
import { services } from "@/data/services";
import ServiceItem from "../ui/ServiceItem";

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Services
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            What can I build for your business
          </h2>
        </div>
        <div>
          {services.map((service) => (
            <ServiceItem key={service.number} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
