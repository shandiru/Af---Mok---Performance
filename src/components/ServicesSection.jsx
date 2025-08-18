import React from "react";
import { Target, Users, Zap } from "lucide-react";

const services = [
  {
    icon: <Zap size={48} stroke="#00E6FF" />, // electric cyan
    title: "Stage/ECO Map",
    description:
      "With our Economy services, your vehicle software will be adapted to improve fuel economy and reduce emissions.",
  },
  {
    icon: <Target size={48} stroke="#FF3B3B" />, // neon red
    title: "Performance Software",
    description:
      "Unlock your vehicle’s full potential. Adjust performance parameters without hardware changes and enjoy a more thrilling, efficient drive.",
  },
  {
    icon: <Users size={48} stroke="#18BFEA" />, // softer teal accent
    title: "DPF/EGR/ADBLUE",
    description:
      "We offer tailored emission software solutions based on a deep understanding of vehicle architecture and compliance requirements.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20" style={{ backgroundColor: "#0B1220" }}>
      <div className="container mx-auto px-4 md:px-15">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
            <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">OUR</span>{" "}
            <span className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #00E6FF 0%, #DCE5EB 50%, #FF3B3B 100%)"
              }}
            >
              SERVICES
            </span>
          </h2>
          <p className="text-xl text-slate-300/90 max-w-2xl mx-auto">
            Vehicle performance and emissions software solutions, customized for
            your specific driving needs
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-slate-700 bg-black/90 shadow-lg transition-all
                         hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,230,255,0.35)]"
            >
              {/* subtle neon glow overlay */}
              <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-20 transition"
                style={{ background: "radial-gradient(circle at top, #00E6FF, transparent 70%)" }} />

              <div className="relative p-6 text-center z-10">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.4)]">
                  {service.title}
                </h3>
                <p className="text-slate-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
