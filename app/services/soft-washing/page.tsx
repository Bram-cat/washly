import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, Home } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soft Washing Services PEI | Washly',
  description: 'Gentle soft washing services in PEI for delicate surfaces. Safe for roofs, siding, and more. Call 705-822-8605 for a free quote.',
};

export default function SoftWashingPage() {
  return (
    <div className="pt-16">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/4.png" alt="Soft Washing" fill className="object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Home className="mx-auto mb-4" size={48} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Soft Washing Services</h1>
          <p className="text-xl mb-8">Gentle yet effective cleaning for delicate surfaces</p>
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
              <h2 className="text-4xl font-bold mb-6">Safe & Effective Soft Washing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Soft washing uses low-pressure water combined with specialized cleaning solutions to safely remove dirt, algae, mold, and mildew from delicate surfaces. It's perfect for materials that could be damaged by high-pressure washing.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our eco-friendly cleaning solutions kill organic growth at the root, providing longer-lasting results than pressure washing alone.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/4.png" alt="Soft washing" fill className="object-cover" />
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Ideal Surfaces for Soft Washing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {['Vinyl Siding', 'Stucco', 'Wood Surfaces', 'Painted Surfaces', 'Roof Shingles', 'Decks', 'Fences', 'Outdoor Furniture'].map((item, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-3" size={20} />
                  <p className="font-medium text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Gentle Clean, Powerful Results</h2>
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
