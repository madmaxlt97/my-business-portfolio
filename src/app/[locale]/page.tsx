import { notFound } from "next/navigation";
import { Metadata } from "next";

import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";

import { translations, type Locale } from "@/i18n";
import Prices from "@/components/sections/Prices";
import { en } from "@/i18n/en";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const isLocale = (locale: string): locale is Locale => locale in translations;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }
  if (locale === "en") {
    return {
      title: "Freelance Web Developer in Vilnius | Max's Builds",
      description:
        "Freelance web developer in Vilnius building fast, modern websites for businesses and personal brands.",
      alternates: {
        canonical: "/en",
      },
    };
  } else {
    return {
      title: "Freelance Web Developer in Vilnius | Max's Builds",
      description:
        "Freelance web developer Vilniuje, kuriantis greitas, modernias interneto svetaines verslui ir asmeniniams prekių ženklams.",
      alternates: {
        canonical: "/lt",
      },
    };
  }
}

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
      <Prices locale={locale} />
      <About locale={locale} />
      <Contacts locale={locale} />
    </>
  );
}
