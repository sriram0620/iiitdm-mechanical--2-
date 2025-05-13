"use client"

import { useEffect, useState } from "react"
import { ChevronRight, Cpu, Factory, Layers, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SmartManufacturingHero() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary z-0">
        {/* Animated circles */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/5 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/10 animate-pulse-slower"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-white/5 animate-pulse-slow"></div>

        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 text-white/10 animate-float-slow">
          <Factory size={80} />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-white/10 animate-float-medium">
          <Settings size={60} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-white/10 animate-float-fast">
          <Cpu size={40} />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-32">
        {/* Breadcrumbs */}
        <div className="flex items-center text-white/70 text-sm mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="#divisions" className="hover:text-white transition-colors">
            Divisions
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-white font-medium">Smart Manufacturing Division</span>
        </div>

        <div className="max-w-4xl">
          <Badge className="mb-4 bg-white text-secondary hover:bg-white/90 px-3 py-1 text-sm">Division</Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Smart <span className="text-primary">Manufacturing</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            Pioneering the future of manufacturing with advanced technologies, intelligent systems, and innovative
            approaches to create the factories of tomorrow.
          </p>

          {/* Quick navigation */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              onClick={() => scrollToSection("overview")}
              className={`rounded-full transition-all ${
                activeSection === "overview"
                  ? "bg-white text-secondary hover:bg-white/90"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Layers className="h-5 w-5 mr-2" />
              Overview
            </Button>

            <Button
              onClick={() => scrollToSection("technology")}
              className={`rounded-full transition-all ${
                activeSection === "technology"
                  ? "bg-white text-secondary hover:bg-white/90"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Cpu className="h-5 w-5 mr-2" />
              Technology
            </Button>

            <Button
              onClick={() => scrollToSection("programs")}
              className={`rounded-full transition-all ${
                activeSection === "programs"
                  ? "bg-white text-secondary hover:bg-white/90"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Factory className="h-5 w-5 mr-2" />
              Programs & Events
            </Button>
          </div>
        </div>

        {/* Floating design elements */}
        <div className="absolute bottom-0 right-0 transform translate-y-1/2">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 border-4 border-white/20 rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-primary/40 rounded-full"></div>
            <div className="w-60 h-60 bg-gradient-to-br from-white/10 to-primary/20 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center">
              <Settings className="h-24 w-24 text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky navigation that appears on scroll */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-white shadow-md transition-all duration-300 ${
          scrolled ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
        }`}
      >
        <div className="container py-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-secondary">Smart Manufacturing Division</h2>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("overview")}
              className={activeSection === "overview" ? "text-secondary" : "text-primary"}
            >
              Overview
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("technology")}
              className={activeSection === "technology" ? "text-secondary" : "text-primary"}
            >
              Technology
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("programs")}
              className={activeSection === "programs" ? "text-secondary" : "text-primary"}
            >
              Programs & Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
