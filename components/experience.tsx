import { Card } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Graduate Assistant",
      period: "August 2025 - Present",
      company: "SUNY Polytechnic Institute | College of Engineering",
      location: "Utica, New York",
      highlights: [
        {
          icon: "🌐",
          title: "Freedom Dashboard Development",
          description:
            "Contributing to the development and enhancement of Freedom Dashboard, a web-based platform focused on privacy and decentralization.",
        },
        {
          icon: "🔧",
          title: "Website Features & Maintenance",
          description:
            "Designing, updating, and maintaining core website features, ensuring secure, scalable, and user-friendly modules.",
        },
        {
          icon: "🐛",
          title: "Technical Improvements & Testing",
          description:
            "Collaborating on technical improvements, debugging, and testing to support system reliability and performance.",
        },
        {
          icon: "📚",
          title: "Modern Web Technologies",
          description:
            "Expanding expertise in modern web technologies and applying software engineering best practices while supporting ongoing academic research.",
        },
      ],
    },
    {
      title: "Software Engineer",
      period: "June 2024 - December 2024",
      company: "Variance InfoTech Pvt Ltd",
      location: "Ahmedabad, India",
      highlights: [
        {
          icon: "🏗️",
          title: "Scalable Application Development",
          description:
            "Designed and developed scalable, high-performance applications while following clean architecture and robust coding practices.",
        },
        {
          icon: "⚡",
          title: "API & Database Optimization",
          description:
            "Implemented and optimized APIs, databases, and modular components, delivering production-ready solutions across the SDLC.",
        },
        {
          icon: "🤝",
          title: "Agile Team Collaboration",
          description:
            "Collaborated in Agile teams, contributing to sprint planning, code reviews, debugging, and feature delivery.",
        },
        {
          icon: "📈",
          title: "Performance Tuning",
          description:
            "Improved system efficiency and user experience through performance tuning, innovative enhancements, and strict code quality standards.",
        },
      ],
    },
    {
      title: "Full-Stack Intern",
      period: "January 2023 - November 2023",
      company: "Arihant Satiate",
      location: "Ahmedabad, India",
      highlights: [
        {
          icon: "💻",
          title: "Web Platform Development",
          description:
            "Contributed to the development of the company's core web platform, focusing on building intuitive and responsive user interfaces.",
        },
        {
          icon: "🎨",
          title: "Front-End Development",
          description:
            "Spearheaded front-end development initiatives to improve functionality and performance with responsive layouts for seamless cross-device experiences.",
        },
        {
          icon: "👥",
          title: "Cross-Functional Collaboration",
          description:
            "Collaborated with cross-functional teams to deliver features under tight deadlines and supported successful platform launches.",
        },
        {
          icon: "🛠️",
          title: "Technology Stack Expertise",
          description:
            "Strengthened expertise in HTML, CSS, JavaScript, React, Tailwind CSS, and TypeScript, with additional exposure to Node.js, MySQL, and TypeORM.",
        },
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 sm:py-24 bg-muted/20 relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#80808005_49%,#80808005_51%,transparent_52%)] bg-[size:20px_20px]" />

      <div className="section-container relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight">Experience</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-foreground/10" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-foreground via-foreground/50 to-transparent hidden md:block ml-6" />

          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 hover:shadow-2xl transition-all duration-500 border-2 hover:border-foreground/30 relative md:ml-16 group overflow-hidden"
            >
              <div className="absolute -left-20 top-10 w-12 h-12 rounded-full bg-background border-4 border-foreground hidden md:flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <div className="w-4 h-4 rounded-full bg-foreground animate-pulse" />
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-foreground/5 -mr-12 -mt-12 rotate-45 group-hover:scale-150 transition-transform duration-500" />

              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-foreground/90 transition-colors leading-tight">
                  {exp.title}
                </h3>
                {exp.period && (
                  <div className="inline-block px-4 py-1.5 bg-foreground text-background text-sm font-bold mb-3">
                    {exp.period}
                  </div>
                )}
                <p className="text-base text-muted-foreground font-medium">
                  {exp.company} • {exp.location}
                </p>
              </div>

              <div className="space-y-8 relative z-10">
                {exp.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex gap-6 group/item">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-muted rounded-lg group-hover/item:bg-foreground group-hover/item:text-background transition-all duration-300">
                      <span className="text-2xl">{highlight.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base mb-3 leading-tight">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
