import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, Droplets } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Services PEI | Washly',
  description: 'Professional gutter cleaning services in Prince Edward Island. Prevent water damage and keep gutters flowing freely. Call 705-822-8605 for a free quote.',
};

export default function GutterCleaningPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/2.png"
            alt="Gutter Cleaning Services"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Droplets className="mx-auto mb-4" size={48} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Gutter Cleaning Services
          </h1>
          <p className="text-xl mb-8">
            Keep your gutters flowing freely and prevent water damage
          </p>
          <a
            href="tel:705-822-8605"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center"
          >
            <Phone className="mr-2" size={20} />
            Call for Free Quote
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Gutter Cleaning in PEI
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Clogged gutters can cause serious damage to your home foundation, roof, and landscaping. Our professional gutter cleaning service removes all debris, ensuring your gutters function properly and protect your property.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We thoroughly clean out leaves, twigs, and other debris, then flush your gutters to ensure proper water flow. We also inspect for any damage or issues while we work.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/2.png"
                alt="Gutter cleaning service"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Gutter Cleaning Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Inspection', desc: 'We inspect your gutters and downspouts' },
                { step: '2', title: 'Debris Removal', desc: 'Remove all leaves, twigs, and buildup' },
                { step: '3', title: 'Flushing', desc: 'Flush gutters to ensure proper flow' },
                { step: '4', title: 'Final Check', desc: 'Verify everything is working correctly' },
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Clean Gutters */}
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Regular Gutter Cleaning is Essential
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Prevent Foundation Damage',
                  desc: 'Properly functioning gutters direct water away from your foundation, preventing costly structural damage.',
                },
                {
                  title: 'Avoid Roof Damage',
                  desc: 'Clogged gutters can cause water to back up under your roof, leading to leaks and rot.',
                },
                {
                  title: 'Protect Landscaping',
                  desc: 'Overflow from clogged gutters can erode soil and damage plants around your home.',
                },
                {
                  title: 'Prevent Pest Infestations',
                  desc: 'Standing water in gutters attracts mosquitoes and debris provides nesting material for pests.',
                },
                {
                  title: 'Extend Gutter Lifespan',
                  desc: 'Regular cleaning prevents rust and deterioration, helping your gutters last longer.',
                },
                {
                  title: 'Avoid Ice Dams',
                  desc: 'Clean gutters help prevent ice dam formation during winter months.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Protect Your Home with Clean Gutters
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait for water damage. Schedule your gutter cleaning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:705-822-8605"
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              705-822-8605
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
