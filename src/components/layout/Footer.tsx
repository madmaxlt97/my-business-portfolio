import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight">
            MAX'S BUILDS
          </Link>
          <p className="mt-2 text-sm text-gray-500">© 2026 Max Nikolajev</p>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#work" className="transition-colors hover:text-black">
            Work
          </a>
          <a href="#services" className="transition-colors hover:text-black">
            Services
          </a>
          <a href="#about" className="transition-colors hover:text-black">
            About
          </a>
          <a href="#contacts" className="transition-colors hover:text-black">
            Contacts
          </a>
        </div>
      </div>
    </footer>
  );
}
