import Container from "../ui/Container";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Built for business
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            I don't just build websites. I build digital experiences around the
            business behind them.
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div></div>
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-gray-700">
              I've worked directly with both customers and businesses, so I
              understand that a website has a job to do — not just look good.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              From the first idea to the final pixel, I focus on clarity,
              performance and creating an experience that makes your business
              easy to understand.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
