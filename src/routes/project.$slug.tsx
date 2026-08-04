import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { GithubIcon } from "../components/BrandIcons";
import { getProject } from "../components/type/project";

function isVideo(src: string) {
  return /\.(mp4|webm|ogg|mov)$/i.test(src);
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const [activeTab, setActiveTab] = useState<"details" | "methodology" | "summary">("details");

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/#projects" className="text-neutral-300 hover:text-blue-400">
          ← Back to projects
        </Link>
      </div>
    );
  }

  const hasTabs = !!project.steps;

  return (
    <div className="relative min-h-screen text-white bg-[#0a0f1c] overflow-x-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 -z-10" />
      <div className="aurora opacity-30 -z-10" />
      <Navbar />

      <div className="pt-32 pb-20 mx-auto w-[min(1100px,92%)]">

        {/* BACK BUTTON */}
        <Link
          to="/#projects"
          className="text-base flex items-center gap-2 text-neutral-300 hover:text-blue-400 transition"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* HEADER */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

          <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded bg-black/80 text-white border border-white/10 backdrop-blur-sm shadow-xl mt-8`}>
            {project.category}
          </span>

          <h1 className="text-5xl font-semibold text-blue-400 mt-3 leading-tight">
            {project.title}
          </h1>

          <p className="text-neutral-300 mt-5 leading-relaxed max-w-2xl text-lg">
            {project.shortDescription}
          </p>

          <div className="flex gap-4 mt-6 text-base">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="text-neutral-300 hover:text-blue-400 flex items-center gap-2"
              >
                <GithubIcon size={16} /> GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="text-neutral-300 hover:text-blue-400 flex items-center gap-2"
                rel="noreferrer"
              >
                {project.demo.includes("colab.research.google.com")
                  ? "Google Colab"
                  : project.demo.includes("drive.google.com")
                    ? project.demo.includes("folders")
                      ? "Project Folder"
                      : "View Report"
                    : project.demo.includes("github.com") && project.demo.endsWith(".sql")
                      ? "SQL Script"
                      : "Live Demo"}{" "}
                <ExternalLink size={14} />
              </a>
            )}

            {project.report && (
              <a
                href={project.report}
                target="_blank"
                className="text-neutral-300 hover:text-blue-400 flex items-center gap-2"
                rel="noreferrer"
              >
                {project.report.includes("drive.google.com") && project.report.includes("folders")
                  ? "Project Folder"
                  : "View Report"}{" "}
                <ExternalLink size={14} />
              </a>
            )}

          </div>
        </motion.div>

        {/* IMAGE */}
        <div className="mt-10 aspect-video rounded-xl overflow-hidden">
          {isVideo(project.cover) ? (
            <video src={project.cover} controls className="w-full h-full" />
          ) : (
            <img src={project.cover} className="w-full h-full object-cover" />
          )}
        </div>

        {/* CONTENT */}
        <div className="mt-14 grid lg:grid-cols-[2fr_1fr] gap-12">

          <div className="space-y-10">

            {hasTabs ? (
              <div>
                {/* TABS SELECTOR */}
                <div className="flex border-b border-white/10 mb-8 gap-6">
                  {(["details", "methodology", "summary"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-base font-semibold capitalize transition relative ${activeTab === tab
                        ? "text-blue-400"
                        : "text-neutral-400 hover:text-neutral-200"
                        }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* TAB PANELS */}
                <div>
                  {activeTab === "details" && (
                    <div className="space-y-8">
                      <Block title="Overview">{project.overview}</Block>
                      <Block title="Problem">{project.problem}</Block>
                      <Block title="Results">{project.results}</Block>
                      {project.dataSource && (
                        <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 mt-8">
                          <h3 className="text-base font-semibold text-blue-400 uppercase tracking-wider mb-2">Data Source</h3>
                          <p className="text-neutral-300 text-base leading-relaxed">{project.dataSource}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "methodology" && (
                    <div className="space-y-8">
                      <h2 className="text-2xl font-semibold text-blue-400 tracking-tight mb-6">Step-by-Step Implementation</h2>
                      <div className="space-y-8 relative pl-2">
                        {project.steps?.map((step, idx) => (
                          <div key={step.number} className="relative pl-12 group">
                            {/* Vertical line indicator */}
                            {idx !== project.steps!.length - 1 && (
                              <div className="absolute left-4 top-8 bottom-[-2.5rem] w-[1px] bg-white/10 group-hover:bg-blue-400/30 transition-colors" />
                            )}
                            {/* Step number icon */}
                            <div className="absolute left-0 top-0.5 w-8 h-8 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-sm font-bold text-neutral-400 group-hover:border-blue-400 group-hover:text-blue-400 transition-colors">
                              {step.number}
                            </div>
                            {/* Content text */}
                            <div className="space-y-1">
                              <h4 className="text-lg font-semibold text-neutral-200 group-hover:text-blue-400 transition-colors">
                                {step.title}
                              </h4>
                              <p className="text-base text-neutral-400 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "summary" && (
                    <div className="space-y-8">
                      {project.star ? (
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Situation */}
                          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition duration-200">
                            <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                              Situation
                            </span>
                            <p className="text-neutral-300 mt-4 leading-relaxed whitespace-pre-line text-[15px]">
                              {project.star.situation}
                            </p>
                          </div>

                          {/* Task */}
                          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition duration-200">
                            <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                              Task
                            </span>
                            <p className="text-neutral-300 mt-4 leading-relaxed whitespace-pre-line text-[15px]">
                              {project.star.task}
                            </p>
                          </div>

                          {/* Action */}
                          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition duration-200 md:col-span-2">
                            <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                              Action
                            </span>
                            <p className="text-neutral-300 mt-4 leading-relaxed whitespace-pre-line text-[15px]">
                              {project.star.action}
                            </p>
                          </div>

                          {/* Result */}
                          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 transition duration-200 md:col-span-2">
                            <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              Result
                            </span>
                            <p className="text-neutral-300 mt-4 leading-relaxed whitespace-pre-line text-[15px]">
                              {project.star.result}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <Block title="Summary">{project.solution}</Block>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-10">
                <Block title="Overview">{project.overview}</Block>
                <Block title="Problem">{project.problem}</Block>
                <Block title="Solution">{project.solution}</Block>
                <Block title="Results">{project.results}</Block>
              </div>
            )}

            {project.videoUrl && (
              <video
                src={project.videoUrl}
                controls
                className="w-full rounded-xl mt-6"
              />
            )}
          </div>

          {/* TOOLS */}
          <aside className="space-y-6">
            <div>
              <h3 className="text-base font-semibold uppercase tracking-wider text-neutral-400 mb-4">Tools Used</h3>

              {project.toolDetails ? (
                <div className="space-y-4">
                  {project.toolDetails.map((t) => (
                    <div
                      key={t.name}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10 transition duration-200"
                    >
                      <h4 className="text-base font-semibold text-blue-400 mb-1">{t.name}</h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">{t.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-2.5 py-1.5 bg-white/5 text-neutral-300 rounded border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ───────── BLOCK ───────── */

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">

      {/* SECTION TITLE */}
      <h2 className="text-2xl font-semibold text-blue-400 tracking-tight">
        {title}
      </h2>

      {/* CONTENT */}
      <div className="text-neutral-300 leading-relaxed text-lg">
        {children}
      </div>
    </div>
  );
}