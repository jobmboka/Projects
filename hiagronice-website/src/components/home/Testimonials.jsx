const testimonials = [
  {
    name: "Wanjiru Kamau",
    role: "Homeowner, Karen",
    rating: 5,
    quote:
      "I used to dread garbage day because collection was so unreliable. Since switching to Hiagronice, it's like clockwork every week. Their team is polite and they actually clean up after themselves.",
  },
  {
    name: "David Otieno",
    role: "Facilities Manager, Westlands Office Park",
    rating: 4,
    quote:
      "We manage a busy commercial building and needed a waste partner who wouldn't cause disruptions during business hours. Hiagronice worked around our schedule and handled everything professionally.",
  },
  {
    name: "Amina Hassan",
    role: "Restaurant Owner, Mombasa Road",
    rating: 5,
    quote:
      "Fumigation and hygiene are non-negotiable in the food business. Their team is thorough, shows up on time, and always explains what they're doing. I recommend them to every restaurant owner I know.",
  },
  {
    name: "Peter Mwangi",
    role: "Site Supervisor, Industrial Area",
    rating: 4,
    quote:
      "Hazardous waste disposal is not something you can afford to get wrong. Hiagronice handles it with the right documentation and care, which gives us peace of mind on every project.",
  },
  {
    name: "Grace Njeri",
    role: "Property Manager, Kilimani",
    rating: 5,
    quote:
      "Booking a collection takes two minutes on their site and the team always confirms before arriving. Small things like that make a big difference when you're managing multiple properties.",
  },
  {
    name: "Samuel Kiptoo",
    role: "Homeowner, Ruaka",
    rating: 3,
    quote:
      "Affordable, consistent, and the crew is genuinely friendly. My estate switched providers last year and honestly it's been one of our best decisions.",
  },
];
function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 text-brand mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < rating ? 0 : 1}
          className="w-4 h-4"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.062 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.958z" />
        </svg>
      ))}
    </div>
  );
}
function TestimonialCard({ t }) {
  return (
    <div className="shrink-0 w-64 sm:w-80 bg-brand/5 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow mx-2 sm:mx-3">
      <StarRating rating={t.rating} />
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-5 sm:line-clamp-none">
        "{t.quote}"
      </p>
      <div className="mt-4 sm:mt-6">
        <p className="font-semibold text-gray-900 text-sm sm:text-base">{t.name}</p>
        <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
      </div>
    </div>
  );
}
export default function Testimonials() {
  const track = [...testimonials, ...testimonials];
  return (
    <section className="bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-gray-600">
            Trusted by homeowners, businesses, and industries across Kenya to keep
            their spaces clean and their waste handled responsibly.
          </p>
        </div>
      </div>
      <div
        className="relative mt-12 group"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-testimonial-scroll group-hover:[animation-play-state:paused]">
          {track.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes testimonial-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-testimonial-scroll {
          animation: testimonial-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}