"use client"

import { useEffect, useState } from "react"
import { Book, ChevronRight, GraduationCap, ScrollText, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function CurriculumHero() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("undergraduate")

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
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary z-0">
        {/* Animated circles */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/5 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary/10 animate-pulse-slower"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-white/5 animate-pulse-slow"></div>

        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 text-white/10 animate-float-slow">
          <GraduationCap size={80} />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-white/10 animate-float-medium">
          <Book size={60} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-white/10 animate-float-fast">
          <ScrollText size={40} />
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
          <Link href="#academics" className="hover:text-white transition-colors">
            Academics
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-white font-medium">Curriculum</span>
        </div>

        <div className="max-w-4xl">
          <Badge className="mb-4 bg-white text-primary hover:bg-white/90 px-3 py-1 text-sm">Academic Excellence</Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Curriculum <span className="text-secondary">& Syllabus</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            Explore our comprehensive curriculum designed to prepare students for the challenges of modern engineering
            and innovation. Our programs blend theoretical knowledge with practical skills.
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl mb-12">
            <Input
              placeholder="Search programs, courses, or specializations..."
              className="pl-12 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
          </div>

          {/* Quick navigation */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              onClick={() => scrollToSection("undergraduate")}
              className={`rounded-full transition-all ${
                activeSection === "undergraduate"
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Undergraduate Programs
            </Button>

            <Button
              onClick={() => scrollToSection("dual-degree")}
              className={`rounded-full transition-all ${
                activeSection === "dual-degree"
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Dual Degree Programs
            </Button>

            <Button
              onClick={() => scrollToSection("postgraduate")}
              className={`rounded-full transition-all ${
                activeSection === "postgraduate"
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Book className="h-5 w-5 mr-2" />
              Postgraduate Programs
            </Button>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 flex gap-4 max-w-lg">
          {[
            { number: "15+", label: "Programs" },
            { number: "200+", label: "Courses" },
            { number: "100%", label: "Placement" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 w-28 h-28 flex flex-col items-center justify-center stats-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-primary stats-number">{stat.number}</div>
              <div className="text-sm text-muted-foreground stats-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky navigation that appears on scroll */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-white shadow-md transition-all duration-300 ${
          scrolled ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
        }`}
      >
        <div className="container py-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-primary">Curriculum & Syllabus</h2>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("undergraduate")}
              className={activeSection === "undergraduate" ? "text-secondary" : "text-primary"}
            >
              Undergraduate
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("dual-degree")}
              className={activeSection === "dual-degree" ? "text-secondary" : "text-primary"}
            >
              Dual Degree
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("postgraduate")}
              className={activeSection === "postgraduate" ? "text-secondary" : "text-primary"}
            >
              Postgraduate
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
