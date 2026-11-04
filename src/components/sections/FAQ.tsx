import Container from "../ui/Container";
import FAQItem from "../ui/FAQItem";
import { translations, type Locale } from "@/i18n";

type FAQProps = {
  locale: Locale;
};

export default function FAQ({ locale }: FAQProps) {
  const t = translations[locale];

  return (
    <section id="faq" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {t.faq.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {t.faq.title}
          </h2>
        </div>
        <div>
          {t.faq.items.map((item, index) => (
            <FAQItem key={index} faq={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
