import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ResearchSection() {
  const researchAreas = [
    {
      title: "Smart Manufacturing",
      description: "Additive Manufacturing, Sustainable Manufacturing, Design for Additive Manufacturing",
    },
    {
      title: "Biomechanics",
      description: "Experimental and Computational Biomechanics, Surgery Planning Algorithm",
    },
    {
      title: "Advanced Manufacturing",
      description: "Reverse Supply Chain, Vehicle Routing Problem, Warehouse Location Problem",
    },
    {
      title: "Thermal Systems",
      description: "Heat Transfer, Thermodynamics, Renewable Energy Systems, HVAC",
    },
    {
      title: "Robotics & Automation",
      description: "Robotic Kinematics, Control Systems, Human-Machine Interactions",
    },
    {
      title: "Computational Mechanics",
      description: "Finite Element Analysis, Computational Fluid Dynamics, Structural Optimization",
    },
  ]

  return (
    <section id="research" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-secondary hover:bg-secondary/90">Innovation</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Research Areas</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our faculty and students are engaged in cutting-edge research across various domains of mechanical
            engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-none bg-white group card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader>
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
                  View Publications <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90 group">
            Explore Research Publications
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
