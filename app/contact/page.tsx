import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Users } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Monday to Friday, 9 AM to 6 PM",
  contact: "+91 9820252026",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Available 24/7, get instant replies",
  contact: "+91 9820252026",
      color: "from-green-600 to-green-700",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Response guaranteed within 24 hours",
  contact: "support@myagriscore.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other farmers and learn",
  contact: "community.myagriscore.com",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  // Removed legacy offices section; details are now consolidated in footer and contact methods

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
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our team is ready to help you. Contact us for any questions or assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ways to Connect
              </span>
            </h2>
            <p className="text-muted-foreground">Choose the method that's convenient for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={index}
                  className={`p-6 text-center hover:scale-105 transition-all duration-300 animate-slide-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center animate-float`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  {method.contact.includes("myagriscore.com") ? (
                    <a
                      href={`https://${method.contact}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium underline underline-offset-4"
                    >
                      {method.contact}
                    </a>
                  ) : (
                    <p className="text-primary font-medium">{method.contact}</p>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 animate-slide-in-up lg:col-span-2">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-foreground">Send Message</CardTitle>
                <p className="text-muted-foreground">We'll respond to you within 24 hours</p>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                      <Input placeholder="Your full name" className="border-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <Input placeholder="+91 9820252026" className="border-primary/20 focus:border-primary" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <Input placeholder="Subject of your message" className="border-primary/20 focus:border-primary" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <Textarea
                      placeholder="Write your message here..."
                      rows={5}
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How easy is it to use AgriScore?",
                a: "AgriScore is designed specifically for Indian farmers. It's very simple and available in multiple languages.",
              },
              {
                q: "Do I need technical knowledge?",
                a: "Not at all! AgriScore has a very simple interface and our team provides complete support.",
              },
              {
                q: "How much does sensor installation cost?",
                a: "We have different packages for various budgets. Contact us for a free consultation.",
              },
              {
                q: "Is my data secure?",
                a: "Yes, your data is completely secure. We follow the highest security standards.",
              },
            ].map((faq, index) => (
              <Card key={index} className={`p-6 animate-slide-in-up animate-delay-${(index + 1) * 100}`}>
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-slide-in-up">Still Have Questions?</h2>
          <p className="text-xl text-white/90 mb-8 animate-slide-in-up animate-delay-100">
            Our team is ready to help you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animate-delay-200">
            <a href="tel:+919820252026" aria-label="Call AgriScore support">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
            <a
              href="https://wa.me/919820252026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with AgriScore on WhatsApp"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
