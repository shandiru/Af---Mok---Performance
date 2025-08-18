import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function About() {
  const images = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
    "/7.jpeg",
    "/8.jpeg",
  ];

  // Duplicate the images so we have headroom to loop seamlessly
  const loopImages = [...images, ...images, ...images];

  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const cycleWidthRef = useRef(0);
  const startOffsetRef = useRef(0);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);

  // Position the scroll so we start in the middle copy
  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const slides = el.querySelectorAll("[data-slide]");
    if (slides.length === 0) return;

    const firstRect = slides[0].offsetLeft;
    const secondBlockStart = slides[images.length]?.offsetLeft ?? 0;
    const thirdBlockStart = slides[images.length * 2]?.offsetLeft ?? 0;

    cycleWidthRef.current = Math.max(1, secondBlockStart - firstRect);
    startOffsetRef.current = secondBlockStart;

    el.scrollLeft = startOffsetRef.current;

    const ro = new ResizeObserver(() => {
      const firstRect2 = slides[0].offsetLeft;
      const secondBlockStart2 = slides[images.length]?.offsetLeft ?? 0;
      cycleWidthRef.current = Math.max(1, secondBlockStart2 - firstRect2);

      const current = el.scrollLeft;
      const minMid = secondBlockStart2;
      const maxMid = (slides[images.length * 2]?.offsetLeft ?? thirdBlockStart) - 1;
      if (current < minMid || current > maxMid) {
        el.scrollLeft = minMid;
      }
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [images.length]);

  // Auto-scroll with rAF
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const speedPxPerSec = 40;
    const slides = el.querySelectorAll("[data-slide]");
    if (slides.length === 0) return;

    const thirdBlockStart = slides[images.length * 2]?.offsetLeft ?? 0;

    const tick = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (!paused) {
        el.scrollLeft += speedPxPerSec * dt;
        const cycleW = cycleWidthRef.current;
        if (el.scrollLeft >= thirdBlockStart) {
          el.scrollLeft -= cycleW;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onMouseEnter = () => setPaused(true);
    const onMouseLeave = () => setPaused(false);

    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [images.length, paused]);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ABOUT <span className="text-gray-400">AF-MOK</span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At AF-MOK PERFORMANCE, we're passionate about helping you get the
              most out of your vehicle. Our team of experts specializes in
              providing high-quality performance products, software solutions,
              and services for cars and LCV.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We offer a comprehensive range of solutions tailored to your
              vehicle's specific needs, including economy software, performance
              software, DPF solutions, ADBLUE solutions, and EGR solutions.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With our user-friendly interfaces, exceptional customer service,
              and customizable options, you can trust us to deliver results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-gray-400 text-sm">Vehicles Tuned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-md font-semibold"
            >
              Contact Us
            </button>
          </div>

          {/* Infinite auto-scrolling strip */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div
              ref={trackRef}
              className="hide-scrollbar flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing select-none pb-3"
              style={{ scrollBehavior: "auto" }}
            >
              {loopImages.map((src, idx) => (
                <div
                  key={idx}
                  data-slide
                  className="flex-shrink-0 w-full flex items-center justify-center bg-black"
                  style={{ height: "24rem" }}
                >
                  <img
                    src={src}
                    alt={`Workshop ${idx + 1}`}
                    className="h-full w-auto object-contain rounded-xl"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* gradient edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
