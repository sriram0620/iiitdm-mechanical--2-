"use client"

import { useState, useEffect } from "react"
import { Bell, Calendar, ExternalLink, FileText, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export function NotificationsCarousel() {
  const notifications = [
    {
      title: "Applications for 2025 M.Tech program are now open",
      date: "May 15, 2025",
      link: "#",
      icon: <GraduationCap className="h-4 w-4 text-primary" />,
      category: "Admissions",
    },
    {
      title: "International Conference on Advanced Manufacturing - Register Now",
      date: "June 10-12, 2025",
      link: "#",
      icon: <Calendar className="h-4 w-4 text-primary" />,
      category: "Events",
    },
    {
      title: "New Research Grant Awarded for Smart Manufacturing Project",
      date: "April 28, 2025",
      link: "#",
      icon: <FileText className="h-4 w-4 text-primary" />,
      category: "Research",
    },
    {
      title: "Campus Recruitment Drive by Leading Engineering Companies",
      date: "July 5-10, 2025",
      link: "#",
      icon: <Users className="h-4 w-4 text-primary" />,
      category: "Placements",
    },
    {
      title: "Ph.D. Admission Interview Schedule Released",
      date: "May 25, 2025",
      link: "#",
      icon: <GraduationCap className="h-4 w-4 text-primary" />,
      category: "Admissions",
    },
  ]

  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentNotificationIndex((prevIndex) => (prevIndex + 1) % notifications.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isPaused, notifications.length])

  return (
    <section className="py-4 bg-white border-b border-gray-100">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2 min-w-[180px]">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
              <Bell className="h-3.5 w-3.5 mr-1 text-primary" />
              Announcements
            </Badge>
          </div>

          <div
            className="relative h-12 flex-1 overflow-hidden px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNotificationIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {notifications[currentNotificationIndex].icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="hidden sm:inline-flex bg-secondary text-white">
                        {notifications[currentNotificationIndex].category}
                      </Badge>
                      <p className="font-medium text-gray-800 text-sm md:text-base truncate">
                        {notifications[currentNotificationIndex].title}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">{notifications[currentNotificationIndex].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-secondary whitespace-nowrap flex-shrink-0"
            onClick={() => window.open(notifications[currentNotificationIndex].link, "_blank")}
          >
            View Details
            <ExternalLink className="ml-1 h-3 w-3 text-primary" />
          </Button>
        </div>

        {/* Notification indicators */}
        <div className="flex justify-center mt-1 space-x-1">
          {notifications.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentNotificationIndex ? "bg-primary w-4" : "bg-gray-300"
              }`}
              onClick={() => setCurrentNotificationIndex(index)}
              aria-label={`Go to notification ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
