"use client"

import { useState, useEffect } from "react"
import { Search, GraduationCap, Users, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ResearchScholarsHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-secondary/10 to-primary/10 blur-3xl"></div>

        {/* Animated dots */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-primary"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.25,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="relative inline-block">
              <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
                Research Scholars
              </h1>
              <div className="mt-2 h-1.5 w-24 rounded-full bg-secondary"></div>
              <div className="absolute -bottom-1 left-12 h-1.5 w-12 rounded-full bg-primary/50 blur-sm"></div>
            </div>

            <p className="mt-6 text-lg text-muted-foreground">
              Meet our dedicated research scholars who are pushing the boundaries of mechanical engineering through
              innovative research and development.
            </p>

            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name or roll number..."
                  className="pl-10 pr-4 w-full sm:w-[300px]"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">Find Scholars</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="group rounded-xl bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary">40+</h3>
              <p className="text-sm text-muted-foreground">Active Research Scholars</p>
            </div>

            <div className="group rounded-xl bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary">5+</h3>
              <p className="text-sm text-muted-foreground">Research Batches</p>
            </div>

            <div className="group rounded-xl bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary">100+</h3>
              <p className="text-sm text-muted-foreground">Research Publications</p>
            </div>

            <div className="group rounded-xl bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary">15+</h3>
              <p className="text-sm text-muted-foreground">Research Awards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block h-12 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,141.14c67.64,0,133.76-18.59,206.53-37.5Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
