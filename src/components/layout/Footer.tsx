"use client";
import Link from "next/link";
import { scrollToSection } from "@/utils/navigation";

export default function Footer() {
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
            Work
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="transition-colors hover:text-black cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="transition-colors hover:text-black cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="transition-colors hover:text-black cursor-pointer"
          >
            Contacts
          </button>
        </div>
      </div>
    </footer>
  );
}
