import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const experiences = [
  {
    title: "Graduate Assistant",
    company: "SUNY Polytechnic Institute — College of Engineering",
    location: "Utica, New York",
    period: "Aug 2025 – Present",
    logo: "/SUNY_POLY.jpeg",
    responsibilities: [
      "Built responsive and modular UI components for the Freedom Dashboard, developed and operated on Google Cloud Platform.",
      "Integrated backend APIs and WebSocket channels to enable seamless real-time chat and notifications.",
      "Improved UI rendering performance by optimizing state management and reducing unnecessary re-renders.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Variance InfoTech Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "Jun 2024 – Dec 2024",
    logo: "/Varience.png",
    responsibilities: [
      "Developed production-quality React applications used by 1K+ users, delivering clean UI and smooth user interactions.",
      "Collaborated with design teams to convert Figma prototypes into responsive UI with Tailwind CSS.",
      "Built and consumed REST APIs for real-time dashboards and data-driven product features.",
    ],
  },
  {
    title: "Full-Stack Intern",
    company: "Arihant Satiate",
    location: "Ahmedabad, India",
    period: "Jan 2023 – Nov 2023",
    logo: "/Arihant_Satiate.jpeg",
    responsibilities: [
      "Delivered end-to-end features using React, Node.js, and MySQL on Google Cloud–hosted environments.",
      "Streamlined UX flows and reduced load times by optimizing cloud-served assets and requests.",
      "implemented reusable components tested across cloud-based deployments.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance">Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-2 hover:border-accent/30 bg-card/50 backdrop-blur-sm group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative rounded-xl overflow-hidden bg-white p-2 shadow-lg ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-muted-foreground mb-2">{exp.company}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">📍 {exp.location}</p>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="text-sm sm:text-base px-4 sm:px-6 py-1.5 sm:py-2 shadow-md self-start whitespace-nowrap"
                >
                  {exp.period}
                </Badge>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 sm:gap-4 group/item">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2 group-hover/item:scale-150 transition-transform duration-300" />
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{resp}</p>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
