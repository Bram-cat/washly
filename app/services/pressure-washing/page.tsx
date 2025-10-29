import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing Services PEI | Washly',
  description: 'Professional pressure washing services in PEI. Remove dirt, grime, and stains from driveways, decks, siding & more. Call 705-822-8605.',
};

export default function PressureWashingPage() {
  return (
    <div className="pt-16">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/3.png" alt="Pressure Washing" fill className="object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Sparkles className="mx-auto mb-4" size={48} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Pressure Washing Services</h1>
          <p className="text-xl mb-8">Remove dirt, grime, and stains from any surface</p>
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
              <h2 className="text-4xl font-bold mb-6">Professional Pressure Washing in PEI</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our high-powered pressure washing service removes years of built-up dirt, mold, mildew, and stains from virtually any exterior surface. We use professional equipment and techniques to deliver outstanding results without damaging your property.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/3.png" alt="Pressure washing" fill className="object-cover" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Surfaces We Clean</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {['Driveways', 'Sidewalks', 'Decks & Patios', 'House Siding', 'Fences', 'Parking Lots', 'Building Exteriors', 'Concrete Surfaces', 'Brick & Stone'].map((item, i) => (
              <div key={i} className="flex items-center bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="text-blue-600 mr-3" size={20} />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Property Today</h2>
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
