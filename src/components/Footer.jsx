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
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/16eb5kcuGU/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  size={20}
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/afmokperformance/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  size={20}
                />
              </a>

              {/* TikTok (Custom SVG) */}
              <a
                href="https://www.tiktok.com/@afmok.performance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="text-gray-400 hover:text-white transition-colors"
                  width={20}
                  height={20}
                  fill="currentColor"
                >
                  <path d="M240 80a64 64 0 0 1-64-64h-32v168a40 40 0 1 1-40-40 39.6 39.6 0 0 1 8 .8V112a72 72 0 1 0 64 71.6V97.7A95.6 95.6 0 0 0 240 112Z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" aria-label="Twitter">
                <Twitter
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  size={20}
                />
              </a>

              {/* YouTube */}
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
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Performance Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Economy Tuning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  DPF Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  EGR &amp; ADBLUE Delete
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Stage 1 / Stage 2 Remap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gearbox Tuning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Speed Limiter Removal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Diagnostic Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AF-MOK Performance</li>
              <li>
                Unit 6, Spon Lane Trading Estate,
                <br />
                Varney Ave, West Bromwich B70 6AE,
                <br />
                United Kingdom
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+447494481443"
                  className="hover:text-white transition-colors"
                  aria-label="Call AF-MOK Performance"
                >
                  +44 7494 481443
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:afmok.performance@outlook.com"
                  className="hover:text-white transition-colors break-all"
                  aria-label="Email AF-MOK Performance"
                >
                  afmok.performance@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AF-MOK Performance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
