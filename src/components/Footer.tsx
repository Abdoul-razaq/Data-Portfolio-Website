import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-24">
      <div className="mx-auto w-[min(1200px,92%)] py-10 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <p className="text-base text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Abdoul Razak — Data Analyst & Scientist
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <a
            href="mailto:razaquepearly01@gmail.com"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg glass hover:text-accent transition hover:scale-105"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>

          <a
            href="https://github.com/Abdoul-razaq"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg glass hover:text-accent transition hover:scale-105"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/abdoul-razak-niyigena?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhsvVl9n2Tiytrdd3PPXDzg%3D%3D"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg glass hover:text-accent transition hover:scale-105"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>

        </div>
      </div>
    </footer>
  );
}