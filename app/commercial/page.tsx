'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Building2, CheckCircle, Phone, ArrowRight, Star, Clock, Shield, Users, Briefcase, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CommercialPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section with Gradient Mesh */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden gradient-mesh">
        {/* Atmospheric Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-blue-50/60 to-white pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/10 to-blue-300/10 rounded-full blur-3xl"></div>
        </div>

        {/* Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image src="/8.png" alt="Commercial Services" fill className="object-cover" priority />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-6xl py-28">
          {/* Animated Icon */}
          <div className="mb-8 inline-block group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-full shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                <Building2 className="text-white" size={56} strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold mb-8 tracking-tight leading-none">
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
              Commercial
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent mt-2">
              Services
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Professional washing services for
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-bold"> businesses across PEI</span>
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Flexible Scheduling', 'Minimal Disruption', 'Fully Insured', 'Recurring Services'].map((feature, i) => (
              <div
                key={i}
                className="group glass-effect px-6 py-3 rounded-full border border-blue-200/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-7 rounded-full text-lg font-bold shadow-2xl shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-500 hover:scale-110 active:scale-95 border-2 border-blue-500/20"
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
              className="group glass-effect border-2 border-blue-300/50 hover:border-blue-500 bg-white/40 hover:bg-white/60 text-slate-700 hover:text-blue-700 px-10 py-7 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <span>Request Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-blue-600" />
              <span className="text-sm font-medium text-slate-600">Trusted by 100+ Businesses</span>
            </div>
            <div className="h-6 w-px bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-600" />
              <span className="text-sm font-medium text-slate-600">Flexible Scheduling</span>
            </div>
            <div className="h-6 w-px bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-blue-600" />
              <span className="text-sm font-medium text-slate-600">Fully Insured & Bonded</span>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          {/* Introduction */}
          <div className="text-center mb-28">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-700 tracking-wide uppercase">
                Professional Service
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Professional Commercial
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Washing Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Maintain a professional appearance and protect your commercial property investment with our comprehensive washing services
            </p>
          </div>

          {/* Properties We Serve and Services Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-28">
            {/* Properties We Serve */}
            <div>
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Properties We Serve
              </h3>
              <div className="space-y-4">
                {[
                  'Retail Storefronts',
                  'Office Buildings',
                  'Restaurants & Cafes',
                  'Shopping Centers',
                  'Multi-Unit Residential',
                  'Medical Facilities',
                  'Hotels & Motels',
                  'Warehouses',
                  'Industrial Buildings',
                  'Parking Structures',
                ].map((property, i) => (
                  <Card
                    key={i}
                    className="group border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white via-blue-50/20 to-white"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <p className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">{property}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Commercial Services */}
            <div>
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Commercial Services
              </h3>
              <div className="space-y-6">
                {[
                  { title: 'Storefront Window Cleaning', desc: 'Crystal clear windows that showcase your business to customers', icon: Building2 },
                  { title: 'Building Exterior Washing', desc: 'Pressure and soft washing for all building types and materials', icon: Briefcase },
                  { title: 'Parking Lot Cleaning', desc: 'Remove oil stains, gum, and dirt from parking areas', icon: Award },
                  { title: 'Awning & Canopy Cleaning', desc: 'Keep your signage and awnings looking fresh and inviting', icon: Star },
                  { title: 'Gutter Cleaning', desc: 'Protect your building from water damage with clean gutters', icon: Shield },
                  { title: 'Graffiti Removal', desc: 'Quick, effective graffiti removal services', icon: CheckCircle },
                ].map((service, i) => (
                  <Card
                    key={i}
                    className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="relative p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                          <service.icon size={24} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                            {service.title}
                          </h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Why Businesses Choose Washly */}
          <div className="relative">
            <div className="absolute inset-0 gradient-mesh rounded-[3rem] opacity-60"></div>

            <div className="relative glass-effect rounded-[3rem] p-12 md:p-16 lg:p-20 border border-blue-200/50 shadow-2xl">
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-700 tracking-wide uppercase">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                    Why Businesses
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    Choose Washly
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Flexible Scheduling', desc: 'Work around your business hours, including evenings and weekends to minimize disruption', icon: Clock, color: 'from-blue-500 to-blue-600' },
                  { title: 'Minimal Disruption', desc: 'Efficient service that does not interfere with your daily operations or customer experience', icon: Shield, color: 'from-blue-600 to-blue-700' },
                  { title: 'Professional Results', desc: 'Consistently high-quality work that enhances your business image and curb appeal', icon: Award, color: 'from-slate-600 to-slate-700' },
                  { title: 'Fully Insured', desc: 'Complete insurance coverage for commercial properties and liability protection', icon: Shield, color: 'from-blue-500 to-blue-600' },
                  { title: 'Recurring Services', desc: 'Schedule regular maintenance to keep your property pristine year-round', icon: Star, color: 'from-blue-600 to-blue-700' },
                  { title: 'Competitive Pricing', desc: 'Volume discounts and custom packages available for ongoing service contracts', icon: Briefcase, color: 'from-slate-600 to-slate-700' },
                ].map((benefit, i) => (
                  <Card
                    key={i}
                    className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white text-center overflow-hidden relative"
                  >
                    <CardContent className="p-8">
                      <div className={`inline-flex p-5 bg-gradient-to-br ${benefit.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <benefit.icon size={32} className="text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl text-center">
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border border-white/20">
                <Building2 className="text-white" size={48} />
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
            Enhance Your
            <br />
            Business Image
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            A clean property makes a professional impression. Contact us for a <span className="text-white font-bold">customized commercial cleaning plan</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="group bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 px-10 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-900/50 transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <span>Request Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="group bg-blue-800/50 hover:bg-blue-800 backdrop-blur-sm text-white px-10 py-7 rounded-full text-lg font-bold border-2 border-white/20 hover:border-white/40 shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <a href="tel:705-822-8605" className="flex items-center gap-3">
                <Phone size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>705-822-8605</span>
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 text-blue-100">
              <Clock size={20} />
              <span className="text-sm font-medium">Flexible Hours</span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="flex items-center gap-2 text-blue-100">
              <Shield size={20} />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="flex items-center gap-2 text-blue-100">
              <Users size={20} />
              <span className="text-sm font-medium">100+ Happy Businesses</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
