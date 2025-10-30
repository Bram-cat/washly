'use client';

import { ArrowRight, Clock, Shield, Star, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: 'What services does Washly offer?',
      answer: 'We offer window cleaning, gutter cleaning, pressure washing, soft washing, and roof cleaning services for both residential and commercial properties throughout PEI.',
    },
    {
      question: 'Do you provide free quotes?',
      answer: 'Yes! We provide free, no-obligation quotes for all our services. Just give us a call at 705-822-8605 or 705-970-4920.',
    },
    {
      question: 'Are you insured?',
      answer: 'Absolutely. Washly is fully insured and bonded, giving you complete peace of mind when you hire us.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We proudly serve all of Prince Edward Island, including Charlottetown, Summerside, Stratford, Cornwall, and surrounding areas.',
    },
    {
      question: 'How often should I have my windows cleaned?',
      answer: 'We recommend professional window cleaning 2-4 times per year for most homes. However, this can vary based on your location, weather conditions, and personal preferences.',
    },
    {
      question: 'How often should gutters be cleaned?',
      answer: 'Gutters should typically be cleaned at least twice a year - in spring and fall. If you have many trees near your home, you may need more frequent cleaning.',
    },
    {
      question: 'Is pressure washing safe for all surfaces?',
      answer: 'While pressure washing is safe for many surfaces like concrete and brick, we use soft washing for delicate surfaces like vinyl siding, wood, and roofs to prevent damage.',
    },
    {
      question: 'What is soft washing?',
      answer: 'Soft washing uses low-pressure water combined with specialized cleaning solutions to safely clean delicate surfaces without the risk of damage from high-pressure washing.',
    },
    {
      question: 'Do you clean inside windows too?',
      answer: 'Yes, we clean both interior and exterior windows, as well as window sills, tracks, and screens.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, and all major credit cards for your convenience.',
    },
    {
      question: 'Do you offer commercial services?',
      answer: 'Yes! We provide all our washing services for commercial properties including storefronts, office buildings, and multi-unit residential properties.',
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'Customer satisfaction is our top priority. If you\'re not completely happy with our work, please let us know and we\'ll make it right.',
    },
    {
      question: 'Do you use eco-friendly products?',
      answer: 'Yes, we use environmentally responsible cleaning solutions that are effective yet safe for your property, family, and the environment.',
    },
    {
      question: 'Can you work in rainy weather?',
      answer: 'For safety and quality reasons, we typically reschedule services during heavy rain. However, light mist or drizzle doesn\'t always prevent us from working. We\'ll discuss this with you when scheduling.',
    },
    {
      question: 'How do I schedule a service?',
      answer: 'Simply call us at 705-822-8605 or 705-970-4920, or visit our contact page to get in touch. We\'ll discuss your needs and schedule a convenient time.',
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section with Gradient Mesh */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden gradient-mesh">
        {/* Atmospheric Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-blue-50/60 to-white pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/10 to-blue-300/10 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-6xl py-28">
          {/* Animated Icon */}
          <div className="mb-8 inline-block group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-full shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                <HelpCircle className="text-white" size={56} strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold mb-8 tracking-tight leading-none">
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
              Frequently Asked
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent mt-2">
              Questions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Find answers to
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-bold"> common questions </span>
            about our washing services
          </p>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-700 tracking-wide uppercase">
                Got Questions?
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                We've Got Answers
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our professional washing services
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-blue-200/50 shadow-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-blue-100/50 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-colors duration-300 text-left">
                    <span className="text-lg font-bold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="border-t border-blue-100 pt-4">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 text-center glass-effect rounded-3xl p-8 md:p-12 border border-blue-200/50 shadow-xl">
            <div className="inline-block mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <HelpCircle className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Still Have Questions?
              </span>
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              We're here to help! Contact us and we'll be happy to answer any questions you may have about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-7 rounded-full text-lg font-bold shadow-2xl shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-500 hover:scale-110 active:scale-95"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  <span>Contact Us</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group glass-effect border-2 border-blue-300/50 hover:border-blue-500 bg-white/40 hover:bg-white/60 text-slate-700 hover:text-blue-700 px-10 py-7 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95"
              >
                <a href="tel:705-822-8605" className="flex items-center gap-3">
                  <span>Call 705-822-8605</span>
                </a>
              </Button>
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
            Ready to Get Started?
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Get your <span className="text-white font-bold">free quote</span> today and experience professional service
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="group bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 px-10 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-900/50 transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <span>Get Free Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 text-blue-100">
              <Clock size={20} />
              <span className="text-sm font-medium">Fast Response</span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="flex items-center gap-2 text-blue-100">
              <Shield size={20} />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="flex items-center gap-2 text-blue-100">
              <Star size={20} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">5-Star Service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
