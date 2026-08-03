import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Data Scientist ", "Data Analyst ", "Mechanical Engineer "],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 300,
      showCursor: true,
      cursorChar: "|",
      loop: true,
      smartBackspace: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col pt-20 lg:pt-24 pb-20 lg:pb-16 overflow-x-hidden"
    >
      {/* BACKGROUND */}
      <div className="aurora" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div className="relative mx-auto w-[min(1200px,92%)] lg:flex-1 flex flex-col items-start gap-6 z-10 py-4 lg:py-0">
        {/* Badge at the left start, below navbar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-sm text-muted-foreground"
        >
          <Sparkles size={18} className="text-accent" />
          <span>Master's Aspirant · Open to collaborations</span>
        </motion.div>

        {/* Wrapper to center content vertically in the remaining space */}
        <div className="w-full lg:flex-1 flex items-center mt-2 lg:mt-0">
          <div className="w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">

            {/* LEFT SIDE (TEXT CONTENT) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full lg:pr-4"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold lg:font-medium leading-[1.02] tracking-tight">
                Hi, I'm <span className="text-blue-500 font-bold lg:font-semibold">Abdoul Razak</span>
              </h1>

              <p className="mt-6 font-display text-2xl sm:text-3xl text-muted-foreground">
                And, I'm a{" "}
                <span className="text-accent/70">·</span>{" "}
                <span
                  ref={typedRef}
                  className="text-gradient font-semibold inline-block whitespace-nowrap"
                ></span>
              </p>

              <p className="mt-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                A certified <span className="font-semibold">Data Scientist</span> and <span className="font-semibold">Data Analyst</span> with formal training in <span className="font-semibold">Microsoft Azure</span> and <span className="font-semibold">AWS cloud technologies</span>, and practical expertise in <span className="font-semibold">Machine Learning</span> using <span className="whitespace-nowrap">tree-based</span> models. Experienced in applying data-driven methods to extract insights and support <span className="whitespace-nowrap">decision-making.</span>
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={() =>
                    window.open('https://drive.google.com/file/d/1uapJtOcNr6_fwsvBKVpw8AmsU5lgeG-_/view?usp=sharing', '_blank')
                  }
                  className="inline-flex items-center gap-2 rounded-full border-2 border-blue-500 bg-[#1a1a1a] px-8 py-3.5 text-base font-medium text-white shadow-md transition-all hover:bg-blue-500/10 hover:border-blue-400 hover:-translate-y-0.5"
                >
                  Download CV
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-[#1a1a1a] px-8 py-3.5 text-base font-medium text-white shadow-md transition-all hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
                >
                  Get in Touch
                </a>
              </div>

              {/* STATS WITH VERTICAL SEPARATORS */}
              <div className="mt-12 grid grid-cols-3 max-w-md gap-4 lg:flex lg:max-w-full lg:gap-6 lg:divide-x lg:divide-white/10">
                {[
                  { k: "3+", v: "Years experience" },
                  { k: "10+", v: "Projects shipped" },
                  {
                    k: (
                      <>
                        <span className="lg:hidden">BSc </span>
                        <span className="hidden lg:inline">Bachelor's Degree - BS</span>
                      </>
                    ),
                    v: (
                      <>
                        <span className="lg:hidden">(Hons) - Mech Eng</span>
                        <span className="hidden lg:inline">Mechanical Engineering in production</span>
                      </>
                    ),
                  },
                ].map((s, i) => (
                  <div key={i} className={i !== 0 ? "lg:pl-6" : ""}>
                    <div className="font-display text-2xl lg:text-3xl text-foreground font-semibold lg:whitespace-nowrap">
                      {s.k}
                    </div>

                    <div className="text-base lg:text-lg text-muted-foreground mt-1 lg:mt-2 lg:whitespace-nowrap">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE (PROFILE PICTURE ONLY) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="relative mx-auto flex items-center justify-center w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px]"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 via-accent/30 to-transparent blur-2xl" />

              {/* orbit ring */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 420 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="210"
                  cy="210"
                  r="203"
                  stroke="url(#orbitGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="6 10"
                />
                <defs>
                  <linearGradient id="orbitGrad" x1="0" y1="0" x2="420" y2="420">
                    <stop stopColor="#6366f1" stopOpacity="0.6" />
                    <stop offset="0.5" stopColor="#22d3ee" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* avatar */}
              <div className="relative z-10 w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] lg:w-[290px] lg:h-[290px] rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl">
                <img
                  src="/images/Razak.jpeg"
                  alt="Abdoul Razak – Data Scientist"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* floating chips */}
              <div className="absolute glass rounded-xl px-3 py-2 text-xs shadow-glass z-20 whitespace-nowrap"
                style={{ top: "12px", left: "-10px", animation: "float 5s ease-in-out infinite" }}>
                🌐 Google Colab & Deepnote
              </div>

              <div className="absolute glass rounded-xl px-3 py-2 text-xs shadow-glass z-20 whitespace-nowrap"
                style={{ top: "35px", right: "-12px", animation: "float 6s ease-in-out infinite reverse" }}>
                ⚡ Power BI & Tableau
              </div>

              <div className="absolute glass rounded-xl px-3 py-2 text-xs shadow-glass z-20 whitespace-nowrap"
                style={{ bottom: "35px", left: "-15px", animation: "float 7s ease-in-out infinite" }}>
                ☀️ MySQL & Excel
              </div>

              <div className="absolute glass rounded-xl px-3 py-2 text-xs shadow-glass z-20 whitespace-nowrap"
                style={{ bottom: "18px", right: "-10px", animation: "float 5.5s ease-in-out infinite reverse" }}>
                📡 Python "Pandas & Numpy"
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}