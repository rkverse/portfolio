"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { personal } from "@/data";

// ---------- animations ----------
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const scaleFade = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

// ---------- data ----------
const stats = [
  { value: "15+", label: "Projects" },
  { value: "2+", label: "Years" },
  { value: "10+", label: "Clients" },
];

// ---------- component ----------
export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "140px 2.5rem 4.5rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* ---- refined grid overlay ---- */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 10%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 10%, black 30%, transparent 80%)",
        }}
      />

      {/* ---- subtle glow (more dimensional) ---- */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-8%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(232, 255, 107, 0.05)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(232, 255, 107, 0.03)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* ---- content wrapper ---- */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* ---- badge ---- */}
        <motion.div {...fade(0.08)} style={{ marginBottom: "2.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "rgba(232, 255, 107, 0.08)",
              border: "1px solid rgba(232, 255, 107, 0.2)",
              padding: "0.35rem 1.2rem",
              borderRadius: "var(--r-full)",
              backdropFilter: "blur(4px)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                animation: "pulse-dot 2s infinite",
              }}
            />
            Available for work
          </span>
        </motion.div>

        {/* ---- heading ---- */}
        <motion.h1
          {...fade(0.18)}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.4rem, 8.5vw, 7.5rem)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "var(--text)",
            marginBottom: "2.75rem",
            maxWidth: "90%",
          }}
        >
          Full-Stack
          <br />
          <span style={{ color: "var(--text-3)" }}>Developer</span>
          <span
            style={{
              display: "inline-block",
              width: "0.2em",
              height: "0.85em",
              background: "var(--accent)",
              marginLeft: "0.08em",
              verticalAlign: "middle",
              borderRadius: "4px",
              boxShadow: "0 0 20px rgba(232,255,107,0.2)",
            }}
          />
        </motion.h1>

        {/* ---- bottom row ---- */}
        <motion.div
          {...fade(0.3)}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "3rem 2rem",
            flexWrap: "wrap",
          }}
        >
          {/* left: bio + actions */}
          <div style={{ flex: 1, minWidth: "260px", maxWidth: "520px" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--text-2)",
                marginBottom: "2rem",
                maxWidth: "440px",
              }}
            >
              I'm <strong style={{ color: "var(--text)", fontWeight: 500 }}>Raj Karan</strong> — building
              high‑performance web & mobile apps with the MERN stack and React Native.
              Creator of the Cookie dev agency.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "var(--bg)",
                  background: "var(--accent)",
                  padding: "0.7rem 1.8rem",
                  borderRadius: "var(--r-sm)",
                  boxShadow: "0 4px 16px rgba(232,255,107,0.15)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(232,255,107,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(232,255,107,0.15)";
                }}
              >
                View work <FiArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "var(--text)",
                  border: "1px solid var(--line-hover)",
                  padding: "0.7rem 1.8rem",
                  borderRadius: "var(--r-sm)",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.background = "rgba(232,255,107,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--line-hover)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Get in touch
              </Link>
            </div>

            {/* social icons */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { href: personal.github, icon: <FiGithub size={16} />, label: "GitHub" },
                { href: personal.linkedin, icon: <FiLinkedin size={16} />, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 450,
                    color: "var(--text-3)",
                    padding: "0.4rem 1rem",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-full)",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--text)";
                    e.currentTarget.style.background = "rgba(232,255,107,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--line)";
                    e.currentTarget.style.color = "var(--text-3)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* stats with refined typography */}
          <div
            style={{
              display: "flex",
              gap: "3.5rem",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                {...scaleFade(0.2 + idx * 0.08)}
                style={{ textAlign: "right", minWidth: "90px" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem, 5vw, 3rem)",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "var(--text)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginTop: "6px",
                    opacity: 0.8,
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* pulse keyframes (inline style) */}
      <style jsx>{`
        @keyframes pulse-dot {
          0% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.6; transform: scale(0.9); }
        }
      `}</style>
    </section>
  );
}