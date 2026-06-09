import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const navLinks = [
  { href: "/about",      label: "About" },
  { href: "/projects",   label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog",       label: "Blog" },
  { href: "/contact",    label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--line)",
      background: "var(--bg)",
      padding: "4rem 2.5rem",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr auto auto",
        gap: "4rem",
        alignItems: "start",
      }}>
        {/* Brand */}
        <div>
          <Link href="/" style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem", fontWeight: 800,
            letterSpacing: "-0.02em", color: "var(--text)",
            display: "flex", alignItems: "center", gap: "8px",
            marginBottom: "0.75rem",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
            Raj Karan
          </Link>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.82rem",
            color: "var(--text-3)", maxWidth: 240, lineHeight: 1.6,
          }}>
            Full-stack developer & creator of Cookie dev agency.
          </p>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "0.7rem",
            color: "var(--text-3)", marginTop: "1.5rem",
          }}>
            © {new Date().getFullYear()} — Built with Next.js
          </p>
        </div>

        {/* Nav */}
        <div>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "0.65rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--text-3)", marginBottom: "1rem",
          }}>Pages</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{
                  fontFamily: "var(--font-body)", fontSize: "0.875rem",
                  color: "var(--text-2)",
                }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "0.65rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--text-3)", marginBottom: "1rem",
          }}>Connect</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { href: "https://github.com/rkgit-1530",     icon: <FiGithub size={14} />,   label: "GitHub" },
              { href: "https://linkedin.com/in/rajkaran7", icon: <FiLinkedin size={14} />, label: "LinkedIn" },
              { href: "mailto:rajkaranprem@outlook.com",   icon: <FiMail size={14} />,     label: "Email" },
            ].map((s) => (
              <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  fontFamily: "var(--font-body)", fontSize: "0.875rem",
                  color: "var(--text-2)",
                }}>
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          footer > div {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}