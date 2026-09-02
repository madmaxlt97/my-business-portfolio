"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { scrollToSection } from "@/utils/navigation";
import { translations, type Locale } from "@/i18n";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Header() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const locale: Locale = pathName.startsWith("/lt") ? "lt" : "en";

  const t = translations[locale];

  const links = [
    { id: "work", label: t.header.work },
    { id: "services", label: t.header.services },
    { id: "about", label: t.header.about },
    { id: "contacts", label: t.header.contacts },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between py-2 px-4">
        <Link
          href={`/${locale}`}
          className="whitespace-nowrap text-[16px] font-semibold sm:text-[20px]"
        >
          MAX'S BUILDS
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-[10px] min-[340px]:text-[12px] sm:text-[16px] transition-all duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            );
          })}
          <LanguageSwitcher />
        </div>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl md:hidden"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-gray-200 px-4 pb-4 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMenuOpen(false);
                }}
                className="border-b border-gray-100 py-4 text-sm transition-colors last:border-b-0"
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-gray-100 pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
