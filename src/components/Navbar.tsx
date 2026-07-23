import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

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
            <span className="font-display text-2xl tracking-tight text-white">
              <span className="text-blue-500 font-bold">N</span><span className="font-bold">\</span>abdoul Razak.
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
                    className={`px-3 py-2 text-lg rounded-md transition-colors
    ${active === s.id
                        ? "text-blue-400 font-semibold underline underline-offset-4"
                        : "text-muted-foreground hover:text-white"
                      }`}
                  >
                    {s.label}
                  </a>
                ) : (
                  <Link
                    to={`/#${s.id}`}
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5"
                  >
                    {s.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* ── CV BUTTON (REFERENCE STYLE) ── */}
          <div className="hidden lg:block">
            <button
              onClick={() =>
                window.open('https://drive.google.com/file/d/1j_yfALFgx4-bsB5HHDbK5xRK4RBzVsh6/view?usp=sharing', '_blank')
              }
              className="inline-flex items-center gap-2 bg-pink-500 px-5 py-2.5 text-sm font-medium text-white rounded-md shadow-md transition-all hover:bg-pink-600 hover:-translate-y-0.5"
            >
              Download CV
              <Download size={20} />
            </button>
          </div>

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
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3">
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
                      className={`block px-4 py-3 text-lg rounded-lg transition-colors
    ${active === s.id
                          ? "text-blue-400 font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {s.label}
                    </a>
                  ) : (
                    <Link
                      to={`/#${s.id}`}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-lg text-muted-foreground hover:text-foreground transition-colors rounded-lg"
                    >
                      {s.label}
                    </Link>
                  )}
                </li>
              ))}

              {/* ── CV BUTTON MOBILE (REFERENCE STYLE) ── */}
              <li className="mt-2">
                <button
                  onClick={() =>
                    window.open('https://drive.google.com/file/d/1j_yfALFgx4-bsB5HHDbK5xRK4RBzVsh6/view?usp=sharing', '_blank')
                  }
                  className="inline-flex items-center gap-2 bg-pink-500 px-5 py-2.5 text-sm font-medium text-white rounded-md shadow-md transition-all hover:bg-pink-600 hover:-translate-y-0.5"
                >
                  Download CV
                  <Download size={16} />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header >
  );
}