"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { personal } from "@/data";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const stats = [
  { value: "15+", label: "Projects" },
  { value: "2+",  label: "Years" },
  { value: "10+", label: "Clients" },
];

export default function Hero() {
  return (
    <section style={{
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 2.5rem 5rem",
      position: "relative",
      overflow: "hidden",
      background: "var(--bg)",
    }}>

      {/* Grid overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        backgroundImage: `linear-gradient(var(--line) 1px, transparent 1px),
                          linear-gradient(90deg, var(--line) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
      }} />

      {/* Accent glow */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "-5%",
        width: "480px",
        height: "480px",
        borderRadius: "50%",
        background: "rgba(232,255,107,0.06)",
        filter: "blur(80px)",
        zIndex: 0,
      }} />

      {/* Badge */}
      <motion.div {...fade(0.1)} style={{ position: "relative", zIndex: 1, marginBottom: "2.5rem" }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--accent)",
          background: "rgba(232,255,107,0.1)",
          border: "1px solid rgba(232,255,107,0.25)",
          padding: "0.4rem 1rem",
          borderRadius: "var(--r-sm)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
          Available for work
        </span>
      </motion.div>

      <div style={{ 
        position: "relative", 
        zIndex: 1, 
        maxWidth: 1280, 
        margin: "0 auto", 
        width: "100%" 
      }}>
        {/* Main heading */}
        <motion.h1 {...fade(0.2)} style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3.2rem, 8vw, 7.5rem)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.035em",
          color: "var(--text)",
          marginBottom: "2.5rem",
        }}>
          Full-Stack<br />
          <span style={{ color: "var(--text-3)" }}>Developer</span>
          <span style={{
            display: "inline-block",
            width: "0.2em",
            height: "0.85em",
            background: "var(--accent)",
            marginLeft: "0.1em",
            verticalAlign: "middle",
            borderRadius: "2px",
          }} />
        </motion.h1>

        {/* Bottom Content - Responsive Layout */}
        <motion.div {...fade(0.35)} style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "4rem",
          flexWrap: "wrap",
        }}>
          {/* Left: Bio + CTA */}
          <div style={{ 
            flex: 1, 
            minWidth: "280px",
            maxWidth: "480px" 
          }}>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--text-2)",
              marginBottom: "2rem",
            }}>
              I'm <strong style={{ color: "var(--text)", fontWeight: 500 }}>Raj Karan</strong> — building
              high-performance web & mobile apps with the MERN stack and React Native.
              Creator of the Cookie dev agency.
            </p>

            <div style={{ 
              display: "flex", 
              gap: "1rem", 
              flexWrap: "wrap" 
            }}>
              <Link href="/projects" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "var(--bg)",
                background: "var(--accent)",
                padding: "0.75rem 1.6rem",
                borderRadius: "var(--r-sm)",
              }}>
                View work <FiArrowUpRight size={14} />
              </Link>
              <Link href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "var(--text)",
                border: "1px solid var(--line-hover)",
                padding: "0.75rem 1.6rem",
                borderRadius: "var(--r-sm)",
              }}>
                Get in touch
              </Link>
            </div>

            {/* Social Links */}
            <div style={{ 
              display: "flex", 
              gap: "0.75rem", 
              marginTop: "1.75rem",
              flexWrap: "wrap"
            }}>
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
                    gap: "6px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-3)",
                    padding: "0.45rem 0.9rem",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-sm)",
                  }}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Stats - Responsive */}
          <div style={{
            display: "flex",
            gap: "3rem",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            marginTop: "auto", // Pushes stats down on mobile
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "right", minWidth: "90px" }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 5vw, 2.8rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "var(--text)",
                  letterSpacing: "-0.04em",
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginTop: "4px",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}