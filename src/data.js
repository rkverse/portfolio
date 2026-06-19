// ─── Centralized Data Export ───────────────────────────────────────────────────

const personal = {
  name: "Raj Karan",
  title: "Full Stack Developer",
  tagline: "Building scalable web & mobile experiences.",
  summary:
    "Passionate full-stack developer with strong skills in JavaScript and modern web technologies. Experienced in building scalable web and mobile applications, UI/UX design, and real-world projects across MERN and React Native. Self-driven learner with internship and freelance experience.",
  email: "rajkaranprem@outlook.com",
  phone: "+91 9962313298",
  github: "https://github.com/rkverse",
  linkedin: "https://linkedin.com/in/rajkaran7",
  portfolio: "#",
};

const experience = [
  {
    id: 1,
    type: "work",
    role: "Founder & Developer",
    company: "Cookie",
    duration: "Jan 2025 – Present",
    description:
      "Founded Cookie and successfully delivered multiple client projects in web and app development. Combined technical execution with client coordination and team collaboration.",
  },
  {
    id: 2,
    type: "work",
    role: "Freelance Developer",
    company: "Self-employed",
    duration: "Jan 2025 – Present",
    description:
      "Successfully completed freelance projects involving web and app development for diverse clients. Known for meeting deadlines, clear communication, and client-focused execution.",
  },
  {
    id: 3,
    type: "work",
    role: "Full Stack Developer Intern",
    company: "Altruisty",
    duration: "Oct 2024 – Jan 2025",
    description:
      "Developed and improved key modules of an e-learning platform. Collaborated with the team to design, implement, and optimize full-stack features.",
  },
  {
    id: 4,
    type: "education",
    role: "MSc Applied Data Science",
    company: "SRM RMP",
    duration: "2025 – 2027",
    description: "Currently pursuing MSc in Applied Data Science. GPA: 8.0 / 10.0",
  },
  {
    id: 5,
    type: "education",
    role: "BCA",
    company: "Guru Nanak College",
    duration: "2022 – 2025",
    description: "Bachelor of Computer Applications. GPA: 7.2 / 10.0",
  },
];

const projects = [
  {
    id: 1,
    title: "ERP Application for a CBSE Institute",
    description:
      "Developed an ERP-style CRM system for SAP use cases, supporting student, admin, and teacher portals. Streamlined academic and administrative workflows through role-based access and centralized data management.",
    tags: ["React", "Node JS", "Firebase", "Role-based Access"],
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Designer Portfolio",
    description:
      "Built a visually appealing designer portfolio as a freelance project to showcase creative work and brand identity. Delivered a responsive, user-friendly experience tailored to the client's design style.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce for RC Toy Brand",
    description:
      "Built an e-commerce website for an RC Toy Company to expand their online presence. Delivered a user-friendly experience without any servers — fully static and fast.",
    tags: ["React", "Tailwind CSS", "Firebase", "E-Commerce"],
    link: "#",
    featured: true,
  },
];

const blogs = [
  {
    id: 1,
    title: "Why I Chose MERN Stack for My Projects",
    excerpt:
      "A deep dive into why the MERN stack continues to be my go-to choice for building full-stack web applications.",
    date: "March 10, 2025",
    readTime: "4 min read",
    tag: "Web Dev",
  },
  {
    id: 2,
    title: "Lessons from Freelancing at 21",
    excerpt:
      "What I learned about client communication, deadlines, and building real products from my freelance journey.",
    date: "February 20, 2025",
    readTime: "5 min read",
    tag: "Career",
  },
  {
    id: 3,
    title: "Getting Started with React Native",
    excerpt:
      "My experience transitioning from React web development to building mobile apps with React Native.",
    date: "January 30, 2025",
    readTime: "6 min read",
    tag: "Mobile",
  },
];

const skills = [
  { name: "HTML", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React JS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Next JS", category: "Frontend" },
  { name: "Node JS", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Firebase", category: "Backend" },
  { name: "React Native", category: "Mobile" },
  { name: "Git", category: "Tools" },
  {name: "Figma", category: "Tools" },
  {name:"Spring Boot", category:"Backend"},
];

// ─── Export all data ────────────────────────────────────────────────────────────

export { personal, experience, projects, blogs, skills };

export default {
  personal,
  experience,
  projects,
  blogs,
  skills,
};
