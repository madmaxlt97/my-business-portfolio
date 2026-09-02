"use client";
import Link from "next/link";
import { scrollToSection } from "@/utils/navigation";
import { translations, type Locale } from "@/i18n";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();
  const locale: Locale = pathName.startsWith("/lt") ? "lt" : "en";
  const t = translations[locale];

  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold tracking-tight cursor-pointer"
          >
            MAX'S BUILDS
          </button>
          <p className="mt-2 text-sm text-gray-500">© 2026 Max Nikolajev</p>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <button
            onClick={() => scrollToSection("work")}
            className="transition-colors hover:text-black cursor-pointer"
          >
            {t.header.work}
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="transition-colors hover:text-black cursor-pointer"
          >
            {t.header.services}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="transition-colors hover:text-black cursor-pointer"
          >
            {t.header.about}
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="transition-colors hover:text-black cursor-pointer"
          >
            {t.header.contacts}
          </button>
        </div>
      </div>
    </footer>
  );
}
