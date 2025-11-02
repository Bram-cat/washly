"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Home, Wind, Waves, ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Droplets,
    title: "Window Cleaning",
    shortDesc: "Crystal-clear windows, streak-free perfection",
    features: ["Interior & Exterior", "Residential & Commercial", "Screen Cleaning"],
    color: "#3B82F6",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    image: "/images/2.webp"
  },
  {
    icon: Wind,
    title: "Gutter Cleaning",
    shortDesc: "Protect your home from water damage",
    features: ["Complete Debris Removal", "Downspout Flushing", "System Inspection"],
    color: "#10B981",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    image: "/images/3.webp"
  },
  {
    icon: Waves,
    title: "Pressure Washing",
    shortDesc: "Restore surfaces to their original beauty",
    features: ["House Siding", "Driveways & Walkways", "Decks & Patios"],
    color: "#06B6D4",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
    image: "/images/1.jpeg"
  },
  {
    icon: Home,
    title: "Roof Cleaning",
    shortDesc: "Extend your roof's life professionally",
    features: ["Moss & Algae Removal", "Shingle Protection", "Stain Elimination"],
    color: "#8B5CF6",
    bgGradient: "from-purple-500/10 to-indigo-500/10",
    image: "/images/4.jpg"
  }
]

interface FeaturedServicesProps {
  onGetQuote: () => void
}

export function FeaturedServices({ onGetQuote }: FeaturedServicesProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive cleaning solutions delivered with precision, care, and attention to detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-2 border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-2xl h-full">
                  {/* Image Background */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                        style={{ backgroundColor: service.color }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <button
                      onClick={onGetQuote}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 group-hover:gap-3"
                      style={{ backgroundColor: service.color }}
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary to-blue-900 text-white px-8 py-6 rounded-2xl shadow-xl">
            <div className="text-left">
              <p className="text-sm font-semibold text-blue-200 mb-1">SPECIAL OFFER</p>
              <p className="text-2xl font-bold">Get a Free Quote Today!</p>
            </div>
            <Button
              onClick={onGetQuote}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold shadow-lg"
            >
              Contact Us Now
            </Button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, #00000008 1px, transparent 1px),
            linear-gradient(to bottom, #00000008 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  )
}
