"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Droplets, Users, MapPin, Calendar, ArrowRight } from "lucide-react"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Ram Singh's Success Story",
      location: "Haryana, India",
      crop: "Wheat & Rice",
      area: "50 Acres",
      duration: "2 Seasons",
      challenge: "Low crop yield due to water scarcity and difficulty in prediction.",
      solution: "Optimized irrigation using AgriScore's smart irrigation system and weather forecasting.",
      results: [
        { metric: "Water Savings", value: "40%", icon: Droplets, color: "text-blue-500" },
        { metric: "Yield Increase", value: "25%", icon: TrendingUp, color: "text-green-500" },
        { metric: "Cost Reduction", value: "₹45,000", icon: TrendingUp, color: "text-orange-500" },
      ],
      quote: "AgriScore has completely transformed my farming. Now I make data-driven decisions, not guesswork.",
  image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Sunita Devi's Organic Farming",
      location: "Punjab, India",
      crop: "Organic Vegetables",
      area: "25 Acres",
      duration: "18 Months",
      challenge: "Pest control and maintaining soil quality in organic farming was challenging.",
      solution: "Used soil health monitoring and natural pest control recommendations.",
      results: [
        { metric: "Organic Production", value: "100%", icon: Users, color: "text-green-600" },
        { metric: "Premium Price", value: "60%", icon: TrendingUp, color: "text-purple-500" },
        { metric: "Soil Health", value: "85%", icon: TrendingUp, color: "text-brown-500" },
      ],
      quote: "With AgriScore's help, I adopted completely organic farming and now get better prices.",
  image: "https://images.unsplash.com/photo-1500634245200-e5245c40cc12?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Krishna FPO's Collective Success",
      location: "Maharashtra, India",
      crop: "Cotton & Soybean",
      area: "500 Acres",
      duration: "3 Seasons",
      challenge: "Integrated farm management and market access issues for 200 small farmers.",
      solution: "Monitoring all farms and collective decision making through AgriScore Enterprise platform.",
      results: [
        { metric: "Farmer Members", value: "200+", icon: Users, color: "text-blue-600" },
        { metric: "Average Income Growth", value: "45%", icon: TrendingUp, color: "text-green-500" },
        { metric: "Total Savings", value: "₹25 Lakh", icon: TrendingUp, color: "text-orange-500" },
      ],
      quote: "All farmers in our FPO are now doing smart farming together. This is our biggest success.",
  image: "https://images.unsplash.com/photo-1562259949-e8e7689d7824?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-orange-50 to-blue-50 py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              See how Indian farmers are increasing their income and adopting smart farming with AgriScore.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} animate-slide-in-up`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-80 object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        if (target.src !== window.location.origin + "/placeholder.jpg") {
                          target.src = "/placeholder.jpg"
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 1 ? "lg:col-start-1" : ""} space-y-6 animate-slide-in-up animate-delay-100`}
                >
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">{study.title}</h2>
                    <p className="text-muted-foreground/80 mb-4">{study.location}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{study.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div>
                        <span className="font-medium">{study.crop}</span> • <span>{study.area}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Challenge:</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Solution:</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, resultIndex) => {
                      const IconComponent = result.icon
                      return (
                        <Card key={resultIndex} className="p-4 text-center">
                          <IconComponent className={`h-6 w-6 mx-auto mb-2 ${result.color}`} />
                          <div className="text-2xl font-bold text-foreground">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </Card>
                      )
                    })}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground bg-primary/5 p-4 rounded-r-lg">
                    "{study.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-slide-in-up">Become a Success Story Too</h2>
          <p className="text-xl text-white/90 mb-8 animate-slide-in-up animate-delay-100">
            Start your smart farming journey with AgriScore today
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 animate-slide-in-up animate-delay-200"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
