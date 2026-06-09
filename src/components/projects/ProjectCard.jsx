"use client";

import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <div style={{
      background: "var(--bg-1)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-lg)",
      padding: "2rem",
      display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
      transition: "border-color 0.25s",
    }}
    onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--line-hover)"}
    onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--line)"}
    >
      <span style={{
        position: "absolute", top: "1.5rem", right: "1.5rem",
        fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 800,
        color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none",
      }}>
        {String(index + 1).padStart(2, "0")}
      </span>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.5rem" }}>
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} style={{
            fontFamily: "var(--font-mono)", fontSize: "0.65rem",
            fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase",
            color: "var(--text-3)", background: "var(--bg-2)",
            border: "1px solid var(--line)",
            padding: "0.2rem 0.6rem", borderRadius: "var(--r-sm)",
          }}>{tag}</span>
        ))}
      </div>

      <h3 style={{
        fontFamily: "var(--font-display)",
        fontSize: "1.2rem", fontWeight: 700,
        letterSpacing: "-0.02em",
        color: "var(--text)", lineHeight: 1.2,
        marginBottom: "0.6rem",
      }}>{project.title}</h3>

      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.875rem", lineHeight: 1.7,
        color: "var(--text-2)",
        flex: 1, marginBottom: "1.75rem",
      }}>{project.description}</p>

      <a href={project.link} target="_blank" rel="noreferrer" style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        fontFamily: "var(--font-mono)", fontSize: "0.75rem",
        fontWeight: 500, letterSpacing: "0.04em",
        color: "var(--accent)",
      }}>
        View project <FiArrowUpRight size={13} />
      </a>
    </div>
  );
}