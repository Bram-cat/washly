import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">WASHLY</h3>
            <p className="text-gray-400 text-sm mb-4">
              Professional washing services in PEI. Shine brighter together.
            </p>
            <p className="text-gray-400 text-xs">
              Locally Operated in PEI
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-semibold">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/window-cleaning" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/gutter-cleaning" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/pressure-washing" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link href="/services/carpet-upholstery" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Carpet & Upholstery
                </Link>
              </li>
              <li>
                <Link href="/services/vehicle-detailing" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Vehicle Detailing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/residential" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Residential Services
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Commercial Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-1 text-blue-400" />
                <div>
                  <a href="tel:705-822-8605" className="text-gray-400 hover:text-blue-400 text-sm transition-colors block">
                    Pathik: 705-822-8605
                  </a>
                  <a href="tel:705-970-4920" className="text-gray-400 hover:text-blue-400 text-sm transition-colors block">
                    Atmiya: 705-970-4920
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-blue-400" />
                <a
                  href="https://maps.app.goo.gl/h6oEPLfpaS2BJ6gPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Washly Washing Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
