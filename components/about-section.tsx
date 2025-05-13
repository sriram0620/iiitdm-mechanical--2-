import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="mb-4 bg-primary hover:bg-primary/90">About Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Welcome to the Department of Mechanical Engineering
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Welcome to the Department of Mechanical Engineering at IIITDM Kancheepuram – a dynamic hub of innovation,
              exploration, and excellence in engineering education and research. As you step into our virtual realm,
              you're entering a world where imagination meets precision, and where the frontiers of knowledge are pushed
              to create solutions that shape our future.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Our department stands as a beacon of ingenuity, offering a comprehensive curriculum that spans a diverse
              array of mechanical engineering disciplines. With a strong emphasis on Thermal and Fluid Sciences,
              Engineering Design, Manufacturing Science, and Robotics and Automation, we provide a rich platform for
              students, researchers, and industry partners.
            </p>
            <Button className="bg-primary hover:bg-primary/90 group">
              Learn More About Us
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-tl-2xl" />
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Mechanical Engineering Lab"
                width={600}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-br-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
