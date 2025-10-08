import { Card } from "@/components/ui/card"

export function About() {
  const skills = [
    {
      category: "Data/ML",
      items: "NumPy, Pandas, scikit-learn, TensorFlow, PyTorch, Matplotlib, Plotly",
      icon: "🧠",
    },
    {
      category: "Web/App Development",
      items: "React.js, Node.js, Express.js, Django, Flask, HTML5, CSS3, Tailwind CSS",
      icon: "💻",
    },
    {
      category: "Programming",
      items: "Python, Java, C++, C, Javascript",
      icon: "{ }",
    },
    {
      category: "Databases",
      items: "MySQL, PostgreSQL, MongoDB, SQLite",
      icon: "🗄️",
    },
    {
      category: "Tools",
      items: "Git/GitHub, Jupyter Notebook, Google Colab, VS Code, Docker, Postman, Vercel, AWS",
      icon: "⚙️",
    },
    {
      category: "Soft Skills",
      items: "Project Management, Research & Documentation, Problem-Solving, Teamwork, Adaptability",
      icon: "🤝",
    },
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#80808008_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#80808008_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/20 to-foreground/40" />
          <div className="relative group">
            <div className="absolute -inset-4 bg-foreground/5 blur-xl group-hover:bg-foreground/10 transition-all duration-500" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight relative px-4">
              About Me
            </h2>
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-foreground/20 to-foreground/40" />
        </div>

        <div className="mb-16 sm:mb-24 max-w-5xl mx-auto relative">
          <div className="absolute -left-3 sm:-left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-foreground via-foreground/50 to-transparent" />
          <div className="absolute -left-4 sm:-left-8 top-0 w-3 h-3 rounded-full bg-foreground animate-pulse" />

          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Computer Science Graduate Student
            </h3>

            <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-foreground to-transparent" />

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Graduate student in Computer Science with a strong focus on{" "}
              <span className="font-semibold text-foreground">Machine Learning and AI</span>, skilled in Python,
              TensorFlow, and PyTorch.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Experienced in applying data science and statistical methods, and proficient in Full-Stack Web Development
              using React.js, Node.js, and Django. Passionate about developing innovative solutions that bridge the gap
              between cutting-edge AI research and practical applications.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-transparent rounded-3xl" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {skills.map((skill, index) => (
              <Card
                key={skill.category}
                className="p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-foreground/40 group relative overflow-hidden bg-background/50 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/5 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#80808020,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-foreground/10 group-hover:border-foreground/30 transition-all duration-500 group-hover:w-24 group-hover:h-24" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-foreground/10 group-hover:border-foreground/30 transition-all duration-500 group-hover:w-24 group-hover:h-24" />

                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-125 transition-transform duration-500 origin-left">
                    {skill.icon}
                  </div>

                  <h4 className="font-bold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 group-hover:text-foreground transition-colors">
                    {skill.category}
                  </h4>

                  <div className="h-0.5 w-12 sm:w-16 bg-foreground/30 mb-4 sm:mb-6 group-hover:w-full group-hover:bg-foreground transition-all duration-500" />

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {skill.items}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
