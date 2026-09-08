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
      <div className="mx-auto w-[min(1200px,94%)]">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-2.5 transition-all duration-300 ${scrolled
            ? "bg-[#0a0f1d]/85 backdrop-blur-xl border border-cyan-500/20 shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_24px_-4px_rgba(34,211,238,0.15)]"
            : "bg-[#0a0f1d]/50 backdrop-blur-md border border-white/10"
            }`}
        >
          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center group gap-1">
            <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              Portfolio<span className="text-cyan-400 font-extrabold text-2xl leading-none inline-block animate-pulse">.</span>
            </span>
          </Link>

          {/* ── LINKS ── */}
          <ul className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
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
                      className={`relative px-4 py-2 text-sm font-navbar font-medium tracking-wide rounded-full transition-all duration-300 flex items-center gap-2 group select-none ${
                        isActive
                          ? "text-white"
                          : "text-white hover:bg-white/[0.1]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavCapsule"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 via-cyan-500/25 to-indigo-600/30 border border-cyan-400/40 shadow-[0_0_18px_rgba(34,211,238,0.3)] backdrop-blur-sm -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}

                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                      )}

                      <span
                        className={
                          isActive
                            ? "bg-gradient-to-r from-cyan-300 via-sky-100 to-white bg-clip-text text-transparent font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                            : "text-white font-medium"
                        }
                      >
                        {s.label}
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={`/#${s.id}`}
                      className="px-4 py-2 text-sm font-navbar font-medium tracking-wide text-white hover:bg-white/[0.1] rounded-full transition-all duration-200 block"
                    >
                      {s.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>


          {/* ── MOBILE MENU BUTTON ── */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-500/30 transition-all"
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
                          className={`relative flex items-center gap-2.5 px-4 py-3 text-[15px] font-navbar font-medium tracking-wide rounded-xl transition-all duration-200 ${
                            isActive
                              ? "bg-gradient-to-r from-blue-600/25 via-cyan-500/20 to-indigo-600/15 border border-cyan-400/40 text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                              : "text-white hover:bg-white/[0.08]"
                          }`}
                        >
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                          )}
                          <span
                            className={
                              isActive
                                ? "bg-gradient-to-r from-cyan-300 via-sky-100 to-white bg-clip-text text-transparent font-semibold"
                                : "text-white font-medium"
                            }
                          >
                            {s.label}
                          </span>
                        </a>
                      ) : (
                        <Link
                          to={`/#${s.id}`}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-3 text-[15px] font-navbar font-medium tracking-wide text-white hover:bg-white/[0.08] rounded-xl transition-colors"
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