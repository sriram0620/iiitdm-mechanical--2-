"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export function EnhancedHeroSection() {
  const images = [
    "/placeholder.svg?height=800&width=1600&text=Advanced+Research+Laboratory",
    "/placeholder.svg?height=800&width=1600&text=Students+Working+on+Projects",
    "/placeholder.svg?height=800&width=1600&text=Campus+Innovation+Center",
    "/placeholder.svg?height=800&width=1600&text=Robotics+Lab",
    "/placeholder.svg?height=800&width=1600&text=3D+Printing+Facility",
  ]

  const headlines = [
    {
      title: "Shaping Tomorrow's Engineers",
      subtitle: "Innovation through Design and Technology",
    },
    {
      title: "Research that Transforms",
      subtitle: "Solving real-world challenges through engineering excellence",
    },
    {
      title: "Industry-Ready Education",
      subtitle: "Bridging theory and practice for future leaders",
    },
    {
      title: "Cutting-Edge Facilities",
      subtitle: "State-of-the-art labs and equipment for hands-on learning",
    },
    {
      title: "Global Collaborations",
      subtitle: "Partnerships with leading institutions worldwide",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000)
  }

  useEffect(() => {
    if (isPlaying) {
      startTimer()
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, images.length])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    if (isPlaying) {
      startTimer()
    }
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const stats = [
    { number: "20+", label: "Faculty Members" },
    { number: "500+", label: "Students" },
    { number: "50+", label: "Research Projects" },
    { number: "100%", label: "Placement Rate" },
  ]

  return (
    <section className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background images with crossfade effect */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col h-full justify-center pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90 text-sm px-4 py-1">
                Department of Excellence
              </Badge>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {headlines[currentIndex].title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-xl">{headlines[currentIndex].subtitle}</p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-secondary text-white hover:bg-secondary/90 group text-base px-6 py-6">
                  Explore Programs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-secondary/20 text-white hover:bg-secondary/30 border-white text-base px-6 py-6 group"
                >
                  Virtual Tour
                  <Play className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
              </div>
            </motion.div>

            {/* Carousel controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 pt-8"
            >
              <button
                onClick={togglePlayPause}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? (
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                ) : (
                  <Play className="h-3 w-3 text-white" />
                )}
              </button>

              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 h-2 bg-white rounded-full"
                        : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -top-16 -left-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Department Highlights</h3>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
                    >
                      <div className="text-3xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <Link
                    href="/academics/programs"
                    className="flex items-center justify-between text-white hover:text-secondary transition-colors group"
                  >
                    <span>View Academic Programs</span>
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
