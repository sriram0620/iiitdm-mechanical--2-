"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown, Search, ChevronRight, Briefcase, BarChart4, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function SponsoredProjectsHeader() {
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
    <>
      {/* Innovative Header */}
      <header className="relative z-50">
        {/* Main navigation */}
        <div className={`bg-white border-b transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-none"}`}>
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
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
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                    ME
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-muted-foreground">IIITDM Kancheepuram</span>
                  <span className="text-sm font-bold text-primary">Department of Mechanical Engineering</span>
                </div>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
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
                    <Link href="/research/graduate-research" className="cursor-pointer">
                      Graduate Research
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/research/publications" className="cursor-pointer">
                      Research Publications
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/research/sponsored-projects" className="cursor-pointer bg-secondary/10 text-secondary">
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

        {/* Hero section with hexagonal pattern */}
        <div className="relative bg-primary overflow-hidden">
          {/* Simple gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/100"></div>

          {/* Animated floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-float-slow"></div>
            <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white/10 rounded-lg rotate-12 animate-float-medium"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-lg rotate-45 animate-float-fast"></div>

            <div className="absolute top-1/4 right-1/4 text-white/10 animate-float-slow">
              <Briefcase size={80} />
            </div>
            <div className="absolute bottom-1/4 left-1/3 text-white/10 animate-float-medium">
              <BarChart4 size={60} />
            </div>
            <div className="absolute top-2/3 right-1/3 text-white/10 animate-float-fast">
              <DollarSign size={40} />
            </div>
          </div>

          {/* Content */}
          <div className="container relative z-10 py-16">
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
              <span className="text-white font-medium">Sponsored Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-white text-primary hover:bg-white/90 px-3 py-1 text-sm">
                  Research Funding
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sponsored Projects</h1>
                <p className="text-white/80 max-w-xl">
                  Explore our portfolio of externally funded research projects that drive innovation and address
                  real-world challenges through collaboration with government agencies, industry partners, and research
                  institutions.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">9+</span>
                    <span className="text-white/80 text-sm">Active Projects</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">₹270L+</span>
                    <span className="text-white/80 text-sm">Total Funding</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">5+</span>
                    <span className="text-white/80 text-sm">Funding Agencies</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Research Impact</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Our sponsored projects have led to significant advancements in various domains of mechanical
                    engineering, resulting in publications, patents, and real-world applications.
                  </p>
                  <Button className="bg-white text-primary hover:bg-white/90">Explore Projects</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block h-16 w-full"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </>
  )
}
