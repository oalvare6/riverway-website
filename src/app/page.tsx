export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-32 text-center bg-gray-50 min-h-[80vh]">
      <h1 className="text-5xl font-bold text-primary mb-6">
        Riverway Logistics Inc
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-10">
        Seamless dispatch and automation solutions for the modern flatbed fleet.
      </p>
      <a
        href="/contact"
        className="bg-accent text-white px-8 py-3 rounded-md hover:opacity-90 transition"
      >
        Get a Quote
      </a>
    </section>
  );
}
