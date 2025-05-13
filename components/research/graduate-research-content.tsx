"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  GraduationCap,
  Lightbulb,
  School,
  Search,
  Tag,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GraduateResearchContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Research Areas Section */}
        <div id="research-areas" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge className="mb-2 bg-primary text-white hover:bg-primary/90">Explore</Badge>
              <h2 className="text-3xl font-bold text-primary">Research Areas</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Department of Mechanical Engineering at IIITDM Kancheepuram offers a wide range of research areas
                for graduate students. Our faculty members are engaged in cutting-edge research across various domains
                of mechanical engineering, providing ample opportunities for students to pursue their research
                interests.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <ResearchAreaCard
                  title="Manufacturing Technologies"
                  areas={[
                    "Smart Manufacturing",
                    "Additive Manufacturing",
                    "Sustainable Manufacturing",
                    "Design for Additive Manufacturing",
                    "Advanced Manufacturing",
                    "Reverse Supply Chain",
                    "Vehicle Routing Problem",
                    "Warehouse Location Problem",
                  ]}
                />

                <ResearchAreaCard
                  title="Design & Materials"
                  areas={[
                    "Smart Materials and structures",
                    "Advanced Finite Element Methods",
                    "Material Modelling",
                    "Bio-mechanics",
                    "Experimental and Computational Biomechanics",
                    "Surgery Planning Algorithm",
                    "Engineering design with polymers and polymer composites",
                    "Fatigue and fracture of advanced engineering materials",
                    "Finite element based topology optimization",
                  ]}
                />

                <ResearchAreaCard
                  title="Thermal Engineering"
                  areas={[
                    "Heat and Mass Transfer",
                    "Food Processing",
                    "Electronic cooling system",
                    "Heat Exchangers",
                    "Chemical Processing",
                  ]}
                />

                <ResearchAreaCard
                  title="Design & Innovation"
                  areas={[
                    "Complexity in product design & entrepreneurship",
                    "Human Factors",
                    "Context aware solutions",
                    "Robtics and Control Systems",
                  ]}
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Search className="h-5 w-5 text-secondary" />
                Find Research by Area
              </h3>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search research areas..."
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Manufacturing",
                    "Design",
                    "Thermal",
                    "Materials",
                    "Robotics",
                    "Biomechanics",
                    "Sustainability",
                  ].map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-white hover:bg-secondary/10 cursor-pointer transition-colors"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="font-medium text-primary">Featured Research Projects</h4>

                  <div className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-medium text-primary">Additive Manufacturing for Biomedical Applications</h5>
                    <p className="text-xs text-muted-foreground mt-1">
                      Development of novel 3D printing techniques for patient-specific implants
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary">
                        Biomechanics
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary">
                        Additive Manufacturing
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-medium text-primary">Smart Manufacturing Systems</h5>
                    <p className="text-xs text-muted-foreground mt-1">
                      Integration of IoT and AI in manufacturing processes for Industry 4.0
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary">
                        Smart Manufacturing
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary">
                        IoT
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-medium text-primary">Thermal Management in Electronics</h5>
                    <p className="text-xs text-muted-foreground mt-1">
                      Advanced cooling solutions for high-performance computing systems
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary">
                        Thermal Engineering
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary">
                        Electronic Cooling
                      </Badge>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/10">
                    View All Research Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PhD Program Section */}
        <div id="phd-program" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <Badge className="mb-2 bg-secondary text-white hover:bg-secondary/90">Doctoral Studies</Badge>
              <h2 className="text-3xl font-bold text-primary">PhD Program</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ME department offers PhD program leading to doctoral degree in above mentioned research areas. The
                advertisement for applications for PhD program will appear twice a year during December and May of every
                year.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                PhD scholars are selected through ME department entrance exam, followed by an Interview.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Application Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-bold text-secondary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Application Submission</h4>
                      <p className="text-sm text-muted-foreground">
                        Submit your application during the application window (December or May)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-bold text-secondary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Written Examination</h4>
                      <p className="text-sm text-muted-foreground">
                        Take the ME department entrance exam covering basic engineering sciences and specialized areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-bold text-secondary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Interview</h4>
                      <p className="text-sm text-muted-foreground">
                        Shortlisted candidates will be invited for an interview with the department faculty
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-bold text-secondary">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Admission</h4>
                      <p className="text-sm text-muted-foreground">
                        Selected candidates will receive admission offers and registration details
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">Examination Pattern and Syllabus</h3>
              <p className="text-muted-foreground mb-6">
                The examination pattern and syllabus for written examination are provided below.
              </p>

              <div className="mb-8">
                <div className="bg-primary/5 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-primary mb-2">Written Test (Duration - 2 hours)</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <p>
                        <span className="font-medium">Part I – Basic Engineering Sciences</span> - 50 marks - 1 hour
                        (Compulsory for all)
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <p>
                        <span className="font-medium">Part II</span> - 50 marks – 1 hour (Any one of the following
                        Parts)
                      </p>
                    </div>
                    <div className="pl-7 space-y-2">
                      <p>Part II A – Engineering Design</p>
                      <p>Part II B – Materials and Manufacturing Processes</p>
                      <p>Part II C – Thermal Engineering</p>
                    </div>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="part1" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto mb-8 bg-muted/50">
                  <TabsTrigger
                    value="part1"
                    className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Part I
                  </TabsTrigger>
                  <TabsTrigger
                    value="part2a"
                    className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Part II A
                  </TabsTrigger>
                  <TabsTrigger
                    value="part2b"
                    className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Part II B
                  </TabsTrigger>
                  <TabsTrigger
                    value="part2c"
                    className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Part II C
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="part1" className="mt-6 animate-fade-in">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-primary mb-4">
                      Part I – Basic Engineering Sciences (Common to all)
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-primary">Engineering Mathematics</h5>
                        <p className="text-muted-foreground">
                          Fundamentals of Linear algebra, Calculus, Differential equations, Probability and Statistics,
                          and Numerical methods.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-primary">Engineering Graphics</h5>
                        <p className="text-muted-foreground">
                          Plane curves, projection of lines, planes and solids, section and development of solids, and
                          isometric projection.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-primary">Engineering Mechanics</h5>
                        <p className="text-muted-foreground">
                          Free body diagram, equilibrium of particles and rigid bodies, friction, centroid, virtual
                          work, kinematics and dynamics of particles and of rigid bodies in plane motion.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="part2a" className="mt-6 animate-fade-in">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-primary mb-4">Part II A – Engineering Design</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-primary">Mechanics of materials</h5>
                        <p className="text-muted-foreground">
                          Theory of pure bending moment and torsion, deflection of beams, Euler theory of long columns,
                          design of thin and thick pressure vessels, principal stress strain, combined bending and
                          torsion, application of failure theories in design, design of mechanical components such as
                          shafts, gears, cams and followers, design of mechanical joints and drives, application of fits
                          and tolerances in design.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-primary">Kinematics and dynamics of machines and mechanisms</h5>
                        <p className="text-muted-foreground">
                          Position‐velocity‐acceleration analysis, classification of robots and mechanisms, mapping and
                          transformations in robotics, differential motion‐ Jacobian‐trajectory analysis, design of
                          robot mechanisms for various applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="part2b" className="mt-6 animate-fade-in">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-primary mb-4">
                      Part II B – Materials and Manufacturing Process
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-primary">Engineering Materials</h5>
                        <p className="text-muted-foreground">
                          Structure and properties of engineering materials, phase diagrams, heat treatment,
                          stress‐strain diagrams for engineering materials.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-primary">Machining and Machine Tool Operations</h5>
                        <p className="text-muted-foreground">
                          Mechanics of machining; basic machine tools; single and multi‐point cutting tools, tool
                          geometry and materials, tool life and wear; economics of machining; principles of
                          non‐traditional machining processes; principles of work holding, design of jigs and fixtures.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-primary">Metrology and Inspection</h5>
                        <p className="text-muted-foreground">
                          Limits, fits and tolerances; linear and angular measurements; comparators; gauge design;
                          interferometry; form and finish measurement; alignment and testing methods; tolerance analysis
                          in manufacturing and assembly.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="part2c" className="mt-6 animate-fade-in">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-primary mb-4">Part II C – Thermal Engineering</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-primary">Heat‐Transfer</h5>
                        <p className="text-muted-foreground">
                          Modes of heat transfer; one dimensional heat conduction, resistance concept and electrical
                          analogy, heat transfer through fins; unsteady heat conduction, lumped parameter system,
                          Heisler's charts; thermal boundary layer, dimensionless parameters in free and forced
                          convective heat transfer, heat transfer correlations for flow over flat plates and through
                          pipes, effect of turbulence; heat exchanger performance, LMTD and NTU methods; radiative heat
                          transfer, Stefan Boltzmann law, Wien's displacement law, black and grey surfaces, view
                          factors, radiation network analysis.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-primary">Thermodynamics</h5>
                        <p className="text-muted-foreground">
                          Thermodynamic systems and processes; properties of pure substances, behavior of ideal and real
                          gases; Zeroth and first laws of thermodynamics, calculation of work and heat in various
                          processes; second law of thermodynamics; thermodynamic property charts and tables,
                          availability and irreversibility; thermodynamic relations.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="flex items-center gap-2">
                    <School className="h-5 w-5" />
                    After Admission
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BriefcaseBusiness className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">
                          Registered Full time PhD scholars on fulfilment of the Institute norms are sanctioned HTRA
                          (Half Time Teaching Research Assistantship) as per government norms.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">
                          As part of the regulations of the Ph.D programme, scholars shall be expected to complete
                          around 4 courses (can vary based on the recommendations of the Doctoral Committee) and clear a
                          comprehensive viva-voice exam during the initial stages of Ph.D programme.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">
                          Scholars must secure publications in journals & conferences of repute as stipulated by the
                          Ph.D regulations of the institute in the later years and submit a thesis of the research work
                          carried out.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Apply for PhD Program</Button>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    Download PhD Guidelines
                  </Button>
                </CardFooter>
              </Card>

              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  Important Dates
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-primary">December Cycle</h4>
                      <p className="text-sm text-muted-foreground">Application Window</p>
                    </div>
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
                      Dec 1-15
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-primary">December Cycle</h4>
                      <p className="text-sm text-muted-foreground">Written Exam & Interview</p>
                    </div>
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
                      Jan 15-30
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-primary">May Cycle</h4>
                      <p className="text-sm text-muted-foreground">Application Window</p>
                    </div>
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
                      May 1-15
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-primary">May Cycle</h4>
                      <p className="text-sm text-muted-foreground">Written Exam & Interview</p>
                    </div>
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
                      June 15-30
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  Contact for Queries
                </h3>
                <div className="space-y-2">
                  <p className="font-medium text-primary">PhD Coordinator</p>
                  <p className="text-sm text-muted-foreground">Department of Mechanical Engineering</p>
                  <p className="text-sm text-muted-foreground">Email: phd-me@iiitdm.ac.in</p>
                  <p className="text-sm text-muted-foreground">Phone: +91-44-2747-6350</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90">Join Us</Badge>
                <h3 className="text-2xl font-bold text-primary mb-4">Ready to Begin Your Research Journey?</h3>
                <p className="text-muted-foreground mb-6">
                  The Department of Mechanical Engineering at IIITDM Kancheepuram invites passionate researchers to join
                  our vibrant academic community. Explore cutting-edge research opportunities and work with renowned
                  faculty members to push the boundaries of knowledge in mechanical engineering.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white group">
                    Apply for PhD Program
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Contact Research Coordinator
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-tr-2xl" />
                <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Research+at+IIITDM"
                    alt="Research at IIITDM"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-bl-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ResearchAreaCardProps {
  title: string
  areas: string[]
}

function ResearchAreaCard({ title, areas }: ResearchAreaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayAreas = isExpanded ? areas : areas.slice(0, 4)

  return (
    <Card className="border-t-4 border-t-secondary hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {displayAreas.map((area, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="h-5 w-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
              </div>
              <span className="text-muted-foreground">{area}</span>
            </li>
          ))}
        </ul>
        {areas.length > 4 && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 p-0 h-auto text-secondary"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Show More ({areas.length - 4} more) <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
