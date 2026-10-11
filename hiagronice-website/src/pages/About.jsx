const services = [
  {
    title: "Garbage Collection Services",
    description:
      "We provide flexible garbage collection services tailored to your needs. Our expertise spans across residential and business/commercial properties, whether you require occasional pickups or scheduled collections, we efficiently manage residential, commercial, and industrial waste.",
    quote: "Turning waste into a cleaner tomorrow, one collection at a time.",
  },
  {
    title: "Fumigation and Pest Control Services",
    description:
      "Count on our expert team for comprehensive fumigation and pest control solutions. Our highly-trained professionals are fully qualified, accredited, and certified to efficiently remove unwanted pests and rodents from your premises.",
    quote: "Protecting your home, safeguarding your health — one pest at a time.",
  },
  {
    title: "Cleaning Services",
    description:
      "Let us handle all your day-to-day cleaning requirements with precision and care. Our comprehensive services cover general and periodic office, home, and residential cleaning — from routine maintenance to deep cleaning.",
    quote: "Let us turn your mess into our masterpiece.",
  },
  {
    title: "Sale of Waste Bags",
    description:
      "Streamline your waste management process with our high-quality waste collection bags, available in bulk quantities. Choose from general black waste bags in various sizes, plus specialized hazardous waste bags designed to meet stringent safety requirements.",
    quote: "Clean solutions for a greener tomorrow — one bag at a time.",
  },
  {
    title: "Landscaping Services",
    description:
      "Every outdoor space has the potential to become a captivating oasis. Our team specializes in crafting personalized landscapes that reflect the unique style and preferences of each client — landscape design, installation, maintenance, and water features.",
    quote: "Transforming outdoor spaces into stunning retreats.",
  },
];
const hazardousServices = [
  {
    title: "Waste Collection & Transportation",
    description:
      "Safe collection and transport of hazardous waste from various industries, hospitals, labs, and households to treatment or disposal facilities.",
  },
  {
    title: "Waste Treatment",
    description:
      "Chemical, biological, or physical treatment of hazardous materials to neutralize or minimize toxicity.",
  },
  {
    title: "Recycling",
    description:
      "Recovery of useful components from hazardous waste, such as heavy metals or solvents.",
  },
  {
    title: "Incineration & Landfilling",
    description:
      "Environmentally sound incineration or secure landfilling of waste that cannot be treated or recycled.",
  },
  {
    title: "Consulting & Compliance",
    description:
      "Assisting businesses in navigating environmental laws, securing permits, and maintaining regulatory compliance.",
  },
];
export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative text-white py-28 overflow-hidden">
        <img
          src="/abouts.jpg"
          alt="Hiagronice garbage collection illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand/80" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Hiagronice</h1>
          <p className="mt-4 text-lg text-green-50 max-w-2xl mx-auto">
            Transforming Waste into Clean Spaces, One Collection at a Time.
          </p>
        </div>
      </section>
      {/* Company summary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
            "At Hiagronice Garbage Services, we provide flexible garbage collection
            services tailored to your needs. Our expertise spans across three primary
            categories: residential, business/commercial, and industries."
          </p>
        </div>
      </section>
      {/* Truck image + intro */}
      <section className="py-16 bg-brand/5">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/front-truck.jpg"
            alt="Hiagronice garbage collection truck"
            className="rounded-xl shadow-md w-full h-80 object-cover"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Hiagronice Garbage Services Limited is a NEMA-accredited garbage
              collection company based at Milele Center, Kitengela. We manage
              residential, commercial, and industrial waste with reliable
              scheduling, trained professionals, and proper documentation for
              every collection.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Beyond garbage collection, our services span fumigation and pest
              control, cleaning, landscaping, sale of waste bags, and specialized
              hazardous waste management — giving homes, businesses, and
              industries across Kenya a single trusted partner for a cleaner
              environment.
            </p>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Our Services
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-brand/5 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                  {s.description}
                </p>
                <p className="mt-4 text-brand font-medium italic text-sm">
                  "{s.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Hazardous waste management */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Hazardous Waste Management
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              We have specialized services for the safe handling, treatment, and
              disposal of dangerous materials. Our business ensures compliance
              with strict environmental regulations to protect human health and
              the environment from toxic, corrosive, flammable, and reactive
              substances.
            </p>
          </div>
          <div className="space-y-5">
            {hazardousServices.map((h, i) => (
              <div key={h.title} className="flex gap-3">
                <span className="text-brand-light font-bold">{i + 1}.</span>
                <div>
                  <p className="font-semibold">{h.title}</p>
                  <p className="text-sm text-gray-300 mt-1">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NEMA accreditation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center gap-8 justify-center text-center sm:text-left">
          <img
            src="/national-environment-management-authority-seeklogo.png"
            alt="NEMA Accredited"
            className="h-24 w-auto"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900">NEMA Accredited</h3>
            <p className="mt-2 text-gray-600">
              Hiagronice Garbage Services Limited is fully accredited by the
              National Environment Management Authority (NEMA), ensuring every
              collection and disposal we handle meets Kenya's environmental
              standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}