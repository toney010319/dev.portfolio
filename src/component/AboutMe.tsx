import { ArrowUpRight } from "lucide-react";
const stacks = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    label: "Delivery & quality",
    items: ["Figma", "Git", "Playwright", "Jest", "REST APIs"],
  },
];
export default function AboutMe() {
  return (
    <section id="about" className="section-space">
      <div className="page-shell about-layout">
        <div className="about-sidebar">
          <p className="eyebrow">04 / A little about me</p>
          <h2>
            Anthony
            <br />
            Bautista<span>.</span>
          </h2>
          <p>
            Frontend Engineer with<br />
            Full-Stack Experience
          </p>
          <div className="about-location">
            <span className="status-dot" /> Cebu, Philippines · Remote-friendly
          </div>
          <a className="text-link" href="/images/resume.pdf" download>
            Get my résumé <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="about-content">
          <h3>
            I build for real users.
            <br />
            And real business needs.
          </h3>
          <p>
            I’m a software engineer with 3+ years of experience building
            production SaaS applications and e-commerce websites. I specialize
            in React, Next.js, and TypeScript, with full-stack experience across
            Node.js, REST APIs, PostgreSQL, MongoDB, and Supabase.
          </p>
          <p>
            I’ve delivered role-based access, subscription payments, responsive
            interfaces, third-party integrations, performance improvements, and
            automated tests. I value maintainable code, clear user flows, and
            reliable delivery from requirement to production.
          </p>
          <div className="stack-list">
            {stacks.map((stack) => (
              <div key={stack.label}>
                <h4>{stack.label}</h4>
                <p>{stack.items.join(" · ")}</p>
              </div>
            ))}
          </div>
          <div className="education">
            <h4>Education</h4>
            <div>
              <span>Jun 2023 — Feb 2024</span>
              <h5>Avion School</h5>
              <p>Full Stack Web Development program</p>
            </div>
            <div>
              <span>2015 — 2019</span>
              <h5>Talisay City College</h5>
              <p>B.S. in Industrial Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
