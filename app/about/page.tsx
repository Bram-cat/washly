"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { QuoteDialog } from "@/components/QuoteDialog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Sparkles, Shield, Users, ThumbsUp, Award, Clock, Heart,
  CheckCircle, Phone, Mail, MapPin, Star
} from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We believe in honest, transparent service. No hidden fees, no surprises—just straightforward pricing and reliable work.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We&apos;re committed to delivering exceptional results on every job. Our team takes pride in exceeding expectations.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Heart,
    title: "Care",
    description: "Your property is important to you, and it&apos;s important to us. We treat every home and business with respect and attention.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Community",
    description: "As a locally operated business, we&apos;re invested in our PEI community and dedicated to serving our neighbors.",
    color: "from-green-500 to-emerald-500"
  }
]

const stats = [
  { number: "500+", label: "Properties Cleaned", icon: CheckCircle },
  { number: "5.0", label: "Star Rating", icon: Star },
  { number: "100%", label: "Satisfaction Rate", icon: ThumbsUp },
  { number: "3+", label: "Years Experience", icon: Award }
]

const team = [
  {
    name: "Pathik Pandya",
    role: "Co-Founder & Operations",
    phone: "705-822-8605",
    image: "/images/5.jpg"
  },
  {
    name: "Atmiya Patel",
    role: "Co-Founder & Customer Relations",
    phone: "705-970-4920",
    image: "/images/6.jpg"
  }
]

export default function AboutPage() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navigation onGetQuote={() => setIsQuoteDialogOpen(true)} />

      {/* About Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/7.jpg"
            alt="About Washly Washing Services"
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
            <span className="text-sm font-medium text-secondary">Locally Operated in PEI</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Washly</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for professional cleaning services across Prince Edward Island
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Washly Washing Services was founded with a simple mission: to provide Prince Edward Island
                  with exceptional cleaning services that combine professionalism, reliability, and genuine care.
                </p>
                <p>
                  As a locally operated business, we understand the unique needs of PEI property owners. Whether
                  it&apos;s the salt air affecting your windows or the seasonal debris in your gutters, we&apos;ve seen
                  it all and know how to handle it.
                </p>
                <p>
                  What started as a passion for helping neighbors maintain their properties has grown into a
                  trusted service that hundreds of islanders rely on. We&apos;re proud to be part of this community
                  and committed to earning your trust with every job.
                </p>
                <p className="font-semibold text-primary">
                  Our goal is simple: to make your property shine brighter, together.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/images/8.jpg"
                alt="Washly team at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from how we interact with customers to
              the quality of work we deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Founders</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The dedicated team behind Washly Washing Services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-200 mb-4">{member.role}</p>
                    <div className="flex items-center justify-center gap-2 text-secondary">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${member.phone}`} className="hover:underline">
                        {member.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose Washly?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here&apos;s what sets us apart from other cleaning services in PEI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Fully Licensed & Insured",
                description: "Your peace of mind is our priority. We&apos;re fully licensed and insured to protect you and your property."
              },
              {
                icon: Clock,
                title: "Reliable & Punctual",
                description: "We value your time. When we say we&apos;ll be there, we will be—ready to work and deliver results."
              },
              {
                icon: ThumbsUp,
                title: "100% Satisfaction Guaranteed",
                description: "We&apos;re not happy until you&apos;re happy. If something isn&apos;t right, we&apos;ll make it right."
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
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the Washly difference. Contact us today for a free quote and see why PEI
              homeowners trust us with their properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsQuoteDialogOpen(true)}
                className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Get a Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 h-auto font-semibold backdrop-blur-sm"
              >
                <a href="tel:705-822-8605">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />
    </main>
  )
}
