import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-secondary" />,
      title: "Email",
      content: "hod-me@iiitdm.ac.in",
    },
    {
      icon: <Phone className="h-5 w-5 text-secondary" />,
      title: "Phone",
      content: "+91-44-27476355",
    },
    {
      icon: <MapPin className="h-5 w-5 text-secondary" />,
      title: "Address",
      content:
        "Department of Mechanical Engineering\nIIITDM Kancheepuram\nVandalur-Kelambakkam Road\nChennai - 600127, Tamil Nadu, India",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90">Get in Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact Us</h2>
            <p className="text-white/80 mb-8">
              Have questions about our programs, research, or admissions? Reach out to us and our team will be happy to
              assist you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start gap-4 group hover-lift">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{contact.title}</h3>
                    <p className="text-white/80 whitespace-pre-line">{contact.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-white">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full rounded-md border border-white/20 bg-white/5 p-3 text-white placeholder:text-white/50"
                ></textarea>
              </div>
              <Button className="w-full bg-secondary text-white hover:bg-secondary/90">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
