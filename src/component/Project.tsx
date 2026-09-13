import "aos/dist/aos.css";
import WorkButton from "./animata/container/work-button";

const Project = () => {
  const projects = [
    {
      title: "Employee Portal",
      description:
        "A full-stack application with MongoDb ExpressJs NodeJs and ReactJs (MERN) Technology, with a feature of Time tracker, Ticketing Support and HR Support Request, with admin access.",
      image: "/images/dms.jpg",
      link: "https://csv-portal-online.vercel.app/sign-in",
      Technologies: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs", "Tailwind", "Shadcn", "Typescript", "Vite"],
    },

    {
      title: "ESaverWatt",
      description:
        "My main responsibility was converting Figma prototypes into fully functional, responsive code using a mobile-first approach, ensuring compatibility across all devices. The website allows users to add items to their cart, place multiple orders with subscription options, and complete payments via PayPal and debit cards.",
      image: "/images/ecommerce.jpg",
      link: "https://shop.esaverwatt.com",
      Technologies: ["HTML", "Bootstrap", "CSS", "Jquery", ".NET"],
    },
    {
      title: "SNAPGRAM",
      description:
        "Snapgram is a full-stack social media clone where users can create an account, log in, create posts, share them publicly, comment, and like other posts. The project features a serverless backend powered by Appwrite, providing a streamlined and scalable architecture.",
      image: "/images/snapgram.webp",
      link: "https://snapgram-jsm-o7n4.vercel.app/",
      Technologies: ["NextJs", "Tailwind", "TanstackQuery", "Typescript", "Appwrite", "Vite"],
    },
  ];

  return (
    <section id="project" className="bg-[#10131a] py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="section-title mb-12">
          MY <span className="text-[#2EB2D3]">PROJECT</span>
        </h1>
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {projects.map((project) => (
            <div
              key={project.title}
              data-aos="fade-up"
              className="overflow-hidden rounded-xl border-2 border-[rgba(46,178,211,0.45)] shadow-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#2eb2d315] hover:shadow-[#2EB2D3]"
            >
              <div className="w-full transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="relative h-56 md:h-64">
                  <img
                    src={project.image}
                    alt={`${project.title} application`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6 text-left">
                  <h2 className="font-display text-xl font-bold tracking-wide text-[#EFF0F2]">{project.title}</h2>
                  <p className="text-sm leading-relaxed text-[#EFF0F2]/90 md:text-[0.95rem]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.Technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#2EB2D3]/70 px-2.5 py-1 text-xs font-semibold text-[#EFF0F2]"
                      >
                        <img src={`/images/${tech}.svg`} alt="" width={16} height={16} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 text-left">
                <WorkButton
                  text="View Project"
                  className="bg-[#2EB2D3] px-5 py-2 font-display text-base self-start"
                  href={project.link}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
