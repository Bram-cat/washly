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
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl py-20">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 mb-4 tracking-tight">
            WASHLY
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-6 tracking-tight">
            WASHING SERVICES
          </h2>
          <p className="text-2xl sm:text-3xl text-orange-500 font-semibold mb-8 tracking-wide">
            SHINE BRIGHTER TOGETHER
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional window cleaning, gutter cleaning, and pressure washing services in Prince Edward Island.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              <a href="tel:705-822-8605">
                <Phone className="mr-2 h-5 w-5" />
                705-822-8605
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Locally Operated in PEI | Call us today for a free quote
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="text-blue-600 h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon className="text-blue-600 h-6 w-6" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-600 font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make Your Property Shine?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation quote. We serve residential and commercial clients across PEI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              <Link href="/contact">
                Request Free Quote
              </Link>
            </Button>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg transition-all duration-200">
                <a href="tel:705-822-8605">
                  705-822-8605
                </a>
              </Button>
              <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg transition-all duration-200">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Washly?
              </h2>
              <div className="space-y-4">
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
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1 h-6 w-6" />
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/6.png"
                alt="Professional washing services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Proudly Serving PEI
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Professional washing services throughout Prince Edward Island
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/residential"
              className="group"
            >
              <Card className="p-10 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <Home className="text-blue-600 mx-auto mb-4 h-16 w-16" />
                  <CardTitle className="text-2xl mb-3">Residential Services</CardTitle>
                  <CardDescription className="text-base">Home owners & property managers</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link
              href="/commercial"
              className="group"
            >
              <Card className="p-10 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <Building2 className="text-blue-600 mx-auto mb-4 h-16 w-16" />
                  <CardTitle className="text-2xl mb-3">Commercial Services</CardTitle>
                  <CardDescription className="text-base">Businesses & commercial properties</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
