export default function AboutCard({ icon, title, value }) {
  return (
    <div style={{
      background: "var(--bg-2)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-md)",
      padding: "1.25rem 1.5rem",
      display: "flex", alignItems: "center", gap: "1rem",
    }}>
      <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{icon}</span>
      <div>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: "0.65rem",
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--text-3)", marginBottom: "3px",
        }}>{title}</p>
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "0.95rem",
          fontWeight: 700, color: "var(--text)",
        }}>{value}</p>
      </div>
    </div>
  );
}