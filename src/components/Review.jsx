'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Review() {
  const testimonials = [
    {
      quote:
        "What sets Af-mok performance apart is their attention to detail, strong communication skills, and dedication to understanding the core needs of a project. Whether it’s writing clean, maintainable code or navigating complex challenges, they approach every task with professionalism and enthusiasm. I highly recommend Af-mok performance to anyone looking for a skilled and reliable software developer.",
      name: "Catalina Mahu",
    },
    {
      quote:
        "Made an enquiry that was quickly answered. Then they managed to fit me in at short notice to make my slow van a bit less slow. Really friendly and professional service, van feels considerably better now.",
      name: "Marc",
    },
    {
      quote:
        "Today was sorted dpf problems. Done 1stage + dpf off remap for engine and remap for gearbox. Now car has better fuel consumption and better response to accelerator pedal. Great job. Highly recommend.",
      name: "Armands Naudins",
    },
    {
      quote:
        "Florin kindly explained to me what he will do, regarding his work on my A7. Super professional! Now my car has super powers. Thank you, Florin!",
      name: "Mihai Nechifor",
    },
    {
      quote:
        "Very punctual and polite, very knowledgeable and give great advice on the work.",
      name: "Matt Whittaker",
    },
    {
      quote:
        "I use them quite frequently. From usual service to remapping or anything related to vehicles they can help! I cannot recommend enough.",
      name: "Alina Florentina Mocanu",
    },
    {
      quote:
        "Highly recommended. Florin is a top guy and very well experienced! Very helpful. Explained everything. Even explained why I shouldn't do few things to my engine. Booked in to the local garage for some work. Florin was on time and did excellent work. Car running excellent on stage 1 map. Hope see you soon my friend.",
      name: "Ferenc Toth",
    },
    {
      quote:
        "Today I went to AF-MOK REMAPPING with my van for a check and a work on it and I am very satisfied. They are not expensive for labor and do a good job and advise you on what to do next. Thank you very much!",
      name: "Marian Minzat",
    },
    {
      quote:
        "Brilliant service. Highly recommended. Had loads of cars done in the past couple years and all my family and friends and customers use him. No trouble, always there, no excuses. Will be using him again in the future.",
      name: "Thomas Kirkham",
    },
    {
      quote:
        "Very happy with the work I had done on my Insignia. Top bloke, on time, very helpful. EGR, DPF delete and mapped—now runs like a dream. Respect.",
      name: "Steve Bell",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">What Our </span>
            <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-300">
            Real feedback from clients who trust{" "}
            <span className="font-semibold gradient-text">
              AF-MOK PERFORMANCE
            </span>
            .
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="flex flex-col h-full min-h-[280px] bg-black border border-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
                <p className="text-gray-300 mb-4 flex-grow">"{t.quote}"</p>
                <div className="text-sm text-gray-500 font-semibold mt-auto">
                  – {t.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ FIX for iPhone Gradient Text */}
      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(to right, #00E5FF, #ffffff, #FF2B2B);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
