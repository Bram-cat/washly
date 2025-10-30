'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, Sparkles, ArrowRight, Star, Clock, Shield, Droplets, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PressureWashingPage() {
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
          <Image
            src="/3.png"
            alt="Pressure Washing Services"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-6xl py-28">
          {/* Animated Icon */}
          <div className="mb-8 inline-block group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-full shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="text-white" size={56} strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold mb-8 tracking-tight leading-none">
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
              Pressure
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent mt-2">
              Washing
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Remove dirt, grime, and stains with
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-bold"> powerful cleaning </span>
            for any surface
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Deep Cleaning Power', 'Safe & Effective', 'Fully Insured', 'Fast Results'].map((feature, i) => (
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
                <span>Get Free Estimate</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600">500+ Happy Customers</span>
            </div>
            <div className="h-6 w-px bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-600" />
              <span className="text-sm font-medium text-slate-600">Same-Day Service Available</span>
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
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          {/* Introduction Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-700 tracking-wide uppercase">
                    Professional Service
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                    Pressure Washing
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    Experts in PEI
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our high-powered pressure washing service removes <span className="font-bold text-slate-800">years of built-up dirt</span>, mold, mildew, and stains from virtually any exterior surface. We use <span className="font-bold text-blue-600">professional equipment and techniques</span> to deliver outstanding results without damaging your property.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Whether it's your <span className="font-bold text-slate-800">driveway, deck, siding, or parking lot</span>, we have the expertise and experience to restore surfaces to like-new condition. Our team knows the right pressure and techniques for each surface type.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: Droplets, label: 'Professional Equipment', color: 'from-blue-500 to-blue-600' },
                  { icon: Zap, label: 'Fast & Efficient', color: 'from-blue-600 to-blue-700' },
                  { icon: Shield, label: 'Fully Insured', color: 'from-slate-600 to-slate-700' },
                  { icon: Sparkles, label: 'Spotless Results', color: 'from-blue-500 to-blue-600' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-100/50 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/3.png"
                  alt="Professional pressure washing in progress"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* What We Clean Section */}
          <div className="mb-28">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-700 tracking-wide uppercase">
                  Our Services
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Surfaces We Clean
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Powerful cleaning for driveways, decks, siding, and more
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Driveways',
                'Sidewalks',
                'Decks & Patios',
                'House Siding',
                'Fences',
                'Parking Lots',
                'Building Exteriors',
                'Concrete Surfaces',
                'Brick & Stone',
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="relative p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <CheckCircle size={24} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                          {item}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="relative">
            {/* Background Decoration */}
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
                    Benefits of Professional
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    Pressure Washing
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Transform your property with deep cleaning power
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  {
                    title: 'Restore Curb Appeal',
                    desc: 'Remove years of dirt, grime, and stains to reveal surfaces that look brand new and dramatically improve your property appearance.',
                    gradient: 'from-blue-500 to-blue-600',
                  },
                  {
                    title: 'Prevent Damage',
                    desc: 'Regular pressure washing removes harmful buildup that can deteriorate surfaces over time, protecting your investment.',
                    gradient: 'from-blue-600 to-blue-700',
                  },
                  {
                    title: 'Increase Property Value',
                    desc: 'Clean exterior surfaces boost curb appeal and property value, making it more attractive to potential buyers or tenants.',
                    gradient: 'from-slate-600 to-slate-700',
                  },
                  {
                    title: 'Health & Safety',
                    desc: 'Remove mold, mildew, and algae that can be slippery and harmful to health, creating a safer environment.',
                    gradient: 'from-blue-500 to-blue-600',
                  },
                ].map((benefit, i) => (
                  <Card
                    key={i}
                    className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden relative"
                  >
                    <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${benefit.gradient} group-hover:w-full group-hover:opacity-10 transition-all duration-500`}></div>
                    <CardHeader className="relative pb-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${benefit.gradient} rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                          <Star size={28} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                            {benefit.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <CardDescription className="text-base text-slate-600 leading-relaxed">
                        {benefit.desc}
                      </CardDescription>
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
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl text-center">
          {/* Icon */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border border-white/20">
                <Sparkles className="text-white" size={48} />
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
            Transform Your Property Today
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Contact us today for a <span className="text-white font-bold">free, no-obligation quote</span> on professional pressure washing services
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="group bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 px-10 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-900/50 transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <span>Get Free Estimate</span>
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

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 text-blue-100">
              <Clock size={20} />
              <span className="text-sm font-medium">Same-Day Service</span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="flex items-center gap-2 text-blue-100">
              <Shield size={20} />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="flex items-center gap-2 text-blue-100">
              <Star size={20} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">500+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
