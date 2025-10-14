import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "State University of New York Polytechnic Institute",
    location: "Utica, New York",
    period: "January 2025 – Present",
    status: "In Progress",
    description:
      "Graduate student specializing in Machine Learning and AI with expertise in building scalable software solutions. Proficient in Python, TensorFlow, PyTorch, and modern web technologies.",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNY%20POLY-JY2okiFC8KgMU9akyFMc8Bn2ueU02d.jpeg",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "GLS University",
    location: "Ahmedabad, India",
    period: "April 2021 – May 2024",
    status: "Completed",
    description:
      "Comprehensive undergraduate program covering computer science fundamentals, software development, and application design. Built strong foundation in programming, databases, and web technologies.",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GLS%20University-TEL4yWNT1AkmkT6JUWjgvuCBkDGPr3.jpg",
  },
]

export function Education() {
  return (
    <section
      id="education"
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance">Education</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Academic background and qualifications</p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-2 hover:border-accent/30 bg-card/50 backdrop-blur-sm group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md ring-2 ring-primary/10 group-hover:ring-primary/30 overflow-hidden">
                  <Image
                    src={edu.logo || "/placeholder.svg"}
                    alt={`${edu.institution} logo`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4 gap-3">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-base sm:text-lg font-semibold text-foreground">{edu.institution}</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{edu.location}</p>
                    </div>
                    <div className="flex gap-3">
                      <Badge
                        variant={edu.status === "In Progress" ? "default" : "secondary"}
                        className="text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-1.5"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{edu.period}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
