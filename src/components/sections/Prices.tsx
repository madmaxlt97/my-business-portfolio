import Container from "../ui/Container";
import { translations, type Locale } from "@/i18n";
import PriceItem from "../ui/PriceItem";

type PricesProps = {
  locale: Locale;
};

export default function Prices({ locale }: PricesProps) {
  const t = translations[locale];

  return (
    <section id="prices" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {t.prices.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {t.prices.title}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.prices.items.map((price) => (
            <PriceItem key={price.title} price={price} />
          ))}
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <h3 className="text-lg font-medium">{t.prices.includes.title}</h3>

          <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.prices.includes.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <span className="mt-0.5 text-slate-900">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-6 text-slate-500">
          {t.prices.note}
        </p>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.prices.cta.title}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
            {t.prices.cta.description}
          </p>
          <a
            href="mailto:hello@maxsbuilds.com"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <span>{t.prices.cta.button}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
