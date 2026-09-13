import FlipCard from "./animata/container/flip-card";
import frontend from "../assets/front.jpg";

const Services = () => {
  return (
    <section id="services" className="bg-[#10131a] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div data-aos="fade-up" data-aos-delay="150" className="flex flex-col justify-center">
            <h1 className="section-title mb-4">
              MY <span className="text-[#2EB2D3]">SERVICE</span>
            </h1>
            <p className="body-copy pt-2">
              As a versatile developer and designer, I offer a full spectrum of services to help businesses build,
              enhance, and optimize their digital presence. With expertise as a front-end and back-end developer, I
              create seamless full-stack web applications that are both powerful and efficient. My skills in UI/UX
              design ensure that these applications are not only functional but also intuitive and user-friendly.
              Additionally, I specialize in web optimization, improving site performance, speed, and overall user
              experience. I am committed to delivering high-quality, scalable solutions that meet the unique needs of
              each project.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row lg:mt-0"
          >
            <div className="w-full space-y-4 sm:w-1/2">
              <FlipCard
                description=" I specialize in building fast, mobile-responsive websites with a focus on cross-browser compatibility and performance optimization. With a strong foundation in UX design, I create user-centered interfaces that deliver both functionality and an intuitive user experience."
                image={frontend}
                rotate="y"
                subtitle="Frontend Developer"
                title="Frontend Developer"
                className="w-full"
              />
              <FlipCard
                description=" I bring user-focused designs to life through clean, responsive, and interactive front-end code. With a strong background in building e-commerce and system-based websites, I work primarily with ReactJS and Tailwind CSS, to create seamless user experiences across all devices. My goal is to blend design and functionality to build intuitive and engaging web interfaces."
                image={frontend}
                rotate="y"
                subtitle="UI/UX Developer"
                title="UI/UX Developer"
                className="w-full "
              />
            </div>
            <div className="w-full space-y-4 sm:w-1/2 lg:mt-10">
              <FlipCard
                description="I am a backend developer skilled in Node.js with the Express.js framework, MongoDB, as well as Ruby and the Ruby on Rails framework with PostgreSQL. I am committed to developing robust, scalable, and secure server-side applications that seamlessly integrate with front-end technologies."
                image={frontend}
                rotate="y"
                subtitle="Backend Developer"
                title="Backend Developer"
                className="w-full"
              />
              <FlipCard
                description="I optimize websites using GTmetrix, PageSpeed Insights, and Lighthouse by converting images to WebP, lazy loading content, applying CDN caching, and minimizing assets. These improvements boost load speed, SEO, and overall user experience."
                image={frontend}
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
