"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        background: "var(--bg, #F7F8FC)",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 6rem)",
      }}
    >
      <div style={{ maxWidth: 1120, marginInline: "auto", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(3rem, 6vw, 5rem)",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                marginBottom: "2rem",
                animation: "fadeUp 0.7s ease 0.1s both",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  color: "var(--text-3, #5A6180)",
                  textTransform: "uppercase",
                }}
              >
                YC S21 · Ex-Uber Pre-IPO · EB1A
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "var(--text, #0C0E1A)",
                textWrap: "balance",
                marginBottom: "1.75rem",
              }}
            >
              Carlos{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Lau
              </span>
              .
            </h1>

            {/* Bio */}
            <p
              style={{
                fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
                color: "var(--text-2, #3D4260)",
                maxWidth: "52ch",
                lineHeight: 1.65,
                marginBottom: "2.5rem",
                animation: "fadeUp 0.7s ease 0.35s both",
              }}
            >
              I&rsquo;ve spent a decade building at the intersection of product and enterprise —
              from employee&nbsp;#4 at Uber Peru (scaled{" "}
              <strong style={{ color: "var(--text, #0C0E1A)", fontWeight: 600 }}>
                $2M → $143M GMV
              </strong>
              ) to founding Kurios, a YC-backed AI upskilling company that reached{" "}
              <strong style={{ color: "var(--text, #0C0E1A)", fontWeight: 600 }}>
                $1M ARR across 8 countries
              </strong>
              . Now I build AI products end-to-end: from RAG pipelines to enterprise contracts.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                animation: "fadeUp 0.7s ease 0.5s both",
              }}
            >
              <a
                href="#built"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
                  color: "#fff",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  letterSpacing: "-0.01em",
                  boxShadow: "0 4px 24px rgba(79, 70, 229, 0.3)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 8px 32px rgba(79, 70, 229, 0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 24px rgba(79, 70, 229, 0.3)";
                }}
              >
                See what I&rsquo;ve built →
              </a>
              <a
                href="/resume.pdf"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "transparent",
                  color: "var(--text, #0C0E1A)",
                  border: "1.5px solid var(--surface-border, rgba(12,14,26,0.15))",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--accent-a, #4F46E5)";
                  el.style.background = "rgba(79, 70, 229, 0.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(12,14,26,0.15)";
                  el.style.background = "transparent";
                }}
              >
                Download résumé ↓
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div
            className="hero-photo"
            style={{
              animation: "fadeUp 0.9s ease 0.2s both",
            }}
          >
            <div
              style={{
                width: "clamp(180px, 22vw, 280px)",
                aspectRatio: "3/4",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 24px 64px rgba(79, 70, 229, 0.18), 0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              {/* Gradient placeholder — swap for <img src="/carlos.jpg" … /> */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(160deg, #4F46E5 0%, #06B6D4 60%, #0C0E1A 100%)",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  padding: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Carlos Lau
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { display: none; }
        }
      `}</style>
    </section>
  );
}
