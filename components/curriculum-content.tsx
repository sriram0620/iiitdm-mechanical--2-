"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Book, ChevronDown, ChevronUp, FileText, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function CurriculumContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Undergraduate Programs */}
        <div id="undergraduate" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge className="mb-2 bg-primary text-white hover:bg-primary/90">Undergraduate</Badge>
              <h2 className="text-3xl font-bold text-primary">Undergraduate Programs</h2>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Our undergraduate programs are designed to provide a strong foundation in mechanical engineering with a
            focus on design and manufacturing.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <ProgramCard
              title="B.Tech in Mechanical Engineering"
              image="/placeholder.svg?height=300&width=500&text=Mechanical+Engineering"
              description="Mechanical Engineering offered by IIITDM Kancheepuram is design and manufacturing focussed. This program prepares students to conceptualise, design, simulate and develop tangible products. Students undergo interdisciplinary courses such as embedded systems, instrumentation, controls, automation and advanced manufacturing technology that will help them to design and develop innovative engineering products. Students can choose courses among electives and pursue their interests. The program offers a blend of courses that impart knowledge on design thinking and interdisciplinary engineering in addition to basic sciences."
              syllabusLink="#"
            />

            <ProgramCard
              title="B.Tech in Smart Manufacturing"
              image="/placeholder.svg?height=300&width=500&text=Smart+Manufacturing"
              description="Smart Manufacturing program has adopted a multi-faceted approach to manufacturing education by giving equal importance to basic sciences and engineering courses, unit manufacturing processes, automation, assembly, electronic manufacturing, and information systems technology. Students will be excelling in manufacturing processes, manufacturing systems, systems engineering, IT, networks, and basic shop floor communications. An experimental learning approach will be followed and students will be gaining hands-on experience in many spheres of technology related to smart manufacturing. Students will also undergo internships for five months duration and will be exposed to real-world challenges of the present-day industry. The students will have an option to serve in smart factories of automobiles, defence, space and consumer goods manufacturing industries."
              syllabusLink="#"
            />
          </div>
        </div>

        {/* Dual Degree Programs */}
        <div id="dual-degree" className="space-y-8 mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <Badge className="mb-2 bg-secondary text-white hover:bg-secondary/90">Dual Degree</Badge>
              <h2 className="text-3xl font-bold text-primary">Dual Degree Programs</h2>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Our dual degree programs offer an integrated approach to undergraduate and postgraduate education, providing
            specialized knowledge in key areas.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8">
            <ProgramCard
              title="B. Tech in Mechanical Engineering with specialization in design and manufacturing and M. Tech in Product Design (MPD)"
              image="/placeholder.svg?height=300&width=500&text=Product+Design"
              description="This dual degree program offers an opportunity to undergo a PG program in Product Design. Product design is concerned primarily with the relationship between products, systems and those who use them. The product design programme at IIITDM Kancheepuram inculcates a user-centric approach and processes. Responsibility and concern for the social, physical and ecological environments is emphasized in the process of developing innovative ideas. The product design programme assimilates inputs in diverse domains such as human factors, cognitive ergonomics, form studies, studio skills, advanced cad, research methods, design management, materials & manufacturing processes & social sciences. Emphasis is on process centric approach which shapes a student's education through participation and teamwork. Design projects form the core of a product designer's education, with a gradual increase in the level of complexity and cover broad areas that product designers are likely to encounter in their professional careers. Students are actively encouraged to participate in collaborative projects with industrial houses, the social sector, and the government."
              syllabusLink="#"
              curriculumLink="#"
            />

            <ProgramCard
              title="B. Tech in Mechanical Engineering with specialization in mechanical engineering and M. Tech in Advanced Manufacturing (MFD)"
              image="/placeholder.svg?height=300&width=500&text=Advanced+Manufacturing"
              description="This dual degree program is a 5 year integrated UG and PG program with a specialisation in Advanced Manufacturing. The term 'Advanced Manufacturing Technology' is used to describe flexible manufacturing systems that use innovative technology to improve the design and manufacture of products and processes. The Advanced Manufacturing Technology Program will focus on manufacturing systems – using robotic and transport-based automation including modular work cells: assembly stations, storage locations, machining centres, welding centres and painting stations – play out in the product, from design to manufacture to delivery to the customer. Each student will acquire an overview of how a complete system is tied together to produce high-quality products at a low cost."
              syllabusLink="#"
              curriculumLink="#"
            />
          </div>
        </div>

        {/* Postgraduate Programs */}
        <div id="postgraduate" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Book className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge className="mb-2 bg-primary text-white hover:bg-primary/90">Postgraduate</Badge>
              <h2 className="text-3xl font-bold text-primary">Postgraduate Programs</h2>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Our postgraduate programs are designed for students who wish to specialize in specific areas of mechanical
            engineering.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <ProgramCard
              title="M.Tech in Mechanical Engineering with specialization in Mechanical system design"
              image="/placeholder.svg?height=300&width=500&text=Mechanical+System+Design"
              description="This program is a two-year full-time Master's course for young graduates and professionals interested in becoming experts in Engineering Product Design. The main objective of the master's course is to enable the student to achieve and develop full potential and creativity in core engineering design and design thinking. The curriculum is designed to train the graduates in simulating design problems commonly faced in the modern engineering industry by combining creative and technical skills. Students are given the opportunity to examine the fundamentals of design subjects together with more advanced topics such as conceptual methods in engineering design, engineering simulation, creative design and design for quality and reliability. The course is designed to improve the skills and knowledge of students who want to achieve a high level of professionalism in product design and development. This course also aims to train students to take up entrepreneurial initiatives. Students are trained in industrial design and engineering software such as Autodesk Sketchbook Pro, Inventor Professional Suite, Autodesk Simulation, ANSYS, ADAMS, Multiphysics, DFM, DFA and MATLAB."
              syllabusLink="#"
            />

            <ProgramCard
              title="M.Tech in Mechanical Engineering with specialization in Smart Manufacturing"
              image="/placeholder.svg?height=300&width=500&text=Smart+Manufacturing+MTech"
              description="Mechanical (Smart Manufacturing) program has adopted a multi-faceted approach to manufacturing, and education by giving equal importance to basic sciences and engineering courses, unit manufacturing processes, automation, assembly, electronic manufacturing, and information systems technology. Students will be trained in manufacturing processes, manufacturing systems, systems engineering, IT, networks, and basic shop floor communications. An experimental learning approach will be followed and students will be gaining hands-on experience in many spheres of technology related to smart manufacturing. Students will also undergo internships for five months duration and will be exposed to real-world challenges of the present-day industry. The students will have an option to serve in smart factories of automobiles, defence, space and consumer goods manufacturing industries."
              syllabusLink="#"
            />
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
  syllabusLink: string
  curriculumLink?: string
}

function ProgramCard({ title, image, description, syllabusLink, curriculumLink }: ProgramCardProps) {
  const [expanded, setExpanded] = useState(false)

  // Truncate description if not expanded
  const truncatedDescription = expanded ? description : description.slice(0, 200) + "..."

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="border-b border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="h-5 w-5 text-secondary" />
          <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
            Program
          </Badge>
        </div>
        <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-muted-foreground">{truncatedDescription}</p>
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 p-0 h-auto text-secondary flex items-center"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              Show Less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </CardContent>
      <CardFooter className="flex gap-4 bg-gray-50 mt-4">
        <Button className="bg-primary hover:bg-primary/90 text-white group">
          <FileText className="mr-2 h-4 w-4" /> Syllabus
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        {curriculumLink && (
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
            <FileText className="mr-2 h-4 w-4" /> Curriculum
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
