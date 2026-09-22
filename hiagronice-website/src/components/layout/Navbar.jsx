import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/locate-us", label: "Locate Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          transparent ? "bg-transparent shadow-none" : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link
            to="/"
            className={`flex items-center gap-2 font-bold text-xl transition-colors duration-300 ${
              transparent ? "text-white" : "text-brand-dark"
            }`}
          >
            <img src="/logo.svg" alt="Hiagronice logo" className="h-9 w-9" />
            Hiagronice Services Limited
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive
                      ? transparent
                        ? "text-white"
                        : "text-brand"
                      : transparent
                      ? "text-white/85 hover:text-white"
                      : "text-gray-700 hover:text-brand"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            className={`md:hidden transition-colors duration-300 ${
              transparent ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white">
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-gray-700">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Spacer: only needed when the header isn't overlaying page content,
          i.e. every page except the transparent homepage state. Kept on
          isHome (not on `transparent`) so it doesn't appear/disappear
          mid-scroll and cause a layout jump. */}
      {!isHome && <div className="h-16" />}
    </>
  );
}