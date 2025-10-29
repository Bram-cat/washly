import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Washly | Get a Free Quote | PEI Washing Services',
  description: 'Contact Washly for professional washing services in PEI. Call 705-822-8605 or 705-970-4920 for a free quote. Locally operated in Prince Edward Island.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch for a free quote or to schedule your washing service
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <a href="tel:705-822-8605" className="text-gray-600 hover:text-blue-600 block">
                      Pathik: 705-822-8605
                    </a>
                    <a href="tel:705-970-4920" className="text-gray-600 hover:text-blue-600 block">
                      Atmiya: 705-970-4920
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-gray-600 mb-2">Serving Prince Edward Island</p>
                    <a
                      href="https://maps.app.goo.gl/h6oEPLfpaS2BJ6gPA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Why Choose Washly?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Locally operated in PEI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Free, no-obligation quotes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Experienced professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Eco-friendly solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Fully insured</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Find Us</h2>
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178439.39845466176!2d-63.29916944999999!3d46.23823975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52ddd47f893f%3A0x9c7e3b4c5d3e1f0a!2sPrince%20Edward%20Island!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Proudly serving all of Prince Edward Island
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Service Areas in PEI</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
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
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800">{area}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Don't see your area? Call us - we may still be able to help!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Call Us Today for a Free Quote
          </h2>
          <p className="text-xl mb-8 opacity-90">
            SHINE BRIGHTER TOGETHER
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:705-822-8605"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              705-822-8605
            </a>
            <a
              href="tel:705-970-4920"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              705-970-4920
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
