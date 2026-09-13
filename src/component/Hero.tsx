import CycleText from "./animata/container/cylce-text";
import WorkButton from "./animata/container/work-button";
import photo from "../assets/test1.png";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "lucide-react";

const Hero = () => {
  return (
    <section id="profile" className="bg-gradient-to-r from-[#10131a] to-[#0f212c] pt-10">
      <div className="container mx-auto px-4 pb-16 pt-24 lg:px-0 lg:pb-20 lg:pt-28">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
          <div className="w-full pt-6 lg:w-2/3 lg:pt-16">
            <CycleText />

            <p className="body-copy mx-auto mt-6 text-center lg:mx-0 lg:text-left">
              Web Developer and Frontend Engineer with 3+ years of experience building and maintaining production web
              applications. Strong focus on React, Next.js, and TypeScript, with hands-on full-stack work across APIs,
              databases, authentication, and business workflows.
            </p>

            <div className="mb-10 mt-10 flex items-center justify-center gap-5 lg:justify-start">
              <WorkButton
                text="Download CV"
                className="bg-[#2EB2D3] px-7 py-2 font-display text-lg"
                href="/images/resume.pdf"
                download={true}
              />
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/d4ydr34mer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <FacebookIcon className="h-6 w-6 text-[#2EB2D3] duration-200 ease-in-out hover:scale-150 hover:cursor-pointer" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Facebook
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/asbautista19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <LinkedinIcon className="h-6 w-6 text-[#2EB2D3] duration-200 ease-in-out hover:scale-150 hover:cursor-pointer" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com/toney010319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <GithubIcon className="h-6 w-6 text-[#2EB2D3] duration-200 ease-in-out hover:scale-150 hover:cursor-pointer" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 hidden w-full lg:mt-0 lg:block lg:w-1/3">
            <img
              src={photo}
              alt="Anthony Bautista"
              className="mx-auto h-auto w-full max-w-[300px] rounded-md md:max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
