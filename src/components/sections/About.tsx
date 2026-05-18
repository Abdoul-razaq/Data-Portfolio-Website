import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";


export function About() {
  return (
    <section id="about" className="relative pb-16 sm:pb-24 scroll-mt-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeader eyebrow="About" title="Data-Driven Engineering." />

        <div className="mt-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground/90 leading-relaxed"
          >
            <p>
              I am a BSc (Hons) Mechanical Engineering student at the
              <span className="text-foreground"> University of Rwanda</span>, class of 2026, with a strong foundation in engineering design, production systems, simulation, and embedded systems development.
            </p>

            <p>
              I am a certified Associate Data Analyst and Data Scientist, with additional certifications in Microsoft Azure, AWS Cloud Computing, and Machine Learning using tree-based models. My academic and professional training has strengthened my ability to approach engineering and data problems with structured analytical thinking and evidence-based decision-making.
            </p>

            <p>
              I have developed practical expertise in <span className="text-foreground">SQL, Python, Excel, Power BI, and Tableau</span>, which I have applied in real-world projects including market gap analysis, logistics performance evaluation, and cryptocurrency trend analysis. These projects involved working with large datasets, building efficient data workflows, defining key performance metrics, and designing interactive dashboards to support strategic decisions.
            </p>

            <p>
              My long-term ambition is to advance into graduate studies and specialize in <b>Data Science, Big Data Analytics, or Data Engineering</b>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Education & Certificates Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:shadow-glow-indigo transition-all group"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-accent mb-3 group-hover:scale-110 transition">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Education</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">
                    BSc (Hons) Mechanical Engineering in production.
                    <span className="text-accent/80 text-xs font-normal ml-4 whitespace-nowrap">| May 2022 — July 2026</span>
                  </p>
                  <p className="text-muted-foreground mt-0.5">University of Rwanda</p>
                </div>
                <div className="pt-5 mt-2 border-t border-white/5">
                  <p className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <Award size={14} className="text-accent" /> Certifications
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-none">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/60 mt-1.5" />
                      <span>Associate Data Scientist | (Exp. 2028)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/60 mt-1.5" />
                      <span>Associate Data Analyst | (Exp. 2028)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/60 mt-1.5" />
                      <span>Microsoft Certified: Azure Developer Associate (AZ-204)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/60 mt-1.5" />
                      <span>AWS Cloud Practitioner (CLF-C02)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Experience Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-glow-indigo transition-all group"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-accent mb-3 group-hover:scale-110 transition">
                <Briefcase size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Experience</h3>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-medium text-foreground">Data & Insight Analyst</p>
                  <div className="flex justify-between items-start gap-2 mt-0.5">
                    <p className="text-muted-foreground">FinAcco Hub Rwanda</p>
                    <span className="text-accent/80 text-xs whitespace-nowrap mt-0.5">Jan 2026 — Present</span>
                  </div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Cleaning, modeling, and visualizing large datasets to drive strategic business decisions and track operational performance.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <p className="font-medium text-foreground">Founder & President</p>
                    <span className="text-accent/80 text-xs whitespace-nowrap mt-0.5">Feb 2026 — Present</span>
                  </div>
                  <p className="text-muted-foreground mt-0.5">University of Rwanda | Data Science Club</p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Sole founder of the university's first Data Science Club, leading initiatives to foster a data-driven culture and empower students with analytical skills.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm leading-none tracking-wide text-accent mx-auto">
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow-cyan" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}