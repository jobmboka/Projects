import { Link } from "react-router-dom";
import { services } from "../../data/services";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Hiagronice Garbage Services</h3>
          <p className="text-sm mb-3">NEMA accredited garbage collection experts.</p>
          <img
            src="/national-environment-management-authority-seeklogo.png"
            alt="NEMA Accredited"
            className="h-14 w-auto"
          />
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
            <li>
              <a href="tel:+254726911914" className="hover:text-brand-light">
                +254 726 911 914
              </a>
            </li>
            <li>
              <a href="tel:+254114795550" className="hover:text-brand-light">
                +254 114 795 550
              </a>
            </li>
            <li>
              <a href="mailto:info@hiagronicegarbage.com" className="hover:text-brand-light">
                info@hiagronicegarbage.com
              </a>
            </li>
            <li>
              <Link to="/locate-us" className="hover:text-brand-light">
                Milele Center, Room 14 - Kitengela →
              </Link>
            </li>
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
