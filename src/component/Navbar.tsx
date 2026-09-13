import { useState } from "react";
import NavTabs from "./animata/container/nav-tabs";

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tabs = [
    { label: "Profile", sectionId: "profile" },
    { label: "Services", sectionId: "services" },
    { label: "About Us", sectionId: "about" },
    { label: "Experience", sectionId: "experience" },
    { label: "Projects ", sectionId: "project" },
  ];

  return (
    <nav className="bg-[#10131A] fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="font-display text-xl font-bold text-[#EFF0F2] md:text-2xl">
              {"<"}
              <span className="text-[#2EB2D3]">A</span>nthony{"/>"}
            </h1>
          </div>
          <div className="hidden md:block">
            <NavTabs tabs={tabs} />
          </div>
          <div className="hidden md:block">
            {/* <WorkButton
              text="Contact"
              className="bg-gradient-to-t from-[#087796] to-[#0096ba] px-5 py-2 text-sm md:text-base"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  window.scrollTo({
            top: element.offsetTop - 30,  
            behavior: "smooth"
        });
                }
              }}
            /> */}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#EFF0F2] hover:text-[#2EB2D3] focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavTabs tabs={tabs} isMobile={true} />
          </div>
          {/* <div className="px-2 py-3">
            <WorkButton
              text="Contact"
              className="bg-gradient-to-t from-[#087796] to-[#0096ba] px-5 py-2 text-sm w-full"
               onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                 window.scrollTo({
                  top: element.offsetTop - 30,  
                  behavior: "smooth"
                });
                }
              }}
            />
          </div> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
