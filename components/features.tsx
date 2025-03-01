"use client"

import { motion } from "framer-motion"
import { Home, Cpu, Clock, CheckCircle } from "lucide-react"
import Image from 'next/image';

export function Features() {
  const features = [
    {
      icon: <Home className="h-10 w-10" />,
      title: "Luxury Home Automation",
      description:
        "Seamlessly integrate cutting-edge technology into luxury homes with our bespoke automation solutions designed for discerning homeowners.",
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "System Design Expertise",
      description:
        "Our team excels in AutoCAD & Revit, creating detailed system designs that integrate perfectly with your architectural vision.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Dedicated Project Management",
      description:
        "Prevent costly delays with our dedicated project managers who ensure smooth execution from concept to completion.",
    },
  ]

  const benefits = [
    "Increased property value",
    "Enhanced comfort and convenience",
    "Energy efficiency and cost savings",
    "Seamless integration with architectural design",
    "Future-proof technology implementation",
    "Comprehensive warranty and support",
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in creating intelligent living environments that blend seamlessly with luxury homes, enhancing
            both functionality and aesthetic appeal.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background rounded-xl p-8 shadow-lg border border-border"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/benifits.jpg?height=800&width=600')",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Benefits of Working with DMI</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

