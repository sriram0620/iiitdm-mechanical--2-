"use client"

import { useState } from "react"
import {
  Users,
  Grid,
  List,
  Filter,
  X,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Award,
  GraduationCap,
  Clock,
  Wrench,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

// Staff data
const staffMembers = [
  {
    id: 1,
    name: "Dr. Gurunathan C.",
    position: "Technical Officer (SS)",
    image: "/placeholder.svg?key=3lllg",
    email: "gurunathan@iiitdm.ac.in",
    phone: "+91-44-2747XXXX",
    office: "Laboratory Complex, Room 201",
    expertise: ["Laboratory Management", "Equipment Maintenance", "Technical Training"],
    education: "Ph.D. in Mechanical Engineering",
    experience: "15+ years",
    responsibilities: [
      "Oversee technical operations across all mechanical engineering laboratories",
      "Coordinate with faculty for laboratory requirements",
      "Manage technical staff and laboratory schedules",
      "Ensure safety protocols and maintenance of equipment",
    ],
    category: "senior",
  },
  {
    id: 2,
    name: "Mr. Vigneshwaran A.",
    position: "Technical Superintendent",
    image: "/placeholder.svg?key=ke0pg",
    email: "vigneshwaran@iiitdm.ac.in",
    phone: "+91-44-2747XXXX",
    office: "Laboratory Complex, Room 202",
    expertise: ["Equipment Operation", "Student Training", "Laboratory Setup"],
    education: "M.Tech in Manufacturing Engineering",
    experience: "8+ years",
    responsibilities: [
      "Supervise laboratory operations and technical staff",
      "Assist faculty in conducting laboratory sessions",
      "Maintain inventory of laboratory equipment and supplies",
      "Train students on proper equipment usage and safety procedures",
    ],
    category: "senior",
  },
  {
    id: 3,
    name: "Mr. Dharmarasu R.",
    position: "Junior Technical Superintendent",
    image: "/placeholder.svg?key=ygz3o",
    email: "dharmarasu@iiitdm.ac.in",
    phone: "+91-44-2747XXXX",
    office: "Laboratory Complex, Room 203",
    expertise: ["CNC Operations", "CAD/CAM", "Workshop Management"],
    education: "B.Tech in Mechanical Engineering",
    experience: "6+ years",
    responsibilities: [
      "Assist in laboratory operations and maintenance",
      "Support research activities requiring technical expertise",
      "Maintain workshop equipment and tools",
      "Provide technical support for student projects",
    ],
    category: "mid",
  },
  {
    id: 4,
    name: "Mr. Manigandan G.",
    position: "Senior Technician",
    image: "/placeholder.svg?key=7rr8b",
    email: "manigandan@iiitdm.ac.in",
    phone: "+91-44-2747XXXX",
    office: "Laboratory Complex, Room 204",
    expertise: ["Machining", "Welding", "Fabrication"],
    education: "Diploma in Mechanical Engineering",
    experience: "5+ years",
    responsibilities: [
      "Operate and maintain workshop machinery",
      "Fabricate components for research projects",
      "Assist students with technical aspects of projects",
      "Ensure workshop safety and cleanliness",
    ],
    category: "technical",
  },
  {
    id: 5,
    name: "Mr. Vijaya Bharathi A.",
    position: "Senior Technician",
    image: "/placeholder.svg?key=x8ll5",
    email: "vijayabharathi@iiitdm.ac.in",
    phone: "+91-44-2747XXXX",
    office: "Laboratory Complex, Room 205",
    expertise: ["Electronics", "Instrumentation", "Testing Equipment"],
    education: "Diploma in Electronics Engineering",
    experience: "5+ years",
    responsibilities: [
      "Maintain and calibrate testing and measurement equipment",
      "Assist in setting up experimental apparatus",
      "Support faculty and students in laboratory activities",
      "Troubleshoot technical issues with laboratory equipment",
    ],
    category: "technical",
  },
]

// Staff categories with icons
const categories = [
  { id: "all", name: "All Staff", icon: <Users className="h-4 w-4" /> },
  { id: "senior", name: "Senior Staff", icon: <Award className="h-4 w-4" /> },
  { id: "mid", name: "Mid-Level Staff", icon: <Briefcase className="h-4 w-4" /> },
  { id: "technical", name: "Technical Staff", icon: <Wrench className="h-4 w-4" /> },
]

export function StaffContent() {
  const [activeView, setActiveView] = useState("grid")
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedStaff, setSelectedStaff] = useState(null)

  // Filter staff based on category and search query
  const filteredStaff = staffMembers.filter((staff) => {
    const matchesCategory = activeCategory === "all" || staff.category === activeCategory
    const matchesSearch =
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="bg-white py-12">
      <div className="container">
        {/* Filters and view toggles */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant={activeView === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveView("grid")}
              className="flex items-center gap-1"
            >
              <Grid className="h-4 w-4" />
              <span className="hidden sm:inline">Grid</span>
            </Button>
            <Button
              variant={activeView === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveView("list")}
              className="flex items-center gap-1"
            >
              <List className="h-4 w-4" />
              <span className="hidden sm:inline">List</span>
            </Button>
            <Button
              variant={showFilters ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 md:hidden"
            >
              {showFilters ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
              <span className="hidden sm:inline">{showFilters ? "Hide Filters" : "Filters"}</span>
            </Button>
          </div>

          <div className="hidden md:block">
            <Tabs defaultValue="all" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className="flex items-center gap-1"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="search"
              placeholder="Search staff..."
              className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background md:w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="mb-6 rounded-lg border bg-card p-4 shadow-sm md:hidden">
            <h3 className="mb-2 font-medium">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-1"
                >
                  {category.icon}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredStaff.length} of {staffMembers.length} staff members
          </p>
        </div>

        {/* Grid view */}
        {activeView === "grid" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStaff.map((staff) => (
              <Card key={staff.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={staff.image || "/placeholder.svg"}
                      alt={staff.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <h3 className="text-lg font-semibold">{staff.name}</h3>
                    <p className="text-sm text-white/80">{staff.position}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{staff.email}</span>
                  </div>
                  <div className="mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{staff.office}</span>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {staff.expertise.slice(0, 2).map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5">
                        {skill}
                      </Badge>
                    ))}
                    {staff.expertise.length > 2 && (
                      <Badge variant="outline" className="bg-primary/5">
                        +{staff.expertise.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" className="w-full" onClick={() => setSelectedStaff(staff)}>
                        View Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Staff Profile</DialogTitle>
                      </DialogHeader>
                      {selectedStaff && (
                        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
                          <div>
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src={selectedStaff.image || "/placeholder.svg"}
                                alt={selectedStaff.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="mt-4 space-y-2">
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-sm">{selectedStaff.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span className="text-sm">{selectedStaff.phone}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-sm">{selectedStaff.office}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">{selectedStaff.name}</h2>
                            <p className="text-muted-foreground">{selectedStaff.position}</p>

                            <div className="mt-4">
                              <div className="mb-2 flex items-center gap-2">
                                <GraduationCap className="h-4 w-4 text-primary" />
                                <span className="font-medium">Education</span>
                              </div>
                              <p className="text-sm">{selectedStaff.education}</p>
                            </div>

                            <div className="mt-4">
                              <div className="mb-2 flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="font-medium">Experience</span>
                              </div>
                              <p className="text-sm">{selectedStaff.experience}</p>
                            </div>

                            <div className="mt-4">
                              <div className="mb-2 flex items-center gap-2">
                                <Settings className="h-4 w-4 text-primary" />
                                <span className="font-medium">Technical Expertise</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {selectedStaff.expertise.map((skill, index) => (
                                  <Badge key={index} className="bg-primary/10 text-primary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="mt-4">
                              <div className="mb-2 flex items-center gap-2">
                                <Briefcase className="h-4 w-4 text-primary" />
                                <span className="font-medium">Responsibilities</span>
                              </div>
                              <ul className="list-inside list-disc space-y-1 text-sm">
                                {selectedStaff.responsibilities.map((resp, index) => (
                                  <li key={index}>{resp}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* List view */}
        {activeView === "list" && (
          <div className="space-y-4">
            {filteredStaff.map((staff) => (
              <div
                key={staff.id}
                className="flex flex-col rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md sm:flex-row sm:items-center sm:gap-4"
              >
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <img
                    src={staff.image || "/placeholder.svg"}
                    alt={staff.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex-1 sm:mt-0">
                  <h3 className="text-lg font-semibold">{staff.name}</h3>
                  <p className="text-sm text-muted-foreground">{staff.position}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {staff.expertise.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5">
                        {skill}
                      </Badge>
                    ))}
                    {staff.expertise.length > 3 && (
                      <Badge variant="outline" className="bg-primary/5">
                        +{staff.expertise.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 sm:mt-0">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="hidden text-sm md:inline">{staff.email}</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedStaff(staff)}>
                        View Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Staff Profile</DialogTitle>
                      </DialogHeader>
                      {selectedStaff && (
                        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
                          <div>
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src={selectedStaff.image || "/placeholder.svg"}
                                alt={selectedStaff.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="mt-4 space-y-2">
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-sm">{selectedStaff.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span className="text-sm">{selectedStaff.phone}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-sm">{selectedStaff.office}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">{selectedStaff.name}</h2>
                            <p className="text-muted-foreground">{selectedStaff.position}</p>

                            <div className="mt-4">
                              <div className="mb-2 flex items-center gap-2">
                                <GraduationCap className="h-4 w-4 text-primary" />
                                <span className="font-medium">Education</span>
                              </div>
                              <p className="text-sm">{selectedStaff.education}</p>
                            </div>

                            <div className="mt-4">
                              <div className="mb-2 flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="font-medium">Experience</span>
                              </div>
                              <p className="text-sm">{selectedStaff.experience}</p>
                            </div>

                            <div className="mt-4">
                              <div className="mb-2 flex items-center gap-2">
                                <Settings className="h-4 w-4 text-primary" />
                                <span className="font-medium">Technical Expertise</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {selectedStaff.expertise.map((skill, index) => (
                                  <Badge key={index} className="bg-primary/10 text-primary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="mt-4">
                              <div className="mb-2 flex items-center gap-2">
                                <Briefcase className="h-4 w-4 text-primary" />
                                <span className="font-medium">Responsibilities</span>
                              </div>
                              <ul className="list-inside list-disc space-y-1 text-sm">
                                {selectedStaff.responsibilities.map((resp, index) => (
                                  <li key={index}>{resp}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredStaff.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <Users className="h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-medium">No staff members found</h3>
            <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setActiveCategory("all")
                setSearchQuery("")
              }}
            >
              Reset filters
            </Button>
          </div>
        )}

        {/* Department structure visualization */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-primary">Department Structure</h2>
          <div className="overflow-hidden rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-lg bg-primary/10 p-4 text-center">
                <h3 className="font-semibold text-primary">Head of Department</h3>
                <p className="text-sm text-muted-foreground">Prof. Raja B</p>
              </div>

              <div className="h-8 w-0.5 bg-gray-300"></div>

              <div className="mb-4 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-primary/10 p-4 text-center">
                  <h3 className="font-semibold text-primary">Technical Officer</h3>
                  <p className="text-sm text-muted-foreground">Dr. Gurunathan C.</p>
                </div>

                <div className="h-8 w-full md:col-span-3">
                  <div className="flex h-full items-center justify-center">
                    <div className="h-0.5 w-full bg-gray-300"></div>
                  </div>
                </div>

                <div className="rounded-lg bg-secondary/10 p-4 text-center">
                  <h3 className="font-semibold text-secondary">Technical Superintendent</h3>
                  <p className="text-sm text-muted-foreground">Mr. Vigneshwaran A.</p>
                </div>

                <div className="rounded-lg bg-secondary/10 p-4 text-center">
                  <h3 className="font-semibold text-secondary">Junior Technical Superintendent</h3>
                  <p className="text-sm text-muted-foreground">Mr. Dharmarasu R.</p>
                </div>

                <div className="h-8 w-full md:col-span-3">
                  <div className="flex h-full items-center justify-center">
                    <div className="h-0.5 w-full bg-gray-300"></div>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-100 p-4 text-center">
                  <h3 className="font-semibold">Senior Technician</h3>
                  <p className="text-sm text-muted-foreground">Mr. Manigandan G.</p>
                </div>

                <div className="rounded-lg bg-gray-100 p-4 text-center">
                  <h3 className="font-semibold">Senior Technician</h3>
                  <p className="text-sm text-muted-foreground">Mr. Vijaya Bharathi A.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laboratory support section */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-primary">Laboratory Support</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 p-6">
                <div className="flex h-full flex-col items-center justify-center">
                  <Settings className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">Manufacturing Lab</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Our technical staff provides support for manufacturing processes, CNC operations, and student
                  projects.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 p-6">
                <div className="flex h-full flex-col items-center justify-center">
                  <Wrench className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">Design Lab</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Technical assistance for CAD/CAM software, 3D printing, and prototyping activities.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 p-6">
                <div className="flex h-full flex-col items-center justify-center">
                  <Settings className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">Thermal Engineering Lab</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Support for thermal experiments, heat transfer setups, and fluid mechanics demonstrations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
