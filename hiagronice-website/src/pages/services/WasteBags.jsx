import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
export default function WasteBags() {
  const service = {
    title: "Sale of Waste Bags",
    tagline: "Clean solutions for a greener tomorrow, one bag at a time",
    description:
      "High-quality general and hazardous waste bags in bulk, in various sizes. Durable, leak-resistant, and suited for households, institutions, and industrial waste handling.",
    image: "/images/waste-bags.jpg",
    slug: "waste-bags",
  };
  const included = [
    "General waste bags in multiple sizes",
    "Heavy-duty hazardous waste bags",
    "Bulk orders for institutions and businesses",
    "Leak-resistant, tear-resistant materials",
    "Color-coded options for waste segregation",
    "Delivery available on bulk orders",
  ];
  const steps = [
    { title: "Tell Us Your Volume", description: "Let us know the bag size, type, and quantity you need." },
    { title: "Get a Price Quote", description: "We send you a straightforward quote based on your order." },
    { title: "Confirm & Pay", description: "Confirm the order and choose a payment option that works for you." },
    { title: "Delivery or Pickup", description: "Your bags are delivered or ready for pickup, on schedule." },
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
          <h2 className="text-2xl md:text-3xl font-bold">Need waste bags in bulk?</h2>
          <p className="mt-3 text-white/80">Get a free quote or place your order today.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to={`/quote?service=${service.slug}`}><Button variant="outline">Get a Quote</Button></Link>
            <Link to={`/book?service=${service.slug}`}><Button>Book Now</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}