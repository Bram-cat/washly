import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washly Blog | Cleaning Tips & Advice for PEI Homeowners',
  description: 'Expert cleaning tips, maintenance advice, and industry insights from Washly. Learn how to keep your PEI property looking its best.',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'The Importance of Regular Window Cleaning',
      excerpt: 'Discover why regular professional window cleaning is more than just aesthetics - it is about protecting your investment and improving your quality of life.',
      date: '2025-03-15',
      image: '/1.png',
      category: 'Window Cleaning',
    },
    {
      title: 'Spring Gutter Cleaning: Why It Cannot Wait',
      excerpt: 'Learn why spring is the most critical time for gutter cleaning and what happens if you delay this essential maintenance task.',
      date: '2025-03-10',
      image: '/2.png',
      category: 'Gutter Cleaning',
    },
    {
      title: 'Pressure Washing vs. Soft Washing: Which is Right for You?',
      excerpt: 'Understanding the difference between pressure washing and soft washing can save you from costly damage. Here is what you need to know.',
      date: '2025-03-05',
      image: '/3.png',
      category: 'Pressure Washing',
    },
    {
      title: 'How to Maintain Your Roof Between Professional Cleanings',
      excerpt: 'Simple steps homeowners can take to extend the life of their roof and keep it looking great between professional cleanings.',
      date: '2025-02-28',
      image: '/5.png',
      category: 'Roof Maintenance',
    },
    {
      title: '5 Signs Your Home Needs Professional Washing Services',
      excerpt: 'Not sure if it is time to call the professionals? Here are five telltale signs that your home is due for a thorough cleaning.',
      date: '2025-02-20',
      image: '/6.png',
      category: 'Home Maintenance',
    },
    {
      title: 'Eco-Friendly Cleaning: Our Commitment to the Environment',
      excerpt: 'Learn about the environmentally responsible cleaning solutions we use and how they protect both your property and PEI natural beauty.',
      date: '2025-02-15',
      image: '/7.png',
      category: 'Sustainability',
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Washly Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert cleaning tips, maintenance advice, and industry insights for PEI property owners
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="text-blue-600 font-medium flex items-center hover:text-blue-700 cursor-pointer">
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want Expert Cleaning Advice?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for regular tips, seasonal reminders, and special offers.
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
