"use client"

import { motion } from "framer-motion"
import { CheckCircle, Heart, Shield, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Quality Service",
    description: "We take pride in delivering exceptional results every time"
  },
  {
    icon: Users,
    title: "Local Team",
    description: "Proudly operated by PEI locals who care about our community"
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Licensed, insured, and committed to your satisfaction"
  },
  {
    icon: CheckCircle,
    title: "Attention to Detail",
    description: "No job is complete until every detail meets our high standards"
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Washly
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At <span className="font-semibold text-primary">Washly Washing Services</span>, we believe in making your property shine brighter together. As a locally operated business in Prince Edward Island, we understand the unique cleaning needs of our community.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our commitment to quality and customer satisfaction drives everything we do. Whether it&apos;s cleaning windows, gutters, or pressure washing your driveway, we treat every job with the same level of care and professionalism.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We use environmentally friendly products and the latest cleaning techniques to ensure your property looks its best while protecting the environment we all share.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Icon className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
