"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Droplets, Thermometer, Sun, CloudRain } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-orange-50 to-blue-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder-kzct4.png')] opacity-5"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Turn Your Farm Data Into
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shine-once">
                  {" "}
                  Profit
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AgriScore combines soil sensors, weather data, and crop health into clear recommendations for
                irrigation, nutrition, and pest control.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap gap-6 text-sm animate-slide-in-up animate-delay-100">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
                <TrendingUp className="h-5 w-5 text-secondary" />
                <span className="font-semibold text-primary">2.1x ROI</span>
                <span className="text-muted-foreground">first season</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-secondary/20">
                <span className="font-semibold text-secondary">500+</span>
                <span className="text-muted-foreground">trusted farmers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up animate-delay-200">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              >
                Book 15-min Demo
              </Button>
            </div>

            {/* USP Bullets */}
            <div className="space-y-2 text-sm text-muted-foreground animate-slide-in-up animate-delay-300">
              <p className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Install sensors. See savings from day one.</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-secondary">✓</span>
                <span>Hyperlocal weather that actually matches your field.</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>Recommendations explained in simple language.</span>
              </p>
            </div>
          </div>

          {/* Right Visual - Enhanced Mock Dashboard */}
          <div className="relative animate-slide-in-up animate-delay-100">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 space-y-4 border border-primary/10 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">North Block - Rice</h3>
                <span className="text-sm text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">12 hectares</span>
              </div>

              {/* Enhanced Mock Field Map */}
              <div className="h-48 bg-gradient-to-br from-green-100 via-green-200 to-blue-100 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/agricultural-field-moisture.png')] bg-cover bg-center opacity-30"></div>

                <div className="absolute top-4 left-4 animate-float">
                  <Card className="p-3 bg-white/95 backdrop-blur border-primary/20 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Moisture: 21.3%</span>
                    </div>
                  </Card>
                </div>

                <div className="absolute top-4 right-4 animate-float" style={{ animationDelay: "0.5s" }}>
                  <Card className="p-3 bg-white/95 backdrop-blur border-secondary/20 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium">28°C</span>
                    </div>
                  </Card>
                </div>

                <div className="absolute bottom-4 left-4 animate-float" style={{ animationDelay: "1s" }}>
                  <Card className="p-3 bg-white/95 backdrop-blur border-accent/20 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Sun className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium">Sun: 85%</span>
                    </div>
                  </Card>
                </div>

                <div className="absolute bottom-4 right-4 animate-float" style={{ animationDelay: "1.5s" }}>
                  <Card className="p-3 bg-white/95 backdrop-blur border-green-400/20 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <CloudRain className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Rain: Thursday</span>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Enhanced Recommendation Card */}
              <Card className="p-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-l-4 border-l-primary shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Irrigation Recommendation</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Skip irrigation for 2 days. Rain expected Thursday (15mm). Save ₹1,200 in water costs.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
