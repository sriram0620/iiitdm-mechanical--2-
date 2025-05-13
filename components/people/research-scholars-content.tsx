"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Filter,
  Grid,
  List,
  Calendar,
  Search,
  X,
  User,
  Mail,
  Phone,
  MapPin,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Research scholar data
const scholars = [
  { id: 1, rollNumber: "MDM17D001", name: "Madhanagopal M", batch: "2017", researchArea: "Smart Manufacturing" },
  { id: 2, rollNumber: "MDM17D004", name: "K SIVAKUMAR", batch: "2017", researchArea: "Thermal Engineering" },
  { id: 3, rollNumber: "MDM17D010", name: "Reginald Elvis", batch: "2017", researchArea: "Design Engineering" },
  { id: 4, rollNumber: "MDM18D001", name: "KARTHEESAN S", batch: "2018", researchArea: "Robotics & Control" },
  { id: 5, rollNumber: "MDM18D005", name: "G Gopi", batch: "2018", researchArea: "Materials Science" },
  { id: 6, rollNumber: "MDM18D006", name: "SRINIVASAGAN M", batch: "2018", researchArea: "Thermal Engineering" },
  { id: 7, rollNumber: "MDM18D009", name: "PENUMURU DURGA PRASAD", batch: "2018", researchArea: "Smart Manufacturing" },
  { id: 8, rollNumber: "MDM19D003", name: "Jagatheeshkumar S", batch: "2019", researchArea: "Design Engineering" },
  { id: 9, rollNumber: "MDM19D005", name: "Rajalingam A", batch: "2019", researchArea: "Fluid Mechanics" },
  { id: 10, rollNumber: "MDM19D006", name: "RAJENDRA KUMAR R T P", batch: "2019", researchArea: "Materials Science" },
  { id: 11, rollNumber: "MDM19D007", name: "Ravindranaidu Ganta", batch: "2019", researchArea: "Smart Manufacturing" },
  { id: 12, rollNumber: "MDM19D008", name: "Saravanan M K", batch: "2019", researchArea: "Thermal Engineering" },
  { id: 13, rollNumber: "MDM20D001", name: "Anton Kumanan S.A.", batch: "2020", researchArea: "Robotics & Control" },
  { id: 14, rollNumber: "MDM20D002", name: "DEIVA GANESH A", batch: "2020", researchArea: "Design Engineering" },
  { id: 15, rollNumber: "MDM20D003", name: "KALIMUTHU T", batch: "2020", researchArea: "Materials Science" },
  { id: 16, rollNumber: "MDM20D004", name: "MANIKANDANBABU K", batch: "2020", researchArea: "Smart Manufacturing" },
  { id: 17, rollNumber: "MDM20D005", name: "Murugesan M", batch: "2020", researchArea: "Thermal Engineering" },
  { id: 18, rollNumber: "MDM20D006", name: "Pallavi Paturu", batch: "2020", researchArea: "Fluid Mechanics" },
  { id: 19, rollNumber: "MDM20D007", name: "Pothi Raj R", batch: "2020", researchArea: "Design Engineering" },
  { id: 20, rollNumber: "MDM20D008", name: "Prakash A", batch: "2020", researchArea: "Smart Manufacturing" },
  { id: 21, rollNumber: "MDM20D009", name: "SOLAIPRAKASH V", batch: "2020", researchArea: "Thermal Engineering" },
  { id: 22, rollNumber: "MDM20D010", name: "VARUN KUMAR", batch: "2020", researchArea: "Robotics & Control" },
  { id: 23, rollNumber: "MDM20D011", name: "Cibi", batch: "2020", researchArea: "Materials Science" },
  { id: 24, rollNumber: "MDM20D014", name: "Dinesh Kumar S", batch: "2020", researchArea: "Design Engineering" },
  { id: 25, rollNumber: "MDM20D017", name: "Visvanathan K", batch: "2020", researchArea: "Smart Manufacturing" },
  {
    id: 26,
    rollNumber: "ME21D0001",
    name: "Nagendra Kumar Chaurasia",
    batch: "2021",
    researchArea: "Thermal Engineering",
  },
  { id: 27, rollNumber: "ME21D0002", name: "JASEEM SAJIDH N A", batch: "2021", researchArea: "Fluid Mechanics" },
  { id: 28, rollNumber: "ME21D0003", name: "Jeyapradhap T", batch: "2021", researchArea: "Design Engineering" },
  { id: 29, rollNumber: "ME21D0004", name: "Deep Patel", batch: "2021", researchArea: "Smart Manufacturing" },
  { id: 30, rollNumber: "ME21D0005", name: "M.SALEEM", batch: "2021", researchArea: "Materials Science" },
  { id: 31, rollNumber: "ME21D0008", name: "GOPI E", batch: "2021", researchArea: "Thermal Engineering" },
  { id: 32, rollNumber: "ME21D0010", name: "Suganth V", batch: "2021", researchArea: "Robotics & Control" },
  { id: 33, rollNumber: "ME21D0011", name: "Arun Kumar Bambam", batch: "2021", researchArea: "Design Engineering" },
  { id: 34, rollNumber: "ME21M1003", name: "Ram Mukilan C", batch: "2021", researchArea: "Smart Manufacturing" },
  { id: 35, rollNumber: "ME22D0001", name: "S AntonyRaja", batch: "2022", researchArea: "Thermal Engineering" },
  { id: 36, rollNumber: "ME22D0002", name: "Prameet Vats", batch: "2022", researchArea: "Fluid Mechanics" },
  { id: 37, rollNumber: "ME22D0004", name: "Syed Naveed ul Meiraj", batch: "2022", researchArea: "Materials Science" },
  { id: 38, rollNumber: "ME22D0005", name: "E.KANNAN", batch: "2022", researchArea: "Design Engineering" },
]

