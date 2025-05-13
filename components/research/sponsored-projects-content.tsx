"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  ExternalLink,
  FileText,
  Filter,
  Lightbulb,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Project data
const projects = [
  {
    id: 1,
    title:
      "Performance Evaluation and Modeling of Multi Agent Based Smart Manufacturing Integrated with Swarm Intelligence and IoT",
    investigators: "PI: Dr M Sreekumar, Co-PI: Dr K Prem Kumar",
    sponsor: "DST-ICPS",
    duration: "2018-2021",
    value: "35 Lakhs",
    category: "Smart Manufacturing",
    image: "/placeholder.svg?height=300&width=500&text=Smart+Manufacturing",
  },
  {
    id: 2,
    title:
      "Design, Development, Manufacture, and Evaluation of Laser Cut Stent Patterns for Enhanced Performance and Life",
    investigators: "PI: Dr M Sreekumar, Co-PI: Dr K. Jayabal",
    sponsor: "DST – AMT",
    duration: "2 years, 2018-2019",
    value: "50 Lakhs",
    category: "Biomedical",
    image: "/placeholder.svg?height=300&width=500&text=Biomedical+Engineering",
  },
  {
    id: 3,
    title: "Control and Operation of Agents in a Multi-Agent Fixturing System with Swarm Control",
    investigators: "PI: Dr M Sreekumar",
    sponsor: "University of Genova, Italy",
    duration: "2 Years, 2018-19",
    value: "17000 Euro",
    category: "Robotics",
    image: "/placeholder.svg?height=300&width=500&text=Robotics+Control",
  },
  {
    id: 4,
    title: "Development of a computer – Assisted Surgical Methodology for Orthopedic – Bone Surgery",
    investigators: "PI: Dr. P. Pandithevan",
    sponsor: "DST",
    duration: "3 years",
    value: "19.14 Lakhs",
    category: "Biomedical",
    image: "/placeholder.svg?height=300&width=500&text=Computer+Assisted+Surgery",
  },
  {
    id: 5,
    title: "Projects under Visvesvaraya PhD Scheme for Electronics and IT",
    investigators: "PI: Dr M Sreekumar and Dr Noor Mohammad",
    sponsor: "Ministry of Electronics and IT, Govt. of India",
    duration: "5 Years- Starting from AY 2015-16",
    value: "101.874 Lakhs",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=500&text=Electronics+and+IT",
  },
  {
    id: 6,
    title: "Design and Development of energy efficient freeze dryer with multiport mini-channel shelf heat exchanger",
    investigators: "PI: Dr. B. Raja, Co-PI: Dr M. Sreekumar",
    sponsor: "DST – SERB",
    duration: "3 Years (till 2017)",
    value: "23.3 Lakhs",
    category: "Thermal Engineering",
    image: "/placeholder.svg?height=300&width=500&text=Thermal+Engineering",
  },
  {
    id: 7,
    title: "Design, development and performance evaluation of enhanced air-cooling in electronic systems",
    investigators: "PI: Dr. S. Jayavel",
    sponsor: "DST",
    duration: "2 years",
    value: "12.50 Lakhs",
    category: "Thermal Engineering",
    image: "/placeholder.svg?height=300&width=500&text=Electronic+Cooling",
  },
  {
    id: 8,
    title: "5 axis STEP-NC (AP-238) Machining of Free Form / Irregular Contoured Surfaces",
    investigators: "PI: Dr. Arivazhagan A",
    sponsor: "DST",
    duration: "3 years",
    value: "12.55 Lakhs",
    category: "Manufacturing",
    image: "/placeholder.svg?height=300&width=500&text=Advanced+Machining",
  },
  {
    id: 9,
    title: "Development of a Nanofluid Coolant for high heat flux devices with Mini-channel heat Exchanger",
    investigators: "PI: Dr. B. Raja",
    sponsor: "DST",
    duration: "3 years",
    value: "12.64 Lakhs",
    category: "Thermal Engineering",
    image: "/placeholder.svg?height=300&width=500&text=Nanofluid+Coolant",
  },
]

// Get unique categories
const categories = ["All", ...new Set(projects.map((project) => project.category))]

// Get unique sponsors
const sponsors = ["All", ...new Set(projects.map((project) => project.sponsor))]

