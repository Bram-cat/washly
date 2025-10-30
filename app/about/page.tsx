import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Target, Heart, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Washly | Professional Washing Services in PEI',
  description: 'Learn about Washly - your trusted local washing services provider in Prince Edward Island. Locally operated, professional, and dedicated to quality.',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 gradient-mesh overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-5xl">
          <div className="mb-6 inline-block px-6 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 font-semibold text-sm">
            Our Story
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              About Washly
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for professional washing services in Prince Edward Island
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Washly Washing Services was founded with a simple mission: to provide exceptional cleaning services that help homes and businesses shine brighter. We are a locally operated company proudly serving Prince Edward Island.
                </p>
                <p>
                  Our team brings years of experience in professional washing services, combining industry expertise with a commitment to customer satisfaction. We use the latest equipment and eco-friendly cleaning solutions to deliver outstanding results every time.
                </p>
                <p>
                  From window cleaning to pressure washing, we treat every property with the same care and attention we would give our own. That is the Washly difference.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent z-10"></div>
              <Image
                src="/7.png"
                alt="Washly team at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-28 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
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
              <Card key={index} className="group text-center border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/40 to-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <value.icon className="text-white h-10 w-10" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-base">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Why Choose Washly?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Locally Operated',
                desc: 'We are part of the PEI community and understand local needs.',
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
              <div key={index} className="group p-8 border-l-4 border-blue-600 bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-100/50 transition-all duration-300 rounded-r-xl">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            Our dedicated team is here to serve you with professionalism and expertise
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Pathik Pandya', role: 'Co-Owner', phone: '705-822-8605' },
              { name: 'Atmiya Patel', role: 'Co-Owner', phone: '705-970-4920' },
            ].map((member, index) => (
              <Card key={index} className="group p-10 border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/40 to-white text-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="relative pt-6">
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-6">{member.role}</p>
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group-hover:scale-105 duration-300"
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-medium">{member.phone}</span>
                  </a>
                </CardContent>
              </Card>
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

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-12 opacity-95">
            Experience the Washly difference. Contact us today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-blue-700 px-12 py-7 rounded-full text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-blue-800/50 hover:bg-blue-800 backdrop-blur-sm text-white px-10 py-7 rounded-full text-lg font-semibold border border-white/20 shadow-lg transition-all duration-300 hover:scale-105">
              <a href="tel:705-822-8605">
                705-822-8605
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
