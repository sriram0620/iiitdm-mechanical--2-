"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  ChevronRight,
  Cpu,
  Database,
  Factory,
  Layers,
  Lightbulb,
  Network,
  Rocket,
  School,
  Settings,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SmartManufacturingContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Overview Section */}
        <div id="overview" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Layers className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <Badge className="mb-2 bg-secondary text-white hover:bg-secondary/90">Overview</Badge>
              <h2 className="text-3xl font-bold text-primary">What is Smart Manufacturing?</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Smart manufacturing is a broad category of manufacturing with the goal of optimizing concept generation,
                production, and product transaction. While manufacturing can be defined as the multi-phase process of
                creating a product out of raw materials, smart manufacturing is a subset that employs computer control
                and high levels of adaptability.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Smart manufacturing aims to take advantage of advanced information and manufacturing technologies to
                enable flexibility in physical processes to address a dynamic and global market. There is increased
                workforce training for such flexibility and use of technology rather than specific tasks as is customary
                in traditional manufacturing.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The 21st-century manufacturing facilities have ushered in a new wave of manufacturing with an
                amalgamation of technologies from advanced robotics to fully integrated production systems. With smart
                manufacturing or Industry 4.0, manufacturers are moving towards a new level of interconnected and
                intelligent manufacturing system which incorporates the latest advances in sensors, robotics, big data,
                and controllers.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-tl-2xl" />
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Smart+Manufacturing"
                  alt="Smart Manufacturing"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-br-2xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <Settings className="h-6 w-6 text-secondary" />,
                title: "Automation",
                description: "Advanced robotics and automated systems for efficient production",
              },
              {
                icon: <Database className="h-6 w-6 text-secondary" />,
                title: "Big Data",
                description: "Data-driven decision making and process optimization",
              },
              {
                icon: <Network className="h-6 w-6 text-secondary" />,
                title: "Connectivity",
                description: "Interconnected systems and IoT integration",
              },
              {
                icon: <Cpu className="h-6 w-6 text-secondary" />,
                title: "Intelligence",
                description: "AI and machine learning for adaptive manufacturing",
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

        {/* Technology Section */}
        <div id="technology" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge className="mb-2 bg-primary text-white hover:bg-primary/90">Technology</Badge>
              <h2 className="text-3xl font-bold text-primary">Technology & IIITDM Kancheepuram</h2>
            </div>
          </div>

          <Tabs defaultValue="technology" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 h-auto mb-8 bg-muted/50">
              <TabsTrigger
                value="technology"
                className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Technology Needed
              </TabsTrigger>
              <TabsTrigger
                value="iiitdm"
                className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Why IIITDM Kancheepuram?
              </TabsTrigger>
            </TabsList>

            <TabsContent value="technology" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">What is the Technology needed?</h3>
                  <p className="text-muted-foreground mb-4">
                    Keeping pace with the evolution of these "smart factories' requires highly skilled and nimble
                    engineers to manage the increasing complexity and shorter mind-to-market product cycles. The goal of
                    this program is to train future manufacturing engineers with basic knowledge of IT in addition to
                    the strong problem-solving skills that are imparted in today's programs.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Students will be trained in manufacturing processes, manufacturing systems, systems engineering, IT,
                    Networks and basic shop floor communications. An experiential learning approach will be followed and
                    students will be gaining hands-on experience in many spheres of technology related to smart
                    manufacturing.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white group">
                    Explore Technologies
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3 scale-105 group-hover:rotate-1 transition-transform"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Smart+Manufacturing+Technology"
                    alt="Smart Manufacturing Technology"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg relative z-10 transform group-hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="iiitdm" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Why IIITDM Kancheepuram?</h3>
                  <p className="text-muted-foreground mb-4">
                    Indian Institute of Information Technology Design and Manufacturing Kancheepuram (IIITDM
                    Kancheepuram) is an institute of national importance for technical education and research
                    established in 2007 by the Ministry of Human Resource Development, Government of India to pursue
                    design and manufacturing-oriented engineering education and research to promote the competitive
                    advantage of Indian products in global markets.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The institute offers academic and research programs that integrate engineering design, manufacturing
                    and management with information technology. The institute offers undergraduate, dual degree, and
                    postgraduate programs and doctoral research which focus on IT, design and manufacturing in
                    engineering sectors.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    IIITDM Kancheepuram with its vision to impart quality education in IT-enabled design and
                    manufacturing possesses the right mix of talent to train the young generation for the challenges of
                    tomorrow. Well-equipped laboratories and academic infrastructure has been developed for this
                    purpose.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Smart Manufacturing Division offers IT-enabled manufacturing courses which are cross-cutting and
                    focus on the research and manpower needs of the factories of the future.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white group">
                    About IIITDM Kancheepuram
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3 scale-105 group-hover:rotate-1 transition-transform"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=IIITDM+Kancheepuram"
                    alt="IIITDM Kancheepuram"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg relative z-10 transform group-hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Programs & Events Section */}
        <div id="programs" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Factory className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <Badge className="mb-2 bg-secondary text-white hover:bg-secondary/90">Education & Events</Badge>
              <h2 className="text-3xl font-bold text-primary">Academic Programs & Events</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-6">Academic Programs</h3>
              <div className="space-y-6">
                <AcademicProgramCard
                  icon={<School className="h-6 w-6 text-white" />}
                  title="B.Tech in Smart Manufacturing"
                  description="Undergraduate program focused on IT-enabled manufacturing to prepare students for factories of the future."
                  duration="4 years"
                  level="Undergraduate"
                />

                <AcademicProgramCard
                  icon={<BookOpen className="h-6 w-6 text-white" />}
                  title="M.Tech in Mechanical Engineering with specialization in Smart Manufacturing"
                  description="Postgraduate program that prepares students for careers in research or industry with focus on advanced manufacturing technologies."
                  duration="2 years"
                  level="Postgraduate"
                />

                <AcademicProgramCard
                  icon={<Rocket className="h-6 w-6 text-white" />}
                  title="Ph.D. in Smart Manufacturing"
                  description="Doctoral program focused on cutting-edge research in smart manufacturing technologies and systems."
                  duration="3-5 years"
                  level="Doctoral"
                />
              </div>

              <div className="mt-8">
                <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                  View All Academic Programs
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-secondary" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                <EventCard
                  title="Industry 4.0 Workshop"
                  date="June 15-16, 2025"
                  description="Two-day workshop on implementing Industry 4.0 technologies in manufacturing."
                />
                <EventCard
                  title="Smart Manufacturing Symposium"
                  date="July 10, 2025"
                  description="Annual symposium featuring keynote speakers from industry and academia."
                />
                <EventCard
                  title="IoT in Manufacturing Conference"
                  date="August 5-7, 2025"
                  description="International conference on Internet of Things applications in manufacturing."
                />
              </div>

              <Separator className="my-6" />

              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                Recent Guest Lectures
              </h3>
              <div className="space-y-4">
                <GuestLectureCard
                  name="Dr. Rajesh Kumar"
                  affiliation="Siemens Technology"
                  topic="Digital Twins in Manufacturing"
                  date="May 5, 2025"
                />
                <GuestLectureCard
                  name="Prof. Sarah Johnson"
                  affiliation="MIT"
                  topic="AI-Driven Quality Control Systems"
                  date="April 22, 2025"
                />
                <GuestLectureCard
                  name="Mr. Vikram Singh"
                  affiliation="Tata Advanced Systems"
                  topic="Future of Aerospace Manufacturing"
                  date="March 15, 2025"
                />
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                  View All Events & Lectures
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90">Join Us</Badge>
                <h3 className="text-2xl font-bold text-primary mb-4">Collaborate with Smart Manufacturing Division</h3>
                <p className="text-muted-foreground mb-6">
                  We welcome collaboration opportunities with industry partners, research institutions, and academic
                  organizations. Join us in shaping the future of manufacturing through research, education, and
                  innovation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <BriefcaseBusiness className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Industry Partnerships</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Research Collaborations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <School className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Student Internships</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Faculty Exchange</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                    Contact Division Head
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-tr-2xl" />
                <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Collaboration"
                    alt="Collaboration"
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

