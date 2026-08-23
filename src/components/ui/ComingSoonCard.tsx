export default function ComingSoonCard() {
  return (
    <article className="group">
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-3xl bg-gray-100 transition-colors duration-500 group-hover:bg-gray-200">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Next project
          </p>

          <h3 className="mt-2 text-2xl font-semibold">Coming soon</h3>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold tracking-tight">
          Something new is coming
        </h3>
        <p className="mt-1 text-gray-500">Currently in development.</p>
      </div>
    </article>
  );
}
