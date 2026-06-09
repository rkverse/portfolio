"use client";
import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { personal } from "@/data";

const contactLinks = [
  { icon: FiMail,     label: "Email",    value: personal.email, href: `mailto:${personal.email}` },
  { icon: FiPhone,    label: "Phone",    value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: FiGithub,   label: "GitHub",   value: personal.github.split("/").pop(), href: personal.github },
  { icon: FiLinkedin, label: "LinkedIn", value: personal.linkedin.split("/").pop(), href: personal.linkedin },
];

const inputStyle = {
  width: "100%",
  background: "var(--bg-2)",
  border: "1px solid var(--line)",
  borderRadius: "var(--r-sm)",
  padding: "0.75rem 1rem",
  fontFamily: "var(--font-body)", fontSize: "0.9rem",
  color: "var(--text)",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-mono)", fontSize: "0.65rem",
  letterSpacing: "0.1em", textTransform: "uppercase",
  color: "var(--text-3)", marginBottom: "0.5rem",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState(null);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 3500);
  };

  return (
    <section style={{
      padding: "10rem 2.5rem 7rem",
      background: "var(--bg)",
      minHeight: "100svh",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          label="Contact"
          title={<>Let's build<br/>something.</>}
          subtitle="Open to freelance, collaborations, and full-time roles. Always happy to connect."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}>
          {/* Left */}
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem",
              lineHeight: 1.8, color: "var(--text-2)",
              marginBottom: "3rem",
              maxWidth: 400,
            }}>
              Whether you have a project idea, an opportunity, or just want to say hello —
              I'm all ears. Drop me a line through any channel below.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {contactLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "1.25rem",
                      padding: "1.25rem 0",
                      borderBottom: "1px solid var(--line)",
                      borderTop: i === 0 ? "1px solid var(--line)" : "none",
                      transition: "color 0.2s",
                      color: "var(--text)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text)";
                    }}
                  >
                    <div style={{
                      width: 38, height: 38,
                      background: "var(--bg-2)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--r-sm)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={16} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                        letterSpacing: "0.08em", textTransform: "uppercase",
                        color: "var(--text-3)", marginBottom: "2px",
                      }}>{item.label}</p>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "0.9rem",
                        fontWeight: 500,
                      }}>{item.value}</p>
                    </div>
                    <FiArrowUpRight size={14} style={{ color: "var(--text-3)", flexShrink: 0 }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            background: "var(--bg-1)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-lg)",
            padding: "2.5rem",
          }}>
            {sent ? (
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                padding: "4rem 2rem", textAlign: "center", gap: "1rem",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "rgba(232,255,107,0.15)",
                  border: "1px solid var(--accent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="22" height="22" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: "1.4rem",
                  fontWeight: 700, color: "var(--text)",
                }}>Message sent!</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-2)" }}>
                  I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label style={labelStyle}>Your name</label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    placeholder="John Doe"
                    style={{ ...inputStyle, borderColor: focus === "name" ? "var(--line-hover)" : "var(--line)" }}
                    onFocus={() => setFocus("name")} onBlur={() => setFocus(null)}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email address</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="you@example.com"
                    style={{ ...inputStyle, borderColor: focus === "email" ? "var(--line-hover)" : "var(--line)" }}
                    onFocus={() => setFocus("email")} onBlur={() => setFocus(null)}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required
                    rows={5} placeholder="Tell me about your project..."
                    style={{
                      ...inputStyle,
                      resize: "none",
                      borderColor: focus === "message" ? "var(--line-hover)" : "var(--line)",
                    }}
                    onFocus={() => setFocus("message")} onBlur={() => setFocus(null)}
                  />
                </div>
                <button type="submit" style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.8rem",
                  fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "var(--bg)", background: "var(--accent)",
                  border: "none", padding: "0.85rem 1.5rem",
                  borderRadius: "var(--r-sm)", cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Responsive stack */}
      <style>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}