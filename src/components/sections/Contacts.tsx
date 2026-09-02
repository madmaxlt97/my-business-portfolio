import Container from "../ui/Container";
import { translations, type Locale } from "@/i18n";

type ContactProps = {
  locale: Locale;
};

export default function Contacts({ locale }: ContactProps) {
  const t = translations[locale];

  return (
    <section id="contacts" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {t.contact.eyebrow}
          </p>

          <h2 className="mt-6 text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-9xl">
            {t.contact.title}
            <br />
            {t.contact.title2}
          </h2>

          <p className="mt-10 max-w-lg text-lg leading-relaxed text-gray-600 sm:text-xl">
            {t.contact.description}
          </p>

          <a
            href="mailto:nikolajevmax.workspace@gmail.com"
            className="group mt-10 inline-flex items-center rounded-full gap-3 bg-black px-7 py-4 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
          >
            <span>{t.contact.button}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
