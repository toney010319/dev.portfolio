import FlipCard from "./animata/container/flip-card";

const Services = () => {
  return (
    <section id="services" className="bg-[#10131a] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div data-aos="fade-up" data-aos-delay="150" className="flex flex-col justify-center">
            <h2 className="section-title mb-4">
              What I <span className="text-[#2EB2D3]">Build</span>
            </h2>
            <p className="body-copy pt-2">
              I help teams ship and maintain production-ready web applications especially modern React/Next.js
              frontends and full-stack business systems. That includes dashboards, SaaS-style workflows, e-commerce
              experiences, and API-driven apps where reliability, responsiveness, and clear UX matter.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row lg:mt-0"
          >
            <div className="w-full space-y-4 sm:w-1/2">
              <FlipCard
                variant="frontend"
                description="I build responsive, mobile-first interfaces with React, Next.js, and TypeScript reusable components, API-driven pages, and production UI that holds up across browsers and devices."
                rotate="y"
                subtitle="Frontend Engineering"
                title="Frontend Engineering"
                className="w-full"
              />
              <FlipCard
                variant="uiux"
                description="I turn Figma and product designs into usable, responsive interfaces for e-commerce and business systems. Working primarily with React and Tailwind CSS, I focus on clear workflows and consistent experiences across screen sizes."
                rotate="y"
                subtitle="Responsive UI Engineering"
                title="Responsive UI Engineering"
                className="w-full "
              />
            </div>
            <div className="w-full space-y-4 sm:w-1/2 lg:mt-10">
              <FlipCard
                variant="backend"
                description="I build and integrate backend pieces with Node.js, Express, and REST APIs including authentication, authorization, and RBAC backed by MongoDB, PostgreSQL, or Supabase. I also have experience with Ruby on Rails and PostgreSQL when the stack calls for it."
                rotate="y"
                subtitle="Backend & APIs"
                title="Backend & APIs"
                className="w-full"
              />
              <FlipCard
                variant="optimization"
                description="I improve site performance using GTmetrix, PageSpeed Insights, and Lighthouse WebP images, lazy loading, CDN caching, and asset minimization plus TanStack Query for efficient front-end data caching to support faster loads and a better user experience."
                rotate="y"
                subtitle="Web Optimization"
                title="Web Optimization"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
