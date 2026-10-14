import { Code2, Layers, Gauge, PanelsTopLeft } from "lucide-react";
const services = [
  {
    title: "Frontend engineering",
    description:
      "Responsive React and Next.js interfaces, reusable components, and clear workflows that work across devices.",
    icon: PanelsTopLeft,
  },
  {
    title: "Full-stack development",
    description:
      "Business applications with Node.js, REST APIs, authentication, role-based access, and reliable database integrations.",
    icon: Layers,
  },
  {
    title: "Design to production",
    description:
      "Figma designs translated into polished, accessible interfaces with Tailwind CSS and TypeScript.",
    icon: Code2,
  },
  {
    title: "Performance & quality",
    description:
      "Faster loading, efficient data fetching, and confidence in critical workflows with Playwright and Jest.",
    icon: Gauge,
  },
];
export default function Services() {
  return (
    <section id="services" className="section-space">
      <div className="page-shell expertise-layout">
        <div className="section-heading">
          <p className="eyebrow">02 / Expertise</p>
          <h2>
            From interface
            <br />
            to integration.
          </h2>
          <p>
            I turn product and business requirements into responsive,
            maintainable applications—from reusable interfaces to secure APIs,
            data workflows, integrations, and tests.
          </p>
        </div>
        <div className="service-list">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article className="service-row" key={title}>
              <span className="item-number">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <Icon size={23} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
