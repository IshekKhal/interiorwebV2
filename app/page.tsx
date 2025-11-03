"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import WhyChooseSection from "@/components/why-choose-section"
import PortfolioSection from "@/components/portfolio-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <PortfolioSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