// Research area colors
const areaColors = {
  "Smart Manufacturing": "bg-blue-100 text-blue-800",
  "Thermal Engineering": "bg-red-100 text-red-800",
  "Design Engineering": "bg-green-100 text-green-800",
  "Robotics & Control": "bg-purple-100 text-purple-800",
  "Materials Science": "bg-amber-100 text-amber-800",
  "Fluid Mechanics": "bg-cyan-100 text-cyan-800",
}

// Scholar Card Component
function ScholarCard({ scholar, onClick }) {
  const firstLetter = scholar.name.charAt(0)
  const colorClass = areaColors[scholar.researchArea] || "bg-gray-100 text-gray-800"

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl cursor-pointer"
    >
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all"></div>

      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
          {firstLetter}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">{scholar.name}</h3>
          <p className="text-sm text-muted-foreground">{scholar.rollNumber}</p>

          <div className="mt-3 flex items-center gap-2">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
              {scholar.researchArea}
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
              {scholar.batch}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-primary/20 to-transparent"></div>

      <div className="mt-4 flex justify-between">
        <span className="text-xs text-muted-foreground">View Profile</span>
        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </div>
  )
}

// Scholar List Item Component
function ScholarListItem({ scholar, onClick }) {
  const colorClass = areaColors[scholar.researchArea] || "bg-gray-100 text-gray-800"

  return (
    <div
      onClick={onClick}
      className="group flex items-center justify-between rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition-all hover:border-primary/20 hover:shadow-md cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
          {scholar.name.charAt(0)}
        </div>

        <div>
          <h3 className="font-medium text-primary group-hover:text-secondary transition-colors">{scholar.name}</h3>
          <p className="text-xs text-muted-foreground">{scholar.rollNumber}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`hidden md:inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}
        >
          {scholar.researchArea}
        </span>
        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
          {scholar.batch}
        </span>
        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </div>
  )
}

// Batch Group Component
function BatchGroup({ batch, scholars, onScholarClick }) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-primary">Batch {batch}</h2>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
          {scholars.length} Scholars
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {scholars.map((scholar) => (
          <ScholarCard key={scholar.id} scholar={scholar} onClick={() => onScholarClick(scholar)} />
        ))}
      </div>
    </div>
  )
}

// Scholar Detail Modal Component
function ScholarDetail({ scholar }) {
  if (!scholar) return null

  const colorClass = areaColors[scholar.researchArea] || "bg-gray-100 text-gray-800"

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-1">
        <div className="flex flex-col items-center">
          <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 text-primary text-4xl font-bold">
            {scholar.name.charAt(0)}
          </div>

          <h2 className="text-center text-xl font-semibold text-primary">{scholar.name}</h2>
          <p className="text-center text-sm text-muted-foreground">{scholar.rollNumber}</p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
              {scholar.researchArea}
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
              Batch {scholar.batch}
            </span>
          </div>

          <div className="mt-6 w-full space-y-3 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">PhD Scholar</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{scholar.rollNumber.toLowerCase()}@iiitdm.ac.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">+91 XXXXXXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Research Scholar Lab, IIITDM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        <Tabs defaultValue="research">
          <TabsList className="w-full">
            <TabsTrigger value="research" className="flex-1">
              Research
            </TabsTrigger>
            <TabsTrigger value="publications" className="flex-1">
              Publications
            </TabsTrigger>
            <TabsTrigger value="education" className="flex-1">
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="research" className="mt-4 space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium text-primary">Research Focus</h3>
              <p className="mt-2 text-muted-foreground">
                Specialized research in {scholar.researchArea} with focus on advanced methodologies and innovative
                applications.
              </p>

              <h4 className="mt-4 font-medium text-primary">Research Topics</h4>
              <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                <li>Advanced applications in {scholar.researchArea}</li>
                <li>Computational modeling and simulation</li>
                <li>Experimental validation and testing</li>
                <li>Industry-relevant problem solving</li>
              </ul>

              <h4 className="mt-4 font-medium text-primary">Supervisor</h4>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                  DS
                </div>
                <div>
                  <p className="font-medium text-primary">Dr. Sample Supervisor</p>
                  <p className="text-xs text-muted-foreground">Professor, Department of Mechanical Engineering</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium text-primary">Research Progress</h3>

              <div className="mt-4 space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                    <h4 className="font-medium text-primary">Coursework Completed</h4>
                    <p className="text-sm text-muted-foreground">
                      Successfully completed all required coursework with excellent grades.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                    <h4 className="font-medium text-primary">Comprehensive Examination</h4>
                    <p className="text-sm text-muted-foreground">
                      Passed comprehensive examination demonstrating mastery of the subject area.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-primary/20"></div>
                    <h4 className="font-medium text-primary">Research Proposal</h4>
                    <p className="text-sm text-muted-foreground">
                      Research proposal approved by the doctoral committee.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-0 h-1/2 w-0.5 bg-primary/20"></div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary/40 bg-white"></div>
                    <h4 className="font-medium text-primary/60">Thesis Submission</h4>
                    <p className="text-sm text-muted-foreground">Expected completion in the coming academic year.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="publications" className="mt-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-primary">Publications</h3>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="font-medium text-primary">3</span>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-gray-100 p-3 shadow-sm">
                  <h4 className="font-medium text-primary">Sample Research Paper Title in {scholar.researchArea}</h4>
                  <p className="text-sm text-muted-foreground">International Journal of Mechanical Engineering, 2023</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      Journal Article
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Published
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-100 p-3 shadow-sm">
                  <h4 className="font-medium text-primary">
                    Innovative Approaches in {scholar.researchArea}: A Case Study
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    International Conference on Mechanical Engineering, 2022
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      Conference Paper
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Published
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-100 p-3 shadow-sm">
                  <h4 className="font-medium text-primary">
                    Experimental Investigation of Advanced Techniques in {scholar.researchArea}
                  </h4>
                  <p className="text-sm text-muted-foreground">Journal of Engineering Research, 2021</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      Journal Article
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Published
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium text-primary">Education</h3>

              <div className="mt-4 space-y-6">
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-primary/20"></div>
                    <h4 className="font-medium text-primary">PhD in Mechanical Engineering</h4>
                    <p className="text-sm text-muted-foreground">IIITDM Kancheepuram</p>
                    <p className="text-xs text-muted-foreground">20{scholar.batch} - Present</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                    <h4 className="font-medium text-primary">M.Tech in Mechanical Engineering</h4>
                    <p className="text-sm text-muted-foreground">Sample University</p>
                    <p className="text-xs text-muted-foreground">
                      20{Number.parseInt(scholar.batch) - 2} - 20{scholar.batch}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-0 h-1/2 w-0.5 bg-primary/20"></div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                    <h4 className="font-medium text-primary">B.Tech in Mechanical Engineering</h4>
                    <p className="text-sm text-muted-foreground">Sample Institute of Technology</p>
                    <p className="text-xs text-muted-foreground">
                      20{Number.parseInt(scholar.batch) - 6} - 20{Number.parseInt(scholar.batch) - 2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export function ResearchScholarsContent() {
  const [view, setView] = useState("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBatch, setSelectedBatch] = useState("all")
  const [selectedArea, setSelectedArea] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedScholar, setSelectedScholar] = useState(null)

  // Get unique batches
  const batches = [...new Set(scholars.map((scholar) => scholar.batch))].sort()

  // Get unique research areas
  const researchAreas = [...new Set(scholars.map((scholar) => scholar.researchArea))].sort()

  // Filter scholars based on search term, batch, and research area
  const filteredScholars = scholars.filter((scholar) => {
    const matchesSearch =
      scholar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesBatch = selectedBatch === "all" || scholar.batch === selectedBatch
    const matchesArea = selectedArea === "all" || scholar.researchArea === selectedArea

    return matchesSearch && matchesBatch && matchesArea
  })

  // Group scholars by batch for batch view
  const scholarsByBatch = batches.reduce((acc, batch) => {
    const batchScholars = filteredScholars.filter((scholar) => scholar.batch === batch)
    if (batchScholars.length > 0) {
      acc[batch] = batchScholars
    }
    return acc
  }, {})

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredScholars.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredScholars.length / itemsPerPage)

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Handle items per page change
  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number.parseInt(value))
    setCurrentPage(1)
  }

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  // Handle batch filter
  const handleBatchFilter = (value) => {
    setSelectedBatch(value)
    setCurrentPage(1)
  }

  // Handle research area filter
  const handleAreaFilter = (value) => {
    setSelectedArea(value)
    setCurrentPage(1)
  }

  // Handle scholar click
  const handleScholarClick = (scholar) => {
    setSelectedScholar(scholar)
  }

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("")
    setSelectedBatch("all")
    setSelectedArea("all")
    setCurrentPage(1)
  }

  return (
    <section className="bg-white py-12">
      <div className="container">
        {/* Filters and View Controls */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant={view === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("grid")}
              className={view === "grid" ? "bg-primary text-white" : ""}
            >
              <Grid className="mr-1 h-4 w-4" />
              Grid
            </Button>
            <Button
              variant={view === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("list")}
              className={view === "list" ? "bg-primary text-white" : ""}
            >
              <List className="mr-1 h-4 w-4" />
              List
            </Button>
            <Button
              variant={view === "batch" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("batch")}
              className={view === "batch" ? "bg-primary text-white" : ""}
            >
              <Calendar className="mr-1 h-4 w-4" />
              By Batch
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search scholars..."
                className="pl-10 w-full sm:w-[200px] md:w-[300px]"
                value={searchTerm}
                onChange={handleSearch}
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                  onClick={() => setSearchTerm("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="relative">
              <Filter className="mr-1 h-4 w-4" />
              Filters
              {(selectedBatch !== "all" || selectedArea !== "all") && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                  {(selectedBatch !== "all" ? 1 : 0) + (selectedArea !== "all" ? 1 : 0)}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mb-6 rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-muted-foreground">Batch</label>
                  <Select value={selectedBatch} onValueChange={handleBatchFilter}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select batch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Batches</SelectItem>
                      {batches.map((batch) => (
                        <SelectItem key={batch} value={batch}>
                          Batch {batch}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-muted-foreground">Research Area</label>
                  <Select value={selectedArea} onValueChange={handleAreaFilter}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select research area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Areas</SelectItem>
                      {researchAreas.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button variant="outline" size="sm" onClick={resetFilters}>
                <X className="mr-1 h-4 w-4" />
                Reset Filters
              </Button>
            </div>
          </div>
        )}

        {/* Results Summary */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-primary">{filteredScholars.length}</span> research scholars
            {selectedBatch !== "all" && (
              <>
                {" "}
                from batch <span className="font-medium text-primary">{selectedBatch}</span>
              </>
            )}
            {selectedArea !== "all" && (
              <>
                {" "}
                in <span className="font-medium text-primary">{selectedArea}</span>
              </>
            )}
          </p>

          {view !== "batch" && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Show:</span>
              <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue placeholder="12" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="36">36</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* No Results */}
        {filteredScholars.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-primary">No scholars found</h3>
            <p className="mt-2 text-center text-muted-foreground">
              No research scholars match your search criteria. Try adjusting your filters.
            </p>
            <Button variant="outline" size="sm" className="mt-4" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
        )}

        {/* Grid View */}
        {view === "grid" && filteredScholars.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentItems.map((scholar) => (
              <ScholarCard key={scholar.id} scholar={scholar} onClick={() => handleScholarClick(scholar)} />
            ))}
          </div>
        )}

        {/* List View */}
        {view === "list" && filteredScholars.length > 0 && (
          <div className="space-y-3">
            {currentItems.map((scholar) => (
              <ScholarListItem key={scholar.id} scholar={scholar} onClick={() => handleScholarClick(scholar)} />
            ))}
          </div>
        )}

        {/* Batch View */}
        {view === "batch" && filteredScholars.length > 0 && (
          <div>
            {Object.entries(scholarsByBatch)
              .sort(([batchA], [batchB]) => batchB.localeCompare(batchA))
              .map(([batch, scholars]) => (
                <BatchGroup key={batch} batch={batch} scholars={scholars} onScholarClick={handleScholarClick} />
              ))}
          </div>
        )}

        {/* Pagination */}
        {(view === "grid" || view === "list") && filteredScholars.length > 0 && (
          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
              <span className="font-medium">
                {indexOfLastItem > filteredScholars.length ? filteredScholars.length : indexOfLastItem}
              </span>{" "}
              of <span className="font-medium">{filteredScholars.length}</span> results
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => paginate(1)}
                disabled={currentPage === 1}
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNumber

                if (totalPages <= 5) {
                  pageNumber = i + 1
                } else if (currentPage <= 3) {
                  pageNumber = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i
                } else {
                  pageNumber = currentPage - 2 + i
                }

                return (
                  <Button
                    key={i}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    size="icon"
                    className={`h-8 w-8 ${currentPage === pageNumber ? "bg-primary text-white" : ""}`}
                    onClick={() => paginate(pageNumber)}
                  >
                    {pageNumber}
                  </Button>
                )
              })}

              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => paginate(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Scholar Detail Modal */}
        <Dialog open={!!selectedScholar} onOpenChange={(open) => !open && setSelectedScholar(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-primary">Scholar Profile</DialogTitle>
            </DialogHeader>
            <ScholarDetail scholar={selectedScholar} />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
