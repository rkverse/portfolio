import SectionHeader from "@/components/shared/SectionHeader";
import AboutCard from "@/components/about/AboutCard";
import { skills, personal } from "@/data";

const categories = ["Frontend", "Backend", "Mobile", "Tools"];

export default function AboutPage() {
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
          label="About"
          title={<>Who I am.</>}
          subtitle="Passionate developer focused on building scalable, user-centric solutions."
        />

        {/* Responsive Grid Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Bio Section */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "var(--text-2)",
                marginBottom: "1.5rem",
              }}
            >
              {personal.summary}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "var(--text-2)",
              }}
            >
              Currently pursuing my{" "}
              <span style={{ color: "var(--text)", fontWeight: 500 }}>
                MSc in Applied Data Science
              </span>{" "}
              at SRM RMP, while running{" "}
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                Cookie
              </span>{" "}
              — my dev agency delivering high-quality web and mobile projects.
            </p>

            {/* About Cards - Responsive Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.75rem",
                marginTop: "2.5rem",
              }}
            >
              <AboutCard icon="📍" title="Location" value="India" />
              <AboutCard icon="🎓" title="Degree" value="MSc Data Science" />
              <AboutCard icon="📧" title="Email" value="rajkaranprem@outlook.com" />
              <AboutCard icon="🚀" title="Status" value="Open to Work" />
            </div>
          </div>

          {/* Skills Section */}
          <div>
            {categories.map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat);
              if (!catSkills.length) return null;
              return (
                <div key={cat} style={{ marginBottom: "2.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "1rem",
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
                      {cat}
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {catSkills.map((skill) => (
                      <span
                        key={skill.name}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          color: "var(--text-2)",
                          background: "var(--bg-2)",
                          border: "1px solid var(--line)",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "var(--r-sm)",
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}