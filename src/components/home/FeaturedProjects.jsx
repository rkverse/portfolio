"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data";
import SectionHeader from "@/components/shared/SectionHeader";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section style={{
      padding: "8rem 2.5rem",
      background: "var(--bg)",
      borderTop: "1px solid var(--line)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <SectionHeader
            label="Work"
            title={<>Featured<br />Projects</>}
            subtitle="A curated selection of things I've shipped."
          />
          <Link href="/projects" style={{
            fontFamily: "var(--font-mono)", fontSize: "0.78rem",
            color: "var(--text-2)", letterSpacing: "0.04em",
            display: "flex", alignItems: "center", gap: "6px",
            borderBottom: "1px solid var(--line)",
            paddingBottom: "2px", marginTop: "1rem",
            transition: "color 0.2s",
          }}>
            All projects <FiArrowUpRight size={13} />
          </Link>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1px",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
          background: "var(--line)",
        }}>
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                background: "var(--bg-1)",
                padding: "2.5rem",
                position: "relative",
                overflow: "hidden",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Number watermark */}
              <span style={{
                position: "absolute", top: "1.5rem", right: "1.75rem",
                fontFamily: "var(--font-display)",
                fontSize: "4rem", fontWeight: 800,
                color: "rgba(255,255,255,0.04)",
                lineHeight: 1, userSelect: "none",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.5rem" }}>
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem", fontWeight: 500,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: "var(--text-3)",
                    background: "var(--bg-2)",
                    border: "1px solid var(--line)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "var(--r-sm)",
                  }}>{tag}</span>
                ))}
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem", fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text)", lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}>{project.title}</h3>

              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem", lineHeight: 1.7,
                color: "var(--text-2)",
                marginBottom: "2rem", flex: 1,
              }}>{project.description}</p>

              <a href={project.link} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                fontWeight: 500, letterSpacing: "0.04em",
                color: "var(--accent)",
              }}>
                View project <FiArrowUpRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}