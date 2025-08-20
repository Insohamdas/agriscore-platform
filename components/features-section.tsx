"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Leaf, TrendingUp, Gauge, Wheat, Sun, Droplets, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Simple animated counter that starts when `start` becomes true
function CountUp({ end, duration = 1500, formatter = (n: number) => Math.round(n).toString(), start = false }: { end: number; duration?: number; formatter?: (n: number) => string; start?: boolean }) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    const from = 0
    const to = end
    const d = Math.max(300, duration)

    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts
      const progress = Math.min(1, (ts - startRef.current) / d)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setValue(from + (to - from) * eased)
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      startRef.current = null
    }
  }, [start, end, duration])

  return <>{formatter(value)}</>
}

const features = [
  {
    title: "Soil Intelligence",
    icon: Gauge,
    bullets: [
      "Live moisture, EC, pH, NPK from in-field sensors",
      "Zonal maps and variable-rate suggestions",
      "Offline-first data sync for remote fields",
    ],
    color: "from-amber-500 to-orange-600",
    bgColor: "from-amber-50 to-orange-50",
    delay: "0s",
  },
  {
    title: "Weather & Irrigation",
    icon: Cloud,
    bullets: [
      "Hyperlocal forecasts and rainfall capture",
      "Irrigation scheduling with cost savings",
      "Smart alerts for heat stress and disease windows",
    ],
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-50 to-cyan-50",
    delay: "0.1s",
  },
  {
    title: "Crop Health & Scouting",
    icon: Leaf,
    bullets: [
      "Satellite NDVI/NDRE trends with anomalies",
      "Mobile scouting with photo notes",
      "Pest/Disease risk models with action cards",
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    delay: "0.2s",
  },
  {
    title: "Market & ROI",
    icon: TrendingUp,
    bullets: [
      "Input cost tracker and yield forecasting",
      "Season summaries and profitability score",
      "PDF/CSV exports for subsidies and audits",
    ],
    color: "from-purple-500 to-indigo-600",
    bgColor: "from-purple-50 to-indigo-50",
    delay: "0.3s",
  },
]

const indianCrops = [
  { name: "Rice", icon: "🌾", color: "text-yellow-600" },
  { name: "Wheat", icon: "🌾", color: "text-amber-600" },
  { name: "Cotton", icon: "🌿", color: "text-green-600" },
  { name: "Sugarcane", icon: "🎋", color: "text-green-700" },
  { name: "Corn", icon: "🌽", color: "text-yellow-500" },
  { name: "Soybean", icon: "🫘", color: "text-green-500" },
]

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [currentCrop, setCurrentCrop] = useState(0)
  const [statsInView, setStatsInView] = useState(false)
  const statsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll("[data-index]")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCrop((prev) => (prev + 1) % indianCrops.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!statsRef.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStatsInView(true)
        })
      },
      { threshold: 0.3 },
    )
    obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-green-50 via-orange-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 animate-float hover-glow">
          <Wheat className="h-20 w-20 text-primary drop-shadow-lg" />
        </div>
        <div className="absolute top-20 right-20 animate-float hover-glow" style={{ animationDelay: "1s" }}>
          <Sun className="h-16 w-16 text-secondary drop-shadow-lg" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float hover-glow" style={{ animationDelay: "2s" }}>
          <Droplets className="h-18 w-18 text-accent drop-shadow-lg" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow opacity-20">
          <div className="w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
              Everything for Smart Farming
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            From soil sensors to satellite imagery, get the complete picture of your fields with actionable insights
            that deliver real results.
          </p>
          <p className="text-muted-foreground/80 max-w-xl mx-auto">
            Empowering Indian farmers with cutting-edge agricultural technology.
          </p>

          <div className="mt-8 flex items-center justify-center space-x-6 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 border border-primary/20 shadow-lg hover-lift">
            <span className="text-sm text-muted-foreground font-medium">Supported Crops:</span>
            <div className="flex items-center space-x-3">
              {indianCrops.map((crop, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 hover:scale-110 cursor-pointer ${
                    index === currentCrop
                      ? "scale-125 opacity-100 animate-bounce-in"
                      : "scale-100 opacity-60 hover:opacity-80"
                  }`}
                >
                  <span className="text-3xl drop-shadow-sm">{crop.icon}</span>
                </div>
              ))}
            </div>
            <span
              className={`text-sm font-bold transition-all duration-500 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 ${indianCrops[currentCrop].color}`}
            >
              {indianCrops[currentCrop].name}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                data-index={index}
                className={`hover-lift transition-all duration-500 border-primary/20 bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm shadow-xl hover:shadow-2xl group ${
                  isVisible ? "animate-bounce-in opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: feature.delay,
                  transitionDelay: feature.delay,
                }}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 animate-pulse-glow shadow-2xl group-hover:scale-110 transition-all duration-300 hover-glow`}
                  >
                    <IconComponent className="h-10 w-10 text-white drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start space-x-3 group/item">
                        <div
                          className={`w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-md`}
                        ></div>
                        <span className="text-sm text-foreground leading-relaxed group-hover/item:text-primary transition-colors duration-300">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-20 animate-fade-in-scale" style={{ animationDelay: "0.5s" }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
                Our Impact on Indian Agriculture
              </span>
            </h3>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 rounded-full bg-primary/5 border border-primary/10">Cumulative</span>
              <span className="px-2 py-1 rounded-full bg-secondary/5 border border-secondary/10">Last 12 months</span>
            </div>
          </div>

          <div ref={statsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: 500,
                label: "Happy Farmers",
                icon: "👨‍🌾",
                color: "from-green-500 to-emerald-600",
                formatter: (n: number) => `${Math.round(n).toLocaleString("en-IN")}+`,
                trend: "+18% YoY",
              },
              {
                value: 50000,
                label: "Acres Covered",
                icon: "🌾",
                color: "from-yellow-500 to-orange-600",
                formatter: (n: number) => `${Math.round(n).toLocaleString("en-IN")}+`,
                trend: "+22% YoY",
              },
              {
                value: 20000000, // ₹2 Crore
                label: "Total Savings",
                icon: "💰",
                color: "from-blue-500 to-cyan-600",
                formatter: (n: number) => `₹${(n / 10000000).toFixed(n >= 10000000 ? 1 : 0).replace(/\.0$/, "")} Crore+`,
                trend: "+15% YoY",
              },
              {
                value: 15,
                label: "States",
                icon: "🇮🇳",
                color: "from-purple-500 to-indigo-600",
                formatter: (n: number) => `${Math.round(n)}+`,
                trend: "Pan-India",
              },
            ].map((stat, index) => (
              <Card
                key={stat.label}
                className="relative overflow-hidden bg-white/85 backdrop-blur ring-1 ring-border rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover-lift"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${stat.color} opacity-10`} />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="size-10 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center text-lg">
                      {stat.icon}
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${stat.color} text-white/95 shadow-sm`}>Verified</span>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-sm whitespace-nowrap" aria-label={stat.label}>
                      {stat.label === "Total Savings" ? (
                        <>
                          <span className="font-sans">₹</span>
                          <span className="mx-1 tabular-nums font-mono">
                            <CountUp
                              end={stat.value / 10000000}
                              start={statsInView}
                              formatter={(n: number) => n.toFixed(n >= 1 && n < 10 ? 1 : 0).replace(/\.0$/, "")}
                              duration={1400 + index * 200}
                            />
                          </span>
                          <span className="font-semibold"> Crore+</span>
                        </>
                      ) : (
                        <CountUp end={stat.value} start={statsInView} formatter={stat.formatter} duration={1400 + index * 200} />
                      )}
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="text-sm text-foreground/80 font-semibold">{stat.label}</div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 border border-green-200 px-2 py-1 rounded-full">
                        <ArrowRight className="h-3 w-3" />
                        <span>{stat.trend}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/90 transition-colors"
              aria-label="View detailed case studies"
            >
              View detailed case studies
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
