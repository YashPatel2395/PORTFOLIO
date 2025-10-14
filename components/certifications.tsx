import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera / Stanford Online",
    year: "2025",
    type: "Professional Certificate",
    logo: "/stanford-online.png",
    description:
      "Gained hands-on experience in linear/logistic regression, decision trees, and neural networks using Python and TensorFlow. Comprehensive specialization covering supervised & unsupervised learning, deep learning basics, and model evaluation.",
    courses: ["Advanced Learning Algorithms", "Supervised Machine Learning: Regression and Classification"],
  },
  {
    title: "Mathematics for Machine Learning and Data Science",
    issuer: "DeepLearning.AI",
    year: "2025",
    type: "Professional Certificate",
    logo: "/Deeplearning.png",
    description:
      "Applied concepts of linear algebra, calculus, and probability to strengthen foundations in ML model development. Comprehensive coverage of mathematical foundations essential for understanding and implementing machine learning algorithms.",
    courses: ["Linear Algebra", "Calculus", "Probability & Statistics"],
  },
]

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance">Certifications</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Professional certifications demonstrating expertise in Machine Learning and AI fundamentals
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-2 hover:border-accent/30 bg-card/50 backdrop-blur-sm group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md ring-2 ring-accent/10 group-hover:ring-accent/30 p-2">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={`${cert.issuer} logo`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4 gap-3">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                      <Badge variant="secondary" className="text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-1.5">
                        {cert.type}
                      </Badge>
                      <Badge variant="outline" className="text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-1.5">
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                    <span className="text-sm sm:text-base font-semibold">Included Certificates:</span>
                    {cert.courses.map((course, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="font-normal text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
