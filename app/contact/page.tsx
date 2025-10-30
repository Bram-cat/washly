import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Washly | Get a Free Quote | PEI Washing Services',
  description: 'Contact Washly for professional washing services in PEI. Call 705-822-8605 or 705-970-4920 for a free quote. Locally operated in Prince Edward Island.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 gradient-mesh overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-5xl">
          <div className="mb-6 inline-block px-6 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 font-semibold text-sm">
            Get In Touch
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch for a free quote or to schedule your washing service
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                    Get in Touch
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <Card className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="relative p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Phone className="text-white h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                          Phone
                        </h3>
                        <div className="space-y-2">
                          <a href="tel:705-822-8605" className="block text-slate-600 hover:text-blue-600 transition-colors text-lg font-medium">
                            Pathik: 705-822-8605
                          </a>
                          <a href="tel:705-970-4920" className="block text-slate-600 hover:text-blue-600 transition-colors text-lg font-medium">
                            Atmiya: 705-970-4920
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="relative p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <MapPin className="text-white h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                          Location
                        </h3>
                        <p className="text-slate-600 mb-3 text-lg">Serving Prince Edward Island</p>
                        <a
                          href="https://maps.app.goo.gl/h6oEPLfpaS2BJ6gPA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group-hover:gap-3 duration-300"
                        >
                          View on Google Maps
                          <ArrowRight className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="relative p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Clock className="text-white h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                          Business Hours
                        </h3>
                        <div className="space-y-2 text-slate-600 text-lg">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 5:00 PM</p>
                          <p>Sunday: By Appointment</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-xl bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-50 p-8 rounded-3xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                    Why Choose Washly?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      'Locally operated in PEI',
                      'Free, no-obligation quotes',
                      'Experienced professionals',
                      'Eco-friendly solutions',
                      'Fully insured',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-lg font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Find Us
                </span>
              </h2>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl h-[600px] border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178439.39845466176!2d-63.29916944999999!3d46.23823975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52ddd47f893f%3A0x9c7e3b4c5d3e1f0a!2sPrince%20Edward%20Island!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%]"
                ></iframe>
              </div>
              <p className="text-sm text-slate-600 text-center font-medium">
                Proudly serving all of Prince Edward Island
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Service Areas in PEI
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {[
              'Charlottetown',
              'Summerside',
              'Stratford',
              'Cornwall',
              'Montague',
              'Kensington',
              'Souris',
              'Alberton',
              'Georgetown',
              'Tignish',
              'Borden-Carleton',
              'Murray River',
            ].map((area, index) => (
              <Card key={index} className="group border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="relative p-5 text-center">
                  <p className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-slate-600 text-lg mt-8">
            Don't see your area? Call us - we may still be able to help!
          </p>
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
            Call Us Today for a Free Quote
          </h2>
          <p className="text-2xl mb-12 opacity-95 font-semibold tracking-wide">
            SHINE BRIGHTER TOGETHER
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-blue-700 px-12 py-7 rounded-full text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105">
              <a href="tel:705-822-8605" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                705-822-8605
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-blue-700 px-12 py-7 rounded-full text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105">
              <a href="tel:705-970-4920" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                705-970-4920
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
