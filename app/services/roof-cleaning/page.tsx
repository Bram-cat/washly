import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, Home } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Cleaning Services PEI | Washly',
  description: 'Professional roof cleaning services in PEI. Remove moss, algae, and extend your roof life. Call 705-822-8605 for a free quote.',
};

export default function RoofCleaningPage() {
  return (
    <div className="pt-16">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/5.png" alt="Roof Cleaning" fill className="object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Home className="mx-auto mb-4" size={48} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Roof Cleaning Services</h1>
          <p className="text-xl mb-8">Extend your roof's life with professional cleaning</p>
          <a href="tel:705-822-8605" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center">
            <Phone className="mr-2" size={20} />
            Call for Free Quote
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Expert Roof Cleaning in PEI</h2>
              <p className="text-lg text-gray-600 mb-6">
                Moss, algae, and lichen can significantly reduce your roof's lifespan and affect your home's curb appeal. Our professional roof cleaning service safely removes these harmful growths using specialized soft washing techniques.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We use gentle, low-pressure methods that won't damage your shingles while effectively eliminating organic growth and restoring your roof's appearance.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/5.png" alt="Roof cleaning" fill className="object-cover" />
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Roof Cleaning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Extended Roof Life', desc: 'Remove harmful organisms that deteriorate shingles and reduce roof lifespan.' },
                { title: 'Improved Energy Efficiency', desc: 'Clean roofs reflect more sunlight, helping keep your home cooler in summer.' },
                { title: 'Enhanced Curb Appeal', desc: 'Restore your roof\'s original color and boost your home\'s overall appearance.' },
                { title: 'Prevent Damage', desc: 'Stop moss and algae from lifting shingles and causing leaks.' },
                { title: 'Maintain Warranty', desc: 'Some roof warranties require regular cleaning and maintenance.' },
                { title: 'Increase Property Value', desc: 'A clean, well-maintained roof is a major selling point.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
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

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Investment</h2>
          <p className="text-xl mb-8">Schedule professional roof cleaning today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold">
              Get Free Quote
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
