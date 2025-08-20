"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Phone, MessageCircle, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

export function CTASection() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { value: "2.1x", label: "Average ROI Increase" },
    { value: "40%", label: "Water Savings" },
    { value: "₹45,000", label: "Average Annual Savings" },
    { value: "15 days", label: "Time to See Results" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/indian-agricultural-pattern.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 animate-slide-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Start Your Smart Farming Journey Today</h2>
          <p className="text-xl text-white/90 mb-2">
            Thousands of farmers are already increasing their income with AgriScore
          </p>
        </div>

        {/* Animated Stats */}
        <div className="text-center mb-12 animate-slide-in-up animate-delay-100">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-white mb-2 transition-all duration-500">
              {stats[currentStat].value}
            </div>
            <div className="text-white/90 font-medium mb-1 transition-all duration-500">{stats[currentStat].label}</div>

            <div className="flex justify-center mt-4 space-x-1">
              {stats.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStat ? "bg-white scale-125" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:scale-105 transition-all duration-300 animate-slide-in-up animate-delay-200">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Free Consultation</h3>
            <p className="text-white/80 mb-4 text-sm">Talk to our experts</p>
            <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
              Call Now
            </Button>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:scale-105 transition-all duration-300 animate-slide-in-up animate-delay-300 ring-2 ring-white/30">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">15-Minute Demo</h3>
            <p className="text-white/80 mb-4 text-sm">See live demo</p>
            <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
              Book Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:scale-105 transition-all duration-300 animate-slide-in-up animate-delay-400">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp Support</h3>
            <p className="text-white/80 mb-4 text-sm">Get instant help</p>
            <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
              Start Chat
            </Button>
          </Card>
        </div>

        {/* Main CTA */}
        <div className="text-center animate-slide-in-up animate-delay-500">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 hover-lift"
          >
            Start Free Trial - No Credit Card Required
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-white/70 mt-4 text-sm">30-day free trial • Cancel anytime • 24/7 support</p>
        </div>
      </div>
    </section>
  )
}