export function SponsoredProjectsContent() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSponsor, setSelectedSponsor] = useState("All")
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  // Filter projects based on selected category and sponsor
  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const sponsorMatch = selectedSponsor === "All" || project.sponsor === selectedSponsor
    return categoryMatch && sponsorMatch
  })

  // Toggle project expansion
  const toggleProjectExpansion = (projectId: number) => {
    if (expandedProject === projectId) {
      setExpandedProject(null)
    } else {
      setExpandedProject(projectId)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Overview Section */}
        <div id="overview" className="space-y-8 mb-16 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge className="mb-2 bg-primary text-white hover:bg-primary/90">Overview</Badge>
              <h2 className="text-3xl font-bold text-primary">Sponsored Research Projects</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Department of Mechanical Engineering at IIITDM Kancheepuram has a strong track record of securing
                external funding for research projects from various government agencies, industry partners, and
                international collaborators. These sponsored projects enable our faculty and students to pursue
                cutting-edge research in diverse areas of mechanical engineering.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our sponsored research projects span a wide range of domains including smart manufacturing, biomedical
                engineering, thermal systems, robotics, and advanced manufacturing technologies. These projects not only
                contribute to the advancement of knowledge but also address real-world challenges and provide innovative
                solutions to industry and society.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary">Substantial Funding</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our department has secured over ₹270 lakhs in research funding from various agencies to support
                    innovative projects.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary">Diverse Collaborations</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We collaborate with government agencies, industry partners, and international research institutions
                    on various projects.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-primary">Innovative Research</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our projects focus on developing innovative solutions to complex engineering challenges across
                    multiple domains.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-secondary" />
                Funding Statistics
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Funding by Category</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Thermal Engineering</span>
                      <span className="text-sm font-medium">₹48.44 Lakhs</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "18%" }}></div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm">Smart Manufacturing</span>
                      <span className="text-sm font-medium">₹35 Lakhs</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "13%" }}></div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm">Biomedical</span>
                      <span className="text-sm font-medium">₹69.14 Lakhs</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm">Electronics & IT</span>
                      <span className="text-sm font-medium">₹101.87 Lakhs</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "38%" }}></div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm">Others</span>
                      <span className="text-sm font-medium">₹15.55 Lakhs</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "6%" }}></div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Funding by Sponsor</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">DST</span>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Department of Science & Technology</p>
                          <p className="font-medium text-primary">₹153.13 Lakhs</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">MeitY</span>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Ministry of Electronics & IT</p>
                          <p className="font-medium text-primary">₹101.87 Lakhs</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">INT</span>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">International</p>
                          <p className="font-medium text-primary">€17,000</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">OTH</span>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Other Sponsors</p>
                          <p className="font-medium text-primary">₹15 Lakhs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <FileText className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <Badge className="mb-2 bg-secondary text-white hover:bg-secondary/90">Research</Badge>
              <h2 className="text-3xl font-bold text-primary">Funded Projects</h2>
            </div>
          </div>

          {/* Filters and View Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                <Filter className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Category:</span>
                <select
                  className="bg-transparent border-none text-sm focus:outline-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Sponsor:</span>
                <select
                  className="bg-transparent border-none text-sm focus:outline-none"
                  value={selectedSponsor}
                  onChange={(e) => setSelectedSponsor(e.target.value)}
                >
                  {sponsors.map((sponsor) => (
                    <option key={sponsor} value={sponsor}>
                      {sponsor}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">View:</span>
              <div className="flex border rounded-md overflow-hidden">
                <button
                  className={`px-3 py-1 text-sm ${viewMode === "grid" ? "bg-primary text-white" : "bg-white text-primary"}`}
                  onClick={() => setViewMode("grid")}
                >
                  Grid
                </button>
                <button
                  className={`px-3 py-1 text-sm ${viewMode === "list" ? "bg-primary text-white" : "bg-white text-primary"}`}
                  onClick={() => setViewMode("list")}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Projects Display */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <ProjectListItem
                  key={project.id}
                  project={project}
                  isExpanded={expandedProject === project.id}
                  onToggle={() => toggleProjectExpansion(project.id)}
                />
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-4">
                <FileText className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">No Projects Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                No projects match your current filter criteria. Try changing your filters or view all projects.
              </p>
              <Button
                className="mt-4 bg-primary hover:bg-primary/90 text-white"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedSponsor("All")
                }}
              >
                View All Projects
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90">Collaboration</Badge>
                <h3 className="text-2xl font-bold text-primary mb-4">Interested in Funding or Collaboration?</h3>
                <p className="text-muted-foreground mb-6">
                  The Department of Mechanical Engineering at IIITDM Kancheepuram welcomes collaboration opportunities
                  with industry partners, government agencies, and research institutions. Our faculty members have
                  expertise in various domains and are open to exploring new research avenues.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white group">
                    Contact Research Coordinator
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    View Research Areas
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-tr-2xl" />
                <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Research+Collaboration"
                    alt="Research Collaboration"
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

