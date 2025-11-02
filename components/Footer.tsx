"use client"

import { Sparkles, Phone, MapPin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-bold text-lg">Washly</div>
                <div className="text-xs text-blue-200 -mt-1">Washing Services</div>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Professional cleaning services that make your property shine brighter. Proudly serving Prince Edward Island with quality and care.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:7058228605"
                    className="block text-blue-100 hover:text-white transition-colors mb-1"
                  >
                    Pathik Pandya: (705) 822-8605
                  </a>
                  <a
                    href="tel:7059704920"
                    className="block text-blue-100 hover:text-white transition-colors"
                  >
                    Atmiya Patel: (705) 970-4920
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-blue-100">
                  Locally operated in<br />
                  Prince Edward Island, Canada
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Our Services</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="hover:text-white transition-colors cursor-pointer">Window Cleaning</li>
              <li className="hover:text-white transition-colors cursor-pointer">Gutter Cleaning</li>
              <li className="hover:text-white transition-colors cursor-pointer">Soft & Pressure Washing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Roof Cleaning</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <div>
              &copy; {currentYear} Washly Washing Services. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="font-medium text-secondary">Shine Brighter Together</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
