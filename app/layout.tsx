import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Al-Abbar General Contracting | Dubai Interior Design & Fit-Out",
  description:
    "Leading interior design and fit-out company in Dubai, UAE. Transform your spaces with precision and passion.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
