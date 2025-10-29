import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, Droplets, Home, Building2, Sparkles, Award, Clock, Shield } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      title: 'Window Cleaning',
      description: 'Crystal clear windows that shine bright, inside and out.',
      icon: Sparkles,
      image: '/1.png',
      href: '/services/window-cleaning',
    },
    {
      title: 'Gutter Cleaning',
      description: 'Keep your gutters flowing freely and prevent water damage.',
      icon: Droplets,
      image: '/2.png',
      href: '/services/gutter-cleaning',
    },
    {
      title: 'Pressure Washing',
      description: 'Remove dirt, grime, and stains from any surface.',
      icon: Sparkles,
      image: '/3.png',
      href: '/services/pressure-washing',
    },
    {
      title: 'Soft & Pressure Washing',
      description: 'Gentle yet effective cleaning for delicate surfaces.',
      icon: Home,
      image: '/4.png',
      href: '/services/soft-washing',
    },
    {
      title: 'Roof Cleaning',
      description: 'Extend your roof\'s life with professional cleaning.',
      icon: Home,
      image: '/5.png',
      href: '/services/roof-cleaning',
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'Expert team with years of experience',
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'We value your time and arrive as scheduled',
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete peace of mind with full insurance coverage',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            WASHLY
            <span className="block text-blue-600 mt-2">WASHING SERVICES</span>
          </h1>
          <p className="text-xl sm:text-2xl text-orange-500 font-semibold mb-8">
            SHINE BRIGHTER TOGETHER
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional window cleaning, gutter cleaning, and pressure washing services in Prince Edward Island.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:705-822-8605"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg flex items-center"
            >
              <Phone className="mr-2" size={20} />
              705-822-8605
            </a>
          </div>
          <p className="text-sm text-gray-600">
            Locally Operated in PEI | Call us today for a free quote
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional cleaning solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <service.icon className="text-blue-600 mr-2" size={24} />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 text-blue-600 font-medium flex items-center">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make Your Property Shine?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free, no-obligation quote. We serve residential and commercial clients across PEI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Request Free Quote
            </Link>
            <div className="flex gap-4">
              <a
                href="tel:705-822-8605"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-4 rounded-full text-lg font-semibold transition-all duration-200"
              >
                705-822-8605
              </a>
              <a
                href="tel:705-970-4920"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-4 rounded-full text-lg font-semibold transition-all duration-200"
              >
                705-970-4920
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Washly?
              </h2>
              <div className="space-y-4">
                {[
                  'Locally operated in Prince Edward Island',
                  'Experienced and professional team',
                  'Competitive pricing with free quotes',
                  'Eco-friendly cleaning solutions',
                  'Fully insured and bonded',
                  'Satisfaction guaranteed',
                  'Flexible scheduling',
                  'Residential and commercial services',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/6.png"
                alt="Professional washing services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Proudly Serving PEI
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Professional washing services throughout Prince Edward Island
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/residential"
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Home className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Residential Services</h3>
              <p className="text-gray-600">Home owners & property managers</p>
            </Link>
            <Link
              href="/commercial"
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Building2 className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Commercial Services</h3>
              <p className="text-gray-600">Businesses & commercial properties</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
