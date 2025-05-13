import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function DivisionsSection() {
  const divisions = [
    {
      id: "smart",
      title: "Smart Manufacturing Division",
      description: [
        "Smart manufacturing is a broad category of manufacturing with the goal of optimizing concept generation, production, and product transaction. While manufacturing can be defined as the multi-phase process of creating a product out of raw materials, smart manufacturing is a subset that employs computer control and high levels of adaptability.",
        "Smart manufacturing takes advantage of advanced information and manufacturing technologies to enable flexibility in physical processes to address a dynamic and global market.",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "design",
      title: "Design Division",
      description: [
        "The Design Division focuses on the creative and analytical aspects of mechanical engineering. Our curriculum emphasizes CAD modeling, virtual prototyping, and design optimization, teaching students to conceptualize, visualize, and realize solutions that address real-world challenges.",
        "Students learn to apply engineering principles to design mechanical systems, components, and processes that meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability.",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "thermal",
      title: "Thermal Engineering Division",
      description: [
        "The Thermal Engineering Division specializes in the study of heat transfer, thermodynamics, and fluid mechanics. Our research and teaching focus on energy conversion, HVAC systems, combustion, and renewable energy technologies.",
        "Students gain hands-on experience with thermal systems design, computational fluid dynamics, and experimental methods for thermal analysis. The division maintains state-of-the-art laboratories for research in heat exchangers, thermal management, and energy efficiency.",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="divisions" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-secondary hover:bg-secondary/90">Our Divisions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Specialized Divisions</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our department is organized into specialized divisions that focus on different aspects of mechanical
            engineering.
          </p>
        </div>

        <Tabs defaultValue="smart" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8 bg-muted/50">
            {divisions.map((division) => (
              <TabsTrigger
                key={division.id}
                value={division.id}
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                {division.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {divisions.map((division) => (
            <TabsContent key={division.id} value={division.id} className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{division.title}</h3>
                  {division.description.map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  ))}
                  <Button className="bg-primary hover:bg-primary/90 group">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3 scale-105 group-hover:rotate-1 transition-transform"></div>
                  <Image
                    src={division.image || "/placeholder.svg"}
                    alt={division.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg relative z-10 transform group-hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
