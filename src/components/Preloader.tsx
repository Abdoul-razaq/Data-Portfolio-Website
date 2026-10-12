import { useState, useEffect } from "react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Disable scrolling during preloader
    document.body.style.overflow = "hidden";

    const duration = 1800; // ~1.8 seconds smooth count
    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressFraction = Math.min(elapsed / duration, 1);

      // Smooth custom easing
      const ease =
        progressFraction < 0.5
          ? 2 * progressFraction * progressFraction
          : -1 + (4 - 2 * progressFraction) * progressFraction;

      const currentPercent = Math.min(Math.floor(ease * 100), 100);
      setProgress(currentPercent);

      if (progressFraction < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            document.body.style.overflow = "unset";
            onComplete();
          }, 420);
        }, 220);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  // Dynamic system status labels matching nestgates style
  const getStatusText = (val: number) => {
    if (val < 25) return "Preparing your experience...";
    if (val < 60) return "Loading data models & analytics...";
    if (val < 90) return "Still preparing things...";
    if (val < 100) return "Almost there...";
    return "Ready";
  };

  return (
    <div
      className={`loading-screen${isFadingOut ? " fade-out" : ""}`}
      role="status"
      aria-live="polite"
    >
      {/* ── BRANDMARK WITH HALO ── */}
      <div className="loader-brandmark-wrap">
        <div className="loader-halo" aria-hidden="true" />
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="loader-brandmark-icon"
        >
          {/* Geometric Monogram Brand Icon */}
          <rect
            x="12"
            y="12"
            width="56"
            height="56"
            rx="16"
            stroke="white"
            strokeWidth="2.5"
            strokeOpacity="0.95"
          />
          <path
            d="M26 52 L40 24 L54 52"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 42 H48"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="40" cy="24" r="3.2" fill="#3B82F6" />
        </svg>
      </div>

      {/* ── WORDMARK ── */}
      <div className="loader-wordmark">
        <span>Abdoul Razak</span>
        <span className="loader-wordmark-dot">.</span>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="loader-bar-wrap">
        <div
          className="loader-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── MESSAGE WITH 0 TO 100 COUNTER ── */}
      <p className="loader-message font-mono">
        {progress}% · {getStatusText(progress)}
      </p>
    </div>
  );
}
