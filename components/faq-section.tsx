"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. Most residential projects take 3-6 months, while commercial projects can range from 2-12 months. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you offer design consultations?",
    answer:
      "Yes, we provide complimentary initial consultations to discuss your vision, budget, and requirements. This helps us understand your needs and provide accurate quotes.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We primarily serve Dubai and the UAE, with the flexibility to work on projects throughout the Emirates. Contact us to discuss your specific location.",
  },
  {
    question: "Are your materials sourced locally or internationally?",
    answer:
      "We source premium materials from both local and international suppliers to ensure the highest quality finishes tailored to your project requirements.",
  },
  {
    question: "Do you provide warranty on completed projects?",
    answer:
      "Yes, we provide comprehensive warranties on all our work. Details are included in your project contract and vary by project scope.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-24 bg-background px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-primary mb-2 sm:mb-4 text-center text-balance">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-16 text-center max-w-2xl mx-auto">
          Find answers to common questions about our services
        </p>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border rounded-lg overflow-hidden hover-scale">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-4 sm:p-6 flex items-center justify-between bg-card text-card-foreground hover:bg-muted transition-colors"
              >
                <h3 className="text-base sm:text-lg font-serif text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 transition-transform ml-4`}
                  style={{
                    transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {openIndex === idx && (
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-muted border-t border-border">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
