import { Card } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Data/ML",
      subtitle: "NumPy, Pandas, scikit-learn, TensorFlow, PyTorch, Matplotlib, Plotly",
      description:
        "Feature Engineering, Model Evaluation & Optimization for building and deploying machine learning solutions.",
    },
    {
      title: "Web/App Development",
      subtitle: "React.js, Node.js, Express.js, Django, Flask, HTML5, CSS3, Tailwind CSS",
      description: "Building modern web applications with REST APIs and WebSockets for real-time functionality.",
    },
    {
      title: "Programming",
      subtitle: "Python, Java, C++, C, Javascript",
      description:
        "Proficient in multiple programming languages for various application domains and system development.",
    },
    {
      title: "Databases",
      subtitle: "MySQL, PostgreSQL, MongoDB, SQLite",
      description: "Designing and managing relational and NoSQL databases for scalable applications.",
    },
    {
      title: "Tools",
      subtitle: "Git/GitHub, Jupyter Notebook, Google Colab, VS Code, Conda, Docker, Postman",
      description:
        "Utilizing modern development tools and environments for efficient software development and deployment.",
    },
    {
      title: "Cloud & Deployment",
      subtitle: "Vercel, AWS (basic)",
      description: "Deploying and managing applications on cloud platforms with basic AWS knowledge.",
    },
    {
      title: "Soft Skills",
      subtitle: "Project Management, Research & Documentation, Time Management",
      description: "Problem-Solving, Teamwork, and Adaptability in fast-paced development environments.",
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-bold text-center tracking-tight">Technical Skills</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-foreground/10" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((skill, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-foreground/30 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold group-hover:text-foreground/90 transition-colors leading-tight">
                      {skill.title}
                    </h3>
                  </div>
                </div>

                <div className="mb-4 pl-18">
                  <div className="h-px w-full bg-foreground/10 mb-4 group-hover:bg-foreground/30 transition-colors" />
                  <p className="text-base font-bold text-muted-foreground">{skill.subtitle}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed pl-18">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
