'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Window Cleaning', href: '/services/window-cleaning' },
    { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
    { name: 'Pressure Washing', href: '/services/pressure-washing' },
    { name: 'Soft Washing', href: '/services/soft-washing' },
    { name: 'Roof Cleaning', href: '/services/roof-cleaning' },
  ];

  const solutions = [
    { name: 'Residential Services', href: '/residential' },
    { name: 'Commercial Services', href: '/commercial' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg shadow-blue-500/5' : 'bg-white/90 backdrop-blur-lg border-b border-blue-100/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              WASHLY
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium px-2"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium px-2">
                Services
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg py-2 border border-gray-100">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium px-2">
                Solutions
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg py-2 border border-gray-100">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium px-2"
            >
              About Us
            </Link>

            <Link
              href="/testimonials"
              className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium px-2"
            >
              Testimonials
            </Link>

            <Link
              href="/faq"
              className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium px-2"
            >
              FAQ
            </Link>

            <Link
              href="/blog"
              className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium px-2"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ml-2"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block py-2 text-gray-800 hover:text-blue-600">
              Home
            </Link>

            <div className="py-2">
              <div className="text-gray-600 text-xs font-semibold uppercase mb-2">Services</div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block py-2 pl-4 text-sm text-gray-800 hover:text-blue-600"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <div className="py-2">
              <div className="text-gray-600 text-xs font-semibold uppercase mb-2">Solutions</div>
              {solutions.map((solution) => (
                <Link
                  key={solution.name}
                  href={solution.href}
                  className="block py-2 pl-4 text-sm text-gray-800 hover:text-blue-600"
                >
                  {solution.name}
                </Link>
              ))}
            </div>

            <Link href="/about" className="block py-2 text-gray-800 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/testimonials" className="block py-2 text-gray-800 hover:text-blue-600">
              Testimonials
            </Link>
            <Link href="/faq" className="block py-2 text-gray-800 hover:text-blue-600">
              FAQ
            </Link>
            <Link href="/blog" className="block py-2 text-gray-800 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/contact" className="block py-2 text-blue-600 font-medium">
              Contact Us
            </Link>

            <div className="pt-4 border-t border-gray-200">
              <a href="tel:705-822-8605" className="flex items-center py-2 text-gray-800">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">705-822-8605</span>
              </a>
              <a href="tel:705-970-4920" className="flex items-center py-2 text-gray-800">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">705-970-4920</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
