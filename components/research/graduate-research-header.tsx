"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown, Search, BookOpen, GraduationCap, School, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function GraduateResearchHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("research-areas")

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
    <>
      {/* Innovative Header */}
      <header className="relative z-50">
        {/* Top navigation bar */}
        <div className="bg-primary text-white py-2">
          <div className="container flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-white">
                <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-sm">
                  ME
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xs font-medium text-white/80">IIITDM Kancheepuram</span>
                <span className="block text-sm font-bold">Department of Mechanical Engineering</span>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                Intranet
              </Button>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/20">
                Email Login
              </Button>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className={`bg-white border-b transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-none"}`}>
          <div className="container flex h-14 items-center justify-between">
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    <Link
                      href="/"
                      className="text-lg font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="#about"
                      className="text-lg font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      About
                    </Link>

                    {/* Mobile Academics Dropdown */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-primary">Academics</p>
                      <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                        <Link
                          href="/academics/programs"
                          className="block text-base text-primary/80 hover:text-secondary transition-colors"
                        >
                          Academic Programs
                        </Link>
                        <Link
                          href="/curriculum"
                          className="block text-base text-primary/80 hover:text-secondary transition-colors"
                        >
                          Curriculum
                        </Link>
                      </div>
                    </div>

                    {/* Mobile Divisions Dropdown */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-primary">Divisions</p>
                      <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                        <Link
                          href="/divisions/design"
                          className="block text-base text-primary/80 hover:text-secondary transition-colors"
                        >
                          Design Division
                        </Link>
                        <Link
                          href="/divisions/smart-manufacturing"
                          className="block text-base text-primary/80 hover:text-secondary transition-colors"
                        >
                          Smart Manufacturing Division
                        </Link>
                        <Link
                          href="/divisions/thermal-engineering"
                          className="block text-base text-primary/80 hover:text-secondary transition-colors"
                        >
                          Thermal Engineering Division
                        </Link>
                      </div>
                    </div>

                    {/* Mobile Research Dropdown */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-primary">Research</p>
                      <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                        <Link
                          href="/research/graduate-research"
                          className="block text-base text-primary/80 hover:text-secondary transition-colors"
                        >
                          Graduate Research
                        </Link>
                        <Link
                          href="/research/publications"
                          className="block text-base text-primary/80 hover:text-secondary transition-colors"
                        >
                          Research Publications
                        </Link>
                        <Link
                          href="/research/sponsored-projects"
                          className="block text-base text-primary/80 hover:text-secondary transition-colors"
                        >
                          Sponsored Projects
                        </Link>
                      </div>
                    </div>

                    <Link
                      href="#people"
                      className="text-lg font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      People
                    </Link>
                    <Link
                      href="#contact"
                      className="text-lg font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <nav className="hidden md:flex items-center gap-6 ml-6">
                <Link
                  href="/"
                  className="text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                >
                  About
                </Link>

                {/* Desktop Academics Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full">
                      Academics <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/academics/programs" className="cursor-pointer">
                        Academic Programs
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/curriculum" className="cursor-pointer">
                        Curriculum
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Desktop Divisions Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full">
                      Divisions <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-64">
                    <DropdownMenuItem asChild>
                      <Link href="/divisions/design" className="cursor-pointer">
                        Design Division
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/divisions/smart-manufacturing" className="cursor-pointer">
                        Smart Manufacturing Division
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/divisions/thermal-engineering" className="cursor-pointer">
                        Thermal Engineering Division
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Desktop Research Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-secondary/80 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-secondary after:transition-all">
                      Research <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-64">
                    <DropdownMenuItem asChild>
                      <Link
                        href="/research/graduate-research"
                        className="cursor-pointer bg-secondary/10 text-secondary"
                      >
                        Graduate Research
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/research/publications" className="cursor-pointer">
                        Research Publications
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/research/sponsored-projects" className="cursor-pointer">
                        Sponsored Projects
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  href="#people"
                  className="text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                >
                  People
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-primary hover:text-secondary">
                <Search className="h-4 w-4 mr-1" />
                Search
              </Button>
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        {/* Hero section with breadcrumbs and title */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-white/5 animate-pulse-slow"></div>
              <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-white/5 animate-pulse-slower"></div>
              <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-white/5 animate-pulse-slow"></div>
            </div>
            <div className="absolute top-1/4 left-1/4 text-white/5 animate-float-slow">
              <GraduationCap size={120} />
            </div>
            <div className="absolute bottom-1/4 right-1/3 text-white/5 animate-float-medium">
              <BookOpen size={80} />
            </div>
            <div className="absolute top-1/3 right-1/4 text-white/5 animate-float-fast">
              <School size={60} />
            </div>
          </div>

          <div className="container relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center text-white/70 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="#research" className="hover:text-white transition-colors">
                Research
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-white font-medium">Graduate Research</span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Graduate Research</h1>
                <p className="text-white/80 max-w-2xl">
                  Explore our graduate research programs, research areas, and PhD opportunities in the Department of
                  Mechanical Engineering at IIITDM Kancheepuram.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => scrollToSection("research-areas")}
                  className={`rounded-full transition-all ${
                    activeSection === "research-areas"
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Research Areas
                </Button>
                <Button
                  onClick={() => scrollToSection("phd-program")}
                  className={`rounded-full transition-all ${
                    activeSection === "phd-program"
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  PhD Program
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
