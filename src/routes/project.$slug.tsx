import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Copy, Check } from "lucide-react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { GithubIcon } from "../components/BrandIcons";
import { getProject, projects } from "../components/type/project";

function isVideo(src: string) {
  return /\.(mp4|webm|ogg|mov)$/i.test(src);
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const [activeTab, setActiveTab] = useState<"details" | "methodology" | "assets">("details");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/#projects" className="text-neutral-300 hover:text-blue-400">
          ← Back to projects
        </Link>
      </div>
    );
  }

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const others = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const hasTabs = !!(project.steps || project.resumeBullets);

  return (
    <div className="relative min-h-screen text-white bg-[#0a0f1c] overflow-x-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 -z-10" />
      <div className="aurora opacity-30 -z-10" />
      <Navbar />

      <div className="pt-32 pb-20 mx-auto w-[min(1100px,92%)]">

        {/* BACK BUTTON */}
        <Link
          to="/#projects"
          className="text-sm flex items-center gap-2 text-neutral-300 hover:text-blue-400 transition"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        {/* HEADER */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

          <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 text-white border border-white/10 backdrop-blur-sm shadow-xl mt-8`}>
            {project.category}
          </span>

          <h1 className="text-4xl font-semibold text-blue-400 mt-2 leading-tight">
            {project.title}
          </h1>

          <p className="text-neutral-300 mt-4 leading-relaxed max-w-2xl text-base">
            {project.shortDescription}
          </p>

          <div className="flex gap-4 mt-5 text-sm">
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
              >
                Google Colab <ExternalLink size={14} />
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
                  {(["details", "methodology", "assets"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-sm font-semibold capitalize transition relative ${
                        activeTab === tab
                          ? "text-blue-400"
                          : "text-neutral-400 hover:text-neutral-200"
                      }`}
                    >
                      {tab === "assets" ? "Resume & Academic Assets" : tab}
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
                        <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 mt-8">
                          <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Data Source</h3>
                          <p className="text-neutral-300 text-sm leading-relaxed">{project.dataSource}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "methodology" && (
                    <div className="space-y-8">
                      <h2 className="text-xl font-semibold text-blue-400 tracking-tight mb-6">Step-by-Step Implementation</h2>
                      <div className="space-y-8 relative pl-2">
                        {project.steps?.map((step, idx) => (
                          <div key={step.number} className="relative pl-10 group">
                            {/* Vertical line indicator */}
                            {idx !== project.steps!.length - 1 && (
                              <div className="absolute left-4 top-8 bottom-[-2.5rem] w-[1px] bg-white/10 group-hover:bg-blue-400/30 transition-colors" />
                            )}
                            {/* Step number icon */}
                            <div className="absolute left-0 top-0.5 w-8 h-8 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-xs font-bold text-neutral-400 group-hover:border-blue-400 group-hover:text-blue-400 transition-colors">
                              {step.number}
                            </div>
                            {/* Content text */}
                            <div className="space-y-1">
                              <h4 className="text-base font-semibold text-neutral-200 group-hover:text-blue-400 transition-colors">
                                {step.title}
                              </h4>
                              <p className="text-sm text-neutral-400 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "assets" && (
                    <div className="space-y-8">
                      <h2 className="text-xl font-semibold text-blue-400 tracking-tight mb-4">Resume & Application Copy-Paste Dashboard</h2>
                      
                      {project.resumeBullets && (
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition relative">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">Resume Bullet Points</h3>
                            <button
                              onClick={() => handleCopy(project.resumeBullets!.map(b => `• ${b}`).join("\n"), "bullets")}
                              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 rounded-lg transition text-neutral-300 hover:text-white border border-white/5"
                            >
                              {copiedText === "bullets" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                              {copiedText === "bullets" ? "Copied!" : "Copy All"}
                            </button>
                          </div>
                          <ul className="space-y-3 text-sm text-neutral-300 list-disc pl-5">
                            {project.resumeBullets.map((bullet, index) => (
                              <li key={index} className="leading-relaxed">{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.compactVersion && (
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition relative">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">Compact Resume version</h3>
                            <button
                              onClick={() => handleCopy(project.compactVersion!, "compact")}
                              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 rounded-lg transition text-neutral-300 hover:text-white border border-white/5"
                            >
                              {copiedText === "compact" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                              {copiedText === "compact" ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          <p className="text-sm text-neutral-300 italic bg-black/30 p-3.5 rounded-xl border border-white/5 leading-relaxed">
                            "{project.compactVersion}"
                          </p>
                        </div>
                      )}

                      {project.gradSchoolStatement && (
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition relative">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">Grad School Personal Statement Paragraph</h3>
                            <button
                              onClick={() => handleCopy(project.gradSchoolStatement!, "grad")}
                              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 rounded-lg transition text-neutral-300 hover:text-white border border-white/5"
                            >
                              {copiedText === "grad" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                              {copiedText === "grad" ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          <p className="text-sm text-neutral-300 leading-relaxed text-justify bg-black/30 p-4 rounded-xl border border-white/5 whitespace-pre-line">
                            {project.gradSchoolStatement}
                          </p>
                        </div>
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
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">Tools Used</h3>

              {project.toolDetails ? (
                <div className="space-y-4">
                  {project.toolDetails.map((t) => (
                    <div
                      key={t.name}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10 transition duration-200"
                    >
                      <h4 className="text-sm font-semibold text-blue-400 mb-1">{t.name}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">{t.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1.5 bg-white/5 text-neutral-300 rounded border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* OTHER PROJECTS */}
        <div className="mt-24">
          <h2 className="text-xl text-blue-400 mb-6 font-semibold">
            Other projects
          </h2>

          <div className="grid sm:grid-cols-3 gap-5">
            {others.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`}>
                {isVideo(p.cover) ? (
                  <video src={p.cover} className="aspect-video object-cover rounded-lg" />
                ) : (
                  <img src={p.cover} className="aspect-video object-cover rounded-lg" />
                )}

                <p className="text-sm text-neutral-300 mt-2 hover:text-blue-400 transition">
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
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
      <h2 className="text-xl font-semibold text-blue-400 tracking-tight">
        {title}
      </h2>

      {/* CONTENT */}
      <div className="text-neutral-300 leading-relaxed text-base">
        {children}
      </div>
    </div>
  );
}