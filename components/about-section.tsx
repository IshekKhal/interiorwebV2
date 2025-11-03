"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 bg-card text-card-foreground px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <img
              src="/interior-design-team-discussing-luxury-office-proj.jpg"
              alt="Al-Abbar Team"
              className="w-full rounded-lg"
            />
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 text-balance">
              {"About  Company"}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-muted-foreground">
              With over 15 years of excellence in interior design and fit-out services, Company has established itself as a trusted partner for transforming spaces across Dubai and the UAE.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
              {[
                { number: "200+", label: "Clients" },
                { number: "500+", label: "Projects" },
                { number: "15+", label: "Years" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-3 sm:p-6 bg-muted rounded-lg border border-border hover-scale">
                  <div className="text-2xl sm:text-3xl font-serif text-accent mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our commitment to excellence, attention to detail, and passion for design sets us apart in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
