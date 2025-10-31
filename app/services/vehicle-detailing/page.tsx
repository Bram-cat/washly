import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Car, Sparkles, Shield, Wind, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Detailing | Professional Auto Detailing Services | Washly PEI',
  description: 'Professional vehicle detailing services in PEI. Interior and exterior cleaning, waxing, and protection. Call 705-822-8605 for a free quote.',
};

export default function VehicleDetailingPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/7.png"
            alt="Vehicle detailing service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-5xl py-20">
          <div className="mb-6 inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm border border-white/30">
            Professional Auto Care
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Vehicle Detailing
            <br />
            <span className="text-blue-200">Like New Again</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional auto detailing services. Interior and exterior cleaning, waxing, and protection to make your vehicle look brand new.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-blue-700 px-12 py-7 rounded-full text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-blue-600/30 hover:bg-blue-600/50 backdrop-blur-sm text-white px-10 py-7 rounded-full text-lg font-semibold border-2 border-white/30 shadow-lg transition-all duration-300 hover:scale-105">
              <a href="tel:705-822-8605" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                705-822-8605
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Detailing Services
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: Sparkles,
                title: 'Exterior Detailing',
                services: [
                  'Hand wash and dry',
                  'Clay bar treatment',
                  'Wax and polish',
                  'Tire and wheel cleaning',
                  'Chrome and trim polish',
                  'Headlight restoration',
                ],
              },
              {
                icon: Car,
                title: 'Interior Detailing',
                services: [
                  'Vacuum all surfaces',
                  'Leather conditioning',
                  'Fabric and carpet cleaning',
                  'Dashboard and console cleaning',
                  'Window cleaning',
                  'Odor elimination',
                ],
              },
              {
                icon: Shield,
                title: 'Premium Protection',
                services: [
                  'Ceramic coating application',
                  'Paint sealant',
                  'Fabric protection',
                  'UV protection',
                  'Scratch removal',
                  'Swirl mark correction',
                ],
              },
              {
                icon: Wind,
                title: 'Engine Bay Cleaning',
                services: [
                  'Engine degreasing',
                  'Component cleaning',
                  'Hose and belt dressing',
                  'Battery terminal cleaning',
                  'Engine compartment detailing',
                  'Protective coating',
                ],
              },
            ].map((category, index) => (
              <Card key={index} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <category.icon className="text-white h-8 w-8" />
                    </div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-3">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-28 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Detailing Packages
            </span>
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            Choose the package that best fits your needs and budget
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Detail',
                description: 'Essential cleaning for maintaining your vehicle',
                features: [
                  'Exterior hand wash',
                  'Interior vacuum',
                  'Window cleaning',
                  'Tire shine',
                  'Basic wax',
                ],
              },
              {
                name: 'Premium Detail',
                description: 'Complete interior and exterior detailing',
                popular: true,
                features: [
                  'Everything in Basic',
                  'Clay bar treatment',
                  'Premium wax and polish',
                  'Leather conditioning',
                  'Fabric treatment',
                  'Engine bay cleaning',
                ],
              },
              {
                name: 'Ultimate Detail',
                description: 'The complete detailing experience',
                features: [
                  'Everything in Premium',
                  'Paint correction',
                  'Ceramic coating',
                  'Headlight restoration',
                  'Odor elimination',
                  'Complete protection package',
                ],
              },
            ].map((pkg, index) => (
              <Card key={index} className={`group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden relative ${pkg.popular ? 'ring-4 ring-blue-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                    MOST POPULAR
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative pt-10 pb-6">
                  <CardTitle className="text-3xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-slate-600 text-lg">{pkg.description}</p>
                </CardHeader>

                <CardContent className="relative pb-10">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 p-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mt-0.5">
                          <CheckCircle className="text-white h-4 w-4" />
                        </div>
                        <span className="text-slate-700 text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className={`w-full py-6 rounded-xl text-base font-semibold transition-all duration-300 ${pkg.popular ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl' : 'bg-blue-100 hover:bg-blue-200 text-blue-700'}`}>
                    <Link href="/contact">
                      Get Quote
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Our Detailing Process
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Inspection',
                description: 'We assess your vehicle and discuss your specific needs',
              },
              {
                step: '02',
                title: 'Preparation',
                description: 'Pre-treatment of problem areas and surface prep',
              },
              {
                step: '03',
                title: 'Detailing',
                description: 'Meticulous cleaning, polishing, and protection',
              },
              {
                step: '04',
                title: 'Final Review',
                description: 'Quality check and walkthrough with you',
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-7xl font-bold text-blue-100 mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent z-10"></div>
              <Image
                src="/7.png"
                alt="Professional vehicle detailing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold mb-12">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Why Professional Detailing?
                </span>
              </h2>
              <div className="space-y-6">
                {[
                  'Preserves and increases vehicle value',
                  'Professional-grade products and equipment',
                  'Removes contaminants that damage paint',
                  'Protects against weather and UV damage',
                  'Improves driving experience and comfort',
                  'Healthier interior environment',
                  'Attention to detail you cannot get at car washes',
                  'Saves you time and effort',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="mt-1 p-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <CheckCircle className="text-white h-6 w-6" />
                    </div>
                    <p className="text-slate-700 text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
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
            Ready to Restore Your Vehicle's Shine?
          </h2>
          <p className="text-xl md:text-2xl mb-14 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free quote on professional vehicle detailing
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
            <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-blue-700 px-12 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Request Free Quote
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
