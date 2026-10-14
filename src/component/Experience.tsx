const jobs = [
  {
    company: "CurbPage",
    role: "Frontend / Full-Stack Web Developer",
    dates: "Aug 2025 — Sep 2026",
    bullets: [
      "Designed Blueprints, a real estate transaction workflow engine that calculates due dates from milestones and supports email automation and document configuration, reducing manual follow-up.",
      "Built Stripe subscription billing with custom plan logic and a webhook handler that updates profiles only after payment confirmation; integrated Calendly to track meeting attendance inside workflows.",
      "Engineered middleware and subscription-state guards for Admin, Agent, Client, and Teammate roles, with Supabase Row Level Security policies enforcing data access.",
      "Authored Drizzle schema migrations and tested critical product workflows with Playwright and Jest.",
    ],
    tech: ["Next.js", "TypeScript", "Stripe", "Supabase", "Drizzle", "Playwright"],
  },
  {
    company: "Media Communication Corp.",
    role: "Front-End Developer",
    dates: "Mar 2024 — Jul 2025",
    bullets: [
      "Developed and maintained responsive production storefronts from Figma designs using HTML, CSS, JavaScript, Bootstrap, jQuery, and .NET Razor.",
      "Optimized storefronts with WebP assets, minified code, Handlebars, and Gulp, achieving 90%+ performance scores in GTmetrix, PageSpeed Insights, and Lighthouse.",
      "Integrated payment, analytics, conversion-tracking, and CRM systems including PayPal, Facebook Pixel, TikTok Pixel, Everflow, Konnektive, and Sticky.io.",
    ],
    tech: ["HTML / CSS", "Bootstrap", "jQuery", ".NET"],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="section-space experience-section">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">03 / Experience</p>
          <h2>
            Real teams.
            <br />
            Real responsibility.
          </h2>
          <p>
            Building and maintaining applications used in everyday business.
          </p>
        </div>
        <div className="experience-list">
          {jobs.map((job) => (
            <article className="experience-row" key={job.company}>
              <div className="experience-summary">
                <p className="item-number">{job.dates}</p>
                <h3>{job.company}</h3>
                <p>
                  {job.role} <span>· Remote</span>
                </p>
              </div>
              <div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {job.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
