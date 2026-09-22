const areas = [
  "Kitengela",
  "Athi River",
  "Mlolongo",
  "Korrompoi",
  "Isinya",
  "Kajiado",
  "Ngong",
  "Nairobi",
];
function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default function AreasWeCover() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Areas We Cover
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We proudly serve homes, businesses, and industries across the following
          locations and their environs.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 bg-brand/5 text-gray-800 font-medium px-5 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-brand/10 transition-all"
            >
              <span className="text-brand">
                <PinIcon />
              </span>
              <span className="text-sm sm:text-base">{area}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Don&apos;t see your area listed? <span className="font-medium text-gray-700">Get in touch</span> — we likely still cover you.
        </p>
      </div>
    </section>
  );
}