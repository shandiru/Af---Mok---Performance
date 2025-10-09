"use client";
import React from "react";

export default function Hero() {
  // Handle video load error
  const handleVideoError = () => {
    console.error(
      "⚠️ Background video failed to load. Ensure /public/video.mp4 exists, name & case match, and it's H.264/AAC encoded."
    );
  };

  // Smooth scroll functions
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
      className="relative flex items-center justify-center overflow-hidden 
      min-h-[600px] sm:min-h-screen py-10 sm:py-20"
      style={{ backgroundColor: "#0B1220" }}
    >
      {/* === Background Video === */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onError={handleVideoError}
        poster="/fallback.jpg"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        <source src="/video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* === Radial glow === */}
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 40%, rgba(0,230,255,0.12) 0%, rgba(255,59,59,0.08) 45%, rgba(11,18,32,0.6) 70%)",
        }}
      />

      {/* === Black overlay === */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* === Content === */}
      <div className="relative z-20 container mx-auto px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* === Headline === */}
          <h1
            className="text-[clamp(1.8rem,5vw,3.5rem)] sm:text-[clamp(2.3rem,6vw,4rem)]
            font-extrabold mb-4 sm:mb-6 leading-tight"
          >
            <span className="block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              UNLEASH YOUR
            </span>
            <span
              className="block text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,230,255,0.35)]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #00E6FF 0%, #18BFEA 45%, #DCE5EB 100%)",
              }}
            >
              VEHICLE&apos;S
            </span>
            <span
              className="block text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #DCE5EB 0%, #9FD9FF 45%, #FF3B3B 100%)",
              }}
            >
              POTENTIAL
            </span>
          </h1>

          {/* === Subtitle === */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-2xl 
            text-slate-300/90 mb-6 sm:mb-10 max-w-3xl mx-auto px-2 leading-relaxed"
          >
            Experience peak performance, improved efficiency, and reduced
            emissions with AF-MOK PERFORMANCE’s expert tuning solutions for cars
            and LCVs.
          </p>

          {/* === CTA Buttons === */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            {/* Primary Button */}
            <button
              type="button"
              onClick={scrollToServices}
              className="relative inline-flex items-center justify-center rounded-xl 
              px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-black 
              transition w-full sm:w-auto shadow-[0_0_20px_rgba(0,230,255,0.35)] 
              hover:shadow-[0_0_28px_rgba(0,230,255,0.55)]"
              style={{ backgroundColor: "#00E6FF" }}
            >
              Explore Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              onClick={scrollToAbout}
              className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 
              text-base sm:text-lg font-semibold bg-transparent text-slate-200 
              transition border border-[#FF3B3B]"
              style={{
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

          {/* === Accent Line === */}
          <div
            className="mx-auto mt-6 sm:mt-10 h-[3px] w-24 sm:w-32 rounded-full"
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
