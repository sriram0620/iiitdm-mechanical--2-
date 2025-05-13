"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const images = [
    "/placeholder.svg?height=600&width=1600&text=Campus1",
    "/placeholder.svg?height=600&width=1600&text=Laboratory",
    "/placeholder.svg?height=600&width=1600&text=Students",
    "/placeholder.svg?height=600&width=1600&text=Research",
    "/placeholder.svg?height=600&width=1600&text=Innovation",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative overflow-hidden h-[600px]">
      {/* Fixed gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80 z-10" />

      {/* Image carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Campus Image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container relative z-20 flex flex-col items-start justify-center h-full py-20 text-white">
        <div className="w-full max-w-3xl space-y-6">
          <Badge className="mb-4 bg-white text-primary hover:bg-white/90">Excellence in Engineering Education</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Department of
            <span className="block text-white">Mechanical Engineering</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white">
            A dynamic hub of innovation, exploration, and excellence in engineering education and research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-secondary text-white hover:bg-secondary/90 group">
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Virtual Campus Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Stats cards - Positioned at the bottom of hero section */}
      <div className="absolute -bottom-10 left-0 right-0 z-20 flex justify-center container">
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { number: "15+", label: "Faculty Members" },
            { number: "500+", label: "Students" },
            { number: "50+", label: "Research Projects" },
            { number: "100%", label: "Placement Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 w-20 h-20 flex flex-col items-center justify-center stats-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-bold text-primary stats-number">{stat.number}</div>
              <div className="text-xs text-muted-foreground stats-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-12 w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
