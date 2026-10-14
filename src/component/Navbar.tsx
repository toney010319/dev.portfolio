import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { trackEvent } from "../lib/analytics";
const tabs = [
  { label: "Work", id: "project" },
  { label: "Expertise", id: "services" },
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("profile");
  useEffect(() => {
    const sections = [...tabs.map((tab) => tab.id), "profile", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            if (!seen.has(entry.target.id)) {
              seen.add(entry.target.id);
              trackEvent("section_view", { section_name: entry.target.id });
            }
          }
        }),
      { rootMargin: "-20% 0px -65% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  return (
    <header className="site-header">
      <nav className="page-shell nav-inner" aria-label="Main navigation">
        <a
          href="#profile"
          className="brand"
          aria-label="Anthony Bautista, back to top"
          onClick={() => setOpen(false)}
        >
          <span>
            A<span className="brand-dot">.</span>
          </span>
          <span>Anthony Bautista</span>
        </a>
        <div className="desktop-nav">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              aria-current={active === tab.id ? "location" : undefined}
            >
              {tab.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="primary-button nav-contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <div className="mobile-nav" id="mobile-navigation">
            {[...tabs, { label: "Contact", id: "contact" }].map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === tab.id ? "location" : undefined}
              >
                {tab.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
