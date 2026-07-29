import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { SectionHeader } from "./About";
import {
  categories,
  projects,
  type ProjectCategory,
} from "../type/project";

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", ...categories];

const fallbackGradient: Record<ProjectCategory, string> = {
  "Machine Learning": "from-purple-900/80 via-purple-900/60 to-slate-900",
  "Data Analytics": "from-blue-900/80 via-blue-900/60 to-slate-900",
  "Business Intelligence": "from-emerald-900/80 via-emerald-900/60 to-slate-900",
  "Data Engineering": "from-rose-900/80 via-rose-900/60 to-slate-900",
};


function isImagePath(cover: string) {
  return cover.startsWith("http") || cover.startsWith("/");
}

export function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative pt-2 pb-16 sm:pt-4 sm:pb-24 scroll-mt-24">
      <div className="mx-auto w-[min(1200px,92%)]">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="Projects"
            title="ideas & Projects shipped"
            subtitle="A selection of projects where I use Google Colab, SQL, and BI Tools "
          />

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded text-xs font-medium transition-all ${active === f
                  ? "bg-white text-black shadow-lg"
                  : "bg-black/60 text-white/70 hover:bg-black/80 hover:text-white"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {visible.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const hasImage = isImagePath(project.cover);

  return (
    <div className="group relative rounded-3xl overflow-hidden glass">

      <Link
        to={`/projects/${project.slug}`}
        className="block relative aspect-[5/3]"
      >
        {hasImage ? (
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${fallbackGradient[project.category]} flex items-center justify-center`}
          >
            <span className="text-4xl opacity-30">📊</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 text-white border border-white/10 backdrop-blur-sm shadow-xl`}>
          {project.category}
        </span>
      </Link>

      {/* ACTION BUTTONS */}
      <div className="absolute top-3 right-3 flex gap-2 z-10">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="px-3 py-1 text-xs bg-black/70 text-white rounded hover:bg-black/90 transition"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="px-3 py-1 text-xs bg-black/70 text-white rounded hover:bg-black/90 transition"
          >
            Preview
          </a>
        )}

        {project.report && (
          <a
            href={project.report}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="px-3 py-1 text-xs bg-black/70 text-white rounded hover:bg-black/90 transition"
          >
            Report
          </a>
        )}

      </div>

      <Link to={`/projects/${project.slug}`} className="block p-5">
        <div className="flex justify-between">
          <h3 className="font-semibold">{project.title}</h3>
          <ArrowUpRight size={16} />
        </div>

        <p className="text-sm text-muted-foreground mt-2">
          {project.shortDescription}
        </p>
      </Link>
    </div>
  );
}
