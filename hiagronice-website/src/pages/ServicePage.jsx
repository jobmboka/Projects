import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import Button from "../components/common/Button";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <Link to="/services" className="text-brand font-semibold mt-4 inline-block">
          ← Back to all services
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <img src={service.image} alt={service.title} className="w-full h-72 object-cover rounded-xl" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8">{service.title}</h1>
      <p className="text-brand font-medium italic mt-2">{service.tagline}</p>
      <p className="text-gray-700 mt-4 leading-relaxed">{service.description}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link to={`/quote?service=${service.slug}`}>
          <Button variant="outline">Get a Quote for This Service</Button>
        </Link>
        <Link to={`/book?service=${service.slug}`}>
          <Button>Book This Service</Button>
        </Link>
      </div>
    </div>
  );
}
