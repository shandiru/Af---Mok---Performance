import React from "react";

export default function Review() {
  const testimonials = [
    {
      quote:
        "I was blown away by the performance upgrades AF-MOK PERFORMANCE provided for my car. It's like driving a whole new vehicle!",
      name: "Payton Hillman",
    },
    {
      quote:
        "The team at AF-MOK PERFORMANCE went above and beyond to help me find the right solutions for my vehicle. Their expertise and dedication to customer service are unmatched!",
      name: "Avery Smith",
    },
    {
      quote:
        "I can't thank AF-MOK PERFORMANCE enough for helping me reduce my vehicle's emissions. Their DPF and ADBLUE solutions have made a world of difference!",
      name: "Jessie Brown",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gray-400">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-300">
            Real feedback from clients who trust AF-MOK PERFORMANCE.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="text-sm text-gray-500 font-semibold">
                – {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
