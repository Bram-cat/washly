import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Droplets, Home, Wind, Sofa, Car, ArrowRight, CheckCircle, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Professional Washing Services in PEI | Washly',
  description: 'Comprehensive washing services including window cleaning, gutter cleaning, pressure washing, soft washing, roof cleaning, carpet cleaning, and vehicle detailing in Prince Edward Island.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Window Cleaning',
      description: 'Crystal clear windows that shine bright, inside and out. Professional cleaning for residential and commercial properties.',
      icon: Sparkles,
      image: '/1.png',
      href: '/services/window-cleaning',
      features: ['Interior & Exterior', 'Streak-Free Finish', 'Screen Cleaning', 'Track Cleaning'],
    },
    {
      title: 'Gutter Cleaning',
      description: 'Keep your gutters flowing freely and prevent water damage. Complete debris removal and downspout flushing.',
      icon: Droplets,
      image: '/2.png',
      href: '/services/gutter-cleaning',
      features: ['Debris Removal', 'Downspout Flushing', 'Damage Inspection', 'Photo Documentation'],
    },
    {
      title: 'Pressure Washing',
      description: 'Remove dirt, grime, and stains from any surface. High-powered cleaning for driveways, decks, and more.',
      icon: Wind,
      image: '/3.png',
      href: '/services/pressure-washing',
      features: ['Driveways', 'Decks & Patios', 'Siding', 'Walkways'],
    },
    {
      title: 'Soft Washing',
      description: 'Gentle yet effective cleaning for delicate surfaces. Safe for siding, roofs, and painted surfaces.',
      icon: Home,
      image: '/4.png',
      href: '/services/soft-washing',
      features: ['Gentle Cleaning', 'Eco-Friendly', 'Long-Lasting Results', 'Safe for All Surfaces'],
    },
    {
      title: 'Roof Cleaning',
      description: 'Extend your roof life with professional cleaning. Remove moss, algae, and debris safely and effectively.',
      icon: Building,
      image: '/5.png',
      href: '/services/roof-cleaning',
      features: ['Moss Removal', 'Algae Treatment', 'Shingle Protection', 'Lifetime Extended'],
    },
    {
      title: 'Carpet & Upholstery Cleaning',
      description: 'Deep cleaning for carpets, rugs, and furniture. Remove stains, odors, and allergens for a fresh, clean home.',
      icon: Sofa,
      image: '/6.png',
      href: '/services/carpet-upholstery',
      features: ['Deep Steam Cleaning', 'Stain Removal', 'Odor Elimination', 'Fast Drying'],
    },
    {
      title: 'Vehicle Detailing',
      description: 'Professional auto detailing services. Interior and exterior cleaning to make your vehicle look brand new.',
      icon: Car,
      image: '/7.png',
      href: '/services/vehicle-detailing',
      features: ['Interior Detailing', 'Exterior Wash & Wax', 'Engine Cleaning', 'Headlight Restoration'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 gradient-mesh overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-5xl">
          <div className="mb-6 inline-block px-6 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 font-semibold text-sm">
            What We Do
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive washing and cleaning solutions for homes and businesses across Prince Edward Island
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-28 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block w-full"
              >
                <Card className="h-full w-full overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white">
                  <div className="relative w-full h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <CardHeader className="pb-4 pt-8 px-6 sm:px-8 text-center">
                    <div className="flex flex-col items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <service.icon className="text-white h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm sm:text-base text-slate-600 leading-relaxed text-center">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-6 sm:px-8 pb-8">
                    <ul className="space-y-2 mb-6 text-center">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Why Choose Washly?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Experienced Professionals',
                description: 'Our team has years of experience delivering exceptional results.',
              },
              {
                title: 'Eco-Friendly Solutions',
                description: 'We use environmentally responsible products and methods.',
              },
              {
                title: 'Satisfaction Guaranteed',
                description: 'We stand behind our work with a 100% satisfaction guarantee.',
              },
            ].map((item, index) => (
              <Card key={index} className="group p-8 border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/40 to-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative text-center pt-6">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-14 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free quote on any of our services
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
            <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-blue-700 px-12 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>

            <div className="flex gap-4 flex-wrap justify-center">
              <Button asChild size="lg" className="bg-blue-800/50 hover:bg-blue-800 backdrop-blur-sm text-white px-10 py-7 rounded-full text-lg font-semibold border border-white/20 shadow-lg transition-all duration-300 hover:scale-105">
                <a href="tel:705-822-8605">
                  705-822-8605
                </a>
              </Button>
              <Button asChild size="lg" className="bg-blue-800/50 hover:bg-blue-800 backdrop-blur-sm text-white px-10 py-7 rounded-full text-lg font-semibold border border-white/20 shadow-lg transition-all duration-300 hover:scale-105">
                <a href="tel:705-970-4920">
                  705-970-4920
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
