import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
export default function SanitaryCollection() {
  const service = {
    title: "Sanitary Collection Services",
    tagline: "Protecting your home, safeguarding your health",
    description:
      "We supply sanitary pads and provide safe, hygienic collection and disposal of sanitary waste for homes, offices, schools, hotels, and industrial sites. Our trained team handles everything discreetly and in line with environmental regulations.",
    image: "/images/sanitary-collection.jpg",
    slug: "sanitary-collection",
  };
  const included = [
    "Supply of sanitary pads in bulk or on a recurring basis",
    "Supply and servicing of sanitary disposal bins",
    "Scheduled collection of sanitary waste",
    "Safe transport to licensed disposal facilities",
    "Hygienic, discreet service by trained staff",
    "Flexible one-off or contract arrangements",
    "Pre-treatment inspection and pest identification",
    "Safe, licensed chemical and non-chemical treatments",
    "Rodent, cockroach, bedbug, and termite control",
    "Residential, commercial, and industrial coverage",
    "Follow-up visits where needed",
    "Safety guidance for occupants during and after treatment",
  ];
  const steps = [
    { title: "Request a Service", description: "Tell us whether you need sanitary pad supply, waste collection, or both, along with your site details and quantities." },
    { title: "Site Assessment", description: "We assess your premises to plan bin placement, supply volumes, and a collection schedule." },
    { title: "Supply & Installation", description: "We deliver sanitary pads and install discreet, hygienic sanitary disposal bins where needed." },
    { title: "Scheduled Collection", description: "Our trained team collects and safely disposes of sanitary waste on a regular schedule." },
  ];
  return (
    <div>
      <div className="relative w-full h-[70vh] min-h-[420px]">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full max-w-5xl mx-auto px-4 flex flex-col justify-end pb-16 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{service.title}</h1>
          <p className="mt-4 text-lg md:text-2xl font-medium italic text-white/90 max-w-2xl">{service.tagline}</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">{service.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to={`/quote?service=${service.slug}`}><Button variant="outline">Get a Quote for This Service</Button></Link>
          <Link to={`/book?service=${service.slug}`}><Button>Book This Service</Button></Link>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm font-bold">✓</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold mb-4">{i + 1}</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-brand-dark py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Ready for a cleaner, healthier space?</h2>
          <p className="mt-3 text-white/80">Get a free quote or book sanitary pad supply and waste collection today.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to={`/quote?service=${service.slug}`}><Button variant="outline">Get a Quote</Button></Link>
            <Link to={`/book?service=${service.slug}`}><Button>Book Now</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}