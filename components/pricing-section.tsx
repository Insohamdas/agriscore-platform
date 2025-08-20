"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Users, Shield } from "lucide-react"

const plans = [
  {
    name: "Farmer Starter",
    price_month: 0,
    price_yearly: 0,
    pitch: "Perfect for small farms and trials",
    features: [
      "Up to 20 acres",
      "Basic maps and reports",
      "WhatsApp support",
      "Weather updates",
      "Basic irrigation suggestions",
    ],
    cta: "Start Free",
    icon: Users,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Farmer Pro",
    price_month: 1999,
    price_yearly: 19990,
    pitch: "For growing farming operations",
    features: [
      "Up to 200 acres",
      "All analytics and reports",
      "Priority support",
      "API access",
      "Soil health tracking",
      "Crop disease detection",
      "Profit calculator",
    ],
    cta: "Start Trial",
    popular: true,
    icon: Star,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Enterprise",
    price_month: "Custom",
    price_yearly: "Custom",
    pitch: "For FPOs & large farming operations",
    features: [
      "Unlimited acres",
      "99.9% uptime guarantee",
      "Dedicated success manager",
      "Custom integrations",
      "On-site training",
      "Bulk discounts",
    ],
    cta: "Contact Sales",
    icon: Shield,
    color: "from-blue-500 to-purple-600",
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-green-50 via-orange-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/abstract-geometric-pattern.png')] opacity-5"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Start free, scale as you grow. No hidden fees, ever.</p>

          {/* Enhanced Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full p-2 border border-primary/20 inline-flex shadow-lg">
            <span
              className={`text-sm px-4 py-2 rounded-full transition-all ${!isYearly ? "bg-primary text-white font-medium shadow-md" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm px-4 py-2 rounded-full transition-all ${isYearly ? "bg-primary text-white font-medium shadow-md" : "text-muted-foreground"}`}
            >
              Yearly <span className="text-secondary font-bold">(Save 50%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card
                key={index}
                className={`relative transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in-up animate-delay-${(index + 1) * 100} ${
                  plan.popular
                    ? "ring-2 ring-primary shadow-2xl bg-gradient-to-br from-white to-primary/5 transform hover:rotate-1"
                    : "bg-white/90 backdrop-blur-sm border-primary/10 hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-medium animate-pulse-glow shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center animate-float shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <CardTitle className="text-xl text-foreground mb-2">{plan.name}</CardTitle>

                  <div className="mt-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {typeof plan.price_month === "number" ? (
                        <>₹{isYearly ? Math.floor((plan.price_yearly as number) / 12) : (plan.price_month as number)}</>
                      ) : (
                        plan.price_month
                      )}
                    </span>
                    {typeof plan.price_month === "number" && <span className="text-muted-foreground ml-1">/month</span>}
                  </div>

          {isYearly && typeof plan.price_yearly === "number" && typeof plan.price_month === "number" && (
                    <p className="text-sm text-secondary font-medium mt-1">
            Yearly: ₹{plan.price_yearly} (Save ₹{(plan.price_month as number) * 12 - (plan.price_yearly as number)}!)
                    </p>
                  )}

                  <p className="text-muted-foreground mt-2">{plan.pitch}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white animate-pulse-glow"
                        : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center animate-slide-in-up animate-delay-300">
          <p className="text-muted-foreground mb-4">Trusted by thousands of farmers across India</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>4.8/5 rating</span>
            </div>
            <div>•</div>
            <div>500+ happy farmers</div>
            <div>•</div>
            <div>₹2 crore+ saved</div>
          </div>
        </div>
      </div>
    </section>
  )
}
