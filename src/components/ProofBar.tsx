"use client";

import { useEffect, useRef, useState } from "react";

interface Metric {
  value: string;
  numericEnd: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "$1M", numericEnd: 1, prefix: "$", suffix: "M ARR", label: "ARR at Kurios" },
  { value: "156%", numericEnd: 156, suffix: "%", label: "Net Dollar Retention" },
  { value: "$143M", numericEnd: 143, prefix: "$", suffix: "M GMV", label: "Uber Peru GMV" },
  { value: "8→2", numericEnd: 2, suffix: " DAYS", label: "Scoping cycle compressed" },
  { value: "86%", numericEnd: 86, suffix: "%", label: "Logo Retention" },
  { value: "75+", numericEnd: 75, suffix: "+", label: "Net Promoter Score" },
];

function CountUp({ end, prefix = "", suffix = "", started }: { end: number; prefix?: string; suffix?: string; started: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const steps = 60;
    const increment = end / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(Math.round(increment * step), end));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span>
      {prefix}{current}{suffix}
    </span>
  );
}

export default function ProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const logos = ["YC", "Walmart", "Scotiabank", "BCP", "FEMSA", "Uber"];

  return (
    <section
      ref={ref}
      style={{
        background: "var(--dark-bg, #090B13)",
        color: "var(--dark-text, #E4E8F5)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: 1120, marginInline: "auto" }}>
        {/* Metrics grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "clamp(2rem, 4vw, 3.5rem)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  fontVariantNumeric: "tabular-nums",
                  background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                }}
              >
                {m.value === "8→2" ? (
                  <span>8→<CountUp end={m.numericEnd} suffix=" DAYS" started={started} /></span>
                ) : (
                  <CountUp end={m.numericEnd} prefix={m.prefix} suffix={m.suffix} started={started} />
                )}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--dark-text-2, #8B91B0)",
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "var(--dark-border, rgba(240,242,252,0.08))",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        />

        {/* Logo strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "clamp(1.5rem, 3vw, 3rem)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--dark-text-2, #8B91B0)",
            }}
          >
            Worked with
          </span>
          {logos.map((logo) => (
            <span
              key={logo}
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "rgba(228,232,245,0.45)",
                transition: "color 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(228,232,245,0.9)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(228,232,245,0.45)")
              }
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
