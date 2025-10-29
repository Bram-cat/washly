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
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-6xl py-20">
          <div className="mb-8 inline-block px-8 py-3 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 font-semibold text-sm shadow-md">
            Locally Operated in PEI
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              WASHLY
            </span>
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              WASHING SERVICES
            </span>
          </h2>

          <p className="text-2xl sm:text-3xl text-orange-500 font-semibold mb-10 tracking-wide">
            SHINE BRIGHTER TOGETHER
          </p>

          <p className="text-lg sm:text-xl text-slate-600 mb-14 max-w-3xl mx-auto leading-relaxed">
            Professional window cleaning, gutter cleaning, and pressure washing services in Prince Edward Island.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-7 rounded-full text-lg font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-12 py-7 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              <a href="tel:705-822-8605">
                <Phone className="mr-3 h-5 w-5" />
                705-822-8605
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>

        <div className="container relative mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group text-center border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative pt-10 pb-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <feature.icon className="text-white h-10 w-10" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent px-4">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-10 px-6">
                  <p className="text-slate-600 text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional cleaning solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block"
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

                  <CardHeader className="pb-4 pt-8 px-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md">
                        <service.icon className="text-white h-6 w-6" />
                      </div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base text-slate-600 leading-relaxed">
                      {service.description}
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
          <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
            Ready to Make Your Property Shine?
          </h2>
          <p className="text-xl md:text-2xl mb-14 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free, no-obligation quote. We serve residential and commercial clients across PEI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
            <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-blue-700 px-12 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Request Free Quote
              </Link>
            </Button>

            <div className="flex gap-4 flex-wrap justify-center">
              <Button asChild size="lg" className="bg-blue-800/50 hover:bg-blue-800 backdrop-blur-sm text-white px-10 py-7 rounded-full text-lg font-semibold border border-white/20 shadow-lg transition-all duration-300 hover:scale-105">
                <a href="tel:705-822-8605">
                  705-822-8605
                </a>
              </Button>
              <Button asChild size="lg" className="bg-blue-800/50 hover:bg-blue-800 backdrop-blur-sm text-white px-10 py-7 rounded-full text-lg font-semibold border border-white/20 shadow-lg transition-all duration-300 hover:scale-105">
                <a href="tel:705-970-4920">
                  705-970-4920
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-12">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Why Choose Washly?
                </span>
              </h2>
              <div className="space-y-6">
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
                    <div className="mt-1 p-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
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
      <section className="py-28 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-7xl">
          <h2 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Proudly Serving PEI
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-16">
            Professional washing services throughout Prince Edward Island
          </p>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Link href="/residential" className="group block">
              <Card className="p-12 border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/40 to-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative pb-8">
                  <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
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

            <Link href="/commercial" className="group block">
              <Card className="p-12 border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-blue-50/40 to-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative pb-8">
                  <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
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
