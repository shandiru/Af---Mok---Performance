import React from "react";

export default function Hero() {
  const handleVideoError = () => {
    console.error(
      "Background video failed to load. Check that public/video.mp4 exists, the name matches case exactly, and it's H.264/AAC."
    );
  };

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      // Deep navy base from the logo
      style={{ backgroundColor: "#0B1220" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onError={handleVideoError}
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Radial neon glow overlay (subtle) */}
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 40%, rgba(0,230,255,0.12) 0%, rgba(255,59,59,0.08) 45%, rgba(11,18,32,0.6) 70%)",
        }}
      />

      {/* Dark film over video for legibility */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title styled to match logo colors */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              UNLEASH YOUR
            </span>
            <span
              className="block text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,230,255,0.35)]"
              // Cyan / silver gradient like the AF-MOK lettering
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #00E6FF 0%, #18BFEA 45%, #DCE5EB 100%)",
              }}
            >
              VEHICLE&apos;S
            </span>
            <span
              className="block text-transparent bg-clip-text"
              // Subtle cyan→silver with a hint of red at the end (echoes neon piping)
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #DCE5EB 0%, #9FD9FF 45%, #FF3B3B 100%)",
              }}
            >
              POTENTIAL
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300/90 mb-10 max-w-3xl mx-auto">
            Experience peak performance, improved efficiency, and reduced
            emissions with AF-MOK PERFORMANCE’s expert tuning solutions for cars
            and LCVs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary (electric-cyan) */}
            <button
              type="button"
              onClick={scrollToServices}
              className="relative inline-flex items-center justify-center rounded-xl px-8 py-3 text-lg font-semibold text-black transition
                         shadow-[0_0_20px_rgba(0,230,255,0.35)]
                         hover:shadow-[0_0_28px_rgba(0,230,255,0.55)]"
              style={{ backgroundColor: "#00E6FF" }}
            >
              Explore Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Secondary (neon-red outline) */}
            <button
              type="button"
              onClick={scrollToAbout}
              className="rounded-xl px-8 py-3 text-lg font-semibold bg-transparent text-slate-200 transition
                         border"
              style={{
                borderColor: "#FF3B3B",
                boxShadow: "0 0 16px rgba(255,59,59,0.25) inset",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,59,59,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Learn More
            </button>
          </div>

          {/* Thin accent bar under buttons (cyan) */}
          <div
            className="mx-auto mt-10 h-[3px] w-32 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #00E6FF 50%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
