import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Sofa, Shield, Clock, Sparkles, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carpet & Upholstery Cleaning | Professional Deep Cleaning | Washly PEI',
  description: 'Professional carpet and upholstery cleaning services in PEI. Deep steam cleaning, stain removal, and odor elimination. Call 705-822-8605 for a free quote.',
};

export default function CarpetUpholsteryPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/6.png"
            alt="Carpet and upholstery cleaning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-5xl py-20">
          <div className="mb-6 inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm border border-white/30">
            Premium Cleaning Service
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Carpet & Upholstery
            <br />
            <span className="text-blue-200">Deep Cleaning</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional deep cleaning for carpets, rugs, and furniture. Remove stains, odors, and allergens for a fresh, healthy home.
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
              What We Clean
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Carpets',
                description: 'Deep steam cleaning for all types of carpets and area rugs',
              },
              {
                title: 'Sofas & Couches',
                description: 'Gentle yet effective upholstery cleaning for all fabrics',
              },
              {
                title: 'Chairs & Recliners',
                description: 'Detailed cleaning for dining chairs and recliners',
              },
              {
                title: 'Mattresses',
                description: 'Deep cleaning and sanitization for a healthier sleep',
              },
              {
                title: 'Area Rugs',
                description: 'Specialized cleaning for delicate and antique rugs',
              },
              {
                title: 'Car Interiors',
                description: 'Professional automotive upholstery and carpet cleaning',
              },
            ].map((item, index) => (
              <Card key={index} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-slate-600 text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-28 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Our Cleaning Process
            </span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Inspection',
                description: 'We assess the fabric type, stains, and overall condition',
              },
              {
                step: '02',
                title: 'Pre-Treatment',
                description: 'Special solutions applied to stubborn stains and high-traffic areas',
              },
              {
                step: '03',
                title: 'Deep Clean',
                description: 'Hot water extraction or steam cleaning for thorough dirt removal',
              },
              {
                step: '04',
                title: 'Finishing',
                description: 'Final inspection, grooming, and fast-drying techniques',
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
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-12">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Benefits of Professional Cleaning
                </span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Sparkles,
                    title: 'Deep Stain Removal',
                    description: 'Professional equipment and solutions remove tough stains ordinary cleaning cannot.',
                  },
                  {
                    icon: Shield,
                    title: 'Allergen Elimination',
                    description: 'Remove dust mites, pet dander, and allergens for healthier indoor air.',
                  },
                  {
                    icon: Clock,
                    title: 'Extended Lifespan',
                    description: 'Regular professional cleaning extends the life of your carpets and furniture.',
                  },
                  {
                    icon: Sofa,
                    title: 'Restored Appearance',
                    description: 'Bring back the original beauty and freshness of your upholstery.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <item.icon className="text-white h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent z-10"></div>
              <Image
                src="/6.png"
                alt="Clean carpet and upholstery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Why Choose Washly?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Certified cleaning technicians',
              'Eco-friendly, non-toxic solutions',
              'Advanced cleaning equipment',
              'Fast drying times',
              'Satisfaction guaranteed',
              'Competitive pricing',
              'Flexible scheduling',
              'Fully insured',
              'Free quotes',
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
            Ready for Cleaner, Fresher Carpets?
          </h2>
          <p className="text-xl md:text-2xl mb-14 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free quote on carpet and upholstery cleaning
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
