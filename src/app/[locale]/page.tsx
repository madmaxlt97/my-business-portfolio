import { notFound } from "next/navigation";

import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";

import { translations, type Locale } from "@/i18n";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const isLocale = (locale: string): locale is Locale => locale in translations;

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = translations[locale];

  return (
    <>
      <Hero locale={locale} />
      <SelectedWork locale={locale} />
      <Services locale={locale} />
      <About locale={locale} />
      <Contacts locale={locale} />
    </>
  );
}
