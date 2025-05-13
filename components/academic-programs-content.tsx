"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Code,
  Cog,
  GraduationCap,
  School,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function AcademicProgramsContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Bachelor's Programs */}
        <div id="bachelors" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <Badge className="mb-2 bg-secondary text-white hover:bg-secondary/90">Undergraduate</Badge>
              <h2 className="text-3xl font-bold text-primary">Bachelor's Programs</h2>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Our undergraduate programs provide a strong foundation in mechanical engineering principles and practices,
            preparing students for diverse career paths in industry, research, and entrepreneurship.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <ProgramCard
              title="B.Tech in Mechanical Engineering"
              image="/placeholder.svg?height=300&width=500&text=Mechanical+Engineering"
              description="Prepares students for diverse careers in engineering, industry or graduate work. Entrepreneurship is encouraged to build smart products to promote technology start-ups."
              duration="4 years"
              intake="60 students"
              highlights={[
                "Design and manufacturing focused curriculum",
                "Interdisciplinary approach to engineering",
                "Strong emphasis on practical skills",
                "Industry-relevant projects and internships",
              ]}
              icons={[<Cog key="cog" className="h-5 w-5" />, <Building2 key="building" className="h-5 w-5" />]}
              link="/curriculum#undergraduate"
            />

            <ProgramCard
              title="B.Tech in Smart Manufacturing"
              image="/placeholder.svg?height=300&width=500&text=Smart+Manufacturing"
              description="Provides a concentration in IT-enabled manufacturing courses to prepare students for factories of the future."
              duration="4 years"
              intake="30 students"
              highlights={[
                "Focus on advanced manufacturing technologies",
                "Integration of IT with manufacturing processes",
                "Industry 4.0 principles and applications",
                "5-month industry internship",
              ]}
              icons={[<Cog key="cog" className="h-5 w-5" />, <Code key="code" className="h-5 w-5" />]}
              link="/curriculum#undergraduate"
            />
          </div>
        </div>

        {/* Master's Programs */}
        <div id="masters" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge className="mb-2 bg-primary text-white hover:bg-primary/90">Postgraduate</Badge>
              <h2 className="text-3xl font-bold text-primary">Master's Programs</h2>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Our master's programs offer specialized knowledge and research opportunities in key areas of mechanical
            engineering, preparing students for advanced careers in industry and research.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <ProgramCard
              title="M.Tech in Mechanical Engineering with specialization in Smart Manufacturing"
              image="/placeholder.svg?height=300&width=500&text=Smart+Manufacturing+MTech"
              description="Prepares students for careers in research or industry or further graduate study with a focus on advanced manufacturing technologies."
              duration="2 years"
              intake="20 students"
              highlights={[
                "Advanced manufacturing processes and systems",
                "Industry 4.0 and smart factory concepts",
                "Automation and robotics in manufacturing",
                "Research-oriented curriculum with industry exposure",
              ]}
              icons={[<Cog key="cog" className="h-5 w-5" />, <BriefcaseBusiness key="business" className="h-5 w-5" />]}
              link="/curriculum#postgraduate"
            />

            <ProgramCard
              title="M.Tech in Mechanical Engineering with specialization in Mechanical System Design"
              image="/placeholder.svg?height=300&width=500&text=Mechanical+System+Design"
              description="Prepares students for careers in research or industry or further graduate study with a focus on engineering product design."
              duration="2 years"
              intake="20 students"
              highlights={[
                "Advanced design methodologies and tools",
                "Simulation and analysis of mechanical systems",
                "Product design and development",
                "Training in industry-standard design software",
              ]}
              icons={[<Cog key="cog" className="h-5 w-5" />, <Users key="users" className="h-5 w-5" />]}
              link="/curriculum#postgraduate"
            />
          </div>
        </div>

        {/* PhD Program */}
        <div id="phd" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <School className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <Badge className="mb-2 bg-secondary text-white hover:bg-secondary/90">Doctoral</Badge>
              <h2 className="text-3xl font-bold text-primary">Doctoral Program</h2>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Our doctoral program focuses on intensive research and innovation in mechanical engineering, preparing
            students for advanced careers in academia and industry.
          </p>

          <div className="mt-12">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="relative h-full min-h-[300px] overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=400&text=PhD+Program"
                    alt="PhD Program"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60 flex items-center justify-center">
                    <School className="h-24 w-24 text-white/80" />
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-secondary text-white">Research Focused</Badge>
                    <Badge variant="outline" className="border-secondary text-secondary">
                      Full-time & Part-time
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Doctor of Philosophy (PhD) in Mechanical Engineering
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Intensive research prepares students for advanced-level professional careers in academia and
                    industry. Our PhD program offers opportunities to work on cutting-edge research projects under the
                    guidance of experienced faculty members.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Expert Faculty</h4>
                        <p className="text-sm text-muted-foreground">Work with renowned researchers in the field</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">State-of-the-art Facilities</h4>
                        <p className="text-sm text-muted-foreground">Access to advanced research laboratories</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BriefcaseBusiness className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Industry Collaboration</h4>
                        <p className="text-sm text-muted-foreground">Partnerships with leading companies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Financial Support</h4>
                        <p className="text-sm text-muted-foreground">Scholarships and research assistantships</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                      Research Areas
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProgramCardProps {
  title: string
  image: string
  description: string
  duration: string
  intake: string
  highlights: string[]
  icons: React.ReactNode[]
  link: string
}

function ProgramCard({ title, image, description, duration, intake, highlights, icons, link }: ProgramCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {icons.map((icon, index) => (
            <div key={index} className="h-8 w-8 rounded-full bg-white/80 flex items-center justify-center">
              {React.cloneElement(icon as React.ReactElement, { className: "h-4 w-4 text-secondary" })}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4 text-secondary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-secondary" />
            <span>{intake}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-primary mb-2">Program Highlights</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <div className="h-5 w-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                </div>
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <Link href={link}>
            <Button variant="ghost" className="text-secondary p-0 h-auto group/btn">
              View Curriculum
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
          <Button className="bg-primary hover:bg-primary/90 text-white">Apply Now</Button>
        </div>
      </div>
    </div>
  )
}
