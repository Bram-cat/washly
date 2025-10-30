import Link from 'next/link';
import Image from 'next/image';
import { Home, CheckCircle, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Washing Services PEI | Washly',
  description: 'Professional residential washing services in PEI. Window cleaning, gutter cleaning, pressure washing & more for homeowners. Call 705-822-8605.',
};

export default function ResidentialPage() {
  const services = [
    {
      title: 'Window Cleaning',
      desc: 'Interior and exterior window cleaning for sparkling clear views',
      link: '/services/window-cleaning',
      image: '/1.png',
      icon: Sparkles
    },
    {
      title: 'Gutter Cleaning',
      desc: 'Remove debris and ensure proper water flow to protect your home',
      link: '/services/gutter-cleaning',
      image: '/2.png',
      icon: Sparkles
    },
    {
      title: 'Pressure Washing',
      desc: 'Deep clean driveways, walkways, and exterior surfaces',
      link: '/services/pressure-washing',
      image: '/3.png',
      icon: Sparkles
    },
    {
      title: 'Soft Washing',
      desc: 'Gentle cleaning for siding, decks, and delicate surfaces',
      link: '/services/soft-washing',
      image: '/4.png',
      icon: Sparkles
    },
    {
      title: 'Roof Cleaning',
      desc: 'Remove moss and algae to extend your roof lifespan',
      link: '/services/roof-cleaning',
      image: '/5.png',
      icon: Sparkles
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-blue-50/60 to-white"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 opacity-10">
          <Image
            src="/6.png"
            alt="Residential Services"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-6xl py-28">
          <div className="mb-8 inline-block group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-full shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                <Home className="text-white" size={56} strokeWidth={2} />
              </div>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold mb-8 tracking-tight leading-none">
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
              Residential
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent mt-2">
              Services
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Professional washing services for
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-bold"> homeowners </span>
            across PEI
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-7 rounded-full text-lg font-bold shadow-2xl shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-500 hover:scale-110"
            >
              <a href="tel:705-822-8605" className="flex items-center gap-3">
                <Phone size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Call for Free Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group glass-effect border-2 border-blue-300/50 hover:border-blue-500 bg-white/40 hover:bg-white/60 text-slate-700 hover:text-blue-700 px-10 py-7 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <span>Get Free Estimate</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-700 tracking-wide uppercase">
                Our Services
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Comprehensive Home
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Washing Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We help PEI homeowners maintain beautiful, clean properties with our full range of professional washing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {services.map((service, i) => (
              <Link key={i} href={service.link} className="group block">
                <Card className="h-full overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <CardHeader className="pb-4 pt-8 px-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <service.icon className="text-white h-6 w-6" />
                      </div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base text-slate-600 leading-relaxed">
                      {service.desc}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold p-0">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Why Choose Us Card */}
          <Card className="border-none shadow-2xl bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-50 p-12 rounded-3xl">
            <CardHeader className="text-center pb-12">
              <CardTitle className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Why Homeowners
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Choose Washly
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
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
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                      <CheckCircle className="text-white h-6 w-6" />
                    </div>
                    <p className="text-lg font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Protect & Beautify Your Home
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed">
            Regular professional washing services protect your investment and keep your home looking its best
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
