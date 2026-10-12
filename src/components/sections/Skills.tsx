import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import {
  Database,
  BarChart3,
  LineChart,
  Code2,
  Brain,
  Cloud,
} from "lucide-react";

interface SkillGroup {
  id: string;
  index: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  badge: string;
  accentColor: string;
  glowColor: string;
  spotlightColor: string;
  borderColor: string;
  bgGradient: string;
  tools: string[];
  skills: string[];
}

const groups: SkillGroup[] = [
  {
    id: "cleaning",
    index: "01",
    icon: Database,
    title: "Data Cleaning & Preparation",
    badge: "Data Pipeline",
    accentColor: "text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.35)",
    spotlightColor: "rgba(34, 211, 238, 0.15)",
    borderColor: "group-hover:border-cyan-500/40",
    bgGradient: "from-cyan-500/20 via-blue-500/5 to-transparent",
    tools: ["Pandas", "SQL CTEs", "Data Imputation", "Feature Prep"],
    skills: [
      "Data Cleaning with Python (Pandas)",
      "Handling Missing & Inconsistent Data",
      "Data Transformation & Feature Preparation",
      "SQL Data Cleaning (CTEs & Window Functions)",
      "Structured Dataset Preparation for Analytics",
      "Processing Large CSV & Tabular Datasets",
    ],
  },
  {
    id: "analysis",
    index: "02",
    icon: BarChart3,
    title: "Data Analysis & BI",
    badge: "Intelligence",
    accentColor: "text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.35)",
    spotlightColor: "rgba(52, 211, 153, 0.15)",
    borderColor: "group-hover:border-emerald-500/40",
    bgGradient: "from-emerald-500/20 via-teal-500/5 to-transparent",
    tools: ["Power BI", "Tableau", "EDA", "KPI Metrics"],
    skills: [
      "Exploratory Data Analysis (EDA)",
      "Power BI Dashboard Development",
      "Tableau Interactive Dashboard Design",
      "KPI Development & Business Metrics",
      "Customer, Sales & Performance Analysis",
      "Data Storytelling & Executive Reporting",
    ],
  },
  {
    id: "visualization",
    index: "03",
    icon: LineChart,
    title: "Data Visualization",
    badge: "Visual Analytics",
    accentColor: "text-indigo-400",
    glowColor: "rgba(129, 140, 248, 0.35)",
    spotlightColor: "rgba(129, 140, 248, 0.15)",
    borderColor: "group-hover:border-indigo-500/40",
    bgGradient: "from-indigo-500/20 via-purple-500/5 to-transparent",
    tools: ["Matplotlib", "Seaborn", "Time-Series", "Correlation"],
    skills: [
      "Matplotlib Custom Visualization",
      "Seaborn Statistical Plots",
      "Time-Series & Trend Analysis",
      "Correlation & Pattern Detection",
      "Executive Dashboard Visual Design",
      "Insight-Driven Visualization Techniques",
    ],
  },
  {
    id: "programming",
    index: "04",
    icon: Code2,
    title: "Programming & Tools",
    badge: "Core Stack",
    accentColor: "text-rose-400",
    glowColor: "rgba(251, 113, 133, 0.35)",
    spotlightColor: "rgba(251, 113, 133, 0.15)",
    borderColor: "group-hover:border-rose-500/40",
    bgGradient: "from-rose-500/20 via-orange-500/5 to-transparent",
    tools: ["Python", "MySQL", "Jupyter", "Git / GitHub"],
    skills: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "SQL (MySQL Relational Queries)",
      "Jupyter Notebook & Data Workspaces",
      "Google Colab Cloud Environments",
      "Git & GitHub Version Control",
      "Data Automation Scripts & Utilities",
    ],
  },
  {
    id: "ml",
    index: "05",
    icon: Brain,
    title: "Machine Learning",
    badge: "Predictive AI",
    accentColor: "text-purple-400",
    glowColor: "rgba(192, 132, 252, 0.35)",
    spotlightColor: "rgba(192, 132, 252, 0.15)",
    borderColor: "group-hover:border-purple-500/40",
    bgGradient: "from-purple-500/20 via-fuchsia-500/5 to-transparent",
    tools: ["Scikit-learn", "Random Forest", "Evaluation", "Predictive"],
    skills: [
      "Supervised Machine Learning Models",
      "Tree-Based Models (Decision Trees, Random Forest)",
      "Model Evaluation (RMSE, ROC-AUC, R²)",
      "Feature Engineering Techniques",
      "Predictive Modeling Applications",
      "Applied Machine Learning Workflows",
    ],
  },
  {
    id: "engineering",
    index: "06",
    icon: Cloud,
    title: "Data Engineering & APIs",
    badge: "Cloud & Pipelines",
    accentColor: "text-amber-400",
    glowColor: "rgba(251, 191, 36, 0.35)",
    spotlightColor: "rgba(251, 191, 36, 0.15)",
    borderColor: "group-hover:border-amber-500/40",
    bgGradient: "from-amber-500/20 via-yellow-500/5 to-transparent",
    tools: ["REST APIs", "AWS Cloud", "Azure", "Web Scraping"],
    skills: [
      "API Data Extraction (REST APIs, CoinMarketCap)",
      "JSON Parsing & Nested Data Extraction",
      "Cloud Data Handling (AWS & Azure Basics)",
      "Web Scraping with BeautifulSoup",
      "Automated Data Ingestion Pipelines",
      "Data Storage & Structuring (CSV, Cloud Storage)",
    ],
  },
];

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = group.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.92, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 85,
        damping: 14,
        delay: index * 0.08,
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden glass border border-white/10 transition-all duration-300 ${group.borderColor} hover:shadow-2xl`}
    >
      {/* ── Interactive Cursor Spotlight ── */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, ${group.spotlightColor}, transparent 75%)`,
        }}
      />

      {/* ── Ambient Top-Right Corner Glow ── */}
      <div
        className={`pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-to-br ${group.bgGradient} blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
      />

      {/* ── Card Content ── */}
      <div className="relative z-10">
        {/* Top Header: Icon + Index + Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="relative flex items-center gap-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{
                boxShadow: `0 0 20px -5px ${group.glowColor}`,
              }}
            >
              <Icon size={22} className={group.accentColor} />
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[11px] tracking-wider text-muted-foreground/70">
                MODULE // {group.index}
              </span>
              <span className={`text-xs font-semibold tracking-wide ${group.accentColor}`}>
                {group.badge}
              </span>
            </div>
          </div>

          <div className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-muted-foreground group-hover:text-white transition-colors">
            {group.index}
          </div>
        </div>

        {/* Card Title */}
        <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
          {group.title}
        </h3>

        {/* Core Tools Quick-Scan Chips */}
        <div className="mt-4 flex flex-wrap gap-1.5 pb-1">
          {group.tools.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/[0.05] border border-white/[0.08] text-white/80 group-hover:border-white/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Competencies List */}
        <div className="mt-4 pt-4 border-t border-white/[0.08] space-y-2.5">
          {group.skills.map((s, idx) => (
            <div
              key={idx}
              className="group/item flex items-start gap-2.5 rounded-xl px-2.5 py-1.5 -mx-2.5 text-xs sm:text-[13px] text-muted-foreground/90 hover:text-white hover:bg-white/[0.04] transition-all duration-150"
            >
              <span
                className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${group.accentColor}`}
                style={{
                  boxShadow: `0 0 8px ${group.glowColor}`,
                }}
              />
              <span className="leading-snug">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Micro-Footer ── */}
      <div className="relative z-10 mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-muted-foreground/60">
        <span className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${group.accentColor} animate-pulse`} />
          Verified Competencies
        </span>
        <span className="text-white/40 group-hover:text-white/80 transition-colors">
          6 Capabilities
        </span>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative pt-4 sm:pt-6 pb-16 sm:pb-24 scroll-mt-24 overflow-hidden">
      {/* BACKGROUND */}
      <div className="aurora pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto w-[min(1200px,92%)]">
        <SectionHeader
          eyebrow="Skills"
          title="Data Analytics & Engineering Toolkit."
          subtitle="A focused skillset built around real-world data analysis, cloud computing, and machine learning - transforming raw data into actionable insights."
          maxW="max-w-none"
          subtitleSize="text-base sm:text-lg lg:whitespace-nowrap"
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <SkillCard key={g.id} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}