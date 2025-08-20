import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" },
    ],
    Support: [
      { name: "Help Center", href: "/support" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Status", href: "/status" },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/indian-pattern.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                AgriScore
              </span>
            </Link>

            <div className="space-y-2">
              <p className="text-green-100 leading-relaxed">
                Grow smart. Earn more. Transform your farming with data-driven insights that turn soil, weather, and
                crop signals into profitable actions.
              </p>
              <p className="text-green-200 text-sm">
                Empowering Indian farmers with cutting-edge agricultural technology.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-green-200 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9820252026</span>
              </div>
              <div className="flex items-center space-x-3 text-green-200 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@myagriscore.com</span>
              </div>
              <div className="flex items-center space-x-3 text-green-200 hover:text-white transition-colors">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Kolkata, West Bengal, India</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-green-200 hover:text-white transition-all duration-300 text-sm group hover:translate-x-1"
                    >
                      <span className="group-hover:text-secondary transition-colors">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-green-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-green-200 text-sm">© 2025 AgriScore. All rights reserved.</p>
              <p className="text-green-300 text-xs">Made in India with ❤️ for Indian farmers</p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 text-green-200 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>By farmers, for farmers</span>
              </div>
              <div className="text-green-300 text-xs">🇮🇳 Proudly serving Indian agriculture</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
