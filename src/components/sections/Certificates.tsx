import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeader } from "./About";

const certificates = [
  {
    title: "Certified Associate Data Scientist",
    issuer: "DataCamp",
    year: "2026",
    image: "/images/Certificate-1.png",
    url: "https://www.datacamp.com/certificate/DSA0011897974798",
  },
  {
    title: "Certified Associate Data Analyst",
    issuer: "DataCamp",
    year: "2026",
    image: "/images/Certificate-2.png",
    url: "https://www.datacamp.com/certificate/DAA0012772204704",
  },
  {
    title: "Machine Learning with Tree-Based Models",
    issuer: "DataCamp",
    year: "2026",
    image: "/images/Certificate-3.png",
    url: "https://www.datacamp.com/statement-of-accomplishment/course/e33988b9edc34dc8a51580c01ef952b742ce7389?raw=1",
  },
  {
    title: "Microsoft Certified: Azure Developer Associate(AZ-204)",
    issuer: "DataCamp",
    year: "2026",
    image: "/images/Certificate-4.png",
    url: "https://www.datacamp.com/statement-of-accomplishment/track/e3d6216ce26e0c1e648e8ec1974a01a5fedd71d2?raw=1",
  },
  {
    title: "AWS Cloud Practitioner (CLF-C02)",
    issuer: "DataCamp",
    year: "2026",
    image: "/images/Certificate-5.png",
    url: "https://www.datacamp.com/statement-of-accomplishment/track/79f02b8bc0ac602db7e607193eea4826ee669f33?raw=1",
  },
  {
    title: "Alx Venture’s Founder Academy",
    issuer: "Alx Africa + Mastercard Foundation Program",
    year: "2025",
    image: "/images/Certificate-6.png",
    url: "https://drive.google.com/file/d/1SiAaZi-wYOxraRm_fbQza9MnAv6q2BV1/view?usp=drivesdk",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative pt-2 pb-16 sm:pt-4 sm:pb-24 scroll-mt-24">
      <div className="mx-auto w-[min(1200px,92%)]">

        <SectionHeader
          eyebrow="Certificates"
          title="Professional Certifications & Verified Skills"
          subtitle="Industry-recognized certifications in Data Science, Machine Learning, and Analytics with verifiable credentials from leading platforms."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {certificates.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all hover:shadow-glow-cyan"
            >

              {/* CLICKABLE IMAGE */}
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[4/3] overflow-hidden"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 text-xs text-white bg-black/40 backdrop-blur px-3 py-1 rounded-full">
                  <Award size={14} />
                  {c.year}
                </div>
              </a>

              {/* TEXT */}
              <div className="p-4">
                <h3 className="font-display text-sm font-semibold leading-snug">
                  {c.title}
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  {c.issuer}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
        <p className="mt-10 text-center text-lg text-muted-foreground">
          I also have 20+ additional data-related certifications - visit my LinkedIn profile for full verification.
        </p>
      </div>
    </section>
  );
}