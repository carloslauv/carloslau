"use client";

import { useEffect, useRef } from "react";

interface Project {
  problem: string;
  built: string;
  link?: string;
  stack: string[];
  outcome: string;
}

interface ProjectGroup {
  group: string;
  label: string;
  items: { name: string; project: Project }[];
}

const data: ProjectGroup[] = [
  {
    group: "A",
    label: "Companies",
    items: [
      {
        name: "Kurios (YC S21)",
        project: {
          problem:
            "Enterprises in Latin America had no scalable way to upskill employees on Digital & AI — training was generic, offline, and unmeasured.",
          built:
            "Built and ran an enterprise Digital & AI upskilling platform across 8 countries, 20+ enterprise clients, $2.7M raised.",
          stack: ["Product", "GTM", "Enterprise Sales"],
          outcome: "$1M ARR · 156% NDR · 86% logo retention · 75+ NPS",
        },
      },
      {
        name: "Uber Peru (Pre-IPO)",
        project: {
          problem:
            "Uber Peru GMV was stuck at $2M with no structured growth playbook and low driver-rider network density.",
          built:
            "Employee #4 Uber Peru — launched UberDOST referral product globally; ran 3-arm referral experiment (~667/arm, K≈1).",
          stack: ["Growth Product", "Experimentation", "Ops"],
          outcome: "GMV $2M → $143M",
        },
      },
    ],
  },
  {
    group: "B",
    label: "AI Products",
    items: [
      {
        name: "Experiment Builder",
        project: {
          problem:
            "PMs and operators struggle to design statistically valid experiments without a stats background.",
          built:
            "Live web tool: experiment design, sample size calculator, and outcome interpretation in one flow.",
          link: "#",
          stack: ["Claude Code", "Next.js", "Neon (Postgres)", "Auth.js", "Vercel"],
          outcome: "Shipped solo in days; used for real experiment design",
        },
      },
      {
        name: "Content Summarizer",
        project: {
          problem:
            "Executives can't consume long YouTube/podcast content — they need the signal, not the full runtime.",
          built:
            "YouTube/podcast/audio → HBR-style executive summary, live and deployed.",
          link: "#",
          stack: ["Claude Code", "Supadata.ai", "Vercel"],
          outcome: "End-to-end audio → structured summary in <30s",
        },
      },
      {
        name: "AI Learning Vault",
        project: {
          problem:
            "Interesting links pile up unread; there's no lightweight way to save, tag, and actually review them.",
          built: "Save-and-review learning links with AI-generated notes.",
          link: "#",
          stack: ["Lovable", "Supabase"],
          outcome: "Personal tool, in daily use",
        },
      },
      {
        name: "Family Financial Panorama",
        project: {
          problem:
            "Household finances are fragmented across accounts — no unified picture for decision-making.",
          built: "Unified family financial view, shareable within the household.",
          link: "#",
          stack: ["Claude Code", "Netlify"],
          outcome: "Shipped in one weekend; replaces a spreadsheet",
        },
      },
      {
        name: "PM Shape Self-Assessment",
        project: {
          problem:
            "Ravi Mehta's PM-shape framework is text-heavy — there's no interactive tool to actually assess yourself.",
          built:
            "Interactive assessment built on the PM-shape framework — meta: a PM tool built by a PM.",
          link: "#",
          stack: ["React", "Vite", "Vercel"],
          outcome: "Shipped and shareable; self-assessment takes <5 min",
        },
      },
    ],
  },
  {
    group: "C",
    label: "Enterprise AI Systems",
    items: [
      {
        name: "RAG Content Reuse Engine",
        project: {
          problem:
            "Enterprise clients brought thousands of existing content assets — no one knew what to reuse, adapt, or rebuild from scratch.",
          built:
            "Classifier that categorizes existing course content as reuse / adapt / net-new to compress scoping-to-proposal time. Agentic-but-contained: each classification step is deterministic before the next begins.",
          stack: ["RAG", "Vector embeddings", "Claude", "Agentic pipeline"],
          outcome:
            "Scoping-to-proposal cycle compressed significantly; architecture documented for client trust",
        },
      },
      {
        name: "Scoping Tool for Ambiguous Enterprise Needs",
        project: {
          problem:
            "Enterprise consulting proposals took 8 days to scope because intake was unstructured and ambiguous.",
          built:
            "VectorShift pipeline that transforms ambiguous enterprise briefs into structured scoping documents.",
          stack: ["VectorShift", "RAG pipeline", "Claude"],
          outcome: "8 days → 2 days proposal pre-scoping",
        },
      },
    ],
  },
];

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function ProjectCard({ name, project }: { name: string; project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref as React.RefObject<HTMLElement>);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        padding: "clamp(1.5rem, 3vw, 2.25rem)",
        background: "var(--surface, #fff)",
        border: "1px solid var(--surface-border, rgba(12,14,26,0.08))",
        borderRadius: 12,
        display: "grid",
        gridTemplateRows: "auto",
        gap: "1rem",
      }}
    >
      <h3
        style={{
          fontSize: "1.0625rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--text, #0C0E1A)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        {name}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono, monospace)",
              letterSpacing: "0.06em",
              color: "var(--accent-a, #4F46E5)",
              textDecoration: "none",
              padding: "0.25rem 0.625rem",
              border: "1px solid rgba(79,70,229,0.3)",
              borderRadius: 4,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            ↗ LIVE
          </a>
        )}
      </h3>

      <div style={{ display: "grid", gap: "0.625rem" }}>
        <Row label="Problem" value={project.problem} />
        <Row label="Built" value={project.built} />
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "flex-start" }}>
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-3, #5A6180)",
              paddingTop: "0.1em",
              minWidth: "3.5rem",
              flexShrink: 0,
            }}
          >
            Stack
          </span>
          <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
            {project.stack.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.6875rem",
                  padding: "0.2rem 0.5rem",
                  background: "rgba(79,70,229,0.06)",
                  color: "var(--accent-a, #4F46E5)",
                  borderRadius: 4,
                  letterSpacing: "0.02em",
                  border: "1px solid rgba(79,70,229,0.12)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <Row label="Outcome" value={project.outcome} highlight />
      </div>
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
      <span
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.6875rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-3, #5A6180)",
          paddingTop: "0.15em",
          minWidth: "3.5rem",
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.6,
          color: highlight ? "var(--text, #0C0E1A)" : "var(--text-2, #3D4260)",
          fontWeight: highlight ? 600 : 400,
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function Built() {
  return (
    <section
      id="built"
      style={{
        background: "var(--bg, #F7F8FC)",
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: 1120, marginInline: "auto" }}>
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
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
            What I've built
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text, #0C0E1A)",
              lineHeight: 1.05,
              textWrap: "balance",
              maxWidth: "20ch",
            }}
          >
            Companies, products, systems.
          </h2>
        </div>

        {data.map((group) => (
          <div key={group.group} style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            {/* Group label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-3, #5A6180)",
                  padding: "0.25rem 0.625rem",
                  border: "1px solid var(--surface-border, rgba(12,14,26,0.1))",
                  borderRadius: 4,
                }}
              >
                {group.group}
              </span>
              <span
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text, #0C0E1A)",
                }}
              >
                {group.label}
              </span>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: "var(--surface-border, rgba(12,14,26,0.08))",
                }}
              />
            </div>

            {/* Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
                gap: "1.25rem",
              }}
            >
              {group.items.map(({ name, project }) => (
                <ProjectCard key={name} name={name} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
