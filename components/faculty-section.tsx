"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight, ExternalLink, Mail, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { FacultyProfileModal, type FacultyMember } from "./faculty-profile-modal"

export function FacultySection() {
  // Sample faculty data
  const facultyMembers: FacultyMember[] = [
    {
      id: 1,
      name: "Dr. Jane Doe",
      position: "Associate Professor",
      specialization: "Smart Manufacturing and Robotics",
      image: "/placeholder.svg?height=300&width=400&text=Faculty1",
      email: "jane.doe@iiitdm.ac.in",
      phone: "+91-44-2747-6301",
      office: "Room 304, Mechanical Engineering Building",
      education: [
        "Ph.D. in Mechanical Engineering, IIT Madras",
        "M.Tech in Design Engineering, IIT Bombay",
        "B.Tech in Mechanical Engineering, NIT Trichy",
      ],
      research: ["Smart Manufacturing", "Additive Manufacturing", "Design Optimization", "Robotics and Automation"],
    },
    {
      id: 2,
      name: "Dr. John Smith",
      position: "Professor",
      specialization: "Thermal Systems and Energy Engineering",
      image: "/placeholder.svg?height=300&width=400&text=Faculty2",
      email: "john.smith@iiitdm.ac.in",
      phone: "+91-44-2747-6302",
      office: "Room 310, Mechanical Engineering Building",
    },
    {
      id: 3,
      name: "Dr. Priya Kumar",
      position: "Assistant Professor",
      specialization: "Computational Mechanics and FEA",
      image: "/placeholder.svg?height=300&width=400&text=Faculty3",
      email: "priya.kumar@iiitdm.ac.in",
      phone: "+91-44-2747-6303",
      office: "Room 315, Mechanical Engineering Building",
    },
    {
      id: 4,
      name: "Dr. Robert Chen",
      position: "Associate Professor",
      specialization: "Advanced Manufacturing and Materials",
      image: "/placeholder.svg?height=300&width=400&text=Faculty4",
      email: "robert.chen@iiitdm.ac.in",
      phone: "+91-44-2747-6304",
      office: "Room 320, Mechanical Engineering Building",
    },
    {
      id: 5,
      name: "Dr. Sarah Johnson",
      position: "Professor",
      specialization: "Design Engineering and Product Development",
      image: "/placeholder.svg?height=300&width=400&text=Faculty5",
      email: "sarah.johnson@iiitdm.ac.in",
      phone: "+91-44-2747-6305",
      office: "Room 325, Mechanical Engineering Building",
    },
    {
      id: 6,
      name: "Dr. Rajesh Patel",
      position: "Assistant Professor",
      specialization: "Fluid Mechanics and Thermal Engineering",
      image: "/placeholder.svg?height=300&width=400&text=Faculty6",
      email: "rajesh.patel@iiitdm.ac.in",
      phone: "+91-44-2747-6306",
      office: "Room 330, Mechanical Engineering Building",
    },
  ]

  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openFacultyProfile = (faculty: FacultyMember) => {
    setSelectedFaculty(faculty)
    setIsModalOpen(true)
  }

  return (
    <section id="people" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary hover:bg-primary/90 text-white">Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Meet Our Faculty</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our department is home to distinguished scholars and industry experts dedicated to nurturing intellectual
            growth.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {facultyMembers.map((faculty) => (
              <CarouselItem key={faculty.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="hover:shadow-lg transition-shadow border-none overflow-hidden group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={faculty.image || "/placeholder.svg"}
                        alt={`Faculty Member ${faculty.id}`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <div className="flex gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30"
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {faculty.name}
                    </h3>
                    <p className="text-secondary">{faculty.position}</p>
                    <p className="text-muted-foreground mt-2">{faculty.specialization}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-secondary p-0 group-hover:translate-x-1 transition-transform"
                      onClick={() => openFacultyProfile(faculty)}
                    >
                      View Profile <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static transform-none bg-primary text-white hover:bg-primary/90" />
            <CarouselNext className="static transform-none bg-primary text-white hover:bg-primary/90" />
          </div>
        </Carousel>

        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white group">
            View All Faculty
            <Users className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {selectedFaculty && (
        <FacultyProfileModal faculty={selectedFaculty} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  )
}
