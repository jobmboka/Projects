import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../common/Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-xl text-brand-dark">
          Hiagronice
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium ${isActive ? "text-brand" : "text-gray-700 hover:text-brand"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/quote">
            <Button variant="outline">Get a Quote</Button>
          </Link>
          <Link to="/book">
            <Button>Book a Collection</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-gray-700">
              {link.label}
            </Link>
          ))}
          <Link to="/quote" onClick={() => setOpen(false)}>
            <Button variant="outline">Get a Quote</Button>
          </Link>
          <Link to="/book" onClick={() => setOpen(false)}>
            <Button>Book a Collection</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
