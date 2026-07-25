import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

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

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/#projects" className="text-neutral-300 hover:text-blue-400">
          ← Back to projects
        </Link>
      </div>
    );
  }

  const others = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

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
                Live <ExternalLink size={14} />
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

            <Block title="Overview">{project.overview}</Block>
            <Block title="Problem">{project.problem}</Block>
            <Block title="Solution">{project.solution}</Block>
            <Block title="Results">{project.results}</Block>

            {project.videoUrl && (
              <video
                src={project.videoUrl}
                controls
                className="w-full rounded-xl mt-6"
              />
            )}
          </div>

          {/* TOOLS */}
          <aside>
            <h3 className="text-sm text-neutral-400 mb-3">Tools</h3>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-white/5 text-neutral-300 rounded"
                >
                  {t}
                </span>
              ))}
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