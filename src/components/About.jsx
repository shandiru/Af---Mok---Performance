import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
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
              Whether you're looking to boost your vehicle's power, improve its
              fuel efficiency, or reduce emissions, we've got you covered.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With our user-friendly interfaces, exceptional customer service,
              and customizable options, you can trust us to deliver the results
              you need. Contact us today to learn more!
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

            {/* CTA Button */}
            <button
              type="button"
              className="bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-md font-semibold"
            >
              Contact Us
            </button>
          </div>

          {/* Image (fixed) */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Keep a consistent aspect ratio across breakpoints */}
            <div className="relative aspect-[16/9] lg:aspect-[4/3]">
              <img
                src="/1.png"                 /* must be in /public as 1.png */
                alt="AF-MOK Performance Workshop"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
