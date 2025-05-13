"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Brain,
  Cog,
  Compass,
  Cpu,
  Fingerprint,
  Lightbulb,
  Microscope,
  Recycle,
  Shapes,
  Sparkles,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DesignDivisionContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Overview Section */}
        <div id="overview" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge className="mb-2 bg-primary text-white hover:bg-primary/90">Welcome</Badge>
              <h2 className="text-3xl font-bold text-primary">Welcome to Design Division</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Welcome to the Engineering Design, Robotics, and Automation Division within the Department of Mechanical
                Engineering at IIITDM Kancheepuram. Our division brings together visionary researchers, aspiring
                engineers, and technology enthusiasts to converge to shape the future of engineering design and redefine
                the boundaries of robotics and automation.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Spanning a spectrum of research areas, we offer a glimpse into the exciting possibilities that emerge
                when form meets function and intelligence meets precision.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shapes className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary">Design Innovation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Transforming ideas into tangible, impactful solutions that address real-world challenges.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Cpu className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary">Automation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Creating intelligent systems that enhance productivity, safety, and quality of life.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Microscope className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary">Advanced Materials</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Exploring novel materials and manufacturing methods that drive innovation in engineering design.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Brain className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary">Intelligent Systems</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developing control systems that adapt, learn, and make informed decisions autonomously.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-tl-2xl" />
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Design+Division+Lab"
                  alt="Design Division Laboratory"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-br-2xl" />
            </div>
          </div>
        </div>

        {/* Design Concepts Section */}
        <div id="design-concepts" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Shapes className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <Badge className="mb-2 bg-secondary text-white hover:bg-secondary/90">Research Areas</Badge>
              <h2 className="text-3xl font-bold text-primary">Design Concepts & Materials</h2>
            </div>
          </div>

          <Tabs defaultValue="design-concepts" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8 bg-muted/50">
              <TabsTrigger
                value="design-concepts"
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                Design Concepts
              </TabsTrigger>
              <TabsTrigger
                value="advanced-materials"
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                Advanced Materials
              </TabsTrigger>
              <TabsTrigger
                value="sustainable-composites"
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                Sustainable Composites
              </TabsTrigger>
            </TabsList>

            <TabsContent value="design-concepts" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Innovative Design Concepts and Methodologies</h3>
                  <p className="text-muted-foreground mb-4">
                    Delve into the art and science of engineering design, where imagination and problem-solving collide.
                    Explore the realm of conceptualization, prototyping, and design optimization, and witness how our
                    researchers transform ideas into tangible, impactful solutions that address real-world challenges.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our approach combines creative thinking with rigorous engineering principles to develop innovative
                    solutions across various domains. From initial concept sketches to detailed prototypes, we guide
                    students through the complete design process.
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                    Explore Design Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3 scale-105 group-hover:rotate-1 transition-transform"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Design+Concepts"
                    alt="Design Concepts"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg relative z-10 transform group-hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced-materials" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Advanced Materials and Manufacturing Techniques
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Embark on a journey to explore novel materials and advanced manufacturing methods that drive
                    innovation in engineering design. From 3D printing to smart materials, our division is at the
                    forefront of revolutionizing how we create and fabricate components, structures, and systems.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our research encompasses material characterization, novel composite manufacturing techniques, and
                    multifunctional composite systems. We investigate the properties and behavior of materials to unlock
                    their full potential for engineering applications.
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                    Discover Materials Research
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3 scale-105 group-hover:rotate-1 transition-transform"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Advanced+Materials"
                    alt="Advanced Materials"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg relative z-10 transform group-hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sustainable-composites" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Sustainable Composites</h3>
                  <p className="text-muted-foreground mb-4">
                    Join us in our commitment to sustainability as we explore eco-friendly alternatives and recyclable
                    composite materials. Discover how our research initiatives are reshaping the composite landscape to
                    reduce environmental impact and create a more sustainable future.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our work in sustainable composites includes developing bio-based materials, improving recyclability
                    of existing composites, and designing products with end-of-life considerations. We strive to balance
                    performance requirements with environmental responsibility.
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                    Learn About Sustainable Materials
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3 scale-105 group-hover:rotate-1 transition-transform"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Sustainable+Composites"
                    alt="Sustainable Composites"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg relative z-10 transform group-hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Robotics & Automation Section */}
        <div id="robotics" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge className="mb-2 bg-primary text-white hover:bg-primary/90">Innovation</Badge>
              <h2 className="text-3xl font-bold text-primary">Robotics & Automation</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ResearchCard
              icon={<Users className="h-6 w-6 text-secondary" />}
              title="Human-Centered Robotics"
              description="Witness the fusion of technology and humanity as we delve into the realm of human-centered robotics and automation. Discover how our researchers design robots that collaborate seamlessly with humans, enhancing productivity, safety, and quality of life across industries such as healthcare, manufacturing, and beyond."
            />
            <ResearchCard
              icon={<Brain className="h-6 w-6 text-secondary" />}
              title="Intelligent Control Systems"
              description="Experience the power of intelligence in control systems as we delve into automation algorithms, machine learning, and artificial intelligence. Uncover how these technologies enable machines to adapt, learn, and make informed decisions, propelling us into an era of autonomous and efficient systems."
            />
            <ResearchCard
              icon={<Cog className="h-6 w-6 text-secondary" />}
              title="Mechatronics & Sensing"
              description="Immerse yourself in the interdisciplinary field of mechatronics, where mechanics, electronics, and computing converge. Explore the integration of sensors, actuators, and control systems, and witness how these synergies bring about innovations in robotics, automation, and beyond."
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90">Featured Research</Badge>
                <h3 className="text-2xl font-bold text-primary mb-4">Human-Machine Interaction</h3>
                <p className="text-muted-foreground mb-6">
                  Enter a world where humans and machines communicate seamlessly. Discover how our division pioneers
                  research in interface design, haptic feedback, and augmented reality, creating intuitive interactions
                  that bridge the gap between users and complex technological systems.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Fingerprint className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Haptic Feedback Systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Augmented Reality Interfaces</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Compass className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Gesture Recognition</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Recycle className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Adaptive User Interfaces</span>
                  </div>
                </div>
                <Button className="mt-6 bg-primary hover:bg-primary/90 text-white group">
                  Explore HMI Research
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-tr-2xl" />
                <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Human+Machine+Interaction"
                    alt="Human-Machine Interaction"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-bl-2xl" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">Join Our Research Team</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We are always looking for passionate researchers, students, and collaborators to join our team and
              contribute to cutting-edge research in design, robotics, and automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white">PhD Opportunities</Button>
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Research Collaborations</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Student Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ResearchCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ResearchCard({ icon, title, description }: ResearchCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300"
        style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
      />
      <CardHeader className="pb-2">
        <div
          className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 transition-all duration-300"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        >
          {icon}
        </div>
        <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
