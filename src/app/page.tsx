export default function Home() {
  return (
    <section className="text-center py-32 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-bold text-[#0B3554] mb-6">
        Riverway Logistics Inc
      </h1>
      <p className="max-w-2xl mx-auto text-lg mb-10 text-gray-700">
        Efficient freight management built for the modern flatbed fleet.
      </p>
      <a
        href="/contact"
        className="bg-[#F7931E] text-white px-6 py-3 rounded hover:opacity-90 transition"
      >
        Get a Quote
      </a>
    </section>
  );
}
