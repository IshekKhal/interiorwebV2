"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-card text-card-foreground px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Form */}
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 text-balance">
              Need a Consultation?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Let{"'"}s discuss how we can transform your space
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground text-sm sm:text-base"
                  placeholder="+971 50 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground font-medium rounded-full hover:shadow-lg transition-all hover:gold-glow text-sm sm:text-base"
              >
                {submitted ? "Thank you! We'll be in touch." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <img src="/dubai-map-location-office.jpg" alt="Dubai Location" className="w-full rounded-lg mb-6 sm:mb-8" />
            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-accent flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h3 className="font-medium text-sm sm:text-base mb-1">Office Address</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                     Company Address
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-accent flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h3 className="font-medium text-sm sm:text-base mb-1">Phone</h3>
                  <a
                    href="tel:+971501234567"
                    className="text-accent hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    +1 111 111111
                  </a>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-accent flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h3 className="font-medium text-sm sm:text-base mb-1">Email</h3>
                  <a
                    href="mailto:info@alabbarinteriors.com"
                    className="text-accent hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    youremailhere@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
