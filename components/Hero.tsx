"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  onGetQuote: () => void
}

const backgroundImages = [
  "/images/1.jpeg",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
]

export function Hero({ onGetQuote }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="Professional washing services"
              fill
              className="object-cover brightness-[0.35] blur-[2px]"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/80 via-primary/60 to-blue-900/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-secondary/30">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Professional Cleaning Services in PEI</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Washly Washing Services
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl mb-8 text-secondary font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Shine Brighter Together
          </motion.p>

          <motion.p
            className="text-lg md:text-xl mb-12 text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experience the finest cleaning services on Prince Edward Island. From sparkling windows to pristine driveways, we make your property shine like new.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={onGetQuote}
              className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 h-auto font-semibold backdrop-blur-sm"
            >
              Our Services
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>Locally Operated in PEI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
