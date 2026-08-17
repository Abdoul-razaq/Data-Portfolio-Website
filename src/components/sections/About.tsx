import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BookOpen, ExternalLink, ChevronDown, Globe } from "lucide-react";


export function About() {
  return (
    <section id="about" className="relative pt-2 sm:pt-4 pb-16 sm:pb-24 scroll-mt-24">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeader eyebrow="About" title="Data-Driven Engineering." />

        <div className="mt-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5 text-muted-foreground/90 leading-relaxed"
          >
            <p>
              I'm Graduate in BSc (Hons) in Mechanical Engineering: Production at{" "}
              <span className="text-foreground">University of Rwanda</span>, class of 2026, with a strong foundation in engineering design, production systems, simulation, and embedded systems development.
            </p>

            <p>
              I am a certified Associate Data Analyst and Data Scientist, with additional certifications in Microsoft Azure, AWS Cloud Computing, and Machine Learning using tree-based models. My academic and professional training has strengthened my ability to approach engineering and data problems.
            </p>

            <p>
              I have developed practical expertise in <span className="text-foreground">SQL, Python, Excel, Power BI, and Tableau</span>, which I have applied in real-world projects including diabetes prediction modeling, customer churn forecasting, and real estate valuation systems. These projects involved working with large datasets, building efficient data workflows, defining key performance metrics, and designing interactive dashboards to support strategic decisions.
            </p>

            <p>
              My long-term ambition is to advance into graduate studies and specialize in <b>Data Science, Big Data Analytics, or Data Engineering</b>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Education & Research Thesis Block */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-glow-indigo transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-accent group-hover:scale-110 transition">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4 text-sm w-full">
                  <div className="w-full">
                    <p className="font-semibold text-foreground text-sm whitespace-nowrap">University of Rwanda</p>
                    <p className="text-muted-foreground text-sm mt-1">BSc (Hons) Mechanical Engineering: Production</p>
                    <p className="text-right text-accent/80 text-xs mt-1">May 2022 - June 2026</p>
                  </div>

                  <div className="pt-5 mt-2 border-t border-white/5">
                    <p className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <BookOpen size={14} className="text-accent" /> Research Thesis
                    </p>

                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-foreground text-sm leading-snug">
                          Design and Mathematical Modelling of Solar Fish Dryer With MPPT System
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2 w-full">
                          <p className="text-muted-foreground text-xs">Final Year Thesis</p>
                          <span className="text-accent/80 text-xs whitespace-nowrap">Oct 2025 - June 2026</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
                        <a
                          href="https://drive.google.com/file/d/1XI43caEFAb6fvQmo1OFOkaAoeUzhN5ho/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 text-xs text-accent hover:text-accent-hover transition-colors font-medium border border-accent/20 bg-accent/5 px-3 py-1.5 rounded-lg"
                        >
                          <ExternalLink size={13} />
                          View Research Paper
                        </a>
                      </div>

                      <details className="mt-2 group border border-white/10 rounded-xl bg-white/5 overflow-hidden transition-all duration-300">
                        <summary className="flex items-center justify-between p-3 cursor-pointer select-none font-medium text-xs text-foreground hover:bg-white/10 transition">
                          <span>Read Thesis Summary</span>
                          <ChevronDown size={14} className="text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                        </summary>
                        <div className="p-3 border-t border-white/5 text-[11px] leading-relaxed text-muted-foreground/80 space-y-3 max-h-[240px] overflow-y-auto scrollbar-thin">
                          <div>
                            <p className="mb-2 font-medium text-foreground">Data Science & Analytical Highlights:</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-0.5">1. Web Scraping & Climate Integration</h4>
                            <ul className="list-disc pl-4 space-y-1">
                              <li><strong>Data Acquisition:</strong> Scraped Location-specific 2025 microclimate parameters (8,760 hourly rows of irradiance, temperature, relative humidity) for Rubavu from the <strong>NASA POWER API</strong>.</li>
                              <li><strong>Data Pipeline:</strong> Programmed a data ingestion pipeline in **Google Colab** using **Python (Pandas)** to clean, merge, and synchronize microclimate variables as physical disturbances.</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-0.5">2. Mathematical Modeling & System Linearization</h4>
                            <ul className="list-disc pl-4 space-y-1">
                              <li><strong>Jacobian Evaluation:</strong> Derived and linearized a five-state non-linear thermodynamic energy-mass system in **Google Colab** using **Python (NumPy/SciPy)**.</li>
                              <li><strong>State-Space Model:</strong> Computed A, B, C, D state-space matrices at a midday peak operating point to prepare the model for feedback control design.</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-0.5">3. Curve Fitting & Kinetic Model Validation</h4>
                            <ul className="list-disc pl-4 space-y-1">
                              <li><strong>Curve Fitting:</strong> Evaluated thin-layer drying curves against physical databases from the **Mendeley Data repository** using **SciPy solvers (`curve_fit`)**, confirming kinetic model fit with R² &ge; 0.99.</li>
                              <li><strong>Diffusion Analysis:</strong> Handled linear regression on Fick's Second Law to determine effective moisture diffusivity (D_eff = 9.49 &times; 10^-11 m²/s, R² = 0.9993).</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-0.5">4. Energy Analytics & Loop Validation</h4>
                            <ul className="list-disc pl-4 space-y-1">
                              <li><strong>Feedback Simulation:</strong> Simulated Proportional-Integral (PI) loop trajectories using Python's numerical integrator (`solve_ivp`), showing regulation with low RMSE (0.523&deg;C for temperature).</li>
                              <li><strong>Energy Optimization:</strong> Tracked integrated solar thermal gains to model and verify a **52.3% energy saving** compared to standard electric drying.</li>
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience Block */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.2 }}
              className="glass rounded-2xl pt-6 pb-6 pl-4 pr-5 hover:shadow-glow-indigo transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-accent group-hover:scale-110 transition">
                  <Briefcase size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-0 text-sm pl-1 w-full">
                {/* Role 1 */}
                <div className="flex gap-3 w-full">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-3 w-3 rounded-full border-2 border-accent bg-[#181a2f] shrink-0 mt-1.5 shadow-[0_0_8px_rgba(202,138,4,0.4)]" />
                    <div className="w-0.5 flex-grow bg-white/10 my-1" />
                  </div>
                  <div className="pb-6 w-full">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-foreground">Founder & President</p>
                      <a
                        href="https://www.linkedin.com/company/dataminds-rwanda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 rounded-md"
                        title="DataMinds Rwanda LinkedIn"
                      >
                        <Globe size={12} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-1 w-full">
                      <p className="text-muted-foreground">DataMinds Rwanda</p>
                      <span className="text-accent/80 text-xs whitespace-nowrap">Feb 2026 - Present</span>
                    </div>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Founder of DataMinds Rwanda, a Former University of Rwanda-Data Science Club. A Community Bridging Class Theory skills in Data Science, AI, ML into real world Professionals.
                    </p>
                  </div>
                </div>

                {/* Role 2 */}
                <div className="flex gap-3 w-full">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-3 w-3 rounded-full border-2 border-accent bg-[#181a2f] shrink-0 mt-1.5 shadow-[0_0_8px_rgba(202,138,4,0.4)]" />
                    <div className="w-0.5 flex-grow bg-white/10 my-1" />
                  </div>
                  <div className="w-full">
                    <p className="font-semibold text-foreground">Data Scientist Apprentice</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-1 w-full">
                      <p className="text-muted-foreground">ALX Rwanda</p>
                      <span className="text-accent/80 text-xs whitespace-nowrap">Jan 2026 - Aug 2026</span>
                    </div>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Collaborated on hands-on machine learning and statistical modeling projects, engineering features, building predictive models, and translating complex data into actionable insights.
                    </p>
                  </div>
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
  subtitleSize = "text-base sm:text-lg",
  maxW = "max-w-2xl",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  subtitleSize?: string;
  maxW?: string;
}) {
  return (
    <div className={align === "center" ? `text-center mx-auto ${maxW}` : maxW}>
      <div className={`inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm leading-none tracking-wide text-accent ${align === "center" ? "mx-auto" : ""}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow-cyan" />
        {eyebrow}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-muted-foreground ${subtitleSize} leading-relaxed`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}