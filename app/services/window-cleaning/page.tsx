import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Window Cleaning Services PEI | Washly',
  description: 'Professional window cleaning services in Prince Edward Island. Crystal clear windows for homes and businesses. Free quotes. Call 705-822-8605.',
};

export default function WindowCleaningPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1.png"
            alt="Window Cleaning Services"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Sparkles className="mx-auto mb-4" size={48} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Window Cleaning Services
          </h1>
          <p className="text-xl mb-8">
            Crystal clear windows that shine bright, inside and out
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
                Professional Window Cleaning in PEI
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Clean windows make a huge difference in the appearance of your home or business. Our professional window cleaning service ensures streak-free, sparkling clean windows that let natural light shine through.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We use professional-grade equipment and eco-friendly cleaning solutions to deliver exceptional results every time. Whether you need residential or commercial window cleaning, we have the expertise to handle any job.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/1.png"
                alt="Window cleaning in progress"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* What We Clean */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What We Clean
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Interior Windows',
                'Exterior Windows',
                'Window Sills & Tracks',
                'Screens',
                'Storm Windows',
                'Skylights',
                'French Doors',
                'Sliding Glass Doors',
                'Commercial Storefronts',
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-blue-50 p-4 rounded-lg">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-800 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Professional Window Cleaning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Curb Appeal</h3>
                <p className="text-gray-600">
                  Clean windows dramatically improve your property's appearance and make a great first impression.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">More Natural Light</h3>
                <p className="text-gray-600">
                  Remove dirt and grime to let more sunlight into your home or business.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Extended Window Life</h3>
                <p className="text-gray-600">
                  Regular cleaning prevents buildup that can damage glass and frames over time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Safer Than DIY</h3>
                <p className="text-gray-600">
                  Avoid the risk of falls and injuries - let our trained professionals handle it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Sparkling Clean Windows?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free quote on window cleaning services.
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
