type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

const experiences: ExperienceEntry[] = [
  {
    company: "CurbPage",
    role: "Front-End Developer",
    location: "Remote",
    dates: "August 2025 – September 2026",
    bullets: [
      "Built and maintained a role-based real estate platform for Admin, Agent, Client, and Teammate workflows using Next.js, TypeScript, Supabase, Drizzle ORM, TanStack Query, Zod, and Tailwind CSS.",
      "Implemented customized authorization and middleware-based protected routing for role-specific access.",
      "Shipped Supabase authentication with magic-link login for secure, passwordless access.",
      "Integrated Stripe payments and TanStack Query for reliable data fetching and caching.",
      "Applied Zod validation for scalable forms and Drizzle schemas for type-safe database management.",
      "Converted Figma designs into responsive, cross-browser, mobile-friendly interfaces.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Drizzle", "TanStack Query", "Zod", "Tailwind", "Stripe"],
  },
  {
    company: "CBS OffShore",
    role: "Front-End Developer",
    location: "Remote",
    dates: "March 2024 – July 2025",
    bullets: [
      "Built and maintained multiple direct-to-sale e-commerce sites with HTML, Bootstrap, jQuery, and .NET.",
      "Converted Figma prototypes into responsive, mobile-friendly storefronts ready for production traffic.",
      "Optimized performance with GTmetrix (A+ score, ~90% performance, ~1s load time).",
      "Integrated Google Tag Manager, Facebook Pixel, TikTok Pixel, and Everflow for conversion tracking.",
      "Worked with CRMs such as Konnektive and Sticky.io for customer data, subscriptions, and sales operations.",
    ],
    tech: ["HTML", "Bootstrap", "jQuery", ".NET", "GTmetrix"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-r from-[#10131a] to-[#0f212c] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="section-title mb-12 text-center">
          Professional <span className="text-[#2EB2D3]">Experience</span>
        </h1>

        <div className="mx-auto max-w-3xl">
          <ol className="relative space-y-12 border-l border-[#2EB2D3]/40 pl-8 md:pl-10">
            {experiences.map((job) => (
              <li key={job.company} className="relative">
                <span
                  className="absolute -left-[2.35rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#2EB2D3] bg-[#10131a] md:-left-[2.85rem]"
                  aria-hidden
                />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h2 className="subsection-title">{job.company}</h2>
                  <p className="meta-text shrink-0 sm:text-right">{job.dates}</p>
                </div>

                <p className="mt-1 font-display text-base font-semibold text-[#2EB2D3] md:text-lg">{job.role}</p>
                <p className="meta-text mt-0.5">{job.location}</p>

                <ul className="body-copy mt-4 list-disc space-y-2 pl-5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="max-w-none pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[#2EB2D3]/50 bg-[#2eb2d320] px-2.5 py-1 text-xs font-semibold text-[#EFF0F2] md:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
