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

const businessImpact = [
  { label: "GMV scaled", value: "$143M", sub: "Uber Peru" },
  { label: "Net Dollar Retention", value: "156%", sub: "Kurios" },
  { label: "ARR reached", value: "$1M", sub: "8 countries" },
  { label: "Enterprise clients", value: "75+", sub: "across verticals" },
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
      { threshold: 0.1 }
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
        {/* Header */}
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
            Technical depth{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              and
            </span>{" "}
            business results.
          </h2>
        </div>

        {/* Code × Business Impact dual panel */}
        <div
          className="reveal-item"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5px",
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(79,70,229,0.2)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {/* Code panel */}
          <div
            style={{
              background: "#0A0C18",
              padding: "2rem 2rem 2rem 2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.6875rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "1.25rem",
              }}
            >
              From the RAG engine codebase
            </p>
            <pre
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                lineHeight: 1.75,
                color: "#C8D0E8",
                margin: 0,
                overflowX: "auto",
              }}
            >
              <code>
                <span style={{ color: "#8B91B0" }}>{"// classify content before scoping"}</span>
                {"\n"}
                <span style={{ color: "#06B6D4" }}>{"const"}</span>
                {" classify = "}
                <span style={{ color: "#06B6D4" }}>{"async"}</span>
                {" (chunk) => {\n  "}
                <span style={{ color: "#06B6D4" }}>{"const"}</span>
                {" result = "}
                <span style={{ color: "#06B6D4" }}>{"await"}</span>
                {" claude({\n    model: "}
                <span style={{ color: "#86EFAC" }}>{'"claude-sonnet"'}</span>
                {",\n    prompt: buildPrompt(chunk),\n  });\n  "}
                <span style={{ color: "#06B6D4" }}>{"return"}</span>
                {" result; "}
                <span style={{ color: "#8B91B0" }}>{"// reuse | adapt | net-new"}</span>
                {"\n}"}
              </code>
            </pre>
          </div>

          {/* Business impact panel */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(6,182,212,0.06) 100%)",
              padding: "2rem",
              borderLeft: "1.5px solid rgba(79,70,229,0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.6875rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "1.5rem",
              }}
            >
              Business impact
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
              }}
            >
              {businessImpact.map(({ label, value, sub }) => (
                <div key={label}>
                  <p
                    style={{
                      fontSize: "clamp(1.5rem, 4vw, 2rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      background: "linear-gradient(135deg, #E4E8F5, #06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1.1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--dark-text, #E4E8F5)",
                      marginBottom: "0.125rem",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "0.6875rem",
                      color: "var(--dark-text-2, #8B91B0)",
                    }}
                  >
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stack + Method */}
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
                  &ldquo;I understand production RAG tradeoffs — not just the demo.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
