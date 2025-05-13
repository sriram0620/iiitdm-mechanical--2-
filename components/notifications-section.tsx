"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function NotificationsSection() {
  const notifications = [
    {
      title: "Applications for 2025 M.Tech program are now open",
      date: "May 15, 2025",
      link: "#",
    },
    {
      title: "International Conference on Advanced Manufacturing - Register Now",
      date: "June 10-12, 2025",
      link: "#",
    },
    {
      title: "New Research Grant Awarded for Smart Manufacturing Project",
      date: "April 28, 2025",
      link: "#",
    },
    {
      title: "Campus Recruitment Drive by Leading Engineering Companies",
      date: "July 5-10, 2025",
      link: "#",
    },
    {
      title: "Ph.D. Admission Interview Schedule Released",
      date: "May 25, 2025",
      link: "#",
    },
  ]

  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotificationIndex((prevIndex) => (prevIndex + 1) % notifications.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [notifications.length])

  return (
    <section className="pt-14 pb-2 bg-gray-50 border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
              <Bell className="h-3.5 w-3.5 mr-1" />
              Announcements
            </Badge>
          </div>

          <div className="relative h-10 flex-1 mx-4 overflow-hidden">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-between transition-all duration-500 ${
                  index === currentNotificationIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-center gap-3">
                  <p className="font-medium text-gray-800 text-sm md:text-base truncate">{notification.title}</p>
                  <span className="text-xs text-gray-500 hidden sm:inline">({notification.date})</span>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-secondary whitespace-nowrap"
            onClick={() => window.open(notifications[currentNotificationIndex].link, "_blank")}
          >
            Details
            <ArrowUpRight className="ml-1 h-3 w-3" />
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
