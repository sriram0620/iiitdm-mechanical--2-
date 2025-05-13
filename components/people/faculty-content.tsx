"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Award,
  Briefcase,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
  Download,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Faculty data
const facultyData = [
  {
    id: 1,
    name: "Dr. Arul Kumar M.",
    position: "Associate Professor",
    education: "Ph.D: Indian Institute of Technology Kanpur",
    research: [
      "Process-Structure-Property-Performance relationship",
      "Mechanics and Design",
      "Computational Materials Science",
      "Machine Learning",
      "In-situ Experiments",
    ],
    email: "marulkr@iiitdm.ac.in",
    room: "291-J, Second Floor, Laboratory Block",
    department: "Department of Mechanical Engineering, IIITDM Kanchipuram, Chennai",
    image: "/placeholder.svg?key=eetw5",
    publications: 45,
    projects: 8,
    students: 12,
    division: "Design Division",
  },
  {
    id: 2,
    name: "Dr. Avinash Kumar",
    position: "Assistant Professor",
    education: "Ph.D: Indian Institute of Technology Delhi",
    research: [
      "Laser Machining",
      "Surface Engineering",
      "Micro/Nano-fabrication for MEMS",
      "Micro/Nano-fluidics",
      "Bio-devices",
    ],
    email: "avikr@iiitdm.ac.in",
    room: "109-A, First Floor, Laboratory Block",
    department: "Department of Mechanical Engineering, IIITDM Kanchipuram, Chennai",
    image: "/placeholder.svg?key=u2f76",
    publications: 32,
    projects: 5,
    students: 8,
    division: "Smart Manufacturing Division",
  },
  {
    id: 3,
    name: "Dr. Gowthaman Swaminathan",
    position: "Associate Professor",
    education: "Ph.D: North Carolina A&T State University",
    research: ["Polymers and composites", "Nanomaterials", "High temperature foams", "Experimental mechanics"],
    email: "gowthaman@iiitdm.ac.in",
    phone: "044-27476380",
    room: "119-F, Laboratory Block",
    image: "/placeholder.svg?key=6lpe3",
    publications: 38,
    projects: 6,
    students: 10,
    division: "Design Division",
  },
  {
    id: 4,
    name: "Prof. Jayabal K.",
    position: "Professor and Dean (Academics)",
    education: "Ph.D: IIT Madras",
    research: [
      "Finite Element Methods",
      "Material Modelling",
      "Smart Materials and Structures",
      "Biomechanics",
      "Thermoelectric devices",
    ],
    email: "jayabal@iiitdm.ac.in",
    phone: "+91-44-27476362",
    room: "119 – I, Lab Complex",
    image: "/placeholder.svg?key=6jkd6",
    publications: 78,
    projects: 15,
    students: 24,
    division: "Design Division",
  },
  {
    id: 5,
    name: "Prof. Jayavel S",
    position: "Professor and Dean (SRICCE and Planning)",
    education: "Ph.D: IIT Madras",
    research: [
      "Fluid and Thermal Sciences",
      "Computational Fluid Dynamics",
      "Heat Exchanger",
      "Wind Turbine",
      "Electronic Cooling",
    ],
    email: "sjv@iiitdm.ac.in",
    phone: "+91-44-27476352",
    room: "109F",
    image: "/placeholder.svg?key=b1v87",
    publications: 85,
    projects: 18,
    students: 26,
    division: "Thermal Engineering Division",
  },
  {
    id: 6,
    name: "Dr. P. Kalpana",
    position: "Associate Professor",
    education: "Ph.D: Indian Institute of Technology Madras",
    research: [
      "Smart Supply Chain management / IoT and Block chain",
      "Advanced Optimization Techniques",
      "Data Analytics/AI and ML",
    ],
    email: "kalpana@iiitdm.ac.in",
    phone: "04427476386",
    room: "219L",
    image: "/placeholder.svg?height=400&width=400&query=professional%20headshot%20of%20female%20indian%20professor",
    publications: 42,
    projects: 7,
    students: 14,
    division: "Smart Manufacturing Division",
  },
  {
    id: 7,
    name: "Dr. Karthick S",
    position: "Assistant Professor",
    education: "Ph.D: IIT Madras",
    research: [
      "Microfluidics and MEMS",
      "Convective heat transfer and Mixing",
      "Mobile Microrobots for drug delivery",
      "Bio-Microfluidics and Lab-on-Chip",
      "Droplet Microfluidics and Interfacial Phenomena",
      "Circulating tumour cells sorting technologies",
    ],
    email: "karthick@iiitdm.ac.in",
    phone: "+91 44 27476340, 07358722794",
    room: "119-C",
    image:
      "/placeholder.svg?height=400&width=400&query=professional%20headshot%20of%20young%20indian%20male%20professor",
    publications: 28,
    projects: 4,
    students: 9,
    division: "Thermal Engineering Division",
  },
  {
    id: 8,
    name: "Dr. Kashfull Orra",
    position: "Assistant Professor",
    education: "Ph.D: IIT Kanpur",
    research: [
      "Machining",
      "Theoretical modal analysis",
      "Machine tool dynamics and vibration analysis",
      "Monitoring and control of manufacturing processes",
      "Mathematical modeling and stochastic state estimation",
      "Advanced manufacturing process and machining of super alloys",
      "Surface modifications of bio-implant and product development",
      "Sustainable manufacturing and tribology analysis",
      "Friction stir welding",
    ],
    email: "orra@iiitdm.ac.in",
    room: "Cabin # 109L, Laboratory complex",
    image: "/placeholder.svg?height=400&width=400&query=professional%20headshot%20of%20male%20professor%20with%20beard",
    publications: 31,
    projects: 5,
    students: 7,
    division: "Smart Manufacturing Division",
  },
  {
    id: 9,
    name: "Dr. Kishor Kumar Gajrani",
    position: "Assistant Professor",
    education: "Ph.D: IIT Guwahati",
    research: [
      "Smart Manufacturing and Industry 4.0",
      "Green and Sustainable Machining Processes",
      "Advanced Machining Processes",
      "Micromanufacturing Processes",
      "Nano and Bio-Tribology",
      "Green Lubricants and Coolants",
      "Coatings",
    ],
    email: "g.kishor@iiitdm.ac.in",
    room: "108-L, First Floor, Laboratory Complex",
    image:
      "/placeholder.svg?height=400&width=400&query=professional%20headshot%20of%20young%20indian%20male%20professor",
    publications: 35,
    projects: 6,
    students: 11,
    division: "Smart Manufacturing Division",
  },
  {
    id: 10,
    name: "Dr. Nagaraj. M",
    position: "Assistant Professor",
    education: "Ph.D: NIT Trichy",
    research: [
      "Severe plastic deformation (SPD) on lightweight alloys",
      "Friction welding on similar and dissimilar alloys",
      "Surface modification on biomedical implants",
      "Wear, corrosion and Tribocorrosion analysis on ultrafine-grained alloys",
      "Design and fabrication of ECAP-processed biomedical implants",
    ],
    email: "nagaraj@iiitdm.ac.in",
    room: "308-F",
    image: "/placeholder.svg?key=vf5gs",
    publications: 25,
    projects: 4,
    students: 8,
    division: "Smart Manufacturing Division",
  },
  {
    id: 11,
    name: "Dr. Pandithevan P",
    position: "Associate Professor",
    education: "Ph.D: Indian Institute of Technology Guwahati",
    research: [
      "Experimental & Computational Orthopaedic Surgery, Surgineering",
      "Computer-Aided Diagnosis of Neuropathy",
      "Euclidean and Non-Euclidean based Health Monitoring of Cardiac Systems",
      "Computer – Aided Tissue Engineering",
      "Isogeometric Analysis & Finite Element Analysis",
      "Advanced Geometric Modelling & CAD",
      "Design for Additive Manufacturing",
    ],
    email: "ppthevan@iiitdm.ac.in",
    phone: "+91 44 2747 6351",
    room: "109 K, First Floor, Laboratory Complex",
    image:
      "/placeholder.svg?height=400&width=400&query=professional%20headshot%20of%20indian%20male%20professor%20with%20glasses",
    publications: 48,
    projects: 9,
    students: 15,
    division: "Design Division",
  },
  {
    id: 12,
    name: "Prof. Raja B",
    position: "Professor and Head of the Department",
    education: "Ph.D: College of Engg, Guindy, Anna University",
    research: [
      "Enhanced heat transfer",
      "Thermal measurements",
      "Electronic cooling systems",
      "Food Processing Techniques and Design",
      "New Product Development",
      "Energy Storage Devices",
    ],
    email: "rajab@iiitdm.ac.in",
    phone: "+91-44-27476355",
    room: "109H",
    image: "/placeholder.svg?key=bqgkx",
    publications: 92,
    projects: 22,
    students: 30,
    division: "Thermal Engineering Division",
  },
  {
    id: 13,
    name: "Dr. N. Rino Nelson",
    position: "Assistant Professor",
    education: "Ph.D: Indian Institute of Technology Madras",
    research: [
      "Computer Aided Engineering",
      "Finite Element Analysis",
      "Material Characterization",
      "Pressure Vessel Design",
      "Automotive Engine Design",
      "Structural and Dynamic design (Vibration Analysis)",
      "Six Sigma Methodology",
    ],
    email: "rino@iiitdm.ac.in",
    room: "308-I",
    image: "/placeholder.svg?key=rhdy2",
    publications: 29,
    projects: 5,
    students: 9,
    division: "Design Division",
  },
  {
    id: 14,
    name: "Dr. Senthilkumaran K",
    position: "Associate Professor",
    education: "Ph.D: IIT Delhi",
    research: ["Additive Manufacturing", "Sustainable Manufacturing", "Smart Manufacturing"],
    email: "skumaran@iiitdm.ac.in",
    phone: "+91-44-27476364",
    room: "#308 L, Laboratory Block",
    image: "/placeholder.svg?key=0psn0",
    publications: 45,
    projects: 8,
    students: 14,
    division: "Smart Manufacturing Division",
  },
  {
    id: 15,
    name: "Dr. SHAHUL HAMID KHAN",
    position: "Associate Professor",
    education: "Ph.D: National Institute of Technology (NIT), Trichy.",
    research: [
      "Environmentally Conscious Manufacturing",
      "Integrated management of the supply chain",
      "Logistics and Distribution Management",
      "Product Recovery and Remanufacturing",
      "Product Life-Cycle Management",
    ],
    email: "bshahul@iiitdm.ac.in",
    phone: "+91-44-27476344",
    image: "/placeholder.svg?key=rvzpk",
    publications: 41,
    projects: 7,
    students: 12,
    division: "Smart Manufacturing Division",
  },
  {
    id: 16,
    name: "Dr. Siva Prasad AVS",
    position: "Assistant Professor",
    education: "Ph.D: IIT Kanpur",
    research: ["Computational Continuum Mechanics", "Meshless methods", "Damage Mechanics"],
    email: "avs@iiitdm.ac.in",
    phone: "+91-44-27476385",
    room: "219-D, Laboratory Building",
    image: "/placeholder.svg?key=9oond",
    publications: 27,
    projects: 4,
    students: 7,
    division: "Design Division",
  },
  {
    id: 17,
    name: "Dr. Sreekumar M",
    position: "Professor",
    education: "Ph.D: IIT Madras",
    research: [
      "Robotics and Control",
      "Serial, Parallel, and Compliant Mechanisms",
      "Smart Materials and Smart Structures",
      "Medical Devices",
      "Fuzzy Control",
      "Biomimetics and Biomechanics",
      "AI, IoT, Smart Manufacturing",
      "Digital Reconstruction of Heritage Artifacts",
    ],
    email: "msk@iiitdm.ac.in",
    phone: "+91-44-2747 6357",
    image: "/placeholder.svg?key=yox79",
    publications: 68,
    projects: 14,
    students: 22,
    division: "Design Division",
  },
  {
    id: 18,
    name: "Dr. Shubhankar Chakraborty",
    position: "Assistant Professor",
    education: "Ph.D: Indian Institute of Technology Kharagpur",
    research: ["Heat Transfer", "Multiphase flow", "Multisensor measurement and data fusion", "image processing"],
    email: "shubhankar@iiitdm.ac.in",
    phone: "04427476370",
    room: "Laboratory Complex 308B",
    image: "/placeholder.svg?key=4x4t1",
    publications: 31,
    projects: 5,
    students: 9,
    division: "Thermal Engineering Division",
  },
  {
    id: 19,
    name: "Dr. Venkata Timmaraju Mallina",
    position: "Associate Professor",
    education: "Ph.D: Indian Institute of Technology Madras",
    research: [
      "Engineering Design with Polymers and Composites",
      "Fatigue and Fracture of Advanced Engineering Materials",
      "Mathematical Modeling of Materials Behavior",
      "Structural Optimization",
      "Fabrication of Continuous/Short Fiber Reinforced Thermoplastic Composite Products",
    ],
    email: "vtmallina@iiitdm.ac.in",
    phone: "+91-44-27476325",
    room: "L-308 D, Laboratory Block",
    image: "/placeholder.svg?key=2q6hv",
    publications: 39,
    projects: 7,
    students: 13,
    division: "Design Division",
  },
  {
    id: 20,
    name: "Dr. Vikash Kumar",
    position: "Assistant Professor",
    education: "Ph.D: IIT (ISM) Dhanbad",
    research: ["Turbulent flows", "Multiphase flows"],
    email: "vikashkumar@iiitdm.ac.in",
    room: "108J",
    image:
      "/placeholder.svg?height=400&width=400&query=professional%20headshot%20of%20young%20indian%20male%20professor",
    publications: 24,
    projects: 3,
    students: 6,
    division: "Thermal Engineering Division",
  },
]

