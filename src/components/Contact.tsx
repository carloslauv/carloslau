"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--dark-bg, #090B13)",
        color: "var(--dark-text, #E4E8F5)",
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: 1120, marginInline: "auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(3rem, 6vw, 5rem)",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
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
              Contact
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                textWrap: "balance",
                marginBottom: "1.5rem",
              }}
            >
              Let&rsquo;s build something.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--dark-text-2, #8B91B0)",
                lineHeight: 1.65,
                maxWidth: "38ch",
              }}
            >
              Open to AI PM roles, senior operator positions, and enterprise AI
              consulting engagements. No sponsorship needed.
            </p>
          </div>

          {/* Right */}
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                label: "Email",
                value: "carloslauv@gmail.com",
                href: "mailto:carloslauv@gmail.com",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/carloslau",
                href: "https://linkedin.com/in/carloslau",
              },
            ].map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  background: "var(--dark-surface, #0F1221)",
                  border: "1px solid var(--dark-border, rgba(240,242,252,0.08))",
                  borderRadius: 10,
                  textDecoration: "none",
                  color: "var(--dark-text, #E4E8F5)",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                  gap: "1rem",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(79,70,229,0.4)";
                  el.style.background = "rgba(79,70,229,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(240,242,252,0.08)";
                  el.style.background = "var(--dark-surface, #0F1221)";
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "0.6875rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--dark-text-2, #8B91B0)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 500 }}>{value}</p>
                </div>
                <span style={{ color: "var(--dark-text-2, #8B91B0)", fontSize: "1.25rem" }}>
                  ↗
                </span>
              </a>
            ))}

            <a
              href="/resume.pdf"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "1rem",
                background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
                borderRadius: 10,
                textDecoration: "none",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9375rem",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Download résumé ↓
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "clamp(4rem, 8vw, 6rem)",
            paddingTop: "2rem",
            borderTop: "1px solid var(--dark-border, rgba(240,242,252,0.08))",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              color: "var(--dark-text-2, #8B91B0)",
            }}
          >
            Carlos Lau · 2026
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.75rem",
              color: "var(--dark-text-2, #8B91B0)",
            }}
          >
            Built with Next.js · Deployed on Vercel
          </span>
        </div>
      </div>
    </section>
  );
}
