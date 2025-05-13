"use client"

import { useState, useEffect } from "react"
import {
  BookOpen,
  FileText,
  Award,
  Calendar,
  Search,
  Filter,
  Grid,
  List,
  Download,
  Copy,
  ExternalLink,
  ChevronDown,
  X,
  Check,
  ArrowUpRight,
  TrendingUp,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Publication type definitions
type PublicationType = "journal" | "conference" | "book" | "patent"
type Publication = {
  id: string
  title: string
  authors: string[]
  journal?: string
  conference?: string
  book?: string
  patentOffice?: string
  year: number
  volume?: string
  issue?: string
  pages?: string
  doi?: string
  url?: string
  abstract: string
  keywords: string[]
  citations: number
  type: PublicationType
  impactFactor?: number
}

// Sample publications data
const publicationsData: Publication[] = [
  {
    id: "pub-001",
    title: "Advanced Thermal Management Systems for Electric Vehicle Battery Packs",
    authors: ["Rajesh Kumar", "Priya Sharma", "Anil Gupta"],
    journal: "Journal of Thermal Science and Engineering Applications",
    year: 2023,
    volume: "15",
    issue: "3",
    pages: "031009-031021",
    doi: "10.1115/1.4053789",
    url: "https://example.com/publication1",
    abstract:
      "This paper presents a novel thermal management system for lithium-ion battery packs in electric vehicles. The proposed system utilizes phase change materials and active cooling to maintain optimal temperature ranges, extending battery life and improving performance under extreme conditions.",
    keywords: ["thermal management", "electric vehicles", "battery cooling", "phase change materials"],
    citations: 12,
    type: "journal",
    impactFactor: 3.2,
  },
  {
    id: "pub-002",
    title: "Machine Learning Approaches for Predictive Maintenance in Smart Manufacturing",
    authors: ["Sanjay Patel", "Meera Nair", "Vikram Singh"],
    conference: "International Conference on Smart Manufacturing and Automation",
    year: 2023,
    pages: "145-152",
    doi: "10.1109/ICSMA.2023.9876543",
    url: "https://example.com/publication2",
    abstract:
      "This paper explores various machine learning algorithms for predictive maintenance in smart manufacturing environments. Comparative analysis of supervised and unsupervised learning methods is presented with case studies from automotive component manufacturing.",
    keywords: ["predictive maintenance", "machine learning", "smart manufacturing", "industry 4.0"],
    citations: 8,
    type: "conference",
  },
  {
    id: "pub-003",
    title: "Biomimetic Design Principles for Next-Generation Robotic Manipulators",
    authors: ["Deepa Krishnan", "Rahul Mehta"],
    journal: "Bioinspiration & Biomimetics",
    year: 2022,
    volume: "17",
    issue: "4",
    pages: "046007",
    doi: "10.1088/1748-3190/ac8f12",
    url: "https://example.com/publication3",
    abstract:
      "This research investigates biomimetic design principles derived from natural organisms for application in robotic manipulators. The paper presents a novel manipulator design inspired by elephant trunks, offering enhanced dexterity and adaptability for complex manipulation tasks.",
    keywords: ["biomimetics", "robotics", "manipulators", "bioinspired design"],
    citations: 15,
    type: "journal",
    impactFactor: 2.8,
  },
  {
    id: "pub-004",
    title: "Computational Fluid Dynamics Analysis of Micro-channel Heat Sinks for Electronics Cooling",
    authors: ["Arjun Nair", "Priya Sharma", "Karthik Raman"],
    journal: "International Journal of Heat and Mass Transfer",
    year: 2022,
    volume: "185",
    pages: "122968",
    doi: "10.1016/j.ijheatmasstransfer.2022.122968",
    url: "https://example.com/publication4",
    abstract:
      "This paper presents a comprehensive CFD analysis of various micro-channel geometries for electronics cooling applications. Novel channel designs are proposed and evaluated for thermal performance and pressure drop characteristics under different flow conditions.",
    keywords: ["CFD", "micro-channels", "electronics cooling", "heat transfer"],
    citations: 23,
    type: "journal",
    impactFactor: 4.5,
  },
  {
    id: "pub-005",
    title: "Sustainable Manufacturing Processes for Biodegradable Polymer Composites",
    authors: ["Neha Gupta", "Rajesh Kumar", "Sanjay Patel"],
    conference: "International Conference on Sustainable Materials Processing and Manufacturing",
    year: 2022,
    pages: "78-85",
    doi: "10.1016/j.promfg.2022.03.012",
    url: "https://example.com/publication5",
    abstract:
      "This research explores environmentally friendly manufacturing processes for biodegradable polymer composites. The paper discusses extrusion, injection molding, and compression molding techniques optimized for PLA and PHA-based composites with natural fiber reinforcements.",
    keywords: ["sustainable manufacturing", "biodegradable polymers", "green composites", "natural fibers"],
    citations: 11,
    type: "conference",
  },
  {
    id: "pub-006",
    title: "Novel Metamaterial Structures for Vibration Isolation in Precision Manufacturing Equipment",
    authors: ["Vikram Singh", "Deepa Krishnan"],
    journal: "Journal of Sound and Vibration",
    year: 2021,
    volume: "512",
    pages: "116389",
    doi: "10.1016/j.jsv.2021.116389",
    url: "https://example.com/publication6",
    abstract:
      "This paper presents the design, analysis, and experimental validation of novel metamaterial structures for vibration isolation in precision manufacturing equipment. The proposed structures demonstrate superior broadband vibration attenuation compared to conventional isolation systems.",
    keywords: ["metamaterials", "vibration isolation", "precision manufacturing", "acoustic bandgaps"],
    citations: 31,
    type: "journal",
    impactFactor: 3.7,
  },
  {
    id: "pub-007",
    title: "Additive Manufacturing of Patient-Specific Orthopedic Implants: Design Methodology and Validation",
    authors: ["Rahul Mehta", "Meera Nair", "Arjun Nair"],
    conference: "ASME International Manufacturing Science and Engineering Conference",
    year: 2021,
    pages: "V001T01A022",
    doi: "10.1115/MSEC2021-63547",
    url: "https://example.com/publication7",
    abstract:
      "This research presents a comprehensive methodology for designing and manufacturing patient-specific orthopedic implants using additive manufacturing. The paper covers the entire workflow from medical imaging to final implant production with clinical validation.",
    keywords: ["additive manufacturing", "patient-specific implants", "orthopedics", "medical devices"],
    citations: 19,
    type: "conference",
  },
  {
    id: "pub-008",
    title: "Energy-Efficient Control Strategies for Industrial Robots in Automotive Assembly Lines",
    authors: ["Karthik Raman", "Neha Gupta"],
    journal: "Robotics and Computer-Integrated Manufacturing",
    year: 2021,
    volume: "67",
    pages: "102042",
    doi: "10.1016/j.rcim.2020.102042",
    url: "https://example.com/publication8",
    abstract:
      "This paper proposes novel energy-efficient control strategies for industrial robots in automotive assembly lines. The research demonstrates energy savings of up to 28% through trajectory optimization and idle-state management without compromising production throughput.",
    keywords: ["energy efficiency", "industrial robots", "automotive assembly", "trajectory optimization"],
    citations: 27,
    type: "journal",
    impactFactor: 5.1,
  },
  {
    id: "pub-009",
    title: "Mechanical Behavior of Additively Manufactured Lattice Structures Under Dynamic Loading",
    authors: ["Anil Gupta", "Sanjay Patel", "Deepa Krishnan"],
    journal: "Additive Manufacturing",
    year: 2020,
    volume: "36",
    pages: "101523",
    doi: "10.1016/j.addma.2020.101523",
    url: "https://example.com/publication9",
    abstract:
      "This study investigates the mechanical behavior of various additively manufactured lattice structures under dynamic loading conditions. The research combines experimental testing and finite element analysis to characterize energy absorption and failure mechanisms.",
    keywords: ["additive manufacturing", "lattice structures", "dynamic loading", "energy absorption"],
    citations: 42,
    type: "journal",
    impactFactor: 7.2,
  },
  {
    id: "pub-010",
    title: "Method and Apparatus for Rapid Tooling Using Hybrid Additive-Subtractive Manufacturing",
    authors: ["Rajesh Kumar", "Vikram Singh"],
    patentOffice: "United States Patent and Trademark Office",
    year: 2020,
    pages: "US10842148B2",
    url: "https://example.com/publication10",
    abstract:
      "This patent describes a novel method and apparatus for rapid tooling that combines additive and subtractive manufacturing processes. The invention enables the production of complex tooling with internal cooling channels and optimized surface finish in reduced time.",
    keywords: ["rapid tooling", "hybrid manufacturing", "additive manufacturing", "patents"],
    citations: 5,
    type: "patent",
  },
  {
    id: "pub-011",
    title: "Topology Optimization for Lightweight Automotive Components Using Crashworthiness Criteria",
    authors: ["Priya Sharma", "Rahul Mehta", "Karthik Raman"],
    journal: "Structural and Multidisciplinary Optimization",
    year: 2020,
    volume: "62",
    issue: "2",
    pages: "741-755",
    doi: "10.1007/s00158-020-02520-8",
    url: "https://example.com/publication11",
    abstract:
      "This paper presents a novel approach to topology optimization for automotive components that incorporates crashworthiness criteria. The methodology is demonstrated through case studies of front crash structures with significant weight reduction while maintaining safety performance.",
    keywords: ["topology optimization", "automotive", "crashworthiness", "lightweight design"],
    citations: 36,
    type: "journal",
    impactFactor: 3.9,
  },
  {
    id: "pub-012",
    title: "Handbook of Advanced Manufacturing Technologies for Sustainable Production",
    authors: ["Arjun Nair", "Neha Gupta", "Sanjay Patel", "Meera Nair"],
    book: "Springer International Publishing",
    year: 2019,
    pages: "1-458",
    doi: "10.1007/978-3-030-45913-0",
    url: "https://example.com/publication12",
    abstract:
      "This comprehensive handbook covers advanced manufacturing technologies for sustainable production. Topics include green manufacturing processes, energy-efficient systems, waste reduction strategies, and life cycle assessment methodologies for manufacturing operations.",
    keywords: ["sustainable manufacturing", "green technologies", "energy efficiency", "handbook"],
    citations: 87,
    type: "book",
  },
]

export function ResearchPublicationsContent() {
  const [publications, setPublications] = useState<Publication[]>(publicationsData)
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>(publicationsData)
  const [searchQuery, setSearchQuery] = useState("")
  const [yearFilter, setYearFilter] = useState<string>("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("year-desc")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [copiedDOI, setCopiedDOI] = useState<string | null>(null)
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  // Years for filter dropdown
  const years = Array.from(new Set(publications.map((pub) => pub.year))).sort((a, b) => b - a)

  // Apply filters and search
  useEffect(() => {
    let result = [...publications]

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (pub) =>
          pub.title.toLowerCase().includes(query) ||
          pub.abstract.toLowerCase().includes(query) ||
          pub.authors.some((author) => author.toLowerCase().includes(query)) ||
          pub.keywords.some((keyword) => keyword.toLowerCase().includes(query)),
      )
    }

    // Apply year filter
    if (yearFilter !== "all") {
      result = result.filter((pub) => pub.year === Number.parseInt(yearFilter))
    }

    // Apply type filter
    if (typeFilter !== "all") {
      result = result.filter((pub) => pub.type === typeFilter)
    }

    // Apply sorting
    switch (sortBy) {
      case "year-desc":
        result.sort((a, b) => b.year - a.year)
        break
      case "year-asc":
        result.sort((a, b) => a.year - b.year)
        break
      case "citations-desc":
        result.sort((a, b) => b.citations - a.citations)
        break
      case "title-asc":
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    setFilteredPublications(result)
  }, [publications, searchQuery, yearFilter, typeFilter, sortBy])

  // Copy citation to clipboard
  const copyToClipboard = (doi: string) => {
    navigator.clipboard.writeText(doi)
    setCopiedDOI(doi)
    setTimeout(() => setCopiedDOI(null), 2000)
  }

  // Generate citation in different formats
  const generateCitation = (pub: Publication, format: string) => {
    let citation = ""

    switch (format) {
      case "apa":
        citation = `${pub.authors.join(", ")}. (${pub.year}). ${pub.title}. `
        if (pub.type === "journal") {
          citation += `${pub.journal}, ${pub.volume}${pub.issue ? `(${pub.issue})` : ""}, ${pub.pages}.`
        } else if (pub.type === "conference") {
          citation += `In ${pub.conference} (pp. ${pub.pages}).`
        } else if (pub.type === "book") {
          citation += `${pub.book}.`
        }
        if (pub.doi) citation += ` https://doi.org/${pub.doi}`
        break

      case "mla":
        citation = `${pub.authors[0].split(" ").pop()}, ${pub.authors[0].split(" ")[0]}`
        if (pub.authors.length > 1) {
          citation += `, et al`
        }
        citation += `. "${pub.title}." `
        if (pub.type === "journal") {
          citation += `${pub.journal}, vol. ${pub.volume}, ${pub.issue ? `no. ${pub.issue}, ` : ""}${pub.year}, pp. ${pub.pages}.`
        } else if (pub.type === "conference") {
          citation += `${pub.conference}, ${pub.year}, pp. ${pub.pages}.`
        } else if (pub.type === "book") {
          citation += `${pub.book}, ${pub.year}.`
        }
        break

      case "ieee":
        citation = `${pub.authors
          .map((author) => {
            const names = author.split(" ")
            return `${names[0][0]}. ${names.slice(1).join(" ")}`
          })
          .join(", ")}, "${pub.title}," `
        if (pub.type === "journal") {
          citation += `${pub.journal}, vol. ${pub.volume}, ${pub.issue ? `no. ${pub.issue}, ` : ""}pp. ${pub.pages}, ${pub.year}.`
        } else if (pub.type === "conference") {
          citation += `in ${pub.conference}, ${pub.year}, pp. ${pub.pages}.`
        } else if (pub.type === "book") {
          citation += `${pub.book}, ${pub.year}.`
        }
        break

      default:
        citation = `${pub.authors.join(", ")}. (${pub.year}). ${pub.title}.`
    }

    return citation
  }

  // Get publication type icon
  const getPublicationTypeIcon = (type: PublicationType) => {
    switch (type) {
      case "journal":
        return <BookOpen className="h-5 w-5" />
      case "conference":
        return <FileText className="h-5 w-5" />
      case "book":
        return <BookOpen className="h-5 w-5" />
      case "patent":
        return <Award className="h-5 w-5" />
    }
  }

  // Get publication type label
  const getPublicationTypeLabel = (type: PublicationType) => {
    switch (type) {
      case "journal":
        return "Journal Article"
      case "conference":
        return "Conference Paper"
      case "book":
        return "Book/Chapter"
      case "patent":
        return "Patent"
    }
  }

  // Get publication venue
  const getPublicationVenue = (pub: Publication) => {
    if (pub.journal) return pub.journal
    if (pub.conference) return pub.conference
    if (pub.book) return pub.book
    if (pub.patentOffice) return pub.patentOffice
    return ""
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb navigation */}
        <nav className="mb-8 flex items-center text-sm text-gray-500">
          <a href="/" className="hover:text-primary">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/research" className="hover:text-primary">
            Research
          </a>
          <span className="mx-2">/</span>
          <span className="text-primary font-medium">Publications</span>
        </nav>

        {/* Main content area */}
        <div className="space-y-8">
          {/* Search and filter bar */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="relative w-full md:w-auto flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search publications..."
                className="pl-10 pr-4 py-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className={`h-3 w-3 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </Button>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] h-9">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year-desc">Newest First</SelectItem>
                  <SelectItem value="year-asc">Oldest First</SelectItem>
                  <SelectItem value="citations-desc">Most Cited</SelectItem>
                  <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center border rounded-md overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-none px-3 ${viewMode === "grid" ? "bg-primary text-white" : "text-gray-500"}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-none px-3 ${viewMode === "list" ? "bg-primary text-white" : "text-gray-500"}`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Expanded filters */}
          {showFilters && (
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Publication Type</label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="journal">Journal Articles</SelectItem>
                    <SelectItem value="conference">Conference Papers</SelectItem>
                    <SelectItem value="book">Books & Chapters</SelectItem>
                    <SelectItem value="patent">Patents</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Publication Year</label>
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  className="text-gray-500"
                  onClick={() => {
                    setYearFilter("all")
                    setTypeFilter("all")
                    setSearchQuery("")
                  }}
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear Filters
                </Button>
              </div>
            </div>
          )}

          {/* Results count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">{filteredPublications.length}</span> of{" "}
              <span className="font-medium">{publications.length}</span> publications
            </p>

            <Tabs defaultValue="all" className="w-auto">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all" className="text-xs">
                  All
                </TabsTrigger>
                <TabsTrigger value="journal" className="text-xs">
                  Journals
                </TabsTrigger>
                <TabsTrigger value="conference" className="text-xs">
                  Conferences
                </TabsTrigger>
                <TabsTrigger value="other" className="text-xs">
                  Other
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Publications list */}
          {filteredPublications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-gray-100 p-3 mb-4">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No publications found</h3>
              <p className="text-gray-500 max-w-md">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setYearFilter("all")
                  setTypeFilter("all")
                  setSearchQuery("")
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : viewMode === "grid" ? (
            // Grid view
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPublications.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="p-5 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`p-1.5 rounded-full ${
                            pub.type === "journal"
                              ? "bg-blue-100 text-blue-600"
                              : pub.type === "conference"
                                ? "bg-purple-100 text-purple-600"
                                : pub.type === "book"
                                  ? "bg-amber-100 text-amber-600"
                                  : "bg-green-100 text-green-600"
                          }`}
                        >
                          {getPublicationTypeIcon(pub.type)}
                        </span>
                        <span className="text-xs font-medium text-gray-500">{getPublicationTypeLabel(pub.type)}</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">
                        <Calendar className="h-3 w-3" />
                        {pub.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-3 italic line-clamp-1">{getPublicationVenue(pub)}</p>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{pub.abstract}</p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {pub.keywords.slice(0, 3).map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-gray-50">
                            {keyword}
                          </Badge>
                        ))}
                        {pub.keywords.length > 3 && (
                          <Badge variant="outline" className="text-xs bg-gray-50">
                            +{pub.keywords.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                                  <TrendingUp className="h-3 w-3" />
                                  {pub.citations} citations
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Cited {pub.citations} times</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          {pub.impactFactor && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex items-center gap-1 text-xs font-medium text-gray-500 ml-2">
                                    <Award className="h-3 w-3" />
                                    IF: {pub.impactFactor.toFixed(1)}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Impact Factor: {pub.impactFactor.toFixed(2)}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>

                        <div className="flex items-center gap-1">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-2 text-xs"
                                onClick={() => setSelectedPublication(pub)}
                              >
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-xl">{pub.title}</DialogTitle>
                                <DialogDescription>
                                  {pub.authors.join(", ")} • {pub.year}
                                </DialogDescription>
                              </DialogHeader>

                              <div className="mt-4 space-y-4">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <Badge
                                    className={`
                                    ${
                                      pub.type === "journal"
                                        ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
                                        : pub.type === "conference"
                                          ? "bg-purple-100 text-purple-600 hover:bg-purple-200"
                                          : pub.type === "book"
                                            ? "bg-amber-100 text-amber-600 hover:bg-amber-200"
                                            : "bg-green-100 text-green-600 hover:bg-green-200"
                                    }
                                  `}
                                  >
                                    {getPublicationTypeLabel(pub.type)}
                                  </Badge>

                                  {pub.doi && (
                                    <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                      <span>DOI: {pub.doi}</span>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-5 w-5 p-0 ml-1"
                                        onClick={() => copyToClipboard(pub.doi!)}
                                      >
                                        {copiedDOI === pub.doi ? (
                                          <Check className="h-3 w-3 text-green-500" />
                                        ) : (
                                          <Copy className="h-3 w-3 text-gray-500" />
                                        )}
                                      </Button>
                                    </div>
                                  )}

                                  <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                    <Calendar className="h-3 w-3" />
                                    <span>{pub.year}</span>
                                  </div>

                                  <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                    <TrendingUp className="h-3 w-3" />
                                    <span>{pub.citations} citations</span>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-sm font-medium text-gray-700 mb-1">Published in</h4>
                                  <p className="text-sm text-gray-600">
                                    {getPublicationVenue(pub)}
                                    {pub.volume && `, Volume ${pub.volume}`}
                                    {pub.issue && `, Issue ${pub.issue}`}
                                    {pub.pages && `, Pages ${pub.pages}`}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="text-sm font-medium text-gray-700 mb-1">Abstract</h4>
                                  <p className="text-sm text-gray-600">{pub.abstract}</p>
                                </div>

                                <div>
                                  <h4 className="text-sm font-medium text-gray-700 mb-1">Authors</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {pub.authors.map((author, idx) => (
                                      <Badge key={idx} variant="secondary" className="text-xs">
                                        {author}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-sm font-medium text-gray-700 mb-1">Keywords</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {pub.keywords.map((keyword, idx) => (
                                      <Badge key={idx} variant="outline" className="text-xs">
                                        {keyword}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div className="pt-2 border-t">
                                  <h4 className="text-sm font-medium text-gray-700 mb-2">Cite this publication</h4>
                                  <Tabs defaultValue="apa">
                                    <TabsList className="bg-gray-100 mb-2">
                                      <TabsTrigger value="apa" className="text-xs">
                                        APA
                                      </TabsTrigger>
                                      <TabsTrigger value="mla" className="text-xs">
                                        MLA
                                      </TabsTrigger>
                                      <TabsTrigger value="ieee" className="text-xs">
                                        IEEE
                                      </TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="apa" className="mt-0">
                                      <div className="relative">
                                        <div className="bg-gray-50 p-3 rounded-md text-xs text-gray-600 font-mono">
                                          {generateCitation(pub, "apa")}
                                        </div>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="absolute top-2 right-2 h-6 w-6 p-0"
                                          onClick={() => copyToClipboard(generateCitation(pub, "apa"))}
                                        >
                                          <Copy className="h-3 w-3 text-gray-500" />
                                        </Button>
                                      </div>
                                    </TabsContent>
                                    <TabsContent value="mla" className="mt-0">
                                      <div className="relative">
                                        <div className="bg-gray-50 p-3 rounded-md text-xs text-gray-600 font-mono">
                                          {generateCitation(pub, "mla")}
                                        </div>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="absolute top-2 right-2 h-6 w-6 p-0"
                                          onClick={() => copyToClipboard(generateCitation(pub, "mla"))}
                                        >
                                          <Copy className="h-3 w-3 text-gray-500" />
                                        </Button>
                                      </div>
                                    </TabsContent>
                                    <TabsContent value="ieee" className="mt-0">
                                      <div className="relative">
                                        <div className="bg-gray-50 p-3 rounded-md text-xs text-gray-600 font-mono">
                                          {generateCitation(pub, "ieee")}
                                        </div>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="absolute top-2 right-2 h-6 w-6 p-0"
                                          onClick={() => copyToClipboard(generateCitation(pub, "ieee"))}
                                        >
                                          <Copy className="h-3 w-3 text-gray-500" />
                                        </Button>
                                      </div>
                                    </TabsContent>
                                  </Tabs>
                                </div>

                                <div className="flex justify-between pt-2">
                                  {pub.url && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="text-primary border-primary hover:bg-primary/10"
                                      onClick={() => window.open(pub.url, "_blank")}
                                    >
                                      <ExternalLink className="h-4 w-4 mr-1" />
                                      View Publication
                                    </Button>
                                  )}

                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="outline" size="sm">
                                        <Download className="h-4 w-4 mr-1" />
                                        Download
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                      <DropdownMenuItem>PDF</DropdownMenuItem>
                                      <DropdownMenuItem>BibTeX</DropdownMenuItem>
                                      <DropdownMenuItem>RIS</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // List view
            <div className="space-y-4">
              {filteredPublications.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 group"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`p-1.5 rounded-full ${
                              pub.type === "journal"
                                ? "bg-blue-100 text-blue-600"
                                : pub.type === "conference"
                                  ? "bg-purple-100 text-purple-600"
                                  : pub.type === "book"
                                    ? "bg-amber-100 text-amber-600"
                                    : "bg-green-100 text-green-600"
                            }`}
                          >
                            {getPublicationTypeIcon(pub.type)}
                          </span>
                          <span className="text-xs font-medium text-gray-500">{getPublicationTypeLabel(pub.type)}</span>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">
                          <Calendar className="h-3 w-3" />
                          {pub.year}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>

                      <p className="text-sm text-gray-500 mb-2 italic">{getPublicationVenue(pub)}</p>

                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{pub.abstract}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {pub.keywords.slice(0, 4).map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-gray-50">
                            {keyword}
                          </Badge>
                        ))}
                        {pub.keywords.length > 4 && (
                          <Badge variant="outline" className="text-xs bg-gray-50">
                            +{pub.keywords.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col items-center justify-between md:justify-start gap-4 md:w-48 md:border-l md:pl-4">
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-primary">{pub.citations}</div>
                        <div className="text-xs text-gray-500">Citations</div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full"
                              onClick={() => setSelectedPublication(pub)}
                            >
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-xl">{pub.title}</DialogTitle>
                              <DialogDescription>
                                {pub.authors.join(", ")} • {pub.year}
                              </DialogDescription>
                            </DialogHeader>

                            <div className="mt-4 space-y-4">
                              <div className="flex flex-wrap gap-2 items-center">
                                <Badge
                                  className={`
                                  ${
                                    pub.type === "journal"
                                      ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
                                      : pub.type === "conference"
                                        ? "bg-purple-100 text-purple-600 hover:bg-purple-200"
                                        : pub.type === "book"
                                          ? "bg-amber-100 text-amber-600 hover:bg-amber-200"
                                          : "bg-green-100 text-green-600 hover:bg-green-200"
                                  }
                                `}
                                >
                                  {getPublicationTypeLabel(pub.type)}
                                </Badge>

                                {pub.doi && (
                                  <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                    <span>DOI: {pub.doi}</span>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-5 w-5 p-0 ml-1"
                                      onClick={() => copyToClipboard(pub.doi!)}
                                    >
                                      {copiedDOI === pub.doi ? (
                                        <Check className="h-3 w-3 text-green-500" />
                                      ) : (
                                        <Copy className="h-3 w-3 text-gray-500" />
                                      )}
                                    </Button>
                                  </div>
                                )}

                                <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                  <Calendar className="h-3 w-3" />
                                  <span>{pub.year}</span>
                                </div>

                                <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                  <TrendingUp className="h-3 w-3" />
                                  <span>{pub.citations} citations</span>
                                </div>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Published in</h4>
                                <p className="text-sm text-gray-600">
                                  {getPublicationVenue(pub)}
                                  {pub.volume && `, Volume ${pub.volume}`}
                                  {pub.issue && `, Issue ${pub.issue}`}
                                  {pub.pages && `, Pages ${pub.pages}`}
                                </p>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Abstract</h4>
                                <p className="text-sm text-gray-600">{pub.abstract}</p>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Authors</h4>
                                <div className="flex flex-wrap gap-2">
                                  {pub.authors.map((author, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                      {author}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Keywords</h4>
                                <div className="flex flex-wrap gap-2">
                                  {pub.keywords.map((keyword, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {keyword}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="pt-2 border-t">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Cite this publication</h4>
                                <Tabs defaultValue="apa">
                                  <TabsList className="bg-gray-100 mb-2">
                                    <TabsTrigger value="apa" className="text-xs">
                                      APA
                                    </TabsTrigger>
                                    <TabsTrigger value="mla" className="text-xs">
                                      MLA
                                    </TabsTrigger>
                                    <TabsTrigger value="ieee" className="text-xs">
                                      IEEE
                                    </TabsTrigger>
                                  </TabsList>
                                  <TabsContent value="apa" className="mt-0">
                                    <div className="relative">
                                      <div className="bg-gray-50 p-3 rounded-md text-xs text-gray-600 font-mono">
                                        {generateCitation(pub, "apa")}
                                      </div>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="absolute top-2 right-2 h-6 w-6 p-0"
                                        onClick={() => copyToClipboard(generateCitation(pub, "apa"))}
                                      >
                                        <Copy className="h-3 w-3 text-gray-500" />
                                      </Button>
                                    </div>
                                  </TabsContent>
                                  <TabsContent value="mla" className="mt-0">
                                    <div className="relative">
                                      <div className="bg-gray-50 p-3 rounded-md text-xs text-gray-600 font-mono">
                                        {generateCitation(pub, "mla")}
                                      </div>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="absolute top-2 right-2 h-6 w-6 p-0"
                                        onClick={() => copyToClipboard(generateCitation(pub, "mla"))}
                                      >
                                        <Copy className="h-3 w-3 text-gray-500" />
                                      </Button>
                                    </div>
                                  </TabsContent>
                                  <TabsContent value="ieee" className="mt-0">
                                    <div className="relative">
                                      <div className="bg-gray-50 p-3 rounded-md text-xs text-gray-600 font-mono">
                                        {generateCitation(pub, "ieee")}
                                      </div>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="absolute top-2 right-2 h-6 w-6 p-0"
                                        onClick={() => copyToClipboard(generateCitation(pub, "ieee"))}
                                      >
                                        <Copy className="h-3 w-3 text-gray-500" />
                                      </Button>
                                    </div>
                                  </TabsContent>
                                </Tabs>
                              </div>

                              <div className="flex justify-between pt-2">
                                {pub.url && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-primary border-primary hover:bg-primary/10"
                                    onClick={() => window.open(pub.url, "_blank")}
                                  >
                                    <ExternalLink className="h-4 w-4 mr-1" />
                                    View Publication
                                  </Button>
                                )}

                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm">
                                      <Download className="h-4 w-4 mr-1" />
                                      Download
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent>
                                    <DropdownMenuItem>PDF</DropdownMenuItem>
                                    <DropdownMenuItem>BibTeX</DropdownMenuItem>
                                    <DropdownMenuItem>RIS</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>PDF</DropdownMenuItem>
                            <DropdownMenuItem>BibTeX</DropdownMenuItem>
                            <DropdownMenuItem>RIS</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Publication metrics */}
          <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Publication Metrics</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Publications by year */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Publications by Year</h3>
                  <div className="h-64 relative">
                    {/* This would be a chart in a real implementation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
                        <p className="text-gray-400 text-sm">Publication trend chart would appear here</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Citations by publication type */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Citations by Publication Type</h3>
                  <div className="h-64 relative">
                    {/* This would be a chart in a real implementation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
                        <p className="text-gray-400 text-sm">Citation distribution chart would appear here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top collaborators section */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Top Research Collaborators</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Collaborator cards would go here */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">University {i}</h4>
                      <p className="text-xs text-gray-500">{10 + i} joint publications</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-4 mx-auto block">
                View All Collaborators
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Export and download section */}
          <div className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Need the complete publication data?</h3>
                <p className="text-gray-600">Export our research publications in various formats for your reference</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="bg-white">
                  <Download className="mr-2 h-4 w-4" />
                  BibTeX
                </Button>
                <Button variant="outline" className="bg-white">
                  <Download className="mr-2 h-4 w-4" />
                  CSV
                </Button>
                <Button variant="default">
                  <Download className="mr-2 h-4 w-4" />
                  Complete Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
