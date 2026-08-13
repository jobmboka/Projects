import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-dark to-brand text-white">
      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Transforming Waste into Clean Spaces
          </h1>
          <p className="mt-4 text-lg text-brand-light/90">
            Reliable garbage collection, fumigation, cleaning, and hazardous
            waste management for homes, businesses, and industries across Kenya.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/quote">
              <Button variant="outline" className="bg-white">Get a Free Quote</Button>
            </Link>
            <Link to="/book">
              <Button>Book a Collection</Button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="/images/hero-truck.jpg"
            alt="Hiagronice garbage collection truck"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
