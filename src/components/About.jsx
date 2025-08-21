'use client'

import React from 'react'

export default function About() {
  const images = [
    '/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg',
    '/5.jpeg', '/6.jpeg', '/7.jpeg', '/8.jpeg'
  ]

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Tuning
  const n = images.length || 1
  const secondsPerImage = 10   // higher = slower (linear)
  const gapPx = 16
  const EASING = 'linear'      // constant speed

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ABOUT{' '}
              <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2B2B] bg-clip-text text-transparent">
                AF-MOK
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At{' '}
              <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2B2B] bg-clip-text text-transparent font-semibold">
                AF-MOK PERFORMANCE
              </span>
              , we're passionate about helping you get the most out of your vehicle.
              Our team of experts specializes in providing high-quality performance
              products, software solutions, and services for cars and LCV.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We offer a comprehensive range of solutions tailored to your vehicle&apos;s
              specific needs, including economy software, performance software, DPF,
              ADBLUE, and EGR solutions.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With our user-friendly interfaces, exceptional customer service,
              and customizable options, you can trust us to deliver results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2B2B] bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-gray-400 text-sm">Vehicles Tuned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2B2B] bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2B2B] bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2B2B] text-black hover:opacity-90 transition px-6 py-3 rounded-md font-semibold"
            >
              Contact Us
            </button>
          </div>

          {/* Right: Seamless CSS-only auto-scroller (linear) */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            style={{ '--gap': `${gapPx}px` }}
          >
            <div
              className="relative h-[20rem] md:h-[24rem] lg:h-[26rem]"
              style={{ margin: '0 calc(var(--gap) * -1)' }}
            >
              <div
                className="flex h-full will-change-transform"
                style={{
                  '--n': n,
                  '--dur': `${n * secondsPerImage}s`,
                  animation: `aboutscroll var(--dur) ${EASING} infinite`,
                }}
              >
                {[...images, ...images].map((src, i) => (
                  <div
                    key={i}
                    className="w-full flex-[0_0_100%] h-full"
                    style={{ boxSizing: 'border-box', padding: '0 var(--gap)' }}
                  >
                    <div className="h-full w-full overflow-hidden rounded-xl bg-black">
                      <img
                        src={src}
                        alt={`Workshop ${i + 1}`}
                        className="block h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional: soft gradient edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent" />

            {/* Pause on hover (desktop) */}
            <style jsx>{`
              .group:hover div[style*='aboutscroll'] {
                animation-play-state: paused;
              }
              @keyframes aboutscroll {
                from { transform: translateX(0); }
                to { transform: translateX(calc(-100% * var(--n))); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}
