import { Cog, FlaskConical, Microscope, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

export function CoreAreasSection() {
  const areas = [
    {
      icon: <FlaskConical className="h-6 w-6 text-secondary" />,
      title: "Thermal and Fluid Sciences",
      description:
        "From heat transfer and thermodynamics to fluid dynamics, we explore the fundamental principles that govern energy transfer and fluid behavior.",
    },
    {
      icon: <Cog className="h-6 w-6 text-secondary" />,
      title: "Engineering Design",
      description:
        "Creativity meets precision in our Engineering Design curriculum, where innovation and problem-solving take center stage.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-secondary" />,
      title: "Manufacturing Science",
      description:
        "Experience the art and science of turning raw materials into marvels of engineering through cutting-edge techniques.",
    },
    {
      icon: <Microscope className="h-6 w-6 text-secondary" />,
      title: "Robotics and Automation",
      description:
        "Embark on a journey into the realm of robotics and automation, where machines come alive with intelligence and dexterity.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary hover:bg-primary/90 text-white">Our Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Core Areas of Excellence</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our department excels in four key areas that form the foundation of modern mechanical engineering education
            and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="border-t-4 border-t-secondary hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  {area.icon}
                </div>
                <CardTitle className="text-primary group-hover:text-secondary transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-secondary p-0 group-hover:translate-x-1 transition-transform"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
