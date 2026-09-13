import { useEffect, useRef, useState } from "react";
import NavTabs from "./animata/container/nav-tabs";
import WorkButton from "./animata/container/work-button";
import { Menu, X } from "lucide-react";

const tabs = [
  { label: "Profile", sectionId: "profile" },
  { label: "Services", sectionId: "services" },
  { label: "About Me", sectionId: "about" },
  { label: "Experience", sectionId: "experience" },
  { label: "Projects", sectionId: "project" },
];

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 30,
      behavior: "smooth",
    });
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(tabs[0].sectionId);
  const sectionRatios = useRef<Record<string, number>>({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sectionIds = tabs.map((tab) => tab.sectionId);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.current[entry.target.id] = entry.intersectionRatio;
        });

        let mostVisibleId = sectionIds[0];
        let highestRatio = 0;

        for (const id of sectionIds) {
          const ratio = sectionRatios.current[id] ?? 0;
          if (ratio > highestRatio) {
            highestRatio = ratio;
            mostVisibleId = id;
          }
        }

        if (highestRatio > 0) {
          setActiveSectionId(mostVisibleId);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[#10131A]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="font-display text-xl font-bold text-[#EFF0F2] md:text-2xl">
              {"<"}
              <span className="text-[#2EB2D3]">A</span>nthony{"/>"}
            </h1>
          </div>
          <div className="hidden md:block">
            <NavTabs
              tabs={tabs}
              activeSectionId={activeSectionId}
              onSectionSelect={() => setIsMenuOpen(false)}
            />
          </div>
          <div className="hidden md:block">
            <WorkButton
              text="Contact"
              className="bg-gradient-to-t from-[#087796] to-[#0096ba] px-5 py-2 text-sm md:text-base"
              onClick={scrollToContact}
            />
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
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <NavTabs
              tabs={tabs}
              isMobile={true}
              activeSectionId={activeSectionId}
              onSectionSelect={() => setIsMenuOpen(false)}
            />
          </div>
          <div className="px-2 py-3">
            <WorkButton
              text="Contact"
              className="w-full bg-gradient-to-t from-[#087796] to-[#0096ba] px-5 py-2 text-sm"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToContact();
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
