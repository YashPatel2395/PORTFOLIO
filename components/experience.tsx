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
      "Built responsive, modular UI components for the Freedom Dashboard, ensuring cross-browser compatibility, accessibility, and scalability, deployed and operated within Google Cloud Platform (GCP) environments.",
      "Integrated backend services, RESTful APIs, and WebSocket-based real-time communication, enabling low-latency chat, live notifications,and dynamic event-driven updates.",
      "Designed and implemented real-time video conferencing functionality, enabling stable multi-user sessions with up to 10 concurrent participants, ensuring smooth audio/video communication and synchronization.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Variance InfoTech Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "Jun 2024 – Dec 2024",
    logo: "/Varience.png",
    responsibilities: [
      "Engineered scalable React-based web applications used by 1K+ active users, emphasizing clean UI, reusable components, performance optimization, and state management best practices.",
      "Partnered with UI/UX designers to convert Figma designs into responsive layouts with Tailwind CSS, improving usability, visual consistency, and mobile responsiveness.",
      "Integrated and consumed REST APIs to support real-time dashboards, asynchronous data flows, and interactive product features, ensuring robustness and low-latency updates.",
    ],
  },
  {
    title: "Full-Stack Intern",
    company: "Arihant Satiate",
    location: "Ahmedabad, India",
    period: "Jan 2023 – Nov 2023",
    logo: "/Arihant_Satiate.jpeg",
    responsibilities: [
      "Delivered end-to-end full-stack features using React, Node.js, and MySQL in Google Cloud–hosted environments, contributing to frontend UI, backend services, and database-driven functionality..",
      "Improved application performance and user experience by optimizing cloud-served static assets, API request handling, and client–server interactions, reducing load times and enhancing responsiveness.",
      "Developed reusable, modular components following clean architecture and maintainability best practices, validated through testing across cloud-based deployments.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Rethinksoft",
    location: "Gandhinagar, India",
    period: "Mar 2022 – Sep 2022",
    logo: "/rethinksoft_logo.jpeg",
    responsibilities: [
      " Contributed to full-stack development using Django, Vue.js, and Node.js, delivering end-to-end features across frontend, backend services, and RESTful APIs, supporting a responsive and scalable web application.",
      "Designed and managed database models via ORM, and optimized SQL queries (indexing, query refactoring, performance tuning), reducing average response times by 40% and improving query execution efficiency by 30%.",
      "Supported OLTP workflows, ensuring data integrity, transactional consistency, and reliability, contributing to 25% higher API throughput and maintaining 99.9% transaction success rate through debugging and performance improvements.",
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
