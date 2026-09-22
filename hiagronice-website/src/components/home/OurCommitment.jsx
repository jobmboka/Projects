export default function OurCommitment() {
  return (
    <section className="bg-green-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          {/* Left: creative copy */}
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">
              Our Commitment
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight">
              Every Street, Every Pickup, Every Time
            </h2>
            <div className="space-y-5 text-gray-800 text-lg max-w-xl">
              <p>
                Clean neighborhoods don't happen by accident — they happen
                because someone shows up, rain or shine, ready to work. That's
                what we do at Hiagronice. From narrow backstreets to busy
                estates, our crews treat every route like it's the only one
                that matters.
              </p>
              <p>
                We're not just moving waste — we're protecting the health of
                the communities we serve, one collection at a time. It's a
                promise we take seriously, and one you can see in action
                below.
              </p>
            </div>
          </div>

          {/* Right: mobile-shaped video */}
          <div className="relative w-full max-w-[300px] aspect-[9/16] mx-auto md:mx-0 shrink-0 rounded-3xl overflow-hidden shadow-xl bg-black">
            <video
              src="/advideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-10">
              <p className="p-4 text-white text-sm leading-snug">
                Real streets, real service — see our team in action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}