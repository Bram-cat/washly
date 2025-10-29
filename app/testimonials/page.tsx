import { Star, Quote } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Testimonials | Washly Washing Services PEI',
  description: 'Read what our satisfied customers say about Washly washing services in PEI. Quality work, professional service, and happy clients.',
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Charlottetown',
      rating: 5,
      text: 'Washly did an amazing job on our windows! They were professional, on-time, and the results were incredible. Our windows have never looked better!',
      service: 'Window Cleaning',
    },
    {
      name: 'John D.',
      location: 'Summerside',
      rating: 5,
      text: 'I hired Washly for gutter cleaning and couldn\'t be happier. They were thorough, cleaned up after themselves, and the price was very reasonable.',
      service: 'Gutter Cleaning',
    },
    {
      name: 'Emily R.',
      location: 'Stratford',
      rating: 5,
      text: 'Excellent pressure washing service! Our driveway looks brand new. Pathik and his team are friendly and do quality work. Highly recommend!',
      service: 'Pressure Washing',
    },
    {
      name: 'Mike T.',
      location: 'Cornwall',
      rating: 5,
      text: 'Very professional service. They soft washed our vinyl siding and it looks fantastic. Great communication and fair pricing.',
      service: 'Soft Washing',
    },
    {
      name: 'Lisa K.',
      location: 'Montague',
      rating: 5,
      text: 'Washly cleaned our roof and removed all the moss and algae. They were careful and did a thorough job. Our roof looks great!',
      service: 'Roof Cleaning',
    },
    {
      name: 'David P.',
      location: 'Charlottetown',
      rating: 5,
      text: 'Best washing service in PEI! Always reliable, professional, and delivers excellent results. We use them for our commercial property.',
      service: 'Commercial Services',
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Customer Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our satisfied customers have to say
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <Quote className="text-blue-600 mb-4" size={32} />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-blue-600 font-medium mt-2">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Customers</h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the Washly difference for yourself. Contact us today for a free quote.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-block transition-all hover:scale-105"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
