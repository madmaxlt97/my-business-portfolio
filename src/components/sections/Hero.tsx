import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center pt-10 md:pt-20"
    >
      <Container>
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Freelance Web Developer
          </p>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
            Your business deserves a better website
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            From first idea to final pixel, I build fast, modern websites
            designed around your business.
          </p>

          <a
            href="#contacts"
            className="group mt-10 inline-flex items-center rounded-full bg-black gap-3 px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
          >
            <span> Let's work together</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
