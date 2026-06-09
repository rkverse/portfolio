import SectionHeader from "@/components/shared/SectionHeader";
import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data";
 
export default function BlogPage() {
  return (
    <section style={{ padding: "10rem 2.5rem 7rem", background: "var(--bg)", minHeight: "100svh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          label="Blog"
          title={<>Thoughts &<br/>writings.</>}
          subtitle="Articles about development, design, and the tech industry."
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}>
          {blogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}