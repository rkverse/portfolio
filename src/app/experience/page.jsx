import SectionHeader from "@/components/shared/SectionHeader";
import TimelineItem from "@/components/experience/TimelineItem";
import { experience } from "@/data";

export default function ExperiencePage() {
  const work = experience.filter((e) => e.type === "work");
  const education = experience.filter((e) => e.type === "education");

  return (
    <section
      style={{
        padding: "10rem 2.5rem 7rem",
        background: "var(--bg)",
        minHeight: "100svh",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          label="Experience"
          title={<>My journey<br />so far.</>}
          subtitle="Where I've worked, studied, and grown professionally."
        />

        {/* Responsive Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: "4.5rem",
            alignItems: "start",
          }}
        >
          {/* Work Experience */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "2.5rem",
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 1,
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Work experience
              </h3>
            </div>
            {work.map((item, i) => (
              <TimelineItem
                key={item.id}
                item={item}
                isLast={i === work.length - 1}
              />
            ))}
          </div>

          {/* Education */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "2.5rem",
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 1,
                  background: "var(--line-hover)",
                  display: "inline-block",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                }}
              >
                Education
              </h3>
            </div>
            {education.map((item, i) => (
              <TimelineItem
                key={item.id}
                item={item}
                isLast={i === education.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}