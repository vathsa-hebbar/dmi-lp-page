"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    // Show success message
    alert("Thank you for your message. We'll be in touch soon!")
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your custom home projects? Contact us for a free consultation and discover how DMI can
            transform your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">(303) 555-1234</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">info@dmiautomation.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Office</h4>
                  <p className="text-muted-foreground">123 Innovation Way, Denver, CO 80202</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
              <p className="text-muted-foreground mb-4">
                We provide luxury home automation services throughout Colorado, including:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div>Denver</div>
                <div>Boulder</div>
                <div>Aspen</div>
                <div>Vail</div>
                <div>Telluride</div>
                <div>Breckenridge</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-muted rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

