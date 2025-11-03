"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"

const images = [
  "/luxury-modern-interior-design-living-room-with-gol.jpg",
  "/elegant-contemporary-office-space-with-black-and-w.jpg",
  "/luxurious-minimalist-bedroom-interior-with-premium.jpg",
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full overflow-hidden pt-16 sm:pt-20 min-h-screen flex items-center">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img || "/placeholder.svg"} alt={`Project ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="mb-4 sm:mb-6 inline-block px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
          <span className="text-white text-xs sm:text-sm font-medium tracking-wide">PRECISION &amp; PASSION</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-white mb-4 sm:mb-6 hero-text-slide max-w-4xl leading-tight text-balance">
          Transforming Spaces with Precision &amp; Passion
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl font-light hero-text-slide px-2">
          Leading Interior Design &amp; Fit-Out Company in Dubai, UAE
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto px-2">
          <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent font-medium rounded-full hover:bg-accent hover:text-primary transition-all duration-300 flex items-center gap-2 justify-center group text-sm sm:text-base">
            View Our Projects
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-primary font-medium rounded-full hover:gold-glow transition-all duration-300 text-sm sm:text-base">
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Image Carousel Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentImage ? "bg-accent w-6 sm:w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
