import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      if (!onHome) {
        setActive("");
        return;
      }

      const sectionsIds = ["home", "about", "skills", "projects", "certificates", "contact"];
      let current = "home";

      sectionsIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 120;
          if (window.scrollY >= offsetTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [onHome]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="mx-auto w-[min(1240px,94%)]">
        <nav
          className={`flex items-center justify-between rounded-full px-5 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 ${scrolled
            ? "bg-[#0a0f1d]/90 backdrop-blur-xl border border-cyan-500/20 shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_24px_-4px_rgba(34,211,238,0.15)]"
            : "bg-[#0a0f1d]/60 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            }`}
        >
          {/* ── LOGO (LEFT) ── */}
          <Link to="/" className="flex items-center group gap-1">
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              Portfolio<span className="text-cyan-400 font-extrabold text-xl leading-none inline-block animate-pulse">.</span>
            </span>
          </Link>

          {/* ── PILL TABS (RIGHT CORNER) ── */}
          <div className="hidden lg:flex items-center justify-end">
            <ul className="flex items-center p-1 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)]">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id} className="relative">
                    {onHome ? (
                      <a
                        href={`#${s.id}`}
                        onClick={() => {
                          setActive(s.id);
                        }}
                        className={`relative px-4 py-1.5 text-[13px] sm:text-[13.5px] font-navbar tracking-normal rounded-full transition-all duration-200 flex items-center justify-center select-none ${
                          isActive
                            ? "text-blue-600 font-bold"
                            : "text-white hover:text-cyan-300 font-medium"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeNavCapsule"
                            className="absolute inset-0 rounded-full bg-white shadow-[0_3px_12px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.18)] -z-10"
                            transition={{ type: "spring", stiffness: 450, damping: 35 }}
                          />
                        )}

                        <span>{s.label}</span>
                      </a>
                    ) : (
                      <Link
                        to={`/#${s.id}`}
                        className="px-4 py-1.5 text-[13px] sm:text-[13.5px] font-navbar font-medium tracking-normal text-white hover:text-cyan-300 rounded-full transition-all duration-200 block"
                      >
                        {s.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── MOBILE MENU BUTTON ── */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-500/30 transition-all"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden mt-2.5 bg-[#0a0f1d]/95 backdrop-blur-2xl border border-cyan-500/25 rounded-2xl p-3 shadow-2xl overflow-hidden"
            >
              <ul className="flex flex-col gap-1.5">
                {sections.map((s) => {
                  const isActive = active === s.id;
                  return (
                    <li key={s.id}>
                      {onHome ? (
                        <a
                          href={`#${s.id}`}
                          onClick={() => {
                            setActive(s.id);
                            setOpen(false);
                          }}
                          className={`relative flex items-center justify-between px-4 py-3 text-[15px] font-navbar tracking-wide rounded-xl transition-all duration-200 ${
                            isActive
                              ? "bg-white text-blue-600 font-bold shadow-md"
                              : "text-white hover:text-cyan-300 hover:bg-white/[0.08] font-medium"
                          }`}
                        >
                          <span>{s.label}</span>
                        </a>
                      ) : (
                        <Link
                          to={`/#${s.id}`}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-3 text-[15px] font-navbar font-medium tracking-wide text-white hover:text-cyan-300 hover:bg-white/[0.08] rounded-xl transition-colors"
                        >
                          {s.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}