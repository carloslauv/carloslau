"use client";

import { useEffect, useRef } from "react";

const timeline = [
  { year: "Piura, Peru", event: "Where it started — small city, big ambitions." },
  { year: "Lima Banking", event: "First career: financial services. Saw what institutions couldn't move fast enough to do." },
  { year: "McCombs MBA", event: "UT Austin. Sharpened the business thinking, built the US network." },
  { year: "Amazon", event: "Learned systems-level product management at scale." },
  { year: "Uber Peru", event: "Employee #4. Helped build a market from $2M to $143M GMV." },
  { year: "Kurios (YC S21)", event: "Founded. Seven years. 8 countries. $1M ARR. AI upskilling for enterprises." },
  { year: "Now", event: "Building AI products. EB1A. What's next." },
];

const domains = [
  { category: "Regulated industries", tags: ["Banking", "Insurance", "Retail", "Logistics"] },
  { category: "Tech-native companies", tags: ["Uber (Pre-IPO)", "Amazon", "YC S21 founder"] },
  { category: "Domains", tags: ["Growth", "GTM", "Product", "Enterprise AI", "Operator"] },
];

const values = [
  { name: "Grit", desc: "The work compounds. Staying in it longer than comfortable is how the hard things get done." },
  { name: "Learning by building", desc: "I understand things by shipping them. The prototype reveals what the spec missed." },
  { name: "Bias for action", desc: "A decent decision made fast beats a perfect decision made slow." },
];

export default function Origins() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll(".tl-item")) as HTMLElement[];
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateX(-12px)";
      item.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item) => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
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
      id="origins"
      style={{
        background: "var(--bg, #F7F8FC)",
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: 1120, marginInline: "auto" }}>
        <div style={{ marginBottom: "clamp(3rem, 6vw, 4.5rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent-a, #4F46E5)",
              marginBottom: "1rem",
            }}
          >
            Origins & what drives me
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--text, #0C0E1A)",
              textWrap: "balance",
              maxWidth: "20ch",
            }}
          >
            Immigrant, builder, operator.
          </h2>
        </div>

        {/* Domain expertise */}
        <div
          style={{
            marginBottom: "clamp(3rem, 6vw, 4.5rem)",
            padding: "2rem",
            background: "var(--surface, #fff)",
            borderRadius: 14,
            border: "1px solid var(--surface-border, rgba(12,14,26,0.08))",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-3, #5A6180)",
              marginBottom: "1.5rem",
            }}
          >
            Deep domain knowledge
          </p>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {domains.map(({ category, tags }) => (
              <div
                key={category}
                style={{ display: "flex", alignItems: "baseline", gap: "1.25rem", flexWrap: "wrap" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.6875rem",
                    color: "var(--text-3, #5A6180)",
                    minWidth: "160px",
                    flexShrink: 0,
                  }}
                >
                  {category}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.3125rem 0.75rem",
                        background: "var(--bg, #F7F8FC)",
                        border: "1px solid var(--surface-border, rgba(12,14,26,0.1))",
                        borderRadius: 100,
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: "var(--text-2, #3D4260)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {/* Timeline */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-3, #5A6180)",
                marginBottom: "1.75rem",
              }}
            >
              Path
            </p>
            <div
              style={{
                display: "grid",
                gap: 0,
                borderLeft: "1.5px solid var(--surface-border, rgba(12,14,26,0.12))",
                paddingLeft: "1.5rem",
              }}
            >
              {timeline.map(({ year, event }, i) => (
                <div
                  key={i}
                  className="tl-item"
                  style={{
                    position: "relative",
                    paddingBottom: i < timeline.length - 1 ? "1.5rem" : 0,
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-1.875rem",
                      top: "0.375rem",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background:
                        i === timeline.length - 1
                          ? "linear-gradient(135deg, #4F46E5, #06B6D4)"
                          : "var(--bg-alt, #EDEEF5)",
                      border: "1.5px solid var(--surface-border, rgba(12,14,26,0.2))",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "0.6875rem",
                      letterSpacing: "0.06em",
                      color: "var(--accent-a, #4F46E5)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {year}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-2, #3D4260)",
                      lineHeight: 1.55,
                    }}
                  >
                    {event}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Values + personal */}
          <div style={{ display: "grid", gap: "2.5rem", alignContent: "start" }}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-3, #5A6180)",
                  marginBottom: "1.25rem",
                }}
              >
                What drives the work
              </p>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {values.map(({ name, desc }) => (
                  <div
                    key={name}
                    className="tl-item"
                    style={{
                      padding: "1.25rem",
                      background: "var(--surface, #fff)",
                      borderRadius: 10,
                      border: "1px solid var(--surface-border, rgba(12,14,26,0.08))",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        letterSpacing: "-0.01em",
                        color: "var(--text, #0C0E1A)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-2, #3D4260)",
                        lineHeight: 1.6,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal line */}
            <div
              className="tl-item"
              style={{
                padding: "1.25rem 1.5rem",
                background: "var(--surface, #fff)",
                borderRadius: 10,
                border: "1px solid var(--surface-border, rgba(12,14,26,0.08))",
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem 2rem",
              }}
            >
              {[
                { emoji: "🇵🇪", text: "Peruvian-American, EB1A" },
                { emoji: "👨‍👩‍👧‍👦", text: "Husband, father of 2" },
                { emoji: "🏸", text: "5.5-rated squash, 4×/week" },
                { emoji: "🌎", text: "8 countries operated in" },
              ].map(({ emoji, text }) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    color: "var(--text-2, #3D4260)",
                  }}
                >
                  <span>{emoji}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
