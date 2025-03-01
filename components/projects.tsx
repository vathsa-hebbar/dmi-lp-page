"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Mountain View Estate",
      description:
        "A comprehensive home automation system for a 12,000 sq ft luxury mountain home featuring integrated lighting, climate, security, and entertainment systems.",
      image: "/mountain-view.jpeg?height=600&width=800",
    },
    {
      title: "Urban Penthouse",
      description:
        "Smart home technology seamlessly integrated into a modern penthouse with voice control, automated shades, and a state-of-the-art home theater.",
      image: "/pent-house.jpeg?height=600&width=800",
    },
    {
      title: "Lakeside Retreat",
      description:
        "Custom automation solution for a vacation property with remote monitoring and control capabilities, allowing owners to manage systems from anywhere.",
      image: "/lake-side-view.jpg?height=600&width=800",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of luxury home automation projects that showcase our expertise and attention to
            detail.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={currentIndex}
              className="relative aspect-[16/9]"
            >
              <Image
                src={projects[currentIndex].image || "/placeholder.svg"}
                alt={projects[currentIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
                <p className="mb-4">{projects[currentIndex].description}</p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous project">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next project">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

