import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "State University of New York Polytechnic Institute",
      location: "Utica, New York",
      period: "January 2025 - Present",
      gpa: "",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
      ],
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "GLS University",
      location: "Gujarat, India",
      period: "April 2021 - May 2024",
      gpa: "",
      coursework: [
        "Programming Fundamentals",
        "Web Development",
        "Database Management",
        "Operating Systems",
        "Software Development",
        "Computer Architecture",
      ],
    },
  ]

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,#80808005_49%,#80808005_51%,transparent_52%)] bg-[size:30px_30px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#80808008_0%,transparent_70%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex items-center gap-6 mb-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/20 to-foreground/40" />
          <div className="relative group">
            <div className="absolute -inset-4 bg-foreground/5 blur-xl group-hover:bg-foreground/10 transition-all duration-500" />
            <h2 className="text-5xl md:text-7xl font-bold text-center tracking-tight relative">Education</h2>
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-foreground/20 to-foreground/40" />
        </div>

        <div className="space-y-16">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {index < education.length - 1 && (
                <div className="absolute left-1/2 -bottom-16 w-px h-16 bg-gradient-to-b from-foreground/30 to-transparent" />
              )}

              <Card className="p-10 md:p-14 hover:shadow-2xl transition-all duration-500 border-2 hover:border-foreground/40 group relative overflow-hidden bg-background/50 backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-40 h-40 border-t-4 border-r-4 border-foreground/10 group-hover:border-foreground/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-40 h-40 border-b-4 border-l-4 border-foreground/10 group-hover:border-foreground/30 transition-all duration-500" />

                <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-10">
                    <div className="flex items-start justify-between gap-4 mb-8">
                      <Badge
                        variant="outline"
                        className="text-base font-bold px-6 py-3 border-2 hover:bg-foreground hover:text-background transition-all"
                      >
                        {index === 0 ? "Master's Degree" : "Bachelor's Degree"}
                      </Badge>
                      <Badge variant="secondary" className="text-sm px-4 py-2 font-medium">
                        {edu.period}
                      </Badge>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold mb-6 group-hover:text-foreground/90 transition-colors leading-tight text-balance">
                      {edu.degree}
                    </h3>

                    <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/40 to-transparent my-8" />

                    <div className="grid md:grid-cols-2 gap-6 text-base text-muted-foreground">
                      <div className="space-y-2">
                        <p className="font-bold text-foreground text-xl">{edu.institution}</p>
                        <p className="font-medium text-lg">{edu.location}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-6 text-2xl flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-foreground" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.coursework.map((course, cIndex) => (
                        <Badge
                          key={cIndex}
                          variant="secondary"
                          className="px-5 py-2.5 text-sm hover:bg-foreground hover:text-background transition-all duration-300 cursor-default font-medium border-2 border-transparent hover:border-foreground hover:scale-105"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
