import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CampusTourSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90">Virtual Tour</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Explore Our Campus</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Take a virtual tour of our state-of-the-art facilities, laboratories, and campus infrastructure.
              Experience the environment where innovation and learning thrive.
            </p>
            <Button className="bg-primary hover:bg-primary/90 group">
              <span className="text-white">Start Virtual Tour</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
            </Button>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3 scale-105 group-hover:rotate-1 transition-transform"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Campus Video Thumbnail"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer transform transition-transform group-hover:scale-110">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
