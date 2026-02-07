import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "GCP Professional Cloud Architect",
    issuer: "Google Cloud",
    year: "2026",
    type: "Professional Certificate",
    logo: "/gcp.png",
    link: "https://www.credly.com/badges/8f2621bc-43a7-4393-9449-567126758d40/linked_in_profile",
    description: "Validated expertise in designing, developing, and managing secure, scalable, and highly available solutions on Google Cloud Platform. Demonstrated ability to architect cloud-native systems aligned with business requirements, including networking, compute, storage, security, reliability, and cost optimization across distributed environments.",
    focus: [
      "Cloud Architecture Design",
      "VPC & Hybrid Networking",
      "IAM & Security Architecture",
      "High Availability & Disaster Recovery",
      "Scalable Compute (GKE, Cloud Run, Compute Engine)",
      "Data Storage & Database Selection",
      "Cost Optimization & Reliability"
    ]
  },  
  {
    title: "GCP Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2026",
    type: "Associate Certificate",
    logo: "/gcp.png",
    link: "https://www.credly.com/badges/f5355e56-1863-4f29-875b-b7950827a888/public_url",
    description: "Validated skills in deploying, securing, monitoring, and managing applications on Google Cloud Platform. Hands-on experience with Compute Engine, IAM, VPC networking, Cloud Storage, and load balancing, including setting up workloads with CI/CD pipelines.",
    focus: ["Compute Engine", "VPC Networking", "IAM", "Cloud Storage", "Load Balancing", "CI/CD Deployments"]
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera / Stanford Online",
    year: "2025",
    type: "Professional Certificate",
    logo: "/stanford-online.png",
    link: "https://coursera.org/share/507bc31244a25486cac0f905d2b26a5b",
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
    link: "https://coursera.org/share/fba7e05ca41680641e03572bac038928",
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
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group/link"
                      >
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover/link:text-accent transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover/link:text-accent transition-colors duration-300" />
                      </a>
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
                  {cert.courses ? <><div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                    <span className="text-sm sm:text-base font-semibold">Included Certificates:</span>
                    {cert.courses?.map((course, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="font-normal text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div></> : <></>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
