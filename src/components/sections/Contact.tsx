import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Check } from "lucide-react";
import { SectionHeader } from "./About";
import { GithubIcon, LinkedinIcon } from "../BrandIcons";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "razaquepearly01@gmail.com",
    href: "mailto:razaquepearly01@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+250 787 856 240",
    href: "tel:+250787856240",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/abdoul-razak-niyigena",
    href: "https://www.linkedin.com/in/abdoul-razak-niyigena?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhsvVl9n2Tiytrdd3PPXDzg%3D%3D",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Abdoul-razaq",
    href: "https://github.com/Abdoul-razaq",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative pt-2 pb-16 sm:pt-4 sm:pb-24 scroll-mt-24">
      <div className="aurora opacity-50" />

      <div className="relative mx-auto w-[min(1200px,92%)]">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s work on something impactful."
          subtitle="Abdoul Razak - Data Analyst & Scientist. Open to internships, data roles, and collaborations where data drives decisions."
        />

        <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-6">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-6 space-y-3"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl p-3 hover:bg-white/5 transition group"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-accent group-hover:scale-110 transition">
                  <c.icon size={20} />
                </span>

                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-display text-sm truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3500);
              (e.target as HTMLFormElement).reset();
            }}
            className="glass-strong rounded-3xl p-6 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <Field label="Subject" name="subject" placeholder="What's this about?" />

            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about the role, project, or idea…"
                className="w-full rounded-xl bg-input/60 border border-border/60 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/60 focus:border-ring transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow-indigo hover:shadow-glow-cyan transition-all hover:-translate-y-0.5 disabled:opacity-70"
            >
              {sent ? (
                <>
                  <Check size={16} /> Message sent
                </>
              ) : (
                <>
                  Send message
                  <Send size={14} className="group-hover:translate-x-0.5 transition" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs text-muted-foreground mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-input/60 border border-border/60 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/60 focus:border-ring transition"
      />
    </div>
  );
}