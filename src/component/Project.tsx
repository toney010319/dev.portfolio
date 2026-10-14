import { useCallback, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ProjectDetailOverlay, { type ProjectItem } from "./ProjectDetailOverlay";
import { trackEvent } from "../lib/analytics";
const projects: ProjectItem[] = [
  {
    title: "CurbPage",
    description:
      "An AI-powered real estate SaaS platform that centralizes clients, transactions, documents, workflows, communication, and payments—helping real estate teams reduce manual work and give clients clearer transaction visibility.",
    image: "/images/curbpage-1200.webp",
    imageSrcSet:
      "/images/curbpage-480.webp 480w, /images/curbpage-800.webp 800w, /images/curbpage-1200.webp 1200w",
    link: "https://www.curbpage.com/",
    Technologies: [
      "NextJs",
      "Typescript",
      "Tailwind",
      "Supabase",
      "PostgreSQL",
      "Drizzle",
      "TanstackQuery",
      "Zod",
      "Zustand",
      "Twilio",
      "Resend",
      "Stripe",
      "Calendly",
      "Playwright",
      "Jest",
    ],
  },
  {
    title: "Employee Portal",
    description:
      "A full-stack document and operations platform for time tracking, support tickets, and HR requests. I built authenticated, role-aware workflows with React Router, TypeScript, ShadCN, REST APIs, MongoDB, Express, React, and Node.js.",
    image: "/images/dms-1200.webp",
    imageSrcSet:
      "/images/dms-480.webp 480w, /images/dms-800.webp 800w, /images/dms-1200.webp 1200w",
    link: "https://csv-portal-online.vercel.app/sign-in",
    Technologies: [
      "MongoDB",
      "ExpressJs",
      "ReactJs",
      "NodeJs",
      "Tailwind",
      "Shadcn",
      "Typescript",
      "Vite",
    ],
  },
  {
    title: "ESaverWatt",
    description:
      "A production e-commerce storefront where customers can browse products, manage their cart, choose subscription options, and complete purchases through PayPal or card payments.",
    image: "/images/ecommerce-1200.webp",
    imageSrcSet:
      "/images/ecommerce-480.webp 480w, /images/ecommerce-800.webp 800w, /images/ecommerce-1200.webp 1200w",
    link: "https://shop.esaverwatt.com",
    Technologies: [
      "HTML",
      "Bootstrap",
      "CSS",
      "Jquery",
      ".NET",
      "Handlebars",
      "Gulp",
      "PayPal",
      "Facebook Pixel",
      "TikTok Pixel",
      "Everflow",
      "Konnektive",
      "Sticky.io",
    ],
  },
  {
    title: "CamHandy",
    description:
      "A production e-commerce storefront where customers can compare CamHandy dash-camera bundles, add accessories, and complete their purchase through a responsive checkout experience.",
    image: "/images/camhandy.png",
    link: "https://shop.trycamhandy.com/",
    Technologies: [
      "HTML",
      "Bootstrap",
      "CSS",
      "Jquery",
      ".NET",
      "Handlebars",
      "Gulp",
      "PayPal",
      "Facebook Pixel",
      "TikTok Pixel",
      "Everflow",
      "Konnektive",
      "Sticky.io",
    ],
  },
  {
    title: "SNAPGRAM",
    description:
      "A full-stack social web app with account creation, login, public posts, comments, and likes. Uses Appwrite as a serverless backend for authentication and data, with a Next.js and TypeScript frontend.",
    image: "/images/snapgram.webp",
    link: "https://snapgram-jsm-o7n4.vercel.app/",
    Technologies: [
      "NextJs",
      "Tailwind",
      "TanstackQuery",
      "Typescript",
      "Appwrite",
      "Vite",
    ],
  },
];

const categories = [
  "Real estate / SaaS",
  "HR / Business systems",
  "E-commerce",
  "E-commerce",
  "Social / Personal project",
];
export default function Project() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const closeOverlay = useCallback(() => setSelectedIndex(null), []);
  return (
    <section id="project" className="section-space work-section">
      <div className="page-shell">
        <div className="section-heading heading-split">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>
              Built for the
              <br />
              <span>real world.</span>
            </h2>
          </div>
          <p>
            A selection of production platforms, business applications, and
            storefronts. Thoughtful interfaces backed by practical engineering.
          </p>
        </div>
        <div className="project-grid">
          {projects
            .slice(0, showAll ? projects.length : 3)
            .map((project, index) => (
              <article
                key={project.title}
                className={`project-card ${index === 0 ? "featured-project" : ""}`}
              >
                <button
                  className="project-preview"
                  aria-label={`View details for ${project.title}`}
                  onClick={() => {
                    setSelectedIndex(index);
                    trackEvent("project_open", { project_name: project.title });
                  }}
                >
                  <img
                    src={project.image}
                    srcSet={project.imageSrcSet}
                    sizes="(max-width: 767px) calc(100vw - 68px), (max-width: 1240px) calc((100vw - 121px) / 2), 566px"
                    alt={`${project.title} project preview`}
                    loading="lazy"
                  />
                  <span className="preview-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </button>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{categories[index]}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description.split(". ")[0]}.</p>
                  <div className="tech-tags">
                    {project.Technologies.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button
                      className="text-link"
                      onClick={() => {
                        setSelectedIndex(index);
                        trackEvent("project_open", {
                          project_name: project.title,
                        });
                      }}
                    >
                      Project details <ArrowUpRight size={16} />
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link muted-link"
                      onClick={() =>
                        trackEvent("project_visit", {
                          project_name: project.title,
                        })
                      }
                    >
                      Live site <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </div>
        <div className="more-work">
          <span>
            {showAll ? "All five projects" : "Three selected projects"}
          </span>
          <button
            className="secondary-button"
            aria-expanded={showAll}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show selected work" : "View all projects"}
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
      <ProjectDetailOverlay
        project={selectedIndex === null ? null : projects[selectedIndex]}
        index={selectedIndex ?? 0}
        onClose={closeOverlay}
      />
    </section>
  );
}
