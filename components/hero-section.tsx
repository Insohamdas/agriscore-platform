"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Droplets, Thermometer, CloudRain } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [reduceMotion, setReduceMotion] = useState(false)
  const [activePoint, setActivePoint] = useState<null | {x: number, y: number, value: string}>(null)
  const fieldRef = useRef<HTMLDivElement | null>(null)
  const [viewMode, setViewMode] = useState<'ndvi' | 'moisture'>('ndvi')

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = ((e.clientX - cx) / rect.width) * 16 // max ~16px
    const dy = ((e.clientY - cy) / rect.height) * 16
    setParallax({ x: dx, y: dy })
  }
  const onLeave = () => {
    setParallax({ x: 0, y: 0 })
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])
  
  // Simulated live field metrics for demo
  const [metrics, setMetrics] = useState({
    moisture: 62, // %
    n: 48, // mg/kg
    p: 22, // mg/kg
    k: 52, // mg/kg
    ph: 6.7, // pH
    ec: 0.9, // dS/m
    temp: 31, // °C
    humidity: 64, // %
    rainInHrs: 5 as number | null, // hours until rain, null = no rain soon
  })

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => {
      setMetrics(prev => {
        const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))
        // random nudge
        const moisture = clamp(prev.moisture + (Math.random() * 6 - 3), 20, 95)
        const temp = clamp(prev.temp + (Math.random() * 2 - 1), 20, 42)
        const humidity = clamp(prev.humidity + (Math.random() * 6 - 3), 20, 95)
        let rainInHrs = prev.rainInHrs
        if (Math.random() < 0.25) {
          // occasionally change rain ETA
          rainInHrs = Math.random() < 0.5 ? Math.floor(Math.random() * 12) + 1 : null
        } else if (typeof rainInHrs === 'number' && rainInHrs > 0 && Math.random() < 0.6) {
          rainInHrs = rainInHrs - 1
          if (rainInHrs <= 0) rainInHrs = 0
        }
        return {
          ...prev,
          moisture: Math.round(moisture),
          temp: Math.round(temp),
          humidity: Math.round(humidity),
          rainInHrs,
        }
      })
    }, 4000)
    return () => clearInterval(id)
  }, [reduceMotion])

  const irrigationAdvice = (() => {
    const m = metrics
    const low = m.moisture < 40
    const rainSoon = m.rainInHrs !== null && m.rainInHrs <= 6
    if (low && !rainSoon) return { text: "Irrigate now", tone: "danger" as const }
    if (low && rainSoon) return { text: `Delay irrigation (rain in ${m.rainInHrs}h)`, tone: "warn" as const }
    if (!low && rainSoon) return { text: `No irrigation. Rain in ${m.rainInHrs}h`, tone: "ok" as const }
    const hours = Math.max(6, Math.round((m.moisture - 40) * 1.2))
    return { text: `Irrigation in ~${hours}h`, tone: "ok" as const }
  })()
  return (
    <section
      className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 flex items-center justify-center"
      id="home"
    >

      
      <div
        ref={wrapRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="container px-4 md:px-6 relative space-y-10 flex justify-center"
      >
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          style={{ transform: reduceMotion ? undefined : `translate3d(${parallax.x}px, ${parallax.y}px, 0)`, transition: reduceMotion ? undefined : "transform 120ms ease-out" }}
        >
          {/* Layered, subtle radial gradients */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(1200px 600px at 10% -10%, rgba(16,185,129,0.10), transparent 60%)," +
                "radial-gradient(900px 500px at 110% 10%, rgba(99,102,241,0.10), transparent 60%)," +
                "radial-gradient(700px 400px at 50% 120%, rgba(245,158,11,0.10), transparent 60%)",
              filter: "saturate(1) blur(0px)",
            }}
          />

          {/* Subtle grid mask overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)," +
                "linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.18,
              WebkitMaskImage: "radial-gradient(1200px 600px at 50% 40%, #000, transparent 70%)",
              maskImage: "radial-gradient(1200px 600px at 50% 40%, #000, transparent 70%)",
            }}
          />

          {/* Soft top highlight for depth */}
          <div
            className="absolute inset-x-0 top-0 h-40"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0))",
            }}
          />
        </div>
        <div className="mx-auto max-w-6xl w-full grid items-center gap-8 lg:grid-cols-2 lg:gap-12 place-items-center">
          <div className="flex flex-col justify-center items-center text-center space-y-4 w-full max-w-xl mx-auto">
            <div className="space-y-4 animate-slide-in-up motion-reduce:animate-none" style={{ animationDelay: '0.05s' }}>
              {/* Hindi tagline with English translation */}
              <div className="mb-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="h-px w-8 bg-secondary/70"></span>
                  <span className="text-xl text-accent/90 font-medium italic">&ldquo;खेत की मिट्टी, आपकी समृद्धि&rdquo;</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground text-center">Your soil, your prosperity</div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight md:text-balance">
                <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                  Smart Farming
                </span> for{" "}
                <div className="mt-1 relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shine-once">
                    Bharat&apos;s Kisan
                  </span>
                  <div className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-secondary/80 to-primary/80 rounded-full"></div>
                </div>
              </h1>
            {/* badges and CTAs follow */}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <div className="flex flex-wrap justify-center gap-3 text-sm animate-slide-in-up motion-reduce:animate-none" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm rounded-full px-4 py-2 border shadow-md border-amber-200 hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center bg-primary/10 rounded-full p-1">
                    <svg
                      className="size-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="font-medium">किसान द्वारा अनुमोदित</span>
                  <span className="text-xs text-muted-foreground ml-1">(Farmer Approved)</span>
                </div>

                <div className="flex items-center space-x-2 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm rounded-full px-4 py-2 border shadow-md border-amber-200 hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center bg-secondary/10 rounded-full p-1">
                    <svg
                      className="size-4 text-secondary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="font-medium">Trusted by 50,000+ Farmers</span>
                </div>

                <div className="flex items-center space-x-2 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm rounded-full px-4 py-2 border shadow-md border-amber-200 hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center bg-accent/10 rounded-full p-1">
                    <svg
                      className="size-4 text-accent"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="font-medium">Made for Indian Soil</span>
                </div>
              </div>
            </div>
            
            {/* Indian agriculture regions badge section */}
            <div className="mt-10 animate-slide-in-up motion-reduce:animate-none" style={{ animationDelay: '0.35s' }}>
              <div className="mb-3 flex items-center justify-center gap-2">
                <div className="h-px w-4 bg-secondary/70"></div>
                <span className="text-sm font-medium text-secondary/90">Optimized for all Indian regions</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-lg p-3 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-emerald-800">Punjab &amp; Haryana</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-4">Wheat Belt</p>
                </div>
                
                <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-lg p-3 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-800">West Bengal</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-4">Rice Bowl</p>
                </div>
                
                <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-lg p-3 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm font-medium text-amber-800">Maharashtra</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-4">Cotton Region</p>
                </div>
                
                <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-lg p-3 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-red-800">Karnataka</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-4">Coffee Gardens</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-10 mx-auto animate-slide-in-up motion-reduce:animate-none" style={{ animationDelay: '0.45s' }}>
              <Button 
                className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-lg hover:scale-105 transition-all px-6" 
                size="lg"
              >
                <svg
                  className="size-5 mr-2"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
                Start Analyzing Your Fields
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary text-secondary hover:text-secondary hover:bg-secondary/10 hover:shadow-md transition-all px-6"
              >
                <svg
                  className="size-5 mr-2"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right column: animated field visualization with 3D-like effect */}
          <div className="w-full flex items-center justify-center">
            <div className="relative w-full max-w-xl perspective-1000">
              {/* Rotating card effect with 3D transition */}
              <div className="relative w-full transform-style-3d hover:rotate-y-3 transition-all duration-700 cursor-pointer group">
                {/* Front face: Field visualization */}
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 transform-gpu">
                  {/* Overlapping images for depth effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10"></div>
                  
                  {/* Field visualization images with transition - using the specified field photo */}
                  <div className="relative">
                    <img
                      src="https://media.istockphoto.com/id/1414135590/photo/aerial-view-of-green-fields-of-traditional-agriculture.jpg?s=612x612&w=0&k=20&c=OIxDbUiO6gUzYD9T3pop08On-RJXbJK42vrN1Wkhe_Q="
                      alt="NDVI Field Visualization"
                      className={`h-full w-full object-cover group-hover:scale-105 transition-all duration-700 ease-out absolute inset-0 ${viewMode === 'ndvi' ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <img
                      src="https://media.istockphoto.com/id/1414135590/photo/aerial-view-of-green-fields-of-traditional-agriculture.jpg?s=612x612&w=0&k=20&c=OIxDbUiO6gUzYD9T3pop08On-RJXbJK42vrN1Wkhe_Q="
                      alt="Moisture Field Visualization" 
                      className={`h-full w-full object-cover group-hover:scale-105 transition-all duration-700 ease-out absolute inset-0 ${viewMode === 'moisture' ? 'opacity-100' : 'opacity-0'} brightness-110 saturate-[1.2] hue-rotate-[340deg]`}
                    />
                  </div>
                  
                  {/* Animated overlay patterns for data visualization */}
                  <div className={`absolute inset-0 ${viewMode === 'ndvi' ? 
                    'bg-gradient-to-r from-green-500/20 to-yellow-500/20' : 
                    'bg-gradient-to-r from-blue-500/20 to-cyan-500/20'} 
                    mix-blend-color-burn group-hover:mix-blend-soft-light transition-all duration-500`}></div>
                  
                  {/* Heat map overlay for data visualization */}
                  <div className={`absolute inset-0 bg-[url('/indian-pattern.png')] opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  {/* Grid overlay to simulate analysis grid */}
                  <div className="absolute inset-0 border border-white/10 bg-[linear-gradient(to_right,transparent_49.5%,rgba(255,255,255,0.15)_49.5%,rgba(255,255,255,0.15)_50.5%,transparent_50.5%),linear-gradient(to_bottom,transparent_49.5%,rgba(255,255,255,0.15)_49.5%,rgba(255,255,255,0.15)_50.5%,transparent_50.5%)] bg-[length:50px_50px] mix-blend-overlay opacity-30"></div>
                  
                  {/* Floating interactive elements with field image */}
                  <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md rounded-lg p-0 shadow-lg border border-primary/20 transform-gpu hover:scale-105 transition-transform overflow-hidden">
                    <div className="flex flex-col">
                      <img 
                        src="https://media.istockphoto.com/id/1414135590/photo/aerial-view-of-green-fields-of-traditional-agriculture.jpg?s=612x612&w=0&k=20&c=OIxDbUiO6gUzYD9T3pop08On-RJXbJK42vrN1Wkhe_Q=" 
                        alt="Live Field" 
                        className="w-full h-24 object-cover object-center"
                      />
                      <div className="p-2">
                        <div className="flex items-center gap-1.5">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
                          <span className="text-xs font-medium text-primary">Live Field Analysis</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground pl-4">Wheat Field, Sonipat District</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Weather station marker */}
                  <div className="absolute top-[25%] left-[10%] z-20 bg-white/70 backdrop-blur-sm rounded-full p-1.5 shadow-md border border-secondary/20 transform-gpu hover:scale-110 transition-transform group">
                    <svg className="h-3 w-3 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M2 12h10M12 2v10M21.5 21.5l-3-3M15.1 7.6l3 3M8.8 3.8l1.9 1.9M22 16a6 6 0 0 1-9.3 5"></path>
                    </svg>
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-medium text-white bg-black/60 px-1 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Weather Station</span>
                  </div>
                  
                  {/* View toggle buttons */}
                  <div className="absolute right-4 top-4 z-20 bg-white/80 backdrop-blur-md rounded-full p-1 shadow-md border border-secondary/20 flex gap-1">
                    <button 
                      onClick={() => setViewMode('ndvi')}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                        viewMode === 'ndvi' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-transparent text-green-800 hover:bg-green-100'
                      }`}
                    >
                      NDVI
                    </button>
                    <button 
                      onClick={() => setViewMode('moisture')}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                        viewMode === 'moisture' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-transparent text-blue-800 hover:bg-blue-100'
                      }`}
                    >
                      Moisture
                    </button>
                  </div>
                  
                  {/* Field data points - simulating real data points on the field */}
                  <div className={`absolute z-10 transition-opacity duration-500 ${viewMode === 'ndvi' ? 'opacity-100' : 'opacity-0'}`}>
                    {/* NDVI data points */}
                    <div className="absolute top-[20%] left-[30%] h-4 w-4 rounded-full bg-green-500/80 ring-2 ring-white/50 shadow-lg animate-pulse"></div>
                    <div className="absolute top-[35%] left-[65%] h-3 w-3 rounded-full bg-yellow-500/80 ring-2 ring-white/50 shadow-lg"></div>
                    <div className="absolute top-[60%] left-[40%] h-4 w-4 rounded-full bg-green-400/80 ring-2 ring-white/50 shadow-lg animate-pulse-slow"></div>
                    <div className="absolute top-[75%] left-[70%] h-3 w-3 rounded-full bg-green-600/80 ring-2 ring-white/50 shadow-lg"></div>
                  </div>

                  <div className={`absolute z-10 transition-opacity duration-500 ${viewMode === 'moisture' ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Moisture data points */}
                    <div className="absolute top-[25%] left-[35%] h-4 w-4 rounded-full bg-blue-500/80 ring-2 ring-white/50 shadow-lg animate-pulse"></div>
                    <div className="absolute top-[40%] left-[60%] h-3 w-3 rounded-full bg-blue-300/80 ring-2 ring-white/50 shadow-lg"></div>
                    <div className="absolute top-[65%] left-[45%] h-4 w-4 rounded-full bg-blue-400/80 ring-2 ring-white/50 shadow-lg animate-pulse-slow"></div>
                    <div className="absolute top-[70%] left-[75%] h-3 w-3 rounded-full bg-blue-600/80 ring-2 ring-white/50 shadow-lg"></div>
                  </div>

                  {/* Hover animation hint */}
                  <div className="absolute right-4 top-16 z-20 bg-white/80 backdrop-blur-md rounded-full p-2 shadow-md border border-secondary/20 opacity-70 hover:opacity-100 transition-opacity group-hover:animate-bounce">
                    <svg className="h-4 w-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 16l5-5 5 5"></path>
                      <path d="M7 10l5-5 5 5"></path>
                    </svg>
                  </div>
                  
                  {/* Wheat field image section - full width block */}
                  <div className="absolute bottom-[140px] inset-x-0 h-[240px] z-10 overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="https://media.istockphoto.com/id/1414135590/photo/aerial-view-of-green-fields-of-traditional-agriculture.jpg?s=612x612&w=0&k=20&c=OIxDbUiO6gUzYD9T3pop08On-RJXbJK42vrN1Wkhe_Q=" 
                      alt="Wheat Field Panorama" 
                      className="w-full h-full object-cover transform-gpu scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-5 flex items-center gap-2">
                      <div className="bg-white/20 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/30">
                        <span className="text-white text-sm font-medium">Wheat Field #142</span>
                      </div>
                      <div className="bg-green-500/80 backdrop-blur-sm rounded-full px-2 py-0.5">
                        <span className="text-white text-xs font-medium">Active Monitoring</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main dashboard panel with glassmorphism effect */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-black/80 backdrop-blur-sm z-20 transform-gpu translate-y-0 group-hover:-translate-y-2 transition-transform rounded-b-xl">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-white font-bold text-lg">Field Analysis</h3>
                      <span className={`${viewMode === 'ndvi' ? 'bg-green-500/90' : 'bg-blue-500/90'} text-white text-xs px-2 py-1 rounded-full`}>
                        {viewMode === 'ndvi' ? 'Healthy' : `${metrics.moisture}% Moisture`}
                      </span>
                    </div>
                    
                    {/* Main metrics display with animated bars - conditionally rendered based on view mode */}
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="space-y-1.5">
                        {viewMode === 'moisture' ? (
                          <>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <Droplets className="h-4 w-4 text-blue-300" />
                                <span className="text-xs font-medium text-blue-100">Moisture</span>
                              </div>
                              <span className="text-xs font-medium text-white">{metrics.moisture}%</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-700 ${
                                  metrics.moisture < 40 ? 'bg-gradient-to-r from-red-500 to-red-400' : 
                                  metrics.moisture < 55 ? 'bg-gradient-to-r from-amber-500 to-amber-400' : 
                                  'bg-gradient-to-r from-emerald-500 to-emerald-400'
                                }`}
                                style={{ width: `${metrics.moisture}%` }}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <svg className="h-4 w-4 text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M2 22l2-2m-2 2l2 2m-2-2h10a8 8 0 0 0 8-8V7"/>
                                  <path d="M19 15c1.5-1.5 2-4 2-6"/>
                                  <path d="M19 11c.67-.67 1-1.5 1-2.5S19.67 6.67 19 6"/>
                                </svg>
                                <span className="text-xs font-medium text-green-100">NDVI</span>
                              </div>
                              <span className="text-xs font-medium text-white">0.78</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-green-500 to-green-400"
                                style={{ width: "78%" }}
                              />
                            </div>
                          </>
                        )}
                      </div>
                      
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <svg className="h-3.5 w-3.5 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="5" />
                              <path d="M12 1v2" />
                              <path d="M12 21v2" />
                              <path d="M4.22 4.22l1.42 1.42" />
                              <path d="M18.36 18.36l1.42 1.42" />
                              <path d="M1 12h2" />
                              <path d="M21 12h2" />
                              <path d="M4.22 19.78l1.42-1.42" />
                              <path d="M18.36 5.64l1.42-1.42" />
                            </svg>
                            <span className="text-xs font-medium text-amber-100">Conditions</span>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <div className="inline-flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5 text-[10px] text-white">
                            <Thermometer className="h-3 w-3 text-amber-300" />{metrics.temp}°C
                          </div>
                          <div className="inline-flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5 text-[10px] text-white">
                            <CloudRain className="h-3 w-3 text-blue-300" />
                            {typeof metrics.rainInHrs === 'number' ? `${metrics.rainInHrs}h` : 'No rain'}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Soil health indicators with animated glow - with conditional rendering based on view */}
                    <div className="flex justify-between items-center gap-2">
                      <div className={`px-3 py-2 bg-white/15 backdrop-blur-sm rounded-xl flex-1 text-center relative overflow-hidden ${
                        viewMode === 'moisture' ? 
                          (irrigationAdvice.tone === 'danger' ? 'border-l-2 border-red-500' : 
                          irrigationAdvice.tone === 'warn' ? 'border-l-2 border-amber-500' : 
                          'border-l-2 border-emerald-500') : 
                          'border-l-2 border-green-500'
                      }`}>
                        <div className={`absolute inset-0 ${
                          viewMode === 'moisture' ?
                            (irrigationAdvice.tone === 'danger' ? 'bg-red-500/10 animate-pulse-slow' : 
                            irrigationAdvice.tone === 'warn' ? 'bg-amber-500/10 animate-pulse-slow' : 
                            'bg-emerald-500/10') :
                            'bg-green-500/10 animate-pulse-slow'
                        }`}></div>
                        <span className="text-[10px] uppercase tracking-wider text-white/80 block">
                          {viewMode === 'moisture' ? 'Next Irrigation' : 'Crop Health'}
                        </span>
                        <span className="text-sm font-bold text-white block">
                          {viewMode === 'moisture' ? irrigationAdvice.text : 'Excellent (0.78 NDVI)'}
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        {viewMode === 'moisture' ? (
                          <>
                            <div className="bg-white/15 rounded-xl h-12 w-12 flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                              <span className="text-xs font-medium text-white/80">NPK</span>
                              <div className="flex gap-1 items-center mt-1">
                                <span className="text-[10px] font-bold text-green-300">{metrics.n}</span>
                                <span className="text-[10px] font-bold text-blue-300">{metrics.p}</span>
                                <span className="text-[10px] font-bold text-purple-300">{metrics.k}</span>
                              </div>
                            </div>
                            <div className="bg-white/15 rounded-xl h-12 w-12 flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                              <span className="text-xs font-medium text-white/80">pH</span>
                              <span className="text-sm font-bold text-white">{metrics.ph.toFixed(1)}</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-white/15 rounded-xl h-12 w-12 flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                              <span className="text-xs font-medium text-white/80">LAI</span>
                              <span className="text-sm font-bold text-white">3.7</span>
                            </div>
                            <div className="bg-white/15 rounded-xl h-12 w-12 flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                              <span className="text-xs font-medium text-white/80">Stress</span>
                              <span className="text-sm font-bold text-green-300">Low</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
