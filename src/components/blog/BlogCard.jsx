"use client";

import { FiArrowUpRight } from "react-icons/fi";

export default function BlogCard({ post }) {
  return (
    <article style={{
      background: "var(--bg-1)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-lg)",
      padding: "2rem",
      display: "flex", flexDirection: "column",
      cursor: "pointer",
      transition: "border-color 0.25s",
    }}
    onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--line-hover)"}
    onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--line)"}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "0.65rem",
          fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--accent)", background: "rgba(232,255,107,0.1)",
          border: "1px solid rgba(232,255,107,0.2)",
          padding: "0.25rem 0.65rem", borderRadius: "var(--r-sm)",
        }}>{post.tag}</span>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "0.7rem",
          color: "var(--text-3)",
        }}>{post.readTime}</span>
      </div>

      <h3 style={{
        fontFamily: "var(--font-display)", fontSize: "1.1rem",
        fontWeight: 700, letterSpacing: "-0.02em",
        lineHeight: 1.25, color: "var(--text)",
        marginBottom: "0.75rem",
      }}>{post.title}</h3>

      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.875rem",
        lineHeight: 1.7, color: "var(--text-2)",
        flex: 1, marginBottom: "1.75rem",
      }}>{post.excerpt}</p>

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingTop: "1.25rem", borderTop: "1px solid var(--line)",
      }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "0.7rem",
          color: "var(--text-3)",
        }}>{post.date}</span>
        <span style={{
          display: "flex", alignItems: "center", gap: "5px",
          fontFamily: "var(--font-mono)", fontSize: "0.75rem",
          fontWeight: 500, color: "var(--accent)",
        }}>
          Read <FiArrowUpRight size={13} />
        </span>
      </div>
    </article>
  );
}