import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Target, Award, Heart, Leaf, TrendingUp } from "lucide-react"

export default function AboutPage() {
  // Removed Our Team section and data as requested

  const values = [
    {
      icon: Heart,
      title: "Farmer-Centric",
      description: "Every decision is made keeping farmers' needs at the center",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description: "Environment-friendly solutions that preserve farming for future generations",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "Using cutting-edge technology to make farming easier and more profitable",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong network of farmers where everyone learns from each other",
      color: "from-purple-500 to-indigo-500",
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
                About Us
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AgriScore started with a simple belief - using technology to improve the lives of Indian farmers and
              transform agriculture through data-driven insights.
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Empowering farmers with smart solutions for sustainable and profitable farming.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-slide-in-up hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Empowering every Indian farmer with data-driven decision making tools to increase productivity, reduce
                costs, and maximize profits through smart agricultural practices.
              </p>
              <p className="text-sm text-muted-foreground/80">
                Making advanced farming technology accessible and affordable for farmers of all scales.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20 animate-slide-in-up animate-delay-100 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-secondary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                To become India's most trusted smart farming platform by 2030, helping double the income of 1 million
                farmers through sustainable agricultural practices.
              </p>
              <p className="text-sm text-muted-foreground/80">
                Leading the digital transformation of Indian agriculture for a prosperous farming future.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-muted-foreground">The principles that drive our work forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className={`p-6 text-center hover:scale-105 transition-all duration-300 animate-slide-in-up animate-delay-${(index + 1) * 100} hover:shadow-lg`}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center animate-float shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

  {/* Our Team section removed */}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-slide-in-up">Join Us</h2>
          <p className="text-xl text-white/90 mb-8 animate-slide-in-up animate-delay-100">
            Let's build the future of Indian agriculture together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animate-delay-200">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Join Our Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent hover:scale-105 transition-all duration-300"
            >
              View Careers
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
