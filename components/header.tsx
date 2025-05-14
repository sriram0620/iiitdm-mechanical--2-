"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Set initial scroll state for non-home pages
    if (!isHomePage) {
      handleScroll() 
    }
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isHomePage])

  const headerClasses = `sticky top-0 z-50 w-full transition-all duration-300 ${
    isHomePage
      ? isScrolled
        ? "bg-white border-b shadow-sm"
        : "bg-transparent border-b border-transparent"
      : "bg-white border-b shadow-sm"
  }`

  const linkColor = isHomePage && !isScrolled ? "text-white" : "text-primary"
  const linkHoverColor = isHomePage && !isScrolled ? "hover:text-white/80" : "hover:text-secondary"
  const titleSubColor = isHomePage && !isScrolled ? "text-white/80" : "text-muted-foreground"
  const hamburgerColor = isHomePage && !isScrolled ? "text-white hover:bg-white/20" : "text-primary hover:bg-primary/10"

  return (
    <header className={headerClasses}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`md:hidden ${hamburgerColor}`}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className={`text-lg font-semibold ${linkColor} ${linkHoverColor} transition-colors`}>
                  Home
                </Link>

                {/* Mobile Academics Dropdown */}
                <div className="space-y-2">
                  <p className={`text-lg font-semibold ${linkColor}`}>Academics</p>
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                    <Link
                      href="/academics/programs"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Academic Programs
                    </Link>
                    <Link
                      href="/curriculum"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Curriculum
                    </Link>
                  </div>
                </div>

                {/* Mobile Divisions Dropdown */}
                <div className="space-y-2">
                  <p className={`text-lg font-semibold ${linkColor}`}>Divisions</p>
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                    <Link
                      href="/divisions/design"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Design Division
                    </Link>
                    <Link
                      href="/divisions/smart-manufacturing"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Smart Manufacturing Division
                    </Link>
                    <Link
                      href="/divisions/thermal-engineering"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Thermal Engineering Division
                    </Link>
                  </div>
                </div>

                {/* Mobile Research Dropdown */}
                <div className="space-y-2">
                  <p className={`text-lg font-semibold ${linkColor}`}>Research</p>
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                    <Link
                      href="/research/graduate-research"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Graduate Research
                    </Link>
                    <Link
                      href="/research/publications"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Research Publications
                    </Link>
                    <Link
                      href="/research/sponsored-projects"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Sponsored Projects
                    </Link>
                  </div>
                </div>

                {/* Mobile People Dropdown */}
                <div className="space-y-2">
                  <p className={`text-lg font-semibold ${linkColor}`}>People</p>
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                    <Link
                      href="/people/faculty"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Faculty
                    </Link>
                    <Link
                      href="/people/staff"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Staff
                    </Link>
                    <Link
                      href="/people/research-scholars"
                      className={`block text-base ${linkColor}/80 ${linkHoverColor} transition-colors`}
                    >
                      Research Scholars
                    </Link>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`text-lg font-semibold ${linkColor} ${linkHoverColor} transition-colors`}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">ME</div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xs font-medium ${titleSubColor} transition-colors`}>
                IIITDM Kancheepuram
              </span>
              <span className={`text-sm font-bold ${linkColor} transition-colors`}>
                Department of Mechanical Engineering
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${linkColor} ${linkHoverColor} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors`}
          >
            Home
          </Link>

          {/* Desktop Academics Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 text-sm font-medium ${linkColor} ${linkHoverColor} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors`}
              >
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
              <button
                className={`flex items-center gap-1 text-sm font-medium ${linkColor} ${linkHoverColor} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors`}
              >
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
              <button
                className={`flex items-center gap-1 text-sm font-medium ${linkColor} ${linkHoverColor} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors`}
              >
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
                <Link href="/research/sponsored-projects" className="cursor-pointer">
                  Sponsored Projects
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Desktop People Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 text-sm font-medium ${linkColor} ${linkHoverColor} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors`}
              >
                People <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/people/faculty" className="cursor-pointer">
                  Faculty
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/people/staff" className="cursor-pointer">
                  Staff
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/people/research-scholars" className="cursor-pointer">
                  Research Scholars
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/contact"
            className={`text-sm font-medium ${linkColor} ${linkHoverColor} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
