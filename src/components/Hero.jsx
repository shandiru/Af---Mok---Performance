import React from "react";

export default function Hero() {
  // Optional: helpful error to spot 404/codec issues quickly
  const handleVideoError = () => {
    console.error(
      "Background video failed to load. Check that public/video.mp4 exists, the name matches case exactly, and it's H.264/AAC."
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Video (served from /public) */}
      <video
        autoPlay
        loop
        muted            /* required for autoplay on most browsers */
        playsInline      /* iOS/Safari inline playback */
        preload="auto"
        aria-hidden="true"
        onError={handleVideoError}
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      >
        {/* Use absolute URL from the root because the file is in /public */}
        <source src="/video.mp4" type="video/mp4" />
        {/* Temporarily add controls to test playback if needed */}
        {/* <track kind="captions" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay above the video */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            UNLEASH YOUR
            <span className="block text-gray-400">VEHICLE'S POTENTIAL</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience peak performance, improved efficiency, and reduced
            emissions with AF-MOK PERFORMANCE’s expert tuning solutions for cars
            and LCVs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary button */}
            <button
              type="button"
              className="flex items-center justify-center bg-white text-black hover:bg-gray-200 text-lg px-8 py-3 rounded-lg font-medium"
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

            {/* Secondary button */}
            <button
              type="button"
              className="border border-gray-400 text-gray-300 hover:bg-gray-800 text-lg px-8 py-3 rounded-lg font-medium bg-transparent"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
