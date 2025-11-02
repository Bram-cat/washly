"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { QuoteDialog } from "@/components/QuoteDialog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Wind, Waves, Home, Check, ArrowRight, Sparkles, Shield, Clock } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "window-cleaning",
    icon: Droplets,
    title: "Window Cleaning",
    description: "Crystal-clear windows that let the sunshine in. We provide streak-free, professional window cleaning for both residential and commercial properties.",
    features: [
      "Interior & Exterior Window Cleaning",
      "Screen Removal & Cleaning",
      "Sill & Track Cleaning",
      "Residential & Commercial Properties",
      "Streak-Free Guarantee",
      "Eco-Friendly Solutions"
    ],
    benefits: [
      "Improved curb appeal",
      "Natural light enhancement",
      "Extended window lifespan",
      "Professional results"
    ],
    image: "/images/2.webp",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "gutter-cleaning",
    icon: Wind,
    title: "Gutter Cleaning",
    description: "Protect your home from water damage with our comprehensive gutter cleaning service. We remove all debris and ensure proper water flow.",
    features: [
      "Complete Debris Removal",
      "Downspout Flushing",
      "System Inspection",
      "Minor Repair Identification",
      "Gutter Guard Installation",
      "Seasonal Maintenance Plans"
    ],
    benefits: [
      "Prevents water damage",
      "Protects foundation",
      "Avoids basement flooding",
      "Maintains property value"
    ],
    image: "/images/3.webp",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "pressure-washing",
    icon: Waves,
    title: "Pressure Washing",
    description: "Restore surfaces to their original beauty with our professional pressure washing services. From driveways to decks, we handle it all.",
    features: [
      "House Siding Cleaning",
      "Driveway & Walkway Washing",
      "Deck & Patio Restoration",
      "Fence Cleaning",
      "Parking Lot Cleaning",
      "Graffiti Removal"
    ],
    benefits: [
      "Removes dirt & grime",
      "Prevents surface decay",
      "Enhances appearance",
      "Increases property value"
    ],
    image: "/images/1.jpeg",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "roof-cleaning",
    icon: Home,
    title: "Roof Cleaning",
    description: "Extend your roof&apos;s lifespan with our professional soft wash roof cleaning. Safe for all roofing materials and highly effective.",
    features: [
      "Moss & Algae Removal",
      "Black Streak Elimination",
      "Shingle Protection",
      "Soft Wash Technology",
      "Gutter Edge Cleaning",
      "Preventative Treatment"
    ],
    benefits: [
      "Extends roof life",
      "Improves energy efficiency",
      "Prevents damage",
      "Enhances curb appeal"
    ],
    image: "/images/4.jpg",
    color: "from-purple-500 to-indigo-600"
  }
]

export default function ServicesPage() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navigation onGetQuote={() => setIsQuoteDialogOpen(true)} />

      {/* Services Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/3.jpg"
            alt="Professional cleaning services"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/80 via-primary/60 to-blue-900/80"></div>
        <motion.div
          className="relative z-10 text-center text-white container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-secondary/30">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Complete Service Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Professional cleaning solutions delivered with precision, care, and attention to detail
          </p>
        </motion.div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.id}
                id={service.id}
                className="mb-32 last:mb-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image */}
                  <motion.div
                    className={`relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ${!isEven ? 'lg:order-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-primary mb-6"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h2>

                    <motion.p
                      className="text-lg text-gray-600 mb-8 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        What&apos;s Included
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                      className="grid grid-cols-2 gap-4 mb-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {service.benefits.map((benefit, idx) => (
                        <Card key={idx} className="border-2 hover:border-primary/30 transition-all duration-300">
                          <CardContent className="p-4">
                            <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                              <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {benefit}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <Button
                        onClick={() => setIsQuoteDialogOpen(true)}
                        size="lg"
                        className={`bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl group`}
                      >
                        Get a Free Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Washly?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We deliver exceptional results backed by experience, professionalism, and a commitment to customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                description: "Fully licensed and insured for your complete peace of mind and protection"
              },
              {
                icon: Clock,
                title: "Punctual Service",
                description: "We respect your time and always arrive when scheduled, ready to work"
              },
              {
                icon: Sparkles,
                title: "Quality Guarantee",
                description: "100% satisfaction guaranteed or we&apos;ll make it right at no extra cost"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-blue-100">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
      <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />
    </main>
  )
}
