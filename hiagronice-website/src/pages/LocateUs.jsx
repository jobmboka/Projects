export default function LocateUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Hiagronice Services
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight mb-6">
          Locate Us
        </h1>
        <p className="text-gray-800 text-lg mb-10">
          We're based at Milele Center, Kitengela. Find us on the map below.
        </p>
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Hiagronice Services Limited Location - Milele Center, Kitengela"
            src="https://www.google.com/maps?q=Milele+Center,+Kitengela,+Kenya&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}