import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import photo from "../assets/test1.png";
import { trackEvent } from "../lib/analytics";

const Hero = () => (
  <section id="profile" className="hero-section">
    <div className="page-shell">
      <div className="hero-topline">
        <span className="eyebrow">
          <span className="status-dot" /> Open to frontend and full-stack roles
        </span>
        <span className="hero-location">
          Based in Cebu, Philippines · Working remotely
        </span>
      </div>
      <h1 className="hero-name">
        ANTHONY <span>BAUTISTA</span>
      </h1>
      <div className="hero-grid">
        <div className="hero-intro">
          <p className="eyebrow">
            React · Next.js · TypeScript
          </p>
          <h2>
            Production-ready frontend.
            <br />
            Full-stack ownership.
          </h2>
          <p className="hero-description">
            I turn product requirements into responsive SaaS and e-commerce
            experiences—from secure workflows and payments to integrations,
            performance optimization, and automated tests.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#project">
              View selected work <ArrowUpRight size={18} />
            </a>
            <a
              className="text-link"
              href="/images/resume.pdf"
              download
              onClick={() => trackEvent("resume_download")}
            >
              Download CV <Download size={16} />
            </a>
            <a className="text-link github-jump-link" href="#github-activity">
              GitHub activity <Github size={16} />
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-visual">
            <div className="portrait-orbit" aria-hidden="true" />
            <img
              src={photo}
              alt="Anthony Bautista"
              width="481"
              height="481"
              fetchPriority="high"
            />
          </div>
          <span className="portrait-caption">
            Anthony Bautista / Frontend Engineer
          </span>
        </div>
        <div className="hero-socials">
          <p className="eyebrow">Find me elsewhere</p>
          {[
            {
              label: "GitHub",
              href: "https://github.com/toney010319",
              icon: Github,
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/asbautista19/",
              icon: Linkedin,
            },
            {
              label: "Email me",
              href: "mailto:toney010319@gmail.com",
              icon: Mail,
            },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith("https")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={() => trackEvent("social_click", { network: label })}
            >
              <Icon size={17} />
              <span>{label}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
          <p className="social-note">
            Have a project in mind?
            <br />
            <a href="#contact">Let’s build it together.</a>
          </p>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#project">
          <ArrowDown size={15} /> Scroll to explore
        </a>
        <ul aria-label="Core technologies">
          {["3+ years experience", "Production SaaS", "90%+ performance", "End-to-end delivery"].map(
            (tech) => (
              <li key={tech}>{tech}</li>
            ),
          )}
        </ul>
      </div>
    </div>
  </section>
);
export default Hero;
