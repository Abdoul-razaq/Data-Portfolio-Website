import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import {
  Database,
  BarChart3,
  Brain,
  Code2,
  Cloud,
  LineChart
} from "lucide-react";

const groups = [
  {
    icon: Database,
    title: "Data Cleaning & Preparation",
    color: "from-blue-400/30 to-cyan-400/20",
    skills: [
      "Data Cleaning with Python (Pandas)",
      "Handling Missing & Inconsistent Data",
      "Data Transformation & Feature Preparation",
      "SQL Data Cleaning (CTEs & Window Functions)",
      "Structured Dataset Preparation for Analytics",
      "Processing Large CSV & Structured Datasets",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analysis & BI",
    color: "from-emerald-400/30 to-teal-400/20",
    skills: [
      "Exploratory Data Analysis (EDA)",
      "Power BI Dashboard Development",
      "Tableau Interactive Dashboard Design",
      "KPI Development & Business Metrics",
      "Customer, Sales & Performance Analysis",
      "Data Storytelling & Insight Communication",
    ],
  },
  {
    icon: LineChart,
    title: "Data Visualization",
    color: "from-indigo-400/30 to-purple-400/20",
    skills: [
      "Matplotlib Visualization",
      "Seaborn Statistical Visualization",
      "Time-Series & Trend Analysis",
      "Correlation & Pattern Detection",
      "Dashboard Design & Data Presentation",
      "Insight-Driven Visualization Techniques",
    ],
  },
  {
    icon: Code2,
    title: "Programming & Tools",
    color: "from-orange-400/30 to-rose-400/20",
    skills: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "SQL (MySQL)",
      "Jupyter Notebook",
      "Google Colab & Data Workspaces",
      "Git & GitHub Version Control",
      "Data Automation Scripts",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    color: "from-purple-400/30 to-fuchsia-400/20",
    skills: [
      "Supervised Learning Models",
      "Tree-Based Models (Decision Trees, Random Forest)",
      "Model Evaluation & Performance Metrics",
      "Feature Engineering Techniques",
      "Predictive Modeling Applications",
      "Applied Machine Learning Workflows",
    ],
  },
  {
    icon: Cloud,
    title: "Data Engineering & APIs",
    color: "from-yellow-400/30 to-amber-400/20",
    skills: [
      "API Data Extraction (REST APIs, CoinMarketCap)",
      "JSON Data Processing",
      "Cloud Data Handling (AWS & Azure Basics)",
      "Web Scraping with BeautifulSoup",
      "Automated Data Pipelines",
      "Data Storage & Structuring (CSV, Cloud Storage)",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative pt-2 pb-16 sm:pt-4 sm:pb-24 scroll-mt-24">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeader
          eyebrow="Skills"
          title="Data Analytics & Engineering Toolkit."
          subtitle="A focused skillset built around real-world data analysis, cloud computing, and machine learning - transforming raw data into actionable insights."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 opacity-0 group-hover:opacity-100 blur-md transition" />

              <div className="relative glass rounded-3xl p-6 h-full border border-white/10">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${g.color} text-foreground shadow-lg`}
                >
                  <g.icon size={20} />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                  {g.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {g.skills.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground/90 group-hover:text-muted-foreground transition-colors"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/70 shadow-[0_0_8px_rgba(var(--accent),0.8)] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}