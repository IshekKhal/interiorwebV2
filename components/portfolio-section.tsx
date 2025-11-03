"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Modern Penthouse",
    image: "/luxury-modern-penthouse-interior-design.jpg",
  },
  {
    title: "Executive Office",
    image: "/contemporary-executive-office-space.jpg",
  },
  {
    title: "Fine Dining Restaurant",
    image: "/elegant-fine-dining-restaurant-interior.jpg",
  },
  {
    title: "Retail Boutique",
    image: "/luxury-retail-boutique-showroom.jpg",
  },
  {
    title: "Corporate Lobby",
    image: "/modern-corporate-lobby-entrance.jpg",
  },
  {
    title: "Hotel Suite",
    image: "/luxury-hotel-suite-bedroom.jpg",
  },
]

export default function PortfolioSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleItems(Array.from({ length: projects.length }, (_, i) => i))
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 sm:py-24 bg-card text-card-foreground px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4 text-balance">Our Portfolio</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-12 sm:mb-16 max-w-2xl">
          Discover our collection of exceptional projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`section-fade-in relative overflow-hidden rounded-lg group cursor-pointer h-48 sm:h-64 ${
                visibleItems.includes(idx) ? "" : "opacity-0"
              }`}
              style={{
                animationDelay: visibleItems.includes(idx) ? `${idx * 0.08}s` : "0s",
              }}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity px-4">
                <h3 className="text-white font-serif text-lg sm:text-xl text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent font-medium rounded-full hover:bg-accent hover:text-primary transition-all duration-300 group text-sm sm:text-base">
            View More Projects
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
