import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
export default function GarbageCollection() {
  const service = {
    title: "Garbage Collection",
    tagline: "Turning waste into a cleaner tomorrow, one collection at a time",
    description:
      "Flexible garbage collection tailored to residential, commercial, and industrial needs. Whether you need a one-off pickup or a fully scheduled collection plan, our trained crews and NEMA-accredited processes keep your space clean, compliant, and hassle-free.",
    image: "/images/garbage-collection.jpg",
    slug: "garbage-collection",
  };
  const included = [
    "Scheduled weekly, bi-weekly, or monthly pickups",
    "One-off and on-demand collection requests",
    "Residential, commercial, and industrial waste streams",
    "Segregated collection for recyclables where applicable",
    "Trained, uniformed collection crews",
    "Proper transport and disposal at licensed sites",
  ];
  const steps = [
    {
      title: "Book Your Collection",
      description: "Reach out via a quote request or booking form and tell us your location and waste volume.",
    },
    {
      title: "We Schedule a Plan",
      description: "We match you with a pickup frequency and route that fits your needs and budget.",
    },
    {
      title: "Reliable Pickup Day",
      description: "Our crews arrive on schedule with the right equipment for fast, safe collection.",
    },
    {
      title: "Responsible Disposal",
      description: "Waste is transported and disposed of at licensed facilities in line with NEMA standards.",
    },
  ];
  return (
    <div>
      {/* Edge-to-edge hero image with overlay text */}
      <div className="relative w-full h-[70vh] min-h-[420px]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full max-w-5xl mx-auto px-4 flex flex-col justify-end pb-16 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-medium italic text-white/90 max-w-2xl">
            {service.tagline}
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
          {service.description}
        </p>
        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to={`/quote?service=${service.slug}`}>
            <Button variant="outline">Get a Quote for This Service</Button>
          </Link>
          <Link to={`/book?service=${service.slug}`}>
            <Button>Book This Service</Button>
          </Link>
        </div>
        {/* What's included */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What's Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {/* How it works */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Dirty bin vs clean bin conversation */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
            A Little Chat Between Two Bins
          </h2>
          <p className="text-gray-600 text-center mb-14">
            One of them called Hiagronice. The other one is still thinking about it.
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-end">
            {/* Dirty bin */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 bg-white border border-gray-200 rounded-2xl rounded-bl-none px-5 py-4 shadow-sm max-w-xs">
                <p className="text-gray-800 font-medium">
                  "I haven't been emptied in weeks. Even the flies filed a complaint."
                </p>
              </div>
              <img
                src="/dirty.jpg"
                alt="Overflowing, uncollected trash can"
                className="w-56 h-56 object-cover rounded-xl shadow-md grayscale-[30%]"
              />
              <p className="mt-4 font-semibold text-gray-500">Before Hiagronice</p>
            </div>
            {/* Clean bin */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 bg-brand text-white rounded-2xl rounded-br-none px-5 py-4 shadow-sm max-w-xs">
                <p className="font-medium">
                  "Scheduled pickups, zero drama. Hiagronice has me feeling brand new."
                </p>
              </div>
              <img
                src="/clean.jpg"
                alt="Clean, freshly collected trash can"
                className="w-56 h-56 object-cover rounded-xl shadow-md"
              />
              <p className="mt-4 font-semibold text-brand">After Hiagronice</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Which bin do you want to be?
            </h3>
            <p className="mt-2 text-gray-600">
              Get a free quote or book your first collection today.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to={`/quote?service=${service.slug}`}>
                <Button variant="outline">Get a Quote</Button>
              </Link>
              <Link to={`/book?service=${service.slug}`}>
                <Button>Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}