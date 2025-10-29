import Link from 'next/link';
import Image from 'next/image';
import { Building2, CheckCircle, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Washing Services PEI | Washly',
  description: 'Professional commercial washing services in PEI. Storefronts, office buildings, multi-unit properties & more. Call 705-822-8605.',
};

export default function CommercialPage() {
  return (
    <div className="pt-16">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/8.png" alt="Commercial Services" fill className="object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Building2 className="mx-auto mb-4" size={48} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Commercial Services</h1>
          <p className="text-xl mb-8">Professional washing services for businesses across PEI</p>
          <a href="tel:705-822-8605" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center">
            <Phone className="mr-2" size={20} />
            Call for Free Quote
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Professional Commercial Washing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintain a professional appearance and protect your commercial property investment with our comprehensive washing services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Properties We Serve</h3>
              <div className="space-y-4">
                {[
                  'Retail Storefronts',
                  'Office Buildings',
                  'Restaurants & Cafes',
                  'Shopping Centers',
                  'Multi-Unit Residential',
                  'Medical Facilities',
                  'Hotels & Motels',
                  'Warehouses',
                  'Industrial Buildings',
                  'Parking Structures',
                ].map((property, i) => (
                  <div key={i} className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <CheckCircle className="text-blue-600 mr-3" size={20} />
                    <p className="font-medium">{property}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Commercial Services</h3>
              <div className="space-y-6">
                {[
                  { title: 'Storefront Window Cleaning', desc: 'Crystal clear windows that showcase your business' },
                  { title: 'Building Exterior Washing', desc: 'Pressure and soft washing for all building types' },
                  { title: 'Parking Lot Cleaning', desc: 'Remove oil stains, gum, and dirt from parking areas' },
                  { title: 'Awning & Canopy Cleaning', desc: 'Keep your signage and awnings looking fresh' },
                  { title: 'Gutter Cleaning', desc: 'Protect your building from water damage' },
                  { title: 'Graffiti Removal', desc: 'Quick, effective graffiti removal services' },
                ].map((service, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Why Businesses Choose Washly</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Flexible Scheduling', desc: 'Work around your business hours, including evenings and weekends' },
                { title: 'Minimal Disruption', desc: 'Efficient service that doesn\'t interfere with your operations' },
                { title: 'Professional Results', desc: 'Consistently high-quality work that enhances your business image' },
                { title: 'Fully Insured', desc: 'Complete insurance coverage for commercial properties' },
                { title: 'Recurring Services', desc: 'Schedule regular maintenance to keep your property pristine' },
                { title: 'Competitive Pricing', desc: 'Volume discounts and custom packages available' },
              ].map((benefit, i) => (
                <div key={i} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Enhance Your Business Image</h2>
          <p className="text-xl mb-8 opacity-90">
            A clean property makes a professional impression. Contact us for a customized commercial cleaning plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold">
              Request Quote
            </Link>
            <a href="tel:705-822-8605" className="bg-blue-800 hover:bg-blue-900 px-8 py-4 rounded-full text-lg font-semibold">
              705-822-8605
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
