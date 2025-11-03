"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Gem, Clock, Zap } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Trusted Experts",
    description: "Industry-leading professionals with proven expertise.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Only the finest materials and finishes used.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Projects completed on schedule, every time.",
  },
  {
    icon: Zap,
    title: "Design to Execution",
    description: "Complete solutions from concept to completion.",
  },
]

export default function WhyChooseSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleItems(Array.from({ length: reasons.length }, (_, i) => i))
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
    <section id="why-choose" ref={sectionRef} className="py-16 sm:py-24 bg-background px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-primary mb-2 sm:mb-4 text-balance">
          Why Choose  Company  
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-12 sm:mb-16 max-w-2xl">
          Experience excellence through innovation and dedication
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div
                key={idx}
                className={`section-fade-in text-center group ${visibleItems.includes(idx) ? "" : "opacity-0"}`}
                style={{
                  animationDelay: visibleItems.includes(idx) ? `${idx * 0.15}s` : "0s",
                }}
              >
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-primary group-hover:text-accent-foreground transition-colors" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-serif mb-2 sm:mb-3 text-primary">{reason.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
