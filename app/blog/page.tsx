'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Clock, Shield, Star, BookOpen, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
                <BookOpen className="text-white" size={56} strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold mb-8 tracking-tight leading-none">
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
              Washly
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent mt-2">
              Blog
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Expert cleaning tips,
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-bold"> maintenance advice, </span>
            and industry insights for PEI property owners
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {['Tips & Tricks', 'Industry News', 'Maintenance Guides', 'PEI Focused'].map((feature, i) => (
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
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-700 tracking-wide uppercase">
                Latest Articles
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Explore Our Blog
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with expert tips and professional insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden relative cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg">
                      <Tag size={14} className="text-white" />
                      <span className="text-white text-sm font-bold">{post.category}</span>
                    </div>
                  </div>

                  {/* Read More Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="p-3 bg-white rounded-full shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight size={20} className="text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardHeader className="pb-4">
                  {/* Date */}
                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  {/* Title */}
                  <CardTitle className="text-2xl font-bold mb-3 leading-tight group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Excerpt */}
                  <CardDescription className="text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </CardDescription>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Read More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>

          {/* Load More Section */}
          <div className="mt-16 text-center">
            <div className="glass-effect inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-blue-200/50">
              <BookOpen size={24} className="text-blue-600" />
              <span className="text-slate-600 font-medium">More articles coming soon!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
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
                <BookOpen className="text-white" size={48} />
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
            Want Expert
            <br />
            Cleaning Advice?
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Subscribe to our newsletter for <span className="text-white font-bold">regular tips, seasonal reminders,</span> and special offers
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="group bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 px-10 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-900/50 transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <span>Contact Us</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 text-blue-100">
              <Clock size={20} />
              <span className="text-sm font-medium">Regular Updates</span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="flex items-center gap-2 text-blue-100">
              <Shield size={20} />
              <span className="text-sm font-medium">Expert Advice</span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="flex items-center gap-2 text-blue-100">
              <Star size={20} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">PEI Focused</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
