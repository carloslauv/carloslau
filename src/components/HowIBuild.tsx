"use client";

import { useEffect, useRef } from "react";

const tools = [
  { name: "Claude Code", role: "Primary build environment" },
  { name: "Claude Skills / MCP", role: "Agent orchestration" },
  { name: "GitHub", role: "Version control & CI" },
  { name: "Vercel / Netlify", role: "Deploy & preview" },
  { name: "Neon / Supabase", role: "Postgres at the edge" },
  { name: "VectorShift", role: "Visual agent pipelines" },
];

const principles = [
  "Prototype in days, instrument, iterate.",
  "Evals before scale.",
  "Agentic where it helps — deterministic where it must be.",
];

export default function HowIBuild() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = Array.from(el.querySelectorAll(".reveal-item")) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(16px)";
      child.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.style.opacity = "1";
            child.style.transform = "translateY(0)";
          });
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "var(--dark-bg, #090B13)",
        color: "var(--dark-text, #E4E8F5)",
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div ref={ref} style={{ maxWidth: 1120, marginInline: "auto" }}>
        <div
          className="reveal-item"
          style={{ marginBottom: "clamp(3rem, 6vw, 4.5rem)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent-b, #06B6D4)",
              marginBottom: "1rem",
            }}
          >
            How I build
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              textWrap: "balance",
              maxWidth: "22ch",
            }}
          >
            Technical depth,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              shown
            </span>{" "}
            not claimed.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(2rem, 4vw, 4rem)",
          }}
        >
          {/* Stack */}
          <div>
            <p
              className="reveal-item"
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--dark-text-2, #8B91B0)",
                marginBottom: "1.25rem",
              }}
            >
              Stack
            </p>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {tools.map(({ name, role }) => (
                <div
                  key={name}
                  className="reveal-item"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.75rem",
                    padding: "0.75rem 1rem",
                    background: "var(--dark-surface, #0F1221)",
                    borderRadius: 8,
                    border: "1px solid var(--dark-border, rgba(240,242,252,0.07))",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--dark-text, #E4E8F5)",
                      minWidth: "max-content",
                    }}
                  >
                    {name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--dark-text-2, #8B91B0)",
                    }}
                  >
                    — {role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Method */}
          <div>
            <p
              className="reveal-item"
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--dark-text-2, #8B91B0)",
                marginBottom: "1.25rem",
              }}
            >
              Method
            </p>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {principles.map((p, i) => (
                <div
                  key={i}
                  className="reveal-item"
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "0.6875rem",
                      color: "var(--accent-b, #06B6D4)",
                      opacity: 0.6,
                      paddingTop: "0.25em",
                      minWidth: "1.25rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.55,
                      color: "var(--dark-text, #E4E8F5)",
                      fontWeight: 500,
                    }}
                  >
                    {p}
                  </p>
                </div>
              ))}

              <div
                className="reveal-item"
                style={{
                  marginTop: "1rem",
                  padding: "1.25rem 1.5rem",
                  background: "linear-gradient(135deg, rgba(79,70,229,0.12), rgba(6,182,212,0.08))",
                  border: "1px solid rgba(79,70,229,0.2)",
                  borderRadius: 10,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.8125rem",
                    color: "var(--dark-text, #E4E8F5)",
                    lineHeight: 1.6,
                    letterSpacing: "0.01em",
                  }}
                >
                  &ldquo;I understand production RAG tradeoffs — not just the
                  demo.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
