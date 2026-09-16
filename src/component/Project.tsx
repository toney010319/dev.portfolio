import { useCallback, useEffect, useState } from "react";
import "aos/dist/aos.css";
import WorkButton from "./animata/container/work-button";
import ProjectDetailOverlay, { type ProjectItem } from "./ProjectDetailOverlay";

const projects: ProjectItem[] = [
  {
    title: "CurbPage",
    description:
      "A real estate platform that centralizes clients, transactions, documents, workflows, and communication into one system—helping agents and teammates centralize transactions and automate tasks while giving clients real-time transaction visibility.",
    image: "/images/curbpage.webp",
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
    ],
  },
  {
    title: "Employee Portal",
    description:
      "A full-stack HR and operations portal for time tracking, support ticketing, and HR requests, with admin access for managing workflows. Built with the MERN stack and TypeScript for a maintainable, API-driven business application.",
    image: "/images/dms.jpg",
    link: "https://csv-portal-online.vercel.app/sign-in",
    Technologies: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs", "Tailwind", "Shadcn", "Typescript", "Vite"],
  },
  {
    title: "ESaverWatt",
    description:
      "An e-commerce storefront where customers add products to cart, place multi-order purchases with subscription options, and complete checkout via PayPal or debit card. I converted Figma prototypes into responsive, mobile-first production UI.",
    image: "/images/ecommerce.jpg",
    link: "https://shop.esaverwatt.com",
    Technologies: ["HTML", "Bootstrap", "CSS", "Jquery", ".NET", "Konnektive", "Gtag", "Klaviyo"],
  },
  {
    title: "CamHandy",
    description:
      "An e-commerce storefront for CamHandy dash cameras where customers choose product bundles, add accessories to cart, and complete checkout. I converted Figma prototypes into a responsive, mobile-first production UI.",
    image: "/images/camhandy.png",
    link: "https://shop.trycamhandy.com/",
    Technologies: ["HTML", "Bootstrap", "CSS", "Jquery", ".NET", "Konnektive", "Gtag", "Klaviyo"],
  },
  {
    title: "SNAPGRAM",
    description:
      "A full-stack social web app with account creation, login, public posts, comments, and likes. Uses Appwrite as a serverless backend for authentication and data, with a Next.js and TypeScript frontend.",
    image: "/images/snapgram.webp",
    link: "https://snapgram-jsm-o7n4.vercel.app/",
    Technologies: ["NextJs", "Tailwind", "TanstackQuery", "Typescript", "Appwrite", "Vite"],
  },
];

const CARD_TECH_LIMIT = 4;

const formatIndex = (index: number) => String(index + 1).padStart(2, "0");

const Project = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mediaQuery.matches);
    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  const closeOverlay = useCallback(() => setSelectedIndex(null), []);

  const openOverlay = (index: number) => setSelectedIndex(index);

  return (
    <section id="project" className="bg-[#10131a] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-10 text-center md:mb-12">
          Selected <span className="text-[#2EB2D3]">Projects</span>
        </h2>
        <div className="mx-auto grid max-w-6xl auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {projects.map((project, index) => {
            const visibleTech = project.Technologies.slice(0, CARD_TECH_LIMIT);
            const remainingTech = project.Technologies.length - visibleTech.length;

            return (
              <article
                key={project.title}
                data-aos="fade-up"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                onClick={() => openOverlay(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openOverlay(index);
                  }
                }}
                className="group flex h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border-2 border-[rgba(46,178,211,0.45)] bg-[#0c1218] shadow-md transition-colors duration-300 ease-in-out hover:bg-[#2eb2d315] hover:shadow-[#2EB2D3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2EB2D3]"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} application`}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5 text-left sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-lg font-bold tracking-wide text-[#EFF0F2] sm:text-xl">
                      {project.title}
                    </h2>
                    <span className="shrink-0 pt-1 font-display text-sm font-semibold text-[#2EB2D3]">
                      {formatIndex(index)}
                    </span>
                  </div>

                  <p className="line-clamp-2 text-sm leading-relaxed text-[#EFF0F2]/85 md:text-[0.95rem]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {visibleTech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#2EB2D3]/50 bg-[#2eb2d318] px-2.5 py-1 text-xs font-semibold text-[#EFF0F2]"
                      >
                        <img src={`/images/${tech}.svg`} alt="" width={14} height={14} className="shrink-0" />
                        <span className="truncate">{tech}</span>
                      </span>
                    ))}
                    {remainingTech > 0 && (
                      <span className="inline-flex items-center rounded-full border border-[#2EB2D3]/40 px-2.5 py-1 text-xs font-semibold text-[#EFF0F2]/80">
                        +{remainingTech}
                      </span>
                    )}
                  </div>

                  <div
                    className="mt-auto pt-4"
                    onClick={(event) => event.stopPropagation()}
                    onKeyDown={(event) => event.stopPropagation()}
                  >
                    <WorkButton
                      text="Open Project"
                      className="bg-[#2EB2D3] px-5 py-2 font-display text-base"
                      href={project.link}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectDetailOverlay
        project={selectedIndex === null ? null : projects[selectedIndex]}
        index={selectedIndex ?? 0}
        isDesktop={isDesktop}
        onClose={closeOverlay}
      />
    </section>
  );
};

export default Project;
