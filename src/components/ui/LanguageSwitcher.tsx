"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const segments = pathname.split("/");
  const currentLocale = segments[1] === "lt" ? "lt" : "en";

  const otherLocale = currentLocale === "en" ? "lt" : "en";

  segments[1] = otherLocale;

  const targetPath = segments.join("/") || `/${otherLocale}`;

  return (
    <Link
      href={targetPath}
      className="text-sm font-medium transition-opacity duration-300 hover:opacity-60"
    >
      {otherLocale.toUpperCase()}
    </Link>
  );
}
