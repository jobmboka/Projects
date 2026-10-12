import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Full-bleed background image */}
      <img
        src="/images/hero-truck.jpg"
        alt="Hiagronice garbage collection truck"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/30" />

      {/* Content sits above the image + overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-36">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Transforming Waste into Clean Spaces
          </h1>
          <p className="mt-4 text-lg text-brand-light/90">
            Reliable garbage collection, sanitary collection, cleaning, and hazardous
            waste management for homes, businesses, and industries across Kenya.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/quote">
              <Button variant="outline">Get a Free Quote</Button>
            </Link>
            <Link to="/book">
              <Button>Book a Collection</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}