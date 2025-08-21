'use client'

import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

export default function About() {
  // Put these images in /public (e.g., public/1.jpeg ...)
  const images = [
    '/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg',
    '/5.jpeg', '/6.jpeg', '/7.jpeg', '/8.jpeg'
  ]

  const [play, setPlay] = useState(true)

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

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

          {/* Right: Seamless marquee (iPhone-friendly) */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Marquee
              play={play}
              pauseOnHover
              speed={40}              // adjust speed to taste
              gradient                // soft fade edges (built-in)
              gradientColor={[0, 0, 0]} // black background
              gradientWidth={96}      // ~24px = 1.5rem * 16? here 96px
              onTouchStart={() => setPlay(false)} // pause on touch (iOS)
              onTouchEnd={() => setPlay(true)}    // resume on release
              onMouseDown={() => setPlay(false)}  // pause on click/drag (desktop)
              onMouseUp={() => setPlay(true)}
            >
              {/* Each item in the marquee */}
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="mx-2 flex items-center justify-center"
                  style={{ height: '24rem' }}
                >
                  <img
                    src={src}
                    alt={`Workshop ${idx + 1}`}
                    className="h-full w-auto object-contain rounded-xl bg-black"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
