import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, Droplets, Home, Building2, Sparkles, Award, Clock, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const services = [
    {
      title: 'Window Cleaning',
      description: 'Crystal clear windows that shine bright, inside and out.',
      icon: Sparkles,
      image: '/1.png',
      href: '/services/window-cleaning',
    },
    {
      title: 'Gutter Cleaning',
      description: 'Keep your gutters flowing freely and prevent water damage.',
      icon: Droplets,
      image: '/2.png',
      href: '/services/gutter-cleaning',
    },
    {
      title: 'Pressure Washing',
      description: 'Remove dirt, grime, and stains from any surface.',
      icon: Sparkles,
      image: '/3.png',
      href: '/services/pressure-washing',
    },
    {
      title: 'Soft & Pressure Washing',
      description: 'Gentle yet effective cleaning for delicate surfaces.',
      icon: Home,
      image: '/4.png',
      href: '/services/soft-washing',
    },
    {
      title: 'Roof Cleaning',
      description: 'Extend your roof life with professional cleaning.',
      icon: Home,
      image: '/5.png',
      href: '/services/roof-cleaning',
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'Expert team with years of experience',
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'We value your time and arrive as scheduled',
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete peace of mind with full insurance coverage',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Gradient Mesh */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl py-20">
          <div className="mb-6 inline-block px-6 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 font-semibold text-sm">
            Locally Operated in PEI
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              WASHLY
            </span>
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              WASHING SERVICES
            </span>
          </h2>

          <p className="text-2xl sm:text-3xl text-orange-500 font-semibold mb-8 tracking-wide">
            SHINE BRIGHTER TOGETHER
          </p>

          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional window cleaning, gutter cleaning, and pressure washing services in Prince Edward Island.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-7 rounded-full text-lg font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-12 py-7 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              <a href="tel:705-822-8605">
                <Phone className="mr-2 h-5 w-5" />
                705-822-8605
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section with Gradient Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group text-center border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <feature.icon className="text-white h-10 w-10" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional cleaning solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group"
              >
                <Card className="h-full overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                        <service.icon className="text-white h-5 w-5" />
                      </div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Ocean Gradient */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Make Your Property Shine?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free, no-obligation quote. We serve residential and commercial clients across PEI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-blue-700 px-12 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Request Free Quote
              </Link>
            </Button>

            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-blue-800/50 hover:bg-blue-800 backdrop-blur-sm text-white px-8 py-7 rounded-full text-lg font-semibold border border-white/20 shadow-lg transition-all duration-300 hover:scale-105">
                <a href="tel:705-822-8605">
                  705-822-8605
                </a>
              </Button>
              <Button asChild size="lg" className="bg-blue-800/50 hover:bg-blue-800 backdrop-blur-sm text-white px-8 py-7 rounded-full text-lg font-semibold border border-white/20 shadow-lg transition-all duration-300 hover:scale-105">
                <a href="tel:705-970-4920">
                  705-970-4920
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-10">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Why Choose Washly?
                </span>
              </h2>
              <div className="space-y-5">
                {[
                  'Locally operated in Prince Edward Island',
                  'Experienced and professional team',
                  'Competitive pricing with free quotes',
                  'Eco-friendly cleaning solutions',
                  'Fully insured and bonded',
                  'Satisfaction guaranteed',
                  'Flexible scheduling',
                  'Residential and commercial services',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="mt-1 p-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="text-white h-6 w-6" />
                    </div>
                    <p className="text-slate-700 text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent z-10"></div>
              <Image
                src="/6.png"
                alt="Professional washing services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Proudly Serving PEI
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-16">
            Professional washing services throughout Prince Edward Island
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/residential" className="group">
              <Card className="p-12 border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/40 to-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative">
                  <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Home className="text-white h-12 w-12" />
                  </div>
                  <CardTitle className="text-3xl mb-4 font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                    Residential Services
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-600">
                    Home owners & property managers
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/commercial" className="group">
              <Card className="p-12 border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/40 to-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative">
                  <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Building2 className="text-white h-12 w-12" />
                  </div>
                  <CardTitle className="text-3xl mb-4 font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                    Commercial Services
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-600">
                    Businesses & commercial properties
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
