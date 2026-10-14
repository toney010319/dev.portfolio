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
  "Integrations: Built Stripe subscription billing with custom plan logic and a webhook handler that updates profiles only after payment confirmation. Added a Calendly API integration that tracks meeting attendance inside the workflow system. Automation: Designed Blueprints, a real estate transaction workflow engine that calculates due dates from milestones and supports email automation and document configuration, reducing manual follow-up. Backend and security: Built middleware for Admin, Agent, Client, and Teammate roles with subscription-state guards, configured Supabase Row Level Security policies, and authored Drizzle schema migrations.",
  "Built a full-stack portal with time tracking, support ticketing, HR requests, and admin workflows using the MERN stack and TypeScript.",
  "Translated Figma designs into a responsive, mobile-first production storefront with shopping cart, subscription, and checkout flows. Optimized performance with WebP assets, minified code, Handlebars, and Gulp, achieving 90%+ scores in GTmetrix, PageSpeed Insights, and Lighthouse. Integrated PayPal, Facebook Pixel, TikTok Pixel, Everflow, Konnektive, and Sticky.io for payments, analytics, conversion tracking, and customer management.",
  "Translated Figma designs into responsive product, bundle-selection, accessories, and checkout interfaces. Optimized performance with WebP assets, minified code, Handlebars, and Gulp, achieving 90%+ scores in GTmetrix, PageSpeed Insights, and Lighthouse. Integrated PayPal, Facebook Pixel, TikTok Pixel, Everflow, Konnektive, and Sticky.io for payments, analytics, conversion tracking, and customer management.",
  "Built a social application with account creation, authentication, public posts, comments, and likes, using Appwrite for backend services.",
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
          <p>{project.description}</p>
          <h3>My contribution</h3>
          <p>{contributions[index]}</p>
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
