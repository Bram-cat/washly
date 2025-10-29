import Link from 'next/link';
import Image from 'next/image';
import { Home, CheckCircle, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Washing Services PEI | Washly',
  description: 'Professional residential washing services in PEI. Window cleaning, gutter cleaning, pressure washing & more for homeowners. Call 705-822-8605.',
};

export default function ResidentialPage() {
  return (
    <div className="pt-16">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/6.png" alt="Residential Services" fill className="object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Home className="mx-auto mb-4" size={48} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Residential Services</h1>
          <p className="text-xl mb-8">Professional washing services for homeowners across PEI</p>
          <a href="tel:705-822-8605" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center">
            <Phone className="mr-2" size={20} />
            Call for Free Quote
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Home Washing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help PEI homeowners maintain beautiful, clean properties with our full range of professional washing services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Window Cleaning', desc: 'Interior and exterior window cleaning for sparkling clear views', link: '/services/window-cleaning', image: '/1.png' },
              { title: 'Gutter Cleaning', desc: 'Remove debris and ensure proper water flow to protect your home', link: '/services/gutter-cleaning', image: '/2.png' },
              { title: 'Pressure Washing', desc: 'Deep clean driveways, walkways, and exterior surfaces', link: '/services/pressure-washing', image: '/3.png' },
              { title: 'Soft Washing', desc: 'Gentle cleaning for siding, decks, and delicate surfaces', link: '/services/soft-washing', image: '/4.png' },
              { title: 'Roof Cleaning', desc: 'Remove moss and algae to extend your roof\'s lifespan', link: '/services/roof-cleaning', image: '/5.png' },
            ].map((service, i) => (
              <Link key={i} href={service.link} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Why Homeowners Choose Washly</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Experienced, professional team',
                'Fully insured and bonded',
                'Eco-friendly cleaning solutions',
                'Competitive, transparent pricing',
                'Flexible scheduling',
                'Satisfaction guaranteed',
                'Locally operated in PEI',
                'Free, no-obligation quotes',
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Protect & Beautify Your Home</h2>
          <p className="text-lg text-gray-600 mb-8">
            Regular professional washing services protect your investment and keep your home looking its best
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold">
              Get Free Quote
            </Link>
            <a href="tel:705-822-8605" className="bg-white hover:bg-gray-100 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold">
              705-822-8605
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
