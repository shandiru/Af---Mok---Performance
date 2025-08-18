import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-white">
                AF-MOK <span className="text-gray-400">PERFORMANCE</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              High-quality performance tuning and emissions solutions for cars
              and LCVs. Maximize your vehicle’s power, efficiency, and
              reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <Facebook
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  size={20}
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  size={20}
                />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  size={20}
                />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Performance Software</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Economy Tuning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">DPF Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">EGR &amp; ADBLUE Delete</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Stage 1 / Stage 2 Remap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gearbox Tuning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Speed Limiter Removal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diagnostic Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AF-MOK Performance</li>
              <li>No. 123, Tuning Street, Colombo, Sri Lanka</li>

              {/* CLICKABLE PHONE */}
              <li>
                <a
                  href="tel:+94771234567"
                  className="hover:text-white transition-colors"
                  aria-label="Call AF-MOK Performance"
                >
                  +94 77 123 4567
                </a>
              </li>

              {/* CLICKABLE EMAIL */}
              <li>
                <a
                  href="mailto:info@afmokperformance.com"
                  className="hover:text-white transition-colors break-all"
                  aria-label="Email AF-MOK Performance"
                >
                  info@afmokperformance.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AF-MOK Performance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
