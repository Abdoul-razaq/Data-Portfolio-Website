import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface MorphSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MorphSection({
  children,
  className = "relative z-10 mx-auto w-[min(1200px,92%)]",
  delay = 0,
}: MorphSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.95, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1], // PowerPoint Morph smooth fluid curve
      }}
      style={{ transformOrigin: "top center" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
