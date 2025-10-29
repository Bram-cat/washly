'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our washing services
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help! Contact us and we'll be happy to answer any questions you may have.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-block transition-all hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
