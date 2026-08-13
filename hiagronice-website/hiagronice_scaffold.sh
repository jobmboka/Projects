#!/usr/bin/env bash
set -euo pipefail

# Run this from inside your hiagronice-website project root (where package.json lives)
# Usage: bash hiagronice_scaffold.sh

mkdir -p src/components/layout src/components/common src/components/home \
         src/components/services src/components/booking src/components/contact \
         src/pages src/data src/hooks src/utils public/images

echo "Creating tailwind.config.js..."
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2E9E4F",
          dark: "#1F7A3B",
          light: "#7FD68A",
        },
      },
    },
  },
  plugins: [],
};
EOF

echo "Creating src/index.css..."
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: "Poppins", system-ui, sans-serif;
  color: #1f2937;
}
EOF

echo "Creating src/main.jsx..."
cat > src/main.jsx << 'EOF'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

echo "Creating src/App.jsx..."
cat > src/App.jsx << 'EOF'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import BookMeeting from "./pages/BookMeeting";
import GetQuote from "./pages/GetQuote";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/book" element={<BookMeeting />} />
          <Route path="/quote" element={<GetQuote />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
EOF

echo "Creating src/data/services.js..."
cat > src/data/services.js << 'EOF'
export const services = [
  {
    slug: "garbage-collection",
    title: "Garbage Collection",
    tagline: "Turning waste into a cleaner tomorrow, one collection at a time",
    description:
      "Flexible garbage collection tailored to residential, commercial, and industrial needs — occasional pickups or scheduled collections.",
    image: "/images/garbage-collection.jpg",
  },
  {
    slug: "fumigation-pest-control",
    title: "Fumigation & Pest Control",
    tagline: "Protecting your home, safeguarding your health",
    description:
      "Fully qualified, accredited and certified fumigation and pest control to remove unwanted pests and rodents.",
    image: "/images/fumigation.jpg",
  },
  {
    slug: "cleaning-services",
    title: "Cleaning Services",
    tagline: "Let us turn your mess into our masterpiece",
    description:
      "General and periodic office, home, and residential cleaning — from routine maintenance to deep cleaning.",
    image: "/images/cleaning.jpg",
  },
  {
    slug: "waste-bags",
    title: "Sale of Waste Bags",
    tagline: "Clean solutions for a greener tomorrow, one bag at a time",
    description:
      "High-quality general and hazardous waste bags in bulk, in various sizes.",
    image: "/images/waste-bags.jpg",
  },
  {
    slug: "landscaping",
    title: "Landscaping Services",
    tagline: "Transforming outdoor spaces into stunning retreats",
    description:
      "Landscape design, installation, maintenance, and water features tailored to each client.",
    image: "/images/landscaping.jpg",
  },
  {
    slug: "hazardous-waste-management",
    title: "Hazardous Waste Management",
    tagline: "Safety, health, environment",
    description:
      "Waste collection & transportation, treatment, recycling, incineration & landfilling, and compliance consulting.",
    image: "/images/hazardous-waste.jpg",
  },
];
EOF

echo "Creating src/utils/validators.js..."
cat > src/utils/validators.js << 'EOF'
export function isRequired(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isValidKenyanPhone(value) {
  return /^(\+254|0)7\d{8}$|^(\+254|0)1\d{8}$/.test(value.replace(/\s/g, ""));
}
EOF

echo "Creating src/hooks/useForm.js..."
cat > src/hooks/useForm.js << 'EOF'
import { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function reset() {
    setValues(initialValues);
    setStatus("idle");
  }

  return { values, setValues, handleChange, status, setStatus, reset };
}
EOF

echo "Creating src/components/common/Button.jsx..."
cat > src/components/common/Button.jsx << 'EOF'
export default function Button({ children, type = "button", variant = "primary", ...props }) {
  const base = "px-6 py-3 rounded-lg font-semibold transition-colors duration-200";
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
  };
  return (
    <button type={type} className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
EOF

echo "Creating src/components/common/Card.jsx..."
cat > src/components/common/Card.jsx << 'EOF'
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
EOF

echo "Creating src/components/common/SectionHeading.jsx..."
cat > src/components/common/SectionHeading.jsx << 'EOF'
export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? "text-center mb-10" : "mb-10"}>
      {eyebrow && (
        <span className="text-brand font-semibold uppercase tracking-wide text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
EOF

echo "Creating src/components/layout/Navbar.jsx..."
cat > src/components/layout/Navbar.jsx << 'EOF'
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
EOF

echo "Creating src/components/layout/Footer.jsx..."
cat > src/components/layout/Footer.jsx << 'EOF'
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
EOF

echo "Creating src/components/layout/Layout.jsx..."
cat > src/components/layout/Layout.jsx << 'EOF'
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
EOF

echo "Creating src/components/home/Hero.jsx..."
cat > src/components/home/Hero.jsx << 'EOF'
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
EOF

echo "Creating src/components/home/ServicesOverview.jsx..."
cat > src/components/home/ServicesOverview.jsx << 'EOF'
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";

export default function ServicesOverview() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <SectionHeading
        eyebrow="What We Do"
        title="Our Services"
        subtitle="From daily waste collection to hazardous waste compliance — we've got your surroundings covered."
        center
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.slug}>
            <img src={s.image} alt={s.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-900">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{s.description}</p>
              <Link
                to={`/services/${s.slug}`}
                className="inline-block mt-4 text-brand font-semibold hover:text-brand-dark"
              >
                Learn more →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
EOF

echo "Creating src/pages/Home.jsx..."
cat > src/pages/Home.jsx << 'EOF'
import Hero from "../components/home/Hero";
import ServicesOverview from "../components/home/ServicesOverview";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <section className="bg-brand/5 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900">Ready to get started?</h2>
          <p className="text-gray-600 mt-3">
            Request a quote for your property or book your next collection in minutes.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/quote"><Button variant="outline">Get a Quote</Button></Link>
            <Link to="/book"><Button>Book a Collection</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
EOF

echo "Creating src/pages/Services.jsx..."
cat > src/pages/Services.jsx << 'EOF'
import { services } from "../data/services";
import ServicesOverview from "../components/home/ServicesOverview";
import SectionHeading from "../components/common/SectionHeading";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <SectionHeading
        eyebrow="Hiagronice Garbage Services"
        title="All Our Services"
        subtitle="Tailored waste and property-care solutions for residential, commercial, and industrial clients."
      />
      <ServicesOverview />
    </div>
  );
}
EOF

echo "Creating src/pages/ServicePage.jsx..."
cat > src/pages/ServicePage.jsx << 'EOF'
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
EOF

echo "Creating src/components/booking/BookingForm.jsx..."
cat > src/components/booking/BookingForm.jsx << 'EOF'
import { useForm } from "../../hooks/useForm";
import { isRequired, isValidEmail, isValidKenyanPhone } from "../../utils/validators";
import { services } from "../../data/services";
import Button from "../common/Button";

export default function BookingForm({ defaultService = "" }) {
  const { values, handleChange, status, setStatus } = useForm({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    date: "",
    address: "",
    notes: "",
  });

  function validate() {
    return (
      isRequired(values.name) &&
      isValidEmail(values.email) &&
      isValidKenyanPhone(values.phone) &&
      isRequired(values.service) &&
      isRequired(values.date) &&
      isRequired(values.address)
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      // TODO: replace with your EmailJS / Formspree / backend endpoint call
      // await sendBooking(values);
      await new Promise((res) => setTimeout(res, 800)); // placeholder
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand/10 border border-brand text-brand-dark rounded-lg p-6 text-center">
        Thanks! Your booking request has been received — we'll confirm shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" value={values.name} onChange={handleChange} />
        <Field label="Email" name="email" type="email" value={values.email} onChange={handleChange} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Phone Number" name="phone" value={values.phone} onChange={handleChange} placeholder="07XXXXXXXX" />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
          <select
            name="service"
            value={values.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Preferred Date" name="date" type="date" value={values.date} onChange={handleChange} />
        <Field label="Collection Address" name="address" value={values.address} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
        <textarea
          name="notes"
          value={values.notes}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Please fill in all fields correctly before submitting.</p>
      )}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Book Collection"}
      </Button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", placeholder = "" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
      />
    </div>
  );
}
EOF

echo "Creating src/components/booking/QuoteForm.jsx..."
cat > src/components/booking/QuoteForm.jsx << 'EOF'
import { useForm } from "../../hooks/useForm";
import { isRequired, isValidEmail, isValidKenyanPhone } from "../../utils/validators";
import { services } from "../../data/services";
import Button from "../common/Button";

const propertyTypes = ["Residential", "Commercial", "Industrial"];
const frequencies = ["One-time", "Weekly", "Bi-weekly", "Monthly"];

export default function QuoteForm({ defaultService = "" }) {
  const { values, handleChange, status, setStatus } = useForm({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    propertyType: "",
    frequency: "",
    details: "",
  });

  function validate() {
    return (
      isRequired(values.name) &&
      isValidEmail(values.email) &&
      isValidKenyanPhone(values.phone) &&
      isRequired(values.service) &&
      isRequired(values.propertyType)
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      // TODO: replace with your EmailJS / Formspree / backend endpoint call
      // await sendQuoteRequest(values);
      await new Promise((res) => setTimeout(res, 800)); // placeholder
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand/10 border border-brand text-brand-dark rounded-lg p-6 text-center">
        Thanks! We've received your quote request and will get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" value={values.name} onChange={handleChange} />
        <Field label="Email" name="email" type="email" value={values.email} onChange={handleChange} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Phone Number" name="phone" value={values.phone} onChange={handleChange} placeholder="07XXXXXXXX" />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
          <select
            name="service"
            value={values.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select
            name="propertyType"
            value={values.propertyType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="">Select property type</option>
            {propertyTypes.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Collection Frequency</label>
          <select
            name="frequency"
            value={values.frequency}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="">Select frequency</option>
            {frequencies.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tell us more about your needs</label>
        <textarea
          name="details"
          value={values.details}
          onChange={handleChange}
          rows={4}
          placeholder="E.g. estimated waste volume, number of bins, special waste types..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Please fill in all required fields correctly before submitting.</p>
      )}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Request Quote"}
      </Button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", placeholder = "" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
      />
    </div>
  );
}
EOF

echo "Creating src/pages/BookMeeting.jsx..."
cat > src/pages/BookMeeting.jsx << 'EOF'
import { useSearchParams } from "react-router-dom";
import BookingForm from "../components/booking/BookingForm";
import SectionHeading from "../components/common/SectionHeading";

export default function BookMeeting() {
  const [params] = useSearchParams();
  const service = params.get("service") || "";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <SectionHeading
        eyebrow="Schedule With Us"
        title="Book a Collection"
        subtitle="Tell us what you need and when — we'll confirm your slot shortly."
      />
      <BookingForm defaultService={service} />
    </div>
  );
}
EOF

echo "Creating src/pages/GetQuote.jsx..."
cat > src/pages/GetQuote.jsx << 'EOF'
import { useSearchParams } from "react-router-dom";
import QuoteForm from "../components/booking/QuoteForm";
import SectionHeading from "../components/common/SectionHeading";

export default function GetQuote() {
  const [params] = useSearchParams();
  const service = params.get("service") || "";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <SectionHeading
        eyebrow="Free & No Obligation"
        title="Get a Quote"
        subtitle="Share a few details about your property and we'll send you a tailored quote."
      />
      <QuoteForm defaultService={service} />
    </div>
  );
}
EOF

echo "Creating src/pages/About.jsx..."
cat > src/pages/About.jsx << 'EOF'
export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About Hiagronice</h1>
      <p className="text-gray-700 mt-4 leading-relaxed">
        Hiagronice Garbage Services Limited provides flexible garbage collection
        services tailored to residential, commercial, and industrial needs. We
        are NEMA accredited and committed to keeping surroundings clean and waste-free.
      </p>
    </div>
  );
}
EOF

echo "Creating src/pages/Contact.jsx..."
cat > src/pages/Contact.jsx << 'EOF'
export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h1>
      <ul className="mt-6 space-y-3 text-gray-700">
        <li>📞 +254 726 911 914</li>
        <li>📞 +254 114 795 550</li>
        <li>✉️ info@hiagronicegarbage.com</li>
        <li>📍 Milele Center, Room 14 - Kitengela</li>
      </ul>
    </div>
  );
}
EOF

echo "Creating src/pages/NotFound.jsx..."
cat > src/pages/NotFound.jsx << 'EOF'
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="text-gray-600 mt-2">Page not found.</p>
      <Link to="/" className="text-brand font-semibold mt-4 inline-block">
        ← Back to Home
      </Link>
    </div>
  );
}
EOF

echo ""
echo "✅ All starter files created."
echo "Next steps:"
echo "  1. Add real images to public/images/ (hero-truck.jpg, garbage-collection.jpg, fumigation.jpg, cleaning.jpg, waste-bags.jpg, landscaping.jpg, hazardous-waste.jpg)"
echo "  2. npm run dev"
echo "  3. Wire BookingForm/QuoteForm submit handlers to EmailJS or your backend"