"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Layers, Ruler, PenTool, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

export function SystemDesign() {
  const capabilities = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "3D Modeling",
      description: "Comprehensive 3D modeling of automation systems integrated with architectural plans",
    },
    {
      icon: <Ruler className="h-6 w-6" />,
      title: "Precise Measurements",
      description: "Exact specifications and measurements for flawless implementation",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Custom Design",
      description: "Tailored system designs that complement architectural aesthetics",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Detailed Documentation",
      description: "Complete documentation for seamless integration with construction plans",
    },
  ]

  return (
    <section id="system-design" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced System Design with <span className="text-primary">AutoCAD & Revit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our technical proficiency in industry-leading design software ensures precise integration of automation
            systems with your architectural vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-primary/20">
              <Image
                src="/precision.jpg?height=800&width=600"
                alt="AutoCAD System Design"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Precision Engineering</h3>
                <p className="mb-4 text-muted-foreground">
                  Our AutoCAD and Revit expertise allows us to create detailed system designs that integrate seamlessly
                  with architectural plans.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Our System Design Expertise Matters</h3>
              <p className="text-muted-foreground mb-6">
                Our proficiency in AutoCAD and Revit translates to flawless implementation, reduced errors, and seamless
                coordination with architects and builders.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card/50 backdrop-blur-sm p-5 rounded-lg border border-border"
                >
                  <div className="text-primary mb-3">{item.icon}</div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-bold mb-3">Our Design Process Prevents:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Costly rework during construction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integration conflicts with other systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Timeline delays due to design errors</span>
                </li>
              </ul>
            </div>

            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discuss Your Project Requirements
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

