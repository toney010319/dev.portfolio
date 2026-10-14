import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { trackEvent } from "../lib/analytics";
export default function ContactUs() {
  return (
    <section id="contact" className="section-space contact-section">
      <div className="page-shell contact-layout">
        <div className="section-heading">
          <p className="eyebrow">05 / What’s next?</p>
          <h2>
            Looking for a
            <br />
            <span>frontend engineer?</span>
          </h2>
          <p>
            I’m open to remote frontend and full-stack opportunities where I can
            contribute to product development with React, Next.js, TypeScript,
            and dependable full-stack delivery.
          </p>
          <a
            href="mailto:toney010319@gmail.com"
            className="primary-button"
            onClick={() => trackEvent("contact_click", { channel: "Email" })}
          >
            Email Anthony <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="contact-links">
          {[
            {
              label: "Email",
              value: "toney010319@gmail.com",
              href: "mailto:toney010319@gmail.com",
              icon: Mail,
            },
            {
              label: "LinkedIn",
              value: "Let’s connect",
              href: "https://www.linkedin.com/in/asbautista19/",
              icon: Linkedin,
            },
            {
              label: "GitHub",
              value: "Explore my code",
              href: "https://github.com/toney010319",
              icon: Github,
            },
            {
              label: "WhatsApp",
              value: "Send me a message",
              href: "https://wa.me/639363491413",
              icon: MessageCircle,
            },
          ].map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith("https")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={() => trackEvent("contact_click", { channel: label })}
            >
              <Icon size={20} />
              <span>
                <small>{label}</small>
                {value}
              </span>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
