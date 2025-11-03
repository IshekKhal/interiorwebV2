"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Briefcase, UtensilsCrossed, ShoppingBag, Hammer as Hammer2 } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Residential",
    description: "Transform your home with bespoke interior solutions.",
  },
  {
    icon: Briefcase,
    title: "Commercial",
    description: "Professional spaces designed for productivity.",
  },
  {
    icon: Building2,
    title: "Office",
    description: "Modern workspaces tailored to your brand.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Captivating dining experiences through design.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Engaging retail environments that sell.",
  },
  {
    icon: Hammer2,
    title: "Joinery",
    description: "Custom carpentry and built-in solutions.",
  },
]

export default function ServicesSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = Array.from({ length: services.length }, (_, i) => i)
            setVisibleItems(items)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-24 bg-background px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-primary mb-2 sm:mb-4 text-balance">
          Our Services
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-12 sm:mb-16 max-w-2xl">
          Comprehensive interior design and fit-out solutions for every space
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`section-fade-in bg-card text-card-foreground p-6 sm:p-8 rounded-lg border border-border hover-scale transition-all ${
                  visibleItems.includes(idx) ? "" : "opacity-0"
                }`}
                style={{
                  animationDelay: visibleItems.includes(idx) ? `${idx * 0.1}s` : "0s",
                }}
              >
                <Icon className="w-10 sm:w-12 h-10 sm:h-12 text-accent mb-4" />
                <h3 className="text-xl sm:text-2xl font-serif mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
