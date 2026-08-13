import { Link } from "react-router-dom";
import { services } from "../../data/services";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Hiagronice Garbage Services</h3>
          <p className="text-sm">NEMA accredited garbage collection experts.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-brand-light">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>+254 726 911 914</li>
            <li>+254 114 795 550</li>
            <li>info@hiagronicegarbage.com</li>
            <li>Milele Center, Room 14 - Kitengela</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Get Started</h4>
          <div className="flex flex-col gap-2">
            <Link to="/quote" className="hover:text-brand-light text-sm">Request a Quote →</Link>
            <Link to="/book" className="hover:text-brand-light text-sm">Book a Collection →</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} Hiagronice Garbage Services Limited. All rights reserved.
      </div>
    </footer>
  );
}
