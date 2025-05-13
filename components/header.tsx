"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300 bg-white border-b shadow-sm"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-primary hover:bg-primary/10"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold text-primary hover:text-secondary transition-colors">
                  Home
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

                {/* Mobile People Dropdown */}
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">People</p>
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                    <Link
                      href="/people/faculty"
                      className="block text-base text-primary/80 hover:text-secondary transition-colors"
                    >
                      Faculty
                    </Link>
                    <Link
                      href="/people/staff"
                      className="block text-base text-primary/80 hover:text-secondary transition-colors"
                    >
                      Staff
                    </Link>
                    <Link
                      href="/people/research-scholars"
                      className="block text-base text-primary/80 hover:text-secondary transition-colors"
                    >
                      Research Scholars
                    </Link>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="text-lg font-semibold text-primary hover:text-secondary transition-colors"
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
              <span className="text-xs font-medium text-muted-foreground transition-colors">
                IIITDM Kancheepuram
              </span>
              <span className="text-sm font-bold text-primary transition-colors">
                Department of Mechanical Engineering
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors"
          >
            Home
          </Link>

          {/* Desktop Academics Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors"
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
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors"
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
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors"
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
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors"
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
            className="text-sm font-medium text-primary hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
