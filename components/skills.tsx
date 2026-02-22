import { Card } from "@/components/ui/card"
import { Brain, Database, Wrench, Code2, Sparkles, Layers } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "Java", "C++", "C"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Layers,
    title: "Frameworks",
    items: ["React.js", "Node.js", "Express.js", "Django", "Flask" , "Vue.Js"],
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["GCP","Git", "Docker", "Postman", "Vercel", "Jupyter", "Google Colab"],
    color: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-500",
  },
  {
    icon: Brain,
    title: "Data/ML",
    items: [
      "NumPy",
      "Pandas",
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Matplotlib",
      "Feature Engineering",
      "Model Evaluation",
    ],
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Sparkles,
    title: "Concepts",
    items: ["REST APIs", "WebSockets", "CI/CD", "Cloud Deployment", "Agile", "OOP", "ORM" , "Cloud Engineering"],
    color: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-500",
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">My expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance">Technical Skills</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={index}
                className="p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group border-2 hover:border-accent/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-7 w-7 ${skill.iconColor}`} />
                  </div>
                  <h4 className="font-bold text-xl mb-4 sm:mb-6 group-hover:text-accent transition-colors duration-300">
                    {skill.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground font-medium border border-border/50 group-hover:border-accent/30 transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
