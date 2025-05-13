"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export type FacultyMember = {
  id: number
  name: string
  position: string
  specialization: string
  image: string
  email?: string
  phone?: string
  office?: string
  education?: string[]
  bio?: string
  research?: string[]
  publications?: {
    title: string
    journal: string
    year: string
    authors: string
    link?: string
  }[]
  courses?: {
    code: string
    title: string
    level: string
  }[]
  awards?: {
    title: string
    year: string
    organization: string
  }[]
}

interface FacultyProfileModalProps {
  faculty: FacultyMember
  isOpen: boolean
  onClose: () => void
}

export function FacultyProfileModal({ faculty, isOpen, onClose }: FacultyProfileModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Header background */}
          <div className="h-32 bg-gradient-to-r from-primary to-secondary" />

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-white/20 z-10"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Faculty image and basic info */}
          <div className="absolute -bottom-16 left-8 flex items-end">
            <div className="relative h-32 w-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
            </div>
            <div className="ml-4 mb-4">
              <Badge className="mb-1 bg-secondary/20 text-secondary border-secondary">{faculty.position}</Badge>
              <h2 className="text-2xl font-bold text-white drop-shadow-md">{faculty.name}</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto pt-20 px-8 pb-8">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="teaching">Teaching</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Biography</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faculty.bio ||
                      `Dr. ${faculty.name} is a distinguished faculty member in the Department of Mechanical Engineering at IIITDM Kancheepuram. With expertise in ${faculty.specialization}, Dr. ${faculty.name.split(" ")[1]} has contributed significantly to the field through research, teaching, and industry collaboration.`}
                  </p>

                  <h3 className="text-lg font-semibold mt-6 mb-3 text-primary">Education</h3>
                  <ul className="space-y-2">
                    {(
                      faculty.education || [
                        "Ph.D. in Mechanical Engineering, IIT Madras",
                        "M.Tech in Design Engineering, IIT Bombay",
                        "B.Tech in Mechanical Engineering, NIT Trichy",
                      ]
                    ).map((edu, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold mt-6 mb-3 text-primary">Awards & Honors</h3>
                  {(
                    faculty.awards || [
                      { title: "Outstanding Researcher Award", year: "2023", organization: "IIITDM Kancheepuram" },
                      {
                        title: "Best Paper Award",
                        year: "2022",
                        organization: "International Conference on Advanced Manufacturing",
                      },
                      { title: "Teaching Excellence Award", year: "2021", organization: "IIITDM Kancheepuram" },
                    ]
                  ).map((award, index) => (
                    <div key={index} className="mb-3">
                      <h4 className="font-medium">{award.title}</h4>
                      <p className="text-sm text-gray-600">
                        {award.organization}, {award.year}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-primary">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{faculty.email || "jane.doe@iiitdm.ac.in"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{faculty.phone || "+91-44-2747-6300"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Office</p>
                      <p className="font-medium">{faculty.office || "Room 304, Mechanical Engineering Building"}</p>
                    </div>

                    <Separator />

                    <div>
                      <p className="text-sm text-gray-500">Office Hours</p>
                      <p className="font-medium">Monday & Wednesday: 2:00 PM - 4:00 PM</p>
                      <p className="text-xs text-gray-500 mt-1">Or by appointment</p>
                    </div>

                    <div className="pt-2">
                      <Button className="w-full bg-primary hover:bg-primary/90">Schedule a Meeting</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              <h3 className="text-lg font-semibold mb-3 text-primary">Research Interests</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {(
                  faculty.research || [
                    "Smart Manufacturing",
                    "Additive Manufacturing",
                    "Design Optimization",
                    "Computational Mechanics",
                    "Robotics and Automation",
                    "Sustainable Manufacturing",
                  ]
                ).map((area, index) => (
                  <Badge key={index} variant="outline" className="bg-secondary/10 text-secondary border-secondary">
                    {area}
                  </Badge>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-3 text-primary">Current Projects</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">
                    Development of Novel Additive Manufacturing Techniques for Aerospace Applications
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">Funded by Department of Science and Technology (DST)</p>
                  <p className="mt-2 text-gray-700">
                    This project aims to develop new additive manufacturing techniques specifically tailored for
                    aerospace components, focusing on lightweight structures with enhanced mechanical properties.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">AI-Driven Optimization for Smart Manufacturing Systems</h4>
                  <p className="text-sm text-gray-600 mt-1">Industry Collaboration with Tech Innovations Ltd.</p>
                  <p className="mt-2 text-gray-700">
                    Implementing artificial intelligence algorithms to optimize manufacturing processes, reduce waste,
                    and improve overall efficiency in smart manufacturing environments.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-3 text-primary">Research Lab</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Research+Lab"
                    alt="Research Lab"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Advanced Manufacturing Research Laboratory</h4>
                  <p className="mt-2 text-gray-700">
                    State-of-the-art facility equipped with the latest manufacturing technologies, including 3D
                    printers, CNC machines, and robotics systems for cutting-edge research in manufacturing processes.
                  </p>
                  <Button variant="outline" className="mt-3">
                    View Lab Details
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="publications" className="space-y-6">
              <h3 className="text-lg font-semibold mb-3 text-primary">Selected Publications</h3>
              <div className="space-y-4">
                {(
                  faculty.publications || [
                    {
                      title: "Novel Approach to Additive Manufacturing for Aerospace Applications",
                      journal: "Journal of Advanced Manufacturing Technology",
                      year: "2024",
                      authors: "Doe, J., Smith, A., & Johnson, B.",
                      link: "#",
                    },
                    {
                      title: "Optimization of Process Parameters in Smart Manufacturing Systems",
                      journal: "International Journal of Production Research",
                      year: "2023",
                      authors: "Doe, J., Kumar, R., & Williams, S.",
                      link: "#",
                    },
                    {
                      title: "AI-Driven Design for Additive Manufacturing: A Review",
                      journal: "Additive Manufacturing",
                      year: "2022",
                      authors: "Doe, J., & Chen, L.",
                      link: "#",
                    },
                    {
                      title: "Sustainable Manufacturing Practices in Industry 4.0",
                      journal: "Journal of Cleaner Production",
                      year: "2021",
                      authors: "Doe, J., Green, T., & Brown, M.",
                      link: "#",
                    },
                  ]
                ).map((pub, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold">{pub.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {pub.journal}, {pub.year}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">{pub.authors}</p>
                    <div className="mt-2">
                      <Button variant="link" className="p-0 h-auto text-primary">
                        View Publication
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button className="bg-primary hover:bg-primary/90">View All Publications</Button>
              </div>
            </TabsContent>

            <TabsContent value="teaching" className="space-y-6">
              <h3 className="text-lg font-semibold mb-3 text-primary">Courses Taught</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(
                  faculty.courses || [
                    { code: "ME301", title: "Advanced Manufacturing Processes", level: "Undergraduate" },
                    { code: "ME502", title: "Smart Manufacturing Systems", level: "Postgraduate" },
                    { code: "ME401", title: "Design for Manufacturing", level: "Undergraduate" },
                    { code: "ME601", title: "Additive Manufacturing", level: "Postgraduate" },
                  ]
                ).map((course, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{course.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{course.code}</p>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                        {course.level}
                      </Badge>
                    </div>
                    <Button variant="ghost" className="mt-2 text-primary p-0 h-auto">
                      View Syllabus
                    </Button>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-3 text-primary">Teaching Philosophy</h3>
              <p className="text-gray-700 leading-relaxed">
                My teaching approach emphasizes hands-on learning and practical application of theoretical concepts. I
                believe in creating an interactive classroom environment that encourages critical thinking and
                problem-solving skills. By integrating real-world industry challenges into the curriculum, I prepare
                students to become innovative engineers ready to tackle complex problems in their professional careers.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3 text-primary">Student Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Design and Development of an Autonomous Manufacturing Cell</h4>
                  <p className="text-sm text-gray-600 mt-1">B.Tech Final Year Project, 2024</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Optimization of 3D Printing Parameters for Biomedical Applications</h4>
                  <p className="text-sm text-gray-600 mt-1">M.Tech Thesis, 2023</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
