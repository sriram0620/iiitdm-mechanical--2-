import { BookOpen, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AcademicProgramsSection() {
  const programs = [
    {
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      title: "B.Tech in Mechanical Engineering",
      description:
        "Our undergraduate program prepares students for diverse careers in engineering, industry or graduate work. Entrepreneurship is encouraged to build smart products to promote technology innovation.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      title: "M.Tech in Mechanical Engineering",
      description:
        "Our postgraduate program offers specialized tracks in Smart Manufacturing, Design Engineering, and Thermal Systems, providing advanced knowledge and research opportunities.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      title: "Ph.D. Program",
      description:
        "Our doctoral program focuses on cutting-edge research in various domains of mechanical engineering, preparing scholars for academic and research careers.",
    },
  ]

  return (
    <section id="academics" className="py-16 md:py-24 bg-primary text-white relative">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90">Education</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Academic Programs</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Our department offers comprehensive academic programs designed to prepare students for diverse careers in
            engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-white/10 border-none hover:bg-white/15 transition-colors group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  {program.icon}
                </div>
                <CardTitle className="text-white">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{program.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="bg-secondary/20 text-white hover:bg-secondary/30 border-white group-hover:translate-x-1 transition-transform"
                >
                  <span className="text-white">Program Details</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-secondary hover:bg-secondary/90 group">
            <span className="text-white">View Curriculum</span>
            <BookOpen className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
          </Button>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particles-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle bg-white/10 rounded-full absolute"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
