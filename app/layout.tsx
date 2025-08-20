import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Metadata, Viewport } from "next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AgriScore — Smart Farming Platform",
  description:
    "Soil, weather, and crop intelligence in one place. Save water, reduce inputs, and grow profits with AgriScore.",
  keywords: ["smart farming", "precision agriculture", "soil sensors", "NDVI", "irrigation scheduling", "India"],
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#4ade80'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
