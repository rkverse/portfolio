// ─── ProjectsPage.jsx ─────────────────────────────────────────────────────────
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data";
import SectionHeader from "@/components/shared/SectionHeader";
 
export default function ProjectsPage() {
  return (
    <section style={{ padding: "10rem 2.5rem 7rem", background: "var(--bg)", minHeight: "100svh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          label="Projects"
          title={<>Things I've<br/>built.</>}
          subtitle="Real-world projects showcasing my skills in web and mobile development."
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}