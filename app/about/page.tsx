import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Target, Heart, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Washly | Professional Washing Services in PEI',
  description: 'Learn about Washly - your trusted local washing services provider in Prince Edward Island. Locally operated, professional, and dedicated to quality.',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Washly
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for professional washing services in Prince Edward Island
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Washly Washing Services was founded with a simple mission: to provide exceptional cleaning services that help homes and businesses shine brighter. We are a locally operated company proudly serving Prince Edward Island.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team brings years of experience in professional washing services, combining industry expertise with a commitment to customer satisfaction. We use the latest equipment and eco-friendly cleaning solutions to deliver outstanding results every time.
              </p>
              <p className="text-lg text-gray-600">
                From window cleaning to pressure washing, we treat every property with the same care and attention we'd give our own. That's the Washly difference.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/7.png"
                alt="Washly team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                desc: 'We strive for perfection in every job, no matter the size.',
              },
              {
                icon: Users,
                title: 'Community',
                desc: 'Proudly serving our local PEI community with dedication.',
              },
              {
                icon: Target,
                title: 'Reliability',
                desc: 'On-time service and consistent quality you can count on.',
              },
              {
                icon: Heart,
                title: 'Care',
                desc: 'We treat your property with respect and attention to detail.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <value.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Washly?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Locally Operated',
                desc: 'We\'re part of the PEI community and understand local needs.',
              },
              {
                title: 'Experienced Team',
                desc: 'Our professionals have years of experience in washing services.',
              },
              {
                title: 'Eco-Friendly',
                desc: 'We use environmentally responsible cleaning solutions.',
              },
              {
                title: 'Fully Insured',
                desc: 'Complete insurance coverage for your peace of mind.',
              },
              {
                title: 'Competitive Pricing',
                desc: 'Fair, transparent pricing with free quotes.',
              },
              {
                title: 'Quality Guaranteed',
                desc: 'We stand behind our work with a satisfaction guarantee.',
              },
            ].map((item, index) => (
              <div key={index} className="p-6 border-l-4 border-blue-600 bg-blue-50">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our dedicated team is here to serve you with professionalism and expertise
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2">Pathik Pandya</h3>
              <p className="text-blue-600 font-semibold mb-4">Co-Owner</p>
              <a
                href="tel:705-822-8605"
                className="inline-flex items-center text-gray-600 hover:text-blue-600"
              >
                <Phone className="mr-2" size={18} />
                705-822-8605
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2">Atmiya Patel</h3>
              <p className="text-blue-600 font-semibold mb-4">Co-Owner</p>
              <a
                href="tel:705-970-4920"
                className="inline-flex items-center text-gray-600 hover:text-blue-600"
              >
                <Phone className="mr-2" size={18} />
                705-970-4920
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the Washly difference. Contact us today for a free quote.
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
