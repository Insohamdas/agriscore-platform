"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Monsoon 2024: Smart Irrigation Strategy",
      excerpt: "How to achieve maximum production while saving water this monsoon. Learn about the latest techniques.",
      author: "Dr. Raj Patel",
      date: "June 15, 2024",
      category: "Irrigation Tech",
      readTime: "5 min read",
  image: "https://www.simplegreenenergy.org/wp-content/uploads/2024/07/51-1024x576.png",
      featured: true,
    },
    {
      title: "AI Crop Disease Detection: New Technology",
      excerpt: "Early identification and treatment methods for crop diseases using artificial intelligence.",
      author: "Priya Sharma",
      date: "June 10, 2024",
      category: "AI Technology",
      readTime: "7 min read",
  image: "https://eu-images.contentstack.com/v3/assets/bltdd43779342bd9107/bltc5725cd57c487abb/652988ce607d2d834b4f68fc/2-pics-stitched_-_770x400.jpg",
    },
    {
      title: "Using IoT Sensors in Organic Farming",
      excerpt: "How IoT sensors improve soil quality and crop health in organic farming.",
      author: "Amit Kumar",
      date: "June 5, 2024",
      category: "Organic Farming",
      readTime: "6 min read",
  image: "https://en-media.thebetterindia.com/uploads/2014/02/11797705875_e1937a2f89_z.jpg",
    },
    {
      title: "Crop Monitoring with Drone Technology",
      excerpt: "How to monitor large farms and quickly identify problems using drones.",
      author: "Sunita Devi",
      date: "June 1, 2024",
      category: "Drone Tech",
      readTime: "4 min read",
  image: "https://images.squarespace-cdn.com/content/v1/57462f541bbee075320514a9/1540493964789-SFXM04IFO0BFQ9YSO2T8/shutterstock_1162991032.jpg",
    },
    {
      title: "Soil Testing: Farming in Digital Age",
      excerpt: "How to achieve better crop production with modern soil testing techniques.",
      author: "Dr. Raj Patel",
      date: "May 28, 2024",
      category: "Soil Science",
      readTime: "8 min read",
  image: "https://www.bitsathy.ac.in/wp-content/uploads/SMART-farming-TWO-iot-1.png",
    },
    {
      title: "Climate Change and Smart Farming",
      excerpt: "How smart farming techniques can help farmers in changing climate conditions.",
      author: "Priya Sharma",
      date: "May 25, 2024",
      category: "Climate",
      readTime: "10 min read",
  image: "https://cdn.catf.us/wp-content/uploads/2024/08/19125749/45Z-Ag2-1400x774.jpg",
    },
  ]

  const categories = [
    "All",
    "Irrigation Tech",
    "AI Technology",
    "Organic Farming",
    "Drone Tech",
    "Soil Science",
    "Climate",
  ]

  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return blogPosts
    return blogPosts.filter((p) => p.category === selectedCategory)
  }, [selectedCategory, blogPosts])

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
                Agriculture Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Latest insights and expert advice on smart farming, new technologies, and agricultural innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b" aria-label="Blog categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 justify-center overflow-x-auto whitespace-nowrap pb-1">
            {categories.map((category, index) => {
              const isActive = selectedCategory === category
              return (
                <Button
                  key={index}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  className={`${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "border-border text-foreground/70 bg-white hover:bg-accent/40"
                  } rounded-full ring-1 ring-border transition-all duration-300`}
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isActive}
                >
                  {category}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {(() => {
        const post = filteredPosts.find((p) => p.featured)
        if (!post) return null
        return (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-2xl border-0 shadow-2xl animate-slide-in-up">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    if (target.src !== window.location.origin + "/placeholder.jpg") {
                      target.src = "/placeholder.jpg"
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="relative z-10 p-6 sm:p-10 lg:p-14 flex flex-col justify-end min-h-[22rem] lg:min-h-[28rem]">
                  <div className="mb-4">
                    <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 drop-shadow-md">
                    {post.title}
                  </h2>
                  <p className="text-white/90 max-w-3xl mb-6 drop-shadow">{post.excerpt}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
                      {post.readTime}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                      <a href="#" aria-label={`Read more: ${post.title}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })()}

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-2xl ring-1 ring-border hover:shadow-lg transition-all duration-300 animate-slide-in-up animate-delay-${(index + 1) * 100} cursor-pointer`}
                >
                  <a href="#" aria-label={`Open post: ${post.title}`}>
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        if (target.src !== window.location.origin + "/placeholder.jpg") {
                          target.src = "/placeholder.jpg"
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-primary px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold">
                            {post.author.split(" ").map((n) => n[0]).join("")}
                          </span>
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full border-border text-foreground hover:bg-accent/50">
                        Read More
                      </Button>
                    </div>
                  </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter - enhanced UI */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-white/95 backdrop-blur border-white/40 shadow-2xl rounded-xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">Subscribe to our newsletter</h2>
              <p className="text-muted-foreground">Get the latest farming tips and agri-tech insights every week.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <Button type="submit" className="bg-gradient-to-r from-primary to-secondary text-white">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3 text-center">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
