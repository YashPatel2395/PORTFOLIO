import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, CheckCircle2, Star, ExternalLink } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera / Stanford Online",
      date: "2025",
      description:
        "Comprehensive specialization covering supervised & unsupervised learning, deep learning basics, and model evaluation. Hands-on projects included regression, classification, clustering, and recommender systems using Python and scikit-learn.",
      childCertificates: [
        "Advanced Learning Algorithms",
        "Supervised Machine Learning: Regression and Classification",
        "Unsupervised Learning, Recommenders, Reinforcement Learning",
      ],
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Deep Learning",
        "Model Evaluation",
        "Python",
        "scikit-learn",
      ],
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/YOUR_CERT_ID", // Replace with actual certificate URL
    },
    {
      title: "Mathematics for Machine Learning and Data Science",
      issuer: "Coursera / DeepLearning.AI",
      date: "2025",
      description:
        "Complete mathematics foundation for machine learning covering linear algebra, calculus, and statistics. Applied concepts to Principal Component Analysis (PCA), dimensionality reduction, and optimization in ML.",
      childCertificates: [
        "Linear Algebra for Machine Learning and Data Science",
        "Calculus for Machine Learning and Data Science",
        "Probability & Statistics for Machine Learning & Data Science",
      ],
      skills: ["Linear Algebra", "Calculus", "Statistics", "PCA", "Dimensionality Reduction", "Optimization"],
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/YOUR_CERT_ID", // Replace with actual certificate URL
    },
  ]

  return (
    <section id="certifications" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#80808003_49%,#80808003_51%,transparent_52%),linear-gradient(-45deg,transparent_48%,#80808003_49%,#80808003_51%,transparent_52%)] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#80808005_0%,transparent_70%)]" />

      <div className="section-container relative z-10">
        <div className="flex items-center gap-6 mb-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/20 to-foreground/40" />
          <div className="relative group">
            <div className="absolute -inset-4 bg-foreground/5 blur-xl group-hover:bg-foreground/10 transition-all duration-500" />
            <div className="flex items-center gap-4">
              <Award className="w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight relative">Certifications</h2>
              <Award className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-foreground/20 to-foreground/40" />
        </div>

        <p className="text-center text-base text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          Professional certifications demonstrating expertise in Machine Learning and AI fundamentals
        </p>

        <div className="space-y-16">
          {certifications.map((cert, index) => (
            <div key={index} className="relative">
              {index < certifications.length - 1 && (
                <div className="absolute left-1/2 -bottom-16 w-px h-16 bg-gradient-to-b from-foreground/30 to-transparent" />
              )}

              <Card className="p-0 hover:shadow-2xl transition-all duration-500 border-4 border-double hover:border-foreground/60 group relative overflow-hidden bg-background">
                {/* Certificate decorative border pattern */}
                <div
                  className="absolute inset-0 border-8 border-transparent"
                  style={{
                    borderImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(128,128,128,0.1) 10px, rgba(128,128,128,0.1) 20px) 8",
                  }}
                />

                {/* Top ribbon banner */}
                <div className="relative bg-foreground text-background px-6 py-6 sm:px-10 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[size:20px_20px]" />
                  <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-background text-foreground flex items-center justify-center border-4 border-background/20">
                        <Award className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider opacity-90">
                          Professional Certificate
                        </p>
                        <p className="text-lg font-bold">{cert.issuer}</p>
                      </div>
                    </div>
                    <Badge className="bg-background text-foreground text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 font-bold border-2 border-background/20">
                      {cert.date}
                    </Badge>
                  </div>
                  {/* Ribbon tails */}
                  <div className="absolute -bottom-4 left-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[16px] border-t-foreground/80" />
                  <div className="absolute -bottom-4 right-0 w-0 h-0 border-r-[30px] border-r-transparent border-t-[16px] border-t-foreground/80" />
                </div>

                <div className="relative p-6 sm:p-8 md:p-12">
                  {/* Certificate seal/badge in corner */}
                  <div className="absolute top-8 right-8 hidden h-24 w-24 rounded-full bg-foreground/5 border-4 border-dashed border-foreground/20 md:flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center">
                      <Star className="w-8 h-8 fill-current" />
                    </div>
                  </div>

                  <div className="relative z-10 md:pr-32">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-foreground/90 transition-colors leading-tight text-balance">
                      {cert.title}
                    </h3>

                    {/* Decorative divider */}
                    <div className="flex items-center gap-4 my-8">
                      <div className="w-3 h-3 rotate-45 bg-foreground/30" />
                      <div className="h-px flex-1 bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
                      <div className="w-3 h-3 rotate-45 bg-foreground/30" />
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed mb-8 sm:mb-10">{cert.description}</p>

                    {/* Included certificates with checkmarks */}
                    <div className="mb-8 sm:mb-10 bg-foreground/5 p-5 sm:p-6 rounded-lg border-2 border-foreground/10">
                      <h4 className="font-bold mb-5 text-lg flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6" />
                        Included Certificates
                      </h4>
                      <div className="grid gap-4">
                        {cert.childCertificates.map((childCert, childIndex) => (
                          <div
                            key={childIndex}
                            className="flex items-start gap-4 p-4 rounded-lg bg-background border-l-4 border-foreground/30 hover:border-foreground hover:bg-foreground/5 transition-all duration-300 group/child"
                          >
                            <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <p className="text-base font-medium group-hover/child:text-foreground transition-colors flex-1">
                              {childCert}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills as credential badges */}
                    <div>
                      <h4 className="font-bold mb-5 text-lg flex items-center gap-3">
                        <Star className="w-6 h-6" />
                        Verified Skills
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="px-4 py-2 text-xs sm:text-sm hover:bg-foreground hover:text-background transition-all duration-300 cursor-default font-bold border-2 hover:scale-105"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* View Certificate button */}
                    <div className="mt-8">
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-bold text-sm sm:text-base group/cert border-4 border-foreground hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5 group-hover/cert:rotate-45 transition-transform" />
                        View Certificate
                      </a>
                    </div>
                  </div>

                  {/* Bottom decorative border */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-foreground/10 via-foreground/20 to-foreground/10" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
