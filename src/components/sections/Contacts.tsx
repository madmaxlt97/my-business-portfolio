import Container from "../ui/Container";

export default function Contacts() {
  return (
    <section id="contacts" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Let's work together
          </p>

          <h2 className="mt-6 text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-9xl">
            Let's build something great
          </h2>

          <p className="mt-10 max-w-lg text-lg leading-relaxed text-gray-600 sm:text-xl">
            Have an idea for the website? Tell me about it and let's see what we
            can build together
          </p>

          <a
            href="mailto:nikolajevmax.workspace@gmail.com"
            className="mt-10 inline-flex rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
          >
            Start a project →
          </a>
        </div>
      </Container>
    </section>
  );
}
