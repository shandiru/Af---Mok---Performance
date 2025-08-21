import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    carReg: "",
    makeModel: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // WhatsApp message format with form data
    const waMessage = `Hello, I need assistance. Here are the details:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCar Registration: ${formData.carReg}\nMake & Model: ${formData.makeModel}\nLocation: ${formData.location}\nMessage: ${formData.message}`;

    // Encoding message for WhatsApp
    const waHref = `https://wa.me/94721159868?text=${encodeURIComponent(waMessage)}`;
    
    // Redirect to WhatsApp with the message
    window.open(waHref, "_blank");
  };

  const phoneDisplay = "+44 7494 481443";
  const phoneHref = "tel:+447494481443";
  const emailDisplay = "afmok.performance@outlook.com";
  const address = `Unit 6, Spon Lane Trading Estate,
Varney Ave, West Bromwich B70 6AE,
United Kingdom`;

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">GET IN </span>
            <span className="bg-gradient-to-r from-cyan-400 via-white to-rose-500 bg-clip-text text-transparent">
              TOUCH
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your transformation? Contact us today and take the
            first step towards peak performance.
          </p>
        </div>

        {/* Layout: Info (left) + Form (right) */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Information */}
          <div>
            <div className="bg-black border border-slate-700 rounded-xl p-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-white to-rose-500 bg-clip-text text-transparent mb-6">
                Contact Information
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white text-black p-3 rounded-lg shadow-sm ring-1 ring-slate-200/50">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-white to-rose-500 bg-clip-text text-transparent">
                    Address
                  </h4>
                  <p className="text-gray-300 whitespace-pre-line">{address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white text-black p-3 rounded-lg shadow-sm ring-1 ring-slate-200/50">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-white to-rose-500 bg-clip-text text-transparent">
                    Phone
                  </h4>
                  <a
                    href={phoneHref}
                    className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white text-black p-3 rounded-lg shadow-sm ring-1 ring-slate-200/50">
                  {/* WhatsApp icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="24"
                    height="24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M128 24a104 104 0 0 0-88.61 156.7L32 232l52.15-6.94A104 104 0 1 0 128 24Zm0 192a88 88 0 0 1-45.13-12.46l-3.26-1.94-31.1 4.14 4.22-30.62-2-3.33A88 88 0 1 1 128 216Zm48.9-54.21c-2.69 7.6-13.31 14.27-18.69 14.56-5 .28-11.34.4-32.82-9.72-27.6-13.18-45.51-39.08-46.91-40.94s-11.21-14.95-11.21-28.55 7.1-20.27 9.63-23.08a10.51 10.51 0 0 1 7.67-3.59c1.88 0 3.83 0 5.5.09a9.37 9.37 0 0 1 6.19 2.91c1.93 2.11 6.86 8.41 7.43 9.91s1.87 4.34.27 6.93-2.41 3.86-4.38 6.22c-2 2.35-4.15 4.19-1.78 8s7.69 12.63 16.53 20.45c11.36 10.09 20.92 13.21 24.59 14.7s5.93 1.24 8.13-.75 9.39-10.95 11.89-14.71 4.94-3.05 8.31-1.84 21.56 10.16 25.29 12c3.73 1.84 6.22 2.75 7.14 4.24s.95 7.54-1.74 15.13Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-white to-rose-500 bg-clip-text text-transparent">
                    WhatsApp
                  </h4>
                  <a
                    href={`https://wa.me/94721159868?text=${encodeURIComponent(`Hello, I need assistance. Here are the details:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCar Registration: ${formData.carReg}\nMake & Model: ${formData.makeModel}\nLocation: ${formData.location}\nMessage: ${formData.message}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white text-black p-3 rounded-lg shadow-sm ring-1 ring-slate-200/50">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-white to-rose-500 bg-clip-text text-transparent">
                    Email
                  </h4>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailDisplay}&su=Inquiry%20of%20Website`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition break-all"
                  >
                    {emailDisplay}
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            <div className="bg-black border border-slate-700 rounded-xl">
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>

                  {/* Car Reg | Make & Model | Location */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      id="carReg"
                      type="text"
                      name="carReg"
                      placeholder="Car Registration"
                      value={formData.carReg}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <input
                      id="makeModel"
                      type="text"
                      name="makeModel"
                      placeholder="Make and Model"
                      value={formData.makeModel}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <input
                      id="location"
                      type="text"
                      name="location"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your car issue"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 via-white to-rose-500 text-black hover:opacity-90 text-lg px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}
