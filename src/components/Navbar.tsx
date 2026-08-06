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
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${scrolled
            ? "bg-white/25 backdrop-blur-lg shadow-glass"
            : "bg-white/15 backdrop-blur-md"
            }`}
        >
          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center group">
            <span className="font-display text-1.8xl tracking-tight text-white">
              Portfolio.
            </span>
          </Link>

          {/* ── LINKS ── */}
          <ul className="hidden lg:flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                {onHome ? (
                  <a
                    href={`#${s.id}`}
                    onClick={() => {
                      setActive(s.id);
                    }}
                    className={`px-3.5 py-2 text-[15px] font-navbar font-medium tracking-wide rounded-md transition-colors
    ${active === s.id
                        ? "text-white font-bold underline decoration-2 underline-offset-[6px] decoration-[oklch(0.78_0.16_210)]"
                        : "text-muted-foreground hover:text-white"
                      }`}
                  >
                    {s.label}
                  </a>
                ) : (
                  <Link
                    to={`/#${s.id}`}
                    className="px-3.5 py-2 text-[15px] font-navbar font-medium tracking-wide text-muted-foreground hover:text-white transition-colors rounded-md"
                  >
                    {s.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>


          {/* ── MOBILE MENU BUTTON ── */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3 overflow-hidden"
            >
              <ul className="flex flex-col">
                {sections.map((s) => (
                  <li key={s.id}>
                    {onHome ? (
                      <a
                        href={`#${s.id}`}
                        onClick={() => {
                          setActive(s.id);
                          setOpen(false);
                        }}
                        className={`block px-4 py-2.5 text-base font-navbar font-medium tracking-wide rounded-lg transition-colors
      ${active === s.id
                            ? "text-white font-bold underline decoration-2 underline-offset-[6px] decoration-[oklch(0.78_0.16_210)]"
                            : "text-muted-foreground hover:text-white"
                          }`}
                      >
                        {s.label}
                      </a>
                    ) : (
                      <Link
                        to={`/#${s.id}`}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 text-base font-navbar font-medium tracking-wide text-muted-foreground hover:text-white transition-colors rounded-lg"
                      >
                        {s.label}
                      </Link>
                    )}
                  </li>
                ))}

              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header >
  );
}