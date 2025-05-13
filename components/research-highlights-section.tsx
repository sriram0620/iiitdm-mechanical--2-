"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronRight, ExternalLink, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export function ResearchHighlightsSection() {
  const [activeTab, setActiveTab] = useState("featured")

  const researchAreas = [
    {
      title: "Smart Manufacturing",
      description: "Additive Manufacturing, Sustainable Manufacturing, Design for Additive Manufacturing",
      image: "/placeholder.svg?height=400&width=600&text=Smart+Manufacturing",
      publications: 24,
      projects: 8,
    },
    {
      title: "Biomechanics",
      description: "Experimental and Computational Biomechanics, Surgery Planning Algorithm",
      image: "/placeholder.svg?height=400&width=600&text=Biomechanics",
      publications: 18,
      projects: 5,
    },
    {
      title: "Advanced Manufacturing",
      description: "Reverse Supply Chain, Vehicle Routing Problem, Warehouse Location Problem",
      image: "/placeholder.svg?height=400&width=600&text=Advanced+Manufacturing",
      publications: 32,
      projects: 11,
    },
    {
      title: "Thermal Systems",
      description: "Heat Transfer, Thermodynamics, Renewable Energy Systems, HVAC",
      image: "/placeholder.svg?height=400&width=600&text=Thermal+Systems",
      publications: 29,
      projects: 7,
    },
  ]

  const featuredPublications = [
    {
      title: "Machine Learning Approaches for Predictive Maintenance in Smart Manufacturing",
      authors: "Dr. Senthilkumaran K, Dr. Kishor Kumar Gajrani",
      journal: "Journal of Manufacturing Systems",
      year: 2024,
      citations: 18,
    },
    {
      title: "Thermal Management Strategies for Electronic Cooling Systems",
      authors: "Prof. Raja B, Dr. Shubhankar Chakraborty",
      journal: "International Journal of Heat and Mass Transfer",
      year: 2024,
      citations: 12,
    },
    {
      title: "Biomechanical Analysis of 3D Printed Orthopedic Implants",
      authors: "Dr. Pandithevan P, Dr. Arul Kumar M",
      journal: "Journal of Biomechanics",
      year: 2023,
      citations: 24,
    },
  ]

  const ongoingProjects = [
    {
      title: "AI-Driven Smart Manufacturing Platform",
      investigators: "Dr. Senthilkumaran K, Dr. Kishor Kumar Gajrani",
      funding: "Department of Science and Technology",
      amount: "₹85 Lakhs",
      duration: "2023-2026",
    },
    {
      title: "Novel Heat Exchanger Design for Renewable Energy Applications",
      investigators: "Prof. Raja B, Dr. Jayavel S",
      funding: "Ministry of New and Renewable Energy",
      amount: "₹65 Lakhs",
      duration: "2024-2027",
    },
    {
      title: "Computational Framework for Personalized Orthopedic Implants",
      investigators: "Dr. Pandithevan P, Dr. Arul Kumar M",
      funding: "Department of Biotechnology",
      amount: "₹72 Lakhs",
      duration: "2022-2025",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="research" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90">Research Excellence</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Research Highlights</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Our faculty and students are engaged in cutting-edge research across various domains of mechanical
              engineering, contributing to advancements in technology and innovation.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button className="bg-primary hover:bg-primary/90 text-white group">
              Explore All Research
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="featured" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8 bg-muted/50">
            <TabsTrigger
              value="featured"
              className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              Featured Research Areas
            </TabsTrigger>
            <TabsTrigger
              value="publications"
              className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              Recent Publications
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              Ongoing Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-6 animate-fade-in">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {researchAreas.map((area, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={area.image || "/placeholder.svg"}
                        alt={area.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-xl font-bold text-white">{area.title}</h3>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">{area.description}</p>
                      <div className="flex gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="text-sm">{area.publications} Publications</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-sm">{area.projects} Projects</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-secondary p-0 group-hover:translate-x-1 transition-transform"
                      >
                        Explore Research Area <ChevronRight className="ml-1 h-4 w-4 text-primary" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="publications" className="mt-6 animate-fade-in">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              {featuredPublications.map((publication, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Badge className="mb-2 bg-secondary text-white">{publication.year}</Badge>
                      <h3 className="text-xl font-bold text-primary mb-2">{publication.title}</h3>
                      <p className="text-secondary font-medium">{publication.authors}</p>
                      <p className="text-muted-foreground italic mt-1">{publication.journal}</p>
                      <div className="flex items-center gap-2 mt-4">
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          {publication.citations} Citations
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost" className="text-primary hover:text-secondary p-0 transition-colors">
                        View Publication <ExternalLink className="ml-1 h-4 w-4 text-primary" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
              <div className="text-center mt-8">
                <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                  View All Publications
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="projects" className="mt-6 animate-fade-in">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              {ongoingProjects.map((project, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                          <p className="text-secondary font-medium">Principal Investigators: {project.investigators}</p>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary whitespace-nowrap">
                          {project.duration}
                        </Badge>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-4">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <p className="text-xs text-gray-500">Funding Agency</p>
                          <p className="font-medium">{project.funding}</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <p className="text-xs text-gray-500">Grant Amount</p>
                          <p className="font-medium">{project.amount}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="text-primary hover:text-secondary p-0 transition-colors">
                        View Project Details <ChevronRight className="ml-1 h-4 w-4 text-primary" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
              <div className="text-center mt-8">
                <Button className="bg-secondary hover:bg-secondary/90 text-white group">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