interface AcademicProgramCardProps {
  icon: React.ReactNode
  title: string
  description: string
  duration: string
  level: string
}

function AcademicProgramCard({ icon, title, description, duration, level }: AcademicProgramCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row">
        <div
          className="bg-gradient-to-br from-secondary to-primary p-6 flex items-center justify-center md:w-24"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        >
          {icon}
        </div>
        <div className="flex-1 p-6">
          <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{title}</h4>
          <p className="text-muted-foreground mt-2 mb-4">{description}</p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-secondary" />
              <span>{duration}</span>
            </div>
            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
              {level}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  )
}

interface EventCardProps {
  title: string
  date: string
  description: string
}

function EventCard({ title, date, description }: EventCardProps) {
  return (
    <div className="border-l-2 border-secondary pl-4 py-1 hover:bg-gray-100 transition-colors rounded-r-md">
      <h4 className="font-medium text-primary">{title}</h4>
      <p className="text-xs text-secondary font-medium mt-1">{date}</p>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  )
}

interface GuestLectureCardProps {
  name: string
  affiliation: string
  topic: string
  date: string
}

function GuestLectureCard({ name, affiliation, topic, date }: GuestLectureCardProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Users className="h-4 w-4 text-secondary" />
      </div>
      <div>
        <h4 className="font-medium text-primary">{name}</h4>
        <p className="text-xs text-secondary">{affiliation}</p>
        <p className="text-sm text-muted-foreground mt-1">"{topic}"</p>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
      </div>
    </div>
  )
}
