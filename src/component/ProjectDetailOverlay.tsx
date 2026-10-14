import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";
import { trackEvent } from "../lib/analytics";
export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  link: string;
  Technologies: string[];
};
const contributions = [
  [
    { label: "Integrations", text: "Built Stripe subscription billing with custom plan logic and a webhook handler that updates profiles only after payment confirmation. Integrated Calendly to track meeting attendance inside workflows." },
    { label: "Automation", text: "Designed Blueprints, a transaction workflow engine that calculates milestone-based due dates and supports email automation and document configuration, reducing manual follow-up." },
    { label: "Backend & security", text: "Built middleware and subscription-state guards for four user roles, configured Supabase Row Level Security policies, and authored Drizzle schema migrations." },
  ],
  [
    { label: "Full-stack delivery", text: "Built time tracking, support ticketing, HR request, and administrative workflows using the MERN stack and TypeScript." },
    { label: "Access control", text: "Implemented authenticated, role-aware routing and REST API integrations for secure departmental workflows." },
  ],
  [
    { label: "Frontend delivery", text: "Translated Figma designs into a responsive, mobile-first storefront with cart, subscription, and checkout flows." },
    { label: "Performance", text: "Optimized WebP assets and minified code with Handlebars and Gulp, achieving 90%+ scores in GTmetrix, PageSpeed Insights, and Lighthouse." },
    { label: "Integrations", text: "Integrated PayPal, Facebook Pixel, TikTok Pixel, Everflow, Konnektive, and Sticky.io for payments, analytics, conversion tracking, and customer management." },
  ],
  [
    { label: "Frontend delivery", text: "Translated Figma designs into responsive product, bundle-selection, accessories, and checkout interfaces." },
    { label: "Performance", text: "Optimized WebP assets and minified code with Handlebars and Gulp, achieving 90%+ scores in GTmetrix, PageSpeed Insights, and Lighthouse." },
    { label: "Integrations", text: "Integrated PayPal, Facebook Pixel, TikTok Pixel, Everflow, Konnektive, and Sticky.io for payments, analytics, conversion tracking, and customer management." },
  ],
  [
    { label: "Product development", text: "Built account creation, authentication, public posts, comments, and likes using Next.js and TypeScript." },
    { label: "Backend services", text: "Used Appwrite for authentication, data storage, and application services." },
  ],
];
export default function ProjectDetailOverlay({
  project,
  index,
  onClose,
}: {
  project: ProjectItem | null;
  index: number;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable =
          dialog.current?.querySelectorAll<HTMLElement>("button,a[href]");
        if (!focusable?.length) return;
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [project, onClose]);
  if (!project) return null;
  return createPortal(
    <div className="project-overlay" onClick={onClose}>
      <div
        ref={dialog}
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="dialog-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={22} />
        </button>
        <img
          className="dialog-image"
          src={project.image}
          alt={`${project.title} project preview`}
        />
        <div className="dialog-copy">
          <p className="eyebrow">Project / 0{index + 1}</p>
          <h2 id="project-detail-title">{project.title}</h2>
          <h3>Project overview</h3>
          <p>{project.description}</p>
          <h3>My contribution</h3>
          <ul className="contribution-list">
            {contributions[index].map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <h3>Technology stack</h3>
          <div className="tech-tags">
            {project.Technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <a
            className="primary-button"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("project_visit", { project_name: project.title })
            }
          >
            Visit live project <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}
