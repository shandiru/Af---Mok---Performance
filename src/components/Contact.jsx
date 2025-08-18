import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">GET IN</span>{" "}
            <span className="text-gray-400">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your transformation? Contact us today and take the
            first step towards peak performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="bg-black border border-slate-700 rounded-xl">
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-200 text-lg px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-white text-black p-3 rounded-lg shadow-sm ring-1 ring-slate-200/50">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-gray-300">info@afmokperformance.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="bg-white text-black p-3 rounded-lg shadow-sm ring-1 ring-slate-200/50">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="bg-white text-black p-3 rounded-lg shadow-sm ring-1 ring-slate-2 00/50">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Location</h3>
                <p className="text-gray-300">
                  123 Performance Ave
                  <br />
                  Fitness City, FC 12345
                </p>
              </div>
            </div>

            {/* Training Hours */}
            <div className="bg-black border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Training Hours</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          {/* /Right column */}
        </div>
      </div>
    </section>
  );
}
