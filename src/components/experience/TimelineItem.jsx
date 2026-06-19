export default function TimelineItem({ item, isLast }) {
  const isWork = item.type === "work";

  return (
    <div
      style={{
        display: "flex",
        gap: "1.25rem",           // Reduced gap
        paddingBottom: isLast ? 0 : "2.5rem",
        width: "100%",            // Ensure full width control
      }}
    >
      {/* Timeline Stem */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          width: "36px",            // Fixed but small
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: `1px solid ${isWork ? "var(--accent)" : "var(--line-hover)"}`,
            background: isWork ? "rgba(232,255,107,0.1)" : "var(--bg-2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* SVG icons remain the same */}
          {isWork ? (
            <svg width="14" height="14" fill="none" stroke="var(--accent)" strokeWidth="1.6" viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
          ) : (
            <svg width="14" height="14" fill="none" stroke="var(--text-2)" strokeWidth="1.6" viewBox="0 0 24 24">
              <path d="M22 10v6M2 10l10-7 10 7"/>
              <path d="M6 12v8h12v-8"/>
            </svg>
          )}
        </div>

        {!isLast && (
          <div
            style={{
              width: 1,
              flex: 1,
              background: "var(--line)",
              marginTop: "8px",
            }}
          />
        )}
      </div>

      {/* Content - Fully responsive */}
      <div style={{ 
        flex: 1, 
        minWidth: 0,           // Critical for text wrapping
        paddingTop: "6px",
        width: "100%", 
      }}>
        <span style={{
          fontFamily: "var(--font-mono)", 
          fontSize: "0.68rem",
          letterSpacing: "0.06em", 
          textTransform: "uppercase",
          color: "var(--text-3)",
          display: "block",
        }}>
          {item.duration}
        </span>
        
        <h3 style={{
          fontFamily: "var(--font-display)", 
          fontSize: "1rem",
          fontWeight: 700, 
          color: "var(--text)",
          letterSpacing: "-0.01em",
          margin: "0.3rem 0 0.15rem",
        }}>
          {item.role}
        </h3>
        
        <p style={{
          fontFamily: "var(--font-mono)", 
          fontSize: "0.78rem",
          color: isWork ? "var(--accent)" : "var(--text-2)",
          marginBottom: "0.6rem",
        }}>
          {item.company}
        </p>
        
        <p style={{
          fontFamily: "var(--font-body)", 
          fontSize: "0.875rem",
          lineHeight: 1.7, 
          color: "var(--text-2)",
          maxWidth: "100%",        // Removed fixed 520px
          wordBreak: "break-word", // Extra safety
        }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}