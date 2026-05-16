/**
 * Reusable SVG-based cover art for project cards & headers.
 * Uses pure CSS gradients + abstract geometry — no external images needed.
 */
type Variant =
  | "iot-bus"
  | "iot-circuit"
  | "iot-dashboard"
  | "iot-light"
  | "energy-heat"
  | "energy-chart"
  | "energy-diagram"
  | "web-dashboard"
  | "web-mobile"
  | "web-charts";

type Props = {
  variant: Variant;
  className?: string;
};

const palettes: Record<Variant, { from: string; to: string; accent: string; icon: React.ReactNode }> = {
  "iot-bus": {
    from: "oklch(0.32 0.12 268)",
    to: "oklch(0.18 0.04 268)",
    accent: "oklch(0.82 0.18 210)",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <rect x="60" y="80" width="180" height="100" rx="14" />
        <circle cx="100" cy="190" r="14" />
        <circle cx="200" cy="190" r="14" />
        <path d="M70 110h160M90 140h120" opacity="0.6" />
      </g>
    ),
  },
  "iot-circuit": {
    from: "oklch(0.28 0.1 290)",
    to: "oklch(0.16 0.04 270)",
    accent: "oklch(0.78 0.2 305)",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M40 100h60v40h60v-40h60v60h60" />
        <circle cx="100" cy="100" r="6" fill="currentColor" />
        <circle cx="220" cy="160" r="6" fill="currentColor" />
        <circle cx="160" cy="100" r="6" fill="currentColor" />
      </g>
    ),
  },
  "iot-dashboard": {
    from: "oklch(0.3 0.11 220)",
    to: "oklch(0.16 0.04 268)",
    accent: "oklch(0.82 0.18 210)",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <rect x="60" y="60" width="180" height="140" rx="10" />
        <path d="M75 170l30-40 30 20 35-50 30 30 25-15" />
        <circle cx="105" cy="130" r="3" fill="currentColor" />
        <circle cx="170" cy="100" r="3" fill="currentColor" />
      </g>
    ),
  },
  "iot-light": {
    from: "oklch(0.32 0.1 80)",
    to: "oklch(0.18 0.04 268)",
    accent: "oklch(0.85 0.16 95)",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M150 70a40 40 0 00-20 74v18h40v-18a40 40 0 00-20-74z" />
        <path d="M140 180h20M138 195h24" />
        <path d="M150 50v-12M105 80l-8-8M195 80l8-8" />
      </g>
    ),
  },
  "energy-heat": {
    from: "oklch(0.32 0.13 30)",
    to: "oklch(0.18 0.04 280)",
    accent: "oklch(0.78 0.18 40)",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M120 70c10 14 0 24 0 38s14 22 14 36-14 24-14 38" />
        <path d="M160 70c10 14 0 24 0 38s14 22 14 36-14 24-14 38" />
        <path d="M200 70c10 14 0 24 0 38s14 22 14 36-14 24-14 38" />
      </g>
    ),
  },
  "energy-chart": {
    from: "oklch(0.3 0.12 200)",
    to: "oklch(0.16 0.04 268)",
    accent: "oklch(0.78 0.18 200)",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M50 200h220" />
        <path d="M70 180v-40M110 180v-80M150 180v-60M190 180v-110M230 180v-70" strokeLinecap="round" />
      </g>
    ),
  },
  "energy-diagram": {
    from: "oklch(0.3 0.12 160)",
    to: "oklch(0.16 0.04 268)",
    accent: "oklch(0.78 0.18 170)",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <rect x="60" y="100" width="60" height="60" rx="8" />
        <rect x="180" y="100" width="60" height="60" rx="8" />
        <path d="M120 130h60M170 120l10 10-10 10" />
      </g>
    ),
  },
  "web-dashboard": {
    from: "oklch(0.3 0.13 268)",
    to: "oklch(0.16 0.04 268)",
    accent: "oklch(0.78 0.2 268)",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <rect x="50" y="60" width="200" height="140" rx="12" />
        <path d="M50 95h200" />
        <rect x="65" y="115" width="80" height="70" rx="6" />
        <rect x="155" y="115" width="80" height="32" rx="6" />
        <rect x="155" y="155" width="80" height="30" rx="6" />
      </g>
    ),
  },
  "web-mobile": {
    from: "oklch(0.3 0.13 305)",
    to: "oklch(0.16 0.04 270)",
    accent: "oklch(0.78 0.2 305)",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <rect x="120" y="50" width="60" height="160" rx="10" />
        <path d="M120 70h60M120 190h60" />
        <circle cx="150" cy="200" r="3" fill="currentColor" />
      </g>
    ),
  },
  "web-charts": {
    from: "oklch(0.3 0.13 210)",
    to: "oklch(0.16 0.04 268)",
    accent: "oklch(0.82 0.18 210)",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <circle cx="150" cy="130" r="55" />
        <path d="M150 130l40-20M150 130v-55" strokeLinecap="round" />
      </g>
    ),
  },
};

export function CoverArt({ variant, className }: Props) {
  const p = palettes[variant];
  return (
    <svg
      viewBox="0 0 300 240"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.from} />
          <stop offset="100%" stopColor={p.to} />
        </linearGradient>
        <radialGradient id={`glow-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={p.accent} stopOpacity="0.45" />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="240" fill={`url(#bg-${variant})`} />
      <circle cx="220" cy="60" r="120" fill={`url(#glow-${variant})`} />
      <g style={{ color: p.accent }}>{p.icon}</g>
      {/* subtle grid overlay */}
      <g stroke="oklch(0.85 0.05 268 / 0.08)" strokeWidth="0.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="240" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 25} x2="300" y2={i * 25} />
        ))}
      </g>
    </svg>
  );
}
