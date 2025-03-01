"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "DMI transformed our custom home building process. Their expertise in system design and project management prevented costly delays and delivered an exceptional result for our client.",
      author: "John Anderson",
      title: "Principal Architect, Anderson Design Group",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with DMI has elevated our luxury homes to a new level. Their attention to detail and innovative solutions have become a key selling point for our properties.",
      author: "Sarah Reynolds",
      title: "CEO, Reynolds Custom Homes",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The team at DMI understands the unique challenges of high-end residential projects. Their AutoCAD expertise and seamless integration with our design process made all the difference.",
      author: "Michael Chen",
      title: "Director, Altitude Builders",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Partners Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've built lasting relationships with Colorado's premier custom home builders through our commitment to
            excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8 shadow-lg border border-border relative"
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
              <p className="mb-6 relative z-10">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

