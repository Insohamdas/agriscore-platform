"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Ram Singh",
    location: "Haryana",
    crop: "Wheat & Rice",
    quote:
      "AgriScore has completely transformed my farming. Now I make data-driven decisions and my income has increased by 40%.",
    rating: 5,
    savings: "₹45,000",
  image: "/farmers/ram.svg",
  },
  {
    name: "Sunita Devi",
    location: "Punjab",
    crop: "Organic Vegetables",
    quote: "Soil testing and smart irrigation have greatly improved my crop quality. Now I get premium prices.",
    rating: 5,
    savings: "₹30,000",
  image: "/farmers/sunita.svg",
  },
  {
    name: "Amit Patel",
    location: "Gujarat",
    crop: "Cotton",
    quote: "Accurate weather information and pest control advice have reduced my crop losses by 60%.",
    rating: 5,
    savings: "₹55,000",
  image: "/farmers/amit.svg",
  },
  {
    name: "Krishna Reddy",
    location: "Andhra Pradesh",
    crop: "Rice",
    quote: "AgriScore is the best for water conservation and better production. All farmers in my village use it.",
    rating: 5,
    savings: "₹38,000",
  image: "/farmers/krishna.svg",
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Farmer Success Stories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            See how Indian farmers are increasing their income with AgriScore
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-primary/20 shadow-2xl animate-slide-in-up">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-primary mr-4" />
                <div className="flex">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl text-foreground mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      if (target.src !== window.location.origin + "/placeholder-user.jpg") {
                        target.src = "/placeholder-user.jpg"
                      }
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].crop}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-secondary">{testimonials[currentTestimonial].savings}</div>
                  <div className="text-sm text-muted-foreground">Annual Savings</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-6 hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-in-up ${
                index === currentTestimonial
                  ? "ring-2 ring-primary bg-primary/5"
                  : "bg-white/60 backdrop-blur-sm hover:bg-white/80"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="text-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mx-auto mb-3 object-cover border-2 border-primary/20"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    if (target.src !== window.location.origin + "/placeholder-user.jpg") {
                      target.src = "/placeholder-user.jpg"
                    }
                  }}
                />
                <h4 className="font-semibold text-foreground mb-1">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{testimonial.location}</p>
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                  ))}
                </div>
                <div className="text-lg font-bold text-secondary">{testimonial.savings}</div>
                <div className="text-xs text-muted-foreground">Savings</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
