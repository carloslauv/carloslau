"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
        background: scrolled ? "rgba(247, 248, 252, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(12, 14, 26, 0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          marginInline: "auto",
          paddingInline: "clamp(1.5rem, 5vw, 4rem)",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "0.8125rem",
            letterSpacing: "0.04em",
            color: "var(--text)",
            textDecoration: "none",
            fontWeight: 500,
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          CARLOS LAU
        </a>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[
            { label: "Built", href: "#built" },
            { label: "Origins", href: "#origins" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: "0.875rem",
                color: "var(--text-3, #5A6180)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text, #0C0E1A)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-3, #5A6180)")
              }
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            style={{
              fontSize: "0.8125rem",
              fontFamily: "var(--font-mono, monospace)",
              letterSpacing: "0.06em",
              color: "var(--accent-a, #4F46E5)",
              textDecoration: "none",
              padding: "0.375rem 0.875rem",
              border: "1.5px solid var(--accent-a, #4F46E5)",
              borderRadius: 6,
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--accent-a, #4F46E5)";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "var(--accent-a, #4F46E5)";
            }}
          >
            RÉSUMÉ ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
