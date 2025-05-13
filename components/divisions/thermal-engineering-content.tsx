"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Atom,
  Droplets,
  Fan,
  Flame,
  FlaskConical,
  Leaf,
  Lightbulb,
  Thermometer,
  Waves,
  Wind,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ThermalEngineeringContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Overview Section */}
        <div id="overview" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Thermometer className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge className="mb-2 bg-primary text-white hover:bg-primary/90">Welcome</Badge>
              <h2 className="text-3xl font-bold text-primary">Thermal and Fluid Sciences Division</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Welcome to the forefront of innovation and discovery – the Thermal and Fluid Sciences Division within
                the Department of Mechanical Engineering at IIITDM Kancheepuram. Here, we embark on a captivating
                journey through the intricacies of heat, energy transfer, and fluid dynamics, unravelling the mysteries
                that govern the physical world and revolutionize industries.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our division stands as a hub of intellectual exploration, where passionate researchers, brilliant minds,
                and aspiring engineers converge to push the boundaries of knowledge and create transformative solutions.
                We specialize in a spectrum of research areas that span from fundamental principles to cutting-edge
                applications, shaping the future of thermal and fluid sciences.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As you explore the realms of our Thermal and Fluid Sciences Division, you'll encounter a vibrant
                community of scholars, students, and collaborators committed to advancing knowledge and driving
                innovation. Our state-of-the-art laboratories, cutting-edge research projects, and collaborative
                partnerships with industries create a fertile ground for pushing the envelope of what's possible.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-tl-2xl" />
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Thermal+Engineering+Lab"
                  alt="Thermal Engineering Laboratory"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-br-2xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Flame className="h-6 w-6 text-secondary" />,
                title: "Energy Systems",
                description: "Exploring energy conversion and heat transfer mechanisms for sustainable solutions",
              },
              {
                icon: <Droplets className="h-6 w-6 text-secondary" />,
                title: "Fluid Dynamics",
                description: "Investigating fluid behavior under varying conditions for engineering applications",
              },
              {
                icon: <Leaf className="h-6 w-6 text-secondary" />,
                title: "Renewable Energy",
                description: "Developing technologies for a greener and more sustainable future",
              },
            ].map((item, index) => (
              <Card key={index} className="border-t-4 border-t-secondary hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Energy Systems Section */}
        <div id="energy-systems" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Flame className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <Badge className="mb-2 bg-secondary text-white hover:bg-secondary/90">Research Areas</Badge>
              <h2 className="text-3xl font-bold text-primary">Energy Systems & Thermal Management</h2>
            </div>
          </div>

          <Tabs defaultValue="energy-systems" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8 bg-muted/50">
              <TabsTrigger
                value="energy-systems"
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                Energy Systems & Heat Transfer
              </TabsTrigger>
              <TabsTrigger
                value="thermal-management"
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                Thermal Management & Renewable Energy
              </TabsTrigger>
              <TabsTrigger
                value="combustion"
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                Combustion & Emissions Control
              </TabsTrigger>
            </TabsList>

            <TabsContent value="energy-systems" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Energy Systems and Heat Transfer</h3>
                  <p className="text-muted-foreground mb-4">
                    Immerse yourself in the realm of energy conversion and heat transfer mechanisms that drive our
                    world. From investigating innovative cooling technologies to enhancing energy efficiency in power
                    generation, our researchers delve into the intricate dance of heat and thermal dynamics to pave the
                    way for sustainable and impactful solutions.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our research in this area focuses on optimizing energy systems for maximum efficiency and minimal
                    environmental impact. We explore novel heat exchanger designs, advanced thermal insulation
                    materials, and innovative cooling techniques for electronics and power systems.
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                    Explore Energy Systems Research
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3 scale-105 group-hover:rotate-1 transition-transform"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Energy+Systems"
                    alt="Energy Systems"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg relative z-10 transform group-hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="thermal-management" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Thermal Management and Renewable Energy</h3>
                  <p className="text-muted-foreground mb-4">
                    Our division takes a proactive stance in addressing contemporary challenges of thermal management
                    and renewable energy systems. Dive into the development of advanced materials for thermal
                    insulation, explore novel techniques for waste heat recovery, and chart a course toward a greener
                    and more sustainable future.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We are pioneering research in solar thermal systems, geothermal energy utilization, and waste heat
                    recovery technologies. Our work extends to thermal energy storage solutions and advanced cooling
                    systems for high-performance electronics and data centers.
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                    Discover Renewable Energy Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3 scale-105 group-hover:rotate-1 transition-transform"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Renewable+Energy"
                    alt="Renewable Energy"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg relative z-10 transform group-hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="combustion" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Combustion and Emissions Control</h3>
                  <p className="text-muted-foreground mb-4">
                    Uncover the science behind combustion, its intricacies, and its role in propulsion, energy
                    generation, and environmental impact. Discover how our research initiatives aim to optimize
                    combustion processes, reduce emissions, and contribute to cleaner and more efficient energy
                    utilization.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our combustion research encompasses fundamental flame studies, advanced combustion technologies for
                    power generation, and innovative approaches to emissions reduction. We are developing cleaner
                    burning fuels, more efficient combustion systems, and advanced catalytic converters for automotive
                    and industrial applications.
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                    Learn About Combustion Research
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3 scale-105 group-hover:rotate-1 transition-transform"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Combustion+Research"
                    alt="Combustion Research"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg relative z-10 transform group-hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Fluid Dynamics Section */}
        <div id="fluid-dynamics" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Droplets className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge className="mb-2 bg-primary text-white hover:bg-primary/90">Research Areas</Badge>
              <h2 className="text-3xl font-bold text-primary">Fluid Dynamics & Computational Methods</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ResearchCard
              icon={<Wind className="h-6 w-6 text-secondary" />}
              title="Fluid Dynamics & Aerodynamics"
              description="The art of fluid motion comes to life as we delve into fluid dynamics and aerodynamics. Explore the behaviour of fluids under varying conditions, from turbulent flows to laminar regimes, and witness the magic of fluid interactions shaping everything from aircraft design to wind energy harnessing."
            />
            <ResearchCard
              icon={<Waves className="h-6 w-6 text-secondary" />}
              title="Multiphase Flows & Fluid-Structure Interaction"
              description="The dynamic interplay between multiple phases of matter and the forces they exert on structures forms the backbone of our multiphase flows and fluid-structure interaction research. Witness the fusion of fluid mechanics and solid mechanics as we engineer solutions for challenges spanning from oil and gas transport to biomedical devices."
            />
            <ResearchCard
              icon={<Atom className="h-6 w-6 text-secondary" />}
              title="Computational Fluid Dynamics & Simulation"
              description="Journey into the virtual realm where numerical simulations and computational fluid dynamics unravel complex fluid phenomena. Our researchers harness the power of simulations to model real-world scenarios, enabling a deeper understanding of fluid behaviour and facilitating the design of optimized engineering solutions."
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90">Featured Research</Badge>
                <h3 className="text-2xl font-bold text-primary mb-4">Advanced CFD Simulations</h3>
                <p className="text-muted-foreground mb-6">
                  Our division is pioneering advanced computational fluid dynamics (CFD) techniques to solve complex
                  engineering problems. By combining high-performance computing with sophisticated numerical methods, we
                  can simulate and analyze fluid flow phenomena with unprecedented accuracy and detail.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <FlaskConical className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Turbulence Modeling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Fan className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Aerodynamic Optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Heat Transfer Simulation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Multiphysics Modeling</span>
                  </div>
                </div>
                <Button className="mt-6 bg-primary hover:bg-primary/90 text-white group">
                  Explore CFD Research
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-tr-2xl" />
                <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=CFD+Simulation"
                    alt="CFD Simulation"
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
            <h3 className="text-2xl font-bold text-primary mb-6">Join Our Research Community</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join us on this exhilarating voyage as we unlock the mysteries of heat, energy, and fluid flow, and work
              tirelessly to shape a world where thermal and fluid sciences redefine the future of engineering. Welcome
              to a realm of limitless exploration and boundless potential – the Thermal and Fluid Sciences Division
              awaits your curiosity and contribution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white">Research Opportunities</Button>
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Laboratory Facilities</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Collaboration Inquiries
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
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="text-secondary p-0 h-auto group-hover:translate-x-1 transition-transform"
          style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "translateY(0)" : "translateY(10px)" }}
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
