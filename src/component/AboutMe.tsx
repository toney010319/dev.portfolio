import { useState } from "react";
import ShiftTabs from "./animata/container/shift-tabs";

const techstack = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Javascript",
  "Typescript",
  "ReactJs",
  "ExpressJs",
  "NodeJs",
  "MongoDB",
  "NextJs",
  "Svelte",
  "SQLite",
  "Ruby",
  "Ruby-on-Rails",
  "PostgreSQL",
  "Figma",
  "Appwrite",
  "Supabase",
  "Vite",
  "VScode",
  "Jquery",
  "Shadcn",
  "TanstackQuery",
  "Git",
  "RestApi",
  "MaterialUI",
  "SCSS",
  "Wordpress",
  "WooCommerce",
  "Elementor",
  "PHP",
  "Stripe",
];

const frontEnd = [
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "Bootstrap",
  "Javascript",
  "Typescript",
  "ReactJs",
  "NextJs",
  "Svelte",
  "Jquery",
  "Shadcn",
  "MaterialUI",
  "Figma",
  "TanstackQuery",
  "RestApi",
  "Zod",
];

const backEnd = [
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "SQLite",
  "PostgreSQL",
  "Ruby",
  "Ruby-on-Rails",
  "RestApi",
  "Appwrite",
  "Supabase",
  "PHP",
];

const cmsPlatforms = ["Wordpress", "WooCommerce", "Elementor"];

const toolsAndLibraries = ["Vite", "VScode", "Git", "Stripe", "Cursor"];

const education = [
  {
    dates: "2023 – 2024",
    school: "Avion School",
    program: "Software Engineer",
    description:
      "Intensive full-stack web development program covering front-end and back-end technologies, including HTML, CSS, JavaScript, React, Ruby, and Ruby on Rails. Built collaborative, real-world web applications as part of the curriculum.",
  },
  {
    dates: "2018 – 2019",
    school: "Talisay City College",
    program: "Bachelor of Science in Industrial Technology",
    description:
      "Coursework in software and technology fundamentals, including programming concepts and applied problem-solving relevant to industry systems.",
  },
];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const renderTechStack = () => {
    switch (activeTab) {
      case 0:
        return techstack;
      case 1:
        return frontEnd;
      case 2:
        return backEnd;
      case 3:
        return toolsAndLibraries;
      case 4:
        return cmsPlatforms;
      default:
        return techstack;
    }
  };

  return (
    <section id="about" className="bg-gradient-to-r from-[#10131a] to-[#0f212c] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="section-title mb-8 text-center md:mb-10">
          More <span className="text-[#2EB2D3]">About</span> Me
        </h1>

        <p className="body-copy mx-auto mb-12 max-w-3xl text-center" data-aos="fade-up" data-aos-delay="100">
          I’m a mid-level Web Developer focused on frontend engineering with React, Next.js, and TypeScript, and
          comfortable working across the stack when the product needs it. I’ve built and maintained production
          applications used in real business contexts, role-based platforms, admin workflows, e-commerce, and
          API-integrated systems with attention to maintainability, security boundaries, and responsive UX.
        </p>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-14">
          <div data-aos="fade-up" data-aos-delay="150" className="lg:w-1/2">
            <h2 className="subsection-title mb-8 text-center lg:text-left">My Education</h2>
            <div className="space-y-8">
              {education.map((item) => (
                <article key={item.school} className="text-left">
                  <p className="meta-text">{item.dates}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-[#2EB2D3] md:text-xl">{item.school}</h3>
                  <p className="mt-0.5 font-display text-base font-semibold text-[#EFF0F2]">{item.program}</p>
                  <p className="body-copy mt-3 max-w-none text-base md:text-base">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="w-full text-center lg:w-1/2">
            <h2 className="subsection-title mb-4 md:mb-6">Tech Stack</h2>

            <ShiftTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              items={["All", "Frontend", "Backend", "Tools", "CMS"]}
              onTabClick={(tab: number | null) => setActiveTab(tab)}
            />
            <div className="mt-4 grid grid-cols-2 gap-1.5 px-1 py-3 sm:grid-cols-3 sm:gap-2 sm:px-2 md:mt-6 md:grid-cols-3 md:gap-2.5 md:p-6 lg:grid-cols-4 lg:p-8">
              {renderTechStack().map((item) => (
                <span
                  key={item}
                  className="inline-flex min-w-0 items-center justify-start gap-1.5 rounded-md border border-[#2EB2D3]/80 bg-[#2eb2d344] px-2 py-1.5 text-xs font-semibold text-[#EFF0F2] transition duration-300 ease-in-out hover:cursor-pointer hover:border-[#2EB2D3] hover:shadow-[0_0_0_1px_#2EB2D3] sm:gap-2 sm:px-2.5 sm:text-sm md:text-base"
                >
                  <img
                    src={`/images/${item}.svg`}
                    width={16}
                    height={16}
                    alt=""
                    className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5"
                  />
                  <span className="truncate">{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