interface ProjectCardProps {
  project: (typeof projects)[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none group">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 z-20">
            <Badge className="bg-white/90 text-primary border-none">{project.category}</Badge>
          </div>
        </div>
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="h-4 w-4 text-secondary" />
            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
              {project.sponsor}
            </Badge>
          </div>
          <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors line-clamp-2">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Users className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{project.investigators}</p>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{project.duration}</p>
            </div>
            <div className="flex items-start gap-2">
              <DollarSign className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">₹{project.value}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 mt-4">
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white group"
            onClick={() => setShowDetails(true)}
          >
            View Project Details
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>

      <ProjectDetailsModal project={project} isOpen={showDetails} onClose={() => setShowDetails(false)} />
    </>
  )
}

interface ProjectListItemProps {
  project: (typeof projects)[0]
  isExpanded: boolean
  onToggle: () => void
}

function ProjectListItem({ project, isExpanded, onToggle }: ProjectListItemProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        <div
          className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 cursor-pointer"
          onClick={onToggle}
        >
          <div className="md:w-16 flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-secondary" />
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-secondary/10 text-secondary border-secondary">{project.category}</Badge>
              <Badge variant="outline" className="text-xs">
                {project.sponsor}
              </Badge>
            </div>
            <h3 className="font-medium text-primary">{project.title}</h3>
          </div>

          <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
            <div className="text-right flex-grow">
              <p className="text-sm font-medium text-primary">₹{project.value}</p>
              <p className="text-xs text-muted-foreground">{project.duration}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onToggle}>
              {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isExpanded && (
          <div className="p-4 pt-0 border-t border-gray-200 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <h4 className="text-sm font-medium text-primary mb-2">Project Details</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{project.investigators}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{project.duration}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">₹{project.value}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white text-sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowDetails(true)
                    }}
                  >
                    View Project Details
                  </Button>
                </div>
              </div>

              <div className="relative h-32 md:h-full rounded-lg overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        )}
      </div>

      <ProjectDetailsModal project={project} isOpen={showDetails} onClose={() => setShowDetails(false)} />
    </>
  )
}

interface ProjectDetailsModalProps {
  project: (typeof projects)[0]
  isOpen: boolean
  onClose: () => void
}

function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
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
            <ChevronUp className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Project category badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-white text-primary">{project.category}</Badge>
          </div>

          {/* Project title */}
          <div className="absolute -bottom-16 left-8 right-8">
            <h2 className="text-2xl font-bold text-white drop-shadow-md">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto pt-20 px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Project Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Principal Investigator(s)</p>
                        <p className="font-medium">{project.investigators}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Sponsor</p>
                        <p className="font-medium">{project.sponsor}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">{project.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <DollarSign className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Funding</p>
                        <p className="font-medium">{project.value}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Project Description</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-muted-foreground">
                      This project focuses on {project.title.toLowerCase()}. The research aims to advance knowledge in
                      the field of {project.category}
                      and develop innovative solutions that address real-world challenges.
                    </p>
                    <p className="text-muted-foreground mt-4">
                      Led by {project.investigators.split(",")[0]}, this project is funded by {project.sponsor} for a
                      duration of {project.duration}. The total funding amount is {project.value}, which supports
                      research activities, equipment, and personnel.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Research Outcomes</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                          <FileText className="h-5 w-5 text-secondary" />
                        </div>
                        <p className="text-lg font-bold text-primary">3+</p>
                        <p className="text-xs text-center text-muted-foreground">Publications</p>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                          <Users className="h-5 w-5 text-secondary" />
                        </div>
                        <p className="text-lg font-bold text-primary">2+</p>
                        <p className="text-xs text-center text-muted-foreground">Research Scholars</p>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                          <Lightbulb className="h-5 w-5 text-secondary" />
                        </div>
                        <p className="text-lg font-bold text-primary">1+</p>
                        <p className="text-xs text-center text-muted-foreground">Patents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-4">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                <Card className="border-none shadow-md">
                  <CardHeader className="bg-primary text-white">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Project Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-secondary"></div>
                        <div className="flex-1 h-1 bg-gray-200 rounded-full">
                          <div className="h-1 bg-secondary rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Start Date</span>
                        <span>Current Progress</span>
                        <span>End Date</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">Contact</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For more information about this project, please contact the principal investigator.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Contact Investigator</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
