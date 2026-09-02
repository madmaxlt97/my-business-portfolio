import { translations, type Locale } from "@/i18n";

type ComingSoonProps = {
  locale: Locale;
};

export default function ComingSoonCard({ locale }: ComingSoonProps) {
  const t = translations[locale];
  return (
    <article className="group">
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-3xl bg-gray-100 border border-black/5 transition-colors duration-500 group-hover:bg-gray-200">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-600">
            {t.comingSoon.nextProject}
          </p>

          <h3 className="mt-2 text-2xl font-semibold">{t.comingSoon.title}</h3>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold tracking-tight">
          {t.comingSoon.descriptionTitle}
        </h3>
        <p className="mt-1 text-gray-600">{t.comingSoon.description}</p>
      </div>
    </article>
  );
}
