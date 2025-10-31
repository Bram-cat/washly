'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Charlottetown, PEI',
    rating: 5,
    text: 'Washly did an amazing job cleaning our windows! They were professional, punctual, and the results were outstanding. Our windows have never looked better. Highly recommend!',
    service: 'Window Cleaning',
  },
  {
    name: 'Michael Thompson',
    location: 'Summerside, PEI',
    rating: 5,
    text: 'Fantastic service from start to finish. The team was friendly and efficient. They pressure washed our driveway and it looks brand new. Great value for money!',
    service: 'Pressure Washing',
  },
  {
    name: 'Emily Martinez',
    location: 'Stratford, PEI',
    rating: 5,
    text: 'I cannot say enough good things about Washly. They cleaned our gutters thoroughly and even took photos to show the before and after. Very trustworthy and professional.',
    service: 'Gutter Cleaning',
  },
  {
    name: 'David Chen',
    location: 'Cornwall, PEI',
    rating: 5,
    text: 'The roof cleaning service exceeded our expectations. Our roof looks amazing and the team was very careful and respectful of our property. Will definitely use them again!',
    service: 'Roof Cleaning',
  },
  {
    name: 'Jennifer Walsh',
    location: 'Montague, PEI',
    rating: 5,
    text: 'Used Washly for our commercial property and they did an excellent job. Professional, reliable, and great communication throughout. Our building looks fantastic!',
    service: 'Commercial Cleaning',
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main Testimonial Card */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-2xl bg-gradient-to-br from-white via-blue-50/40 to-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"></div>

                <CardContent className="relative p-12">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30">
                      <Quote className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 text-xl leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-blue-100 pt-6">
                    <p className="font-bold text-xl bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-600 text-base mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-white hover:bg-blue-50 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-blue-600 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-white hover:bg-blue-50 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-blue-700'
                : 'w-3 h-3 bg-blue-200 hover:bg-blue-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