// Faculty profile component
function FacultyProfile({ faculty, onClose }: { faculty: any; onClose: () => void }) {
  return (
    <div className="max-h-[80vh] overflow-y-auto">
      <div className="flex justify-end">
        <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-2 right-2">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="md:col-span-1">
          <div className="relative aspect-square overflow-hidden rounded-lg border-4 border-primary/20 shadow-lg">
            <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p className="text-sm">{faculty.email}</p>
              </div>
            </div>

            {faculty.phone && (
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <p className="text-sm">{faculty.phone}</p>
                </div>
              </div>
            )}

            {faculty.room && (
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Office</p>
                  <p className="text-sm">{faculty.room}</p>
                  {faculty.department && <p className="text-sm">{faculty.department}</p>}
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Division</p>
                <p className="text-sm">{faculty.division}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download className="h-3.5 w-3.5" />
              CV
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <ExternalLink className="h-3.5 w-3.5" />
              Google Scholar
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Share2 className="h-3.5 w-3.5" />
              Share Profile
            </Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-primary">{faculty.name}</h2>
          <p className="text-lg text-muted-foreground">{faculty.position}</p>
          <p className="text-sm mt-1">{faculty.education}</p>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <h3 className="text-2xl font-bold text-primary">{faculty.publications}</h3>
              <p className="text-sm text-muted-foreground">Publications</p>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <h3 className="text-2xl font-bold text-primary">{faculty.projects}</h3>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <h3 className="text-2xl font-bold text-primary">{faculty.students}</h3>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-primary mb-3">Research Interests</h3>
            <ul className="space-y-2">
              {faculty.research.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Tabs defaultValue="publications" className="mt-8">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="teaching">Teaching</TabsTrigger>
            </TabsList>
            <TabsContent value="publications" className="mt-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Recent Publications</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3">
                      <li className="border-l-2 border-primary/20 pl-4 py-1">
                        <p className="text-sm">
                          Kumar, A., et al. (2023). "Advanced materials for sustainable engineering applications."{" "}
                          <span className="italic">Journal of Materials Science</span>, 58(4), 1823-1845.
                        </p>
                      </li>
                      <li className="border-l-2 border-primary/20 pl-4 py-1">
                        <p className="text-sm">
                          Singh, R., {faculty.name.split(" ")[1]}, S., et al. (2022). "Computational modeling of fluid
                          dynamics in microchannels."{" "}
                          <span className="italic">International Journal of Heat and Mass Transfer</span>, 186, 122403.
                        </p>
                      </li>
                      <li className="border-l-2 border-primary/20 pl-4 py-1">
                        <p className="text-sm">
                          {faculty.name}, Patel, K., & Reddy, V. (2022). "Machine learning approaches for predicting
                          material properties." <span className="italic">Computational Materials Science</span>, 204,
                          111152.
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Journal Articles</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Total Journal Articles: {Math.floor(faculty.publications * 0.7)}
                    </p>
                    <Button variant="outline" size="sm">
                      View All Journal Articles
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Conference Papers</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Total Conference Papers: {Math.floor(faculty.publications * 0.3)}
                    </p>
                    <Button variant="outline" size="sm">
                      View All Conference Papers
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="projects" className="mt-4">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Sustainable Manufacturing Processes</CardTitle>
                    <CardDescription>Funded by DST | 2022-2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Development of energy-efficient and environmentally friendly manufacturing processes for the
                      automotive industry.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Advanced Materials for Aerospace Applications</CardTitle>
                    <CardDescription>Funded by DRDO | 2021-2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Research on lightweight, high-strength materials for next-generation aerospace components.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="teaching" className="mt-4">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Undergraduate Courses</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="text-sm">• ME101: Introduction to Mechanical Engineering</li>
                    <li className="text-sm">• ME204: Thermodynamics</li>
                    <li className="text-sm">• ME305: Design of Machine Elements</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Graduate Courses</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="text-sm">• ME501: Advanced Fluid Mechanics</li>
                    <li className="text-sm">• ME602: Computational Methods in Engineering</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export function FacultyContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDivision, setSelectedDivision] = useState("all")
  const [selectedPosition, setSelectedPosition] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Filter faculty based on search query and filters
  const filteredFaculty = facultyData.filter((faculty) => {
    const matchesSearch =
      faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.research.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase())) ||
      faculty.position.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDivision = selectedDivision === "all" || faculty.division === selectedDivision

    const matchesPosition = selectedPosition === "all" || faculty.position.includes(selectedPosition)

    return matchesSearch && matchesDivision && matchesPosition
  })

  // Handle faculty card click
  const handleFacultyClick = (faculty: any) => {
    setSelectedFaculty(faculty)
    setIsDialogOpen(true)
  }

  // Close dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <div className="container py-8 md:py-12">
      {/* Filters and search */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant={showFilters ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1"
            >
              <Filter className="h-4 w-4" />
              Filters
              {showFilters ? <ChevronUp className="h-3 w-3 ml-1" /> : <ChevronDown className="h-3 w-3 ml-1" />}
            </Button>

            <div className="relative">
              <Input
                type="text"
                placeholder="Search faculty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-[300px] pl-9"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">View:</span>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="flex items-center gap-1"
            >
              <Grid3X3 className="h-4 w-4" />
              Grid
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="flex items-center gap-1"
            >
              <List className="h-4 w-4" />
              List
            </Button>
          </div>
        </div>

        {/* Expandable filters */}
        {showFilters && (
          <div className="mt-4 p-4 border rounded-lg bg-background/50 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Division</label>
              <select
                className="w-full p-2 border rounded-md"
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
              >
                <option value="all">All Divisions</option>
                <option value="Design Division">Design Division</option>
                <option value="Smart Manufacturing Division">Smart Manufacturing Division</option>
                <option value="Thermal Engineering Division">Thermal Engineering Division</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Position</label>
              <select
                className="w-full p-2 border rounded-md"
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
              >
                <option value="all">All Positions</option>
                <option value="Professor">Professor</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSelectedDivision("all")
                  setSelectedPosition("all")
                  setSearchQuery("")
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Faculty count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredFaculty.length} of {facultyData.length} faculty members
        </p>
      </div>

      {/* Faculty grid view */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              onClick={() => handleFacultyClick(faculty)}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/70"></div>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm">View Profile</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                  {faculty.name}
                </h3>
                <p className="text-sm text-muted-foreground">{faculty.position}</p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {faculty.research.slice(0, 3).map((item: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs bg-primary/5">
                      {item.length > 20 ? item.substring(0, 20) + "..." : item}
                    </Badge>
                  ))}
                  {faculty.research.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-primary/5">
                      +{faculty.research.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-primary/70" />
                    <span className="text-xs">{faculty.publications} publications</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-primary/70" />
                    <span className="text-xs">{faculty.projects} projects</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Faculty list view */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {filteredFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="group flex flex-col md:flex-row gap-4 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-4"
              onClick={() => handleFacultyClick(faculty)}
            >
              <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-primary/20">
                <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                  {faculty.name}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-sm text-muted-foreground">
                  <span>{faculty.position}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{faculty.division}</span>
                </div>

                <div className="mt-2">
                  <p className="text-sm">{faculty.education}</p>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {faculty.research.slice(0, 4).map((item: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs bg-primary/5">
                      {item.length > 25 ? item.substring(0, 25) + "..." : item}
                    </Badge>
                  ))}
                  {faculty.research.length > 4 && (
                    <Badge variant="outline" className="text-xs bg-primary/5">
                      +{faculty.research.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex md:flex-col justify-between items-end gap-2 mt-3 md:mt-0">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4 text-primary/70" />
                  <span className="text-xs">{faculty.email}</span>
                </div>
                <Button variant="outline" size="sm" className="mt-auto">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results */}
      {filteredFaculty.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Search className="h-8 w-8 text-primary/50" />
          </div>
          <h3 className="text-xl font-medium">No faculty members found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSelectedDivision("all")
              setSelectedPosition("all")
              setSearchQuery("")
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* Faculty profile dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Faculty Profile</DialogTitle>
          </DialogHeader>
          {selectedFaculty && <FacultyProfile faculty={selectedFaculty} onClose={handleCloseDialog} />}
        </DialogContent>
      </Dialog>
    </div>
  )
}
