import { Service } from "@/types/services";

type serviceItemProps = {
  service: Service;
};

export default function ServiceItem({ service }: serviceItemProps) {
  return (
    <article className="group grid border-t border-gray-200 px-4 py-8 transition-colors duration-300 hover:bg-black/[0.02] md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:gap-8">
      <span className="text-sm text-gray-500">{service.number}</span>
      <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
      <p className="mt-3 max-w-md text-gray-600 md:mt-0">
        {service.description}
      </p>
      <span className="mt-6 text-xl transition-transform duration-300 group-hover:translate-x-2 md:mt-0">
        →
      </span>
    </article>
  );
}
