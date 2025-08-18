import React from "react";
import { Target, Users, Zap } from "lucide-react";

const services = [
  {
    icon: <Zap size={48} />,
    title: "Stage/ECO Map",
    description:
      "With our Economy services, your vehicle software will be adapted to improve fuel economy and reduce emissions.",
  },
  {
    icon: <Target size={48} />,
    title: "Performance Software",
    description:
      "Unlock your vehicle’s full potential. Adjust performance parameters without hardware changes and enjoy a more thrilling, efficient drive.",
  },
  {
    icon: <Users size={48} />,
    title: "DPF/EGR/ADBLUE",
    description:
      "We offer tailored emission software solutions based on a deep understanding of vehicle architecture and compliance requirements.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">OUR</span>{" "}
            <span className="text-gray-400">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vehicle performance and emissions software solutions, customized for
            your specific driving needs
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 hover:border-gray-600 transition-colors rounded-xl shadow-md"
            >
              <div className="p-6 text-center">
                <div className="text-white mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
