export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div style={{ marginBottom: "5rem" }}>
      {label && (
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          marginBottom: "1.5rem",
        }}>
          <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem", fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--accent)",
          }}>{label}</span>
        </div>
      )}
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(2rem, 4vw, 3.5rem)",
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        color: "var(--text)",
        marginBottom: subtitle ? "1rem" : 0,
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "1rem", lineHeight: 1.7,
          color: "var(--text-2)",
          maxWidth: 520,
        }}>{subtitle}</p>
      )}
    </div>
  );
}