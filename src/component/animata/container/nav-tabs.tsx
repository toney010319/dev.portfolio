"use client";
import { motion } from "framer-motion";
import { cn } from "../../../libs/utils";

interface TabProps {
  text: string;
  selected: boolean;
  sectionId: string;
  isMobile: boolean;
  onSelect: (sectionId: string) => void;
}

interface NavTabsProps {
  tabs: { label: string; sectionId: string }[];
  activeSectionId: string;
  isMobile?: boolean;
  onSectionSelect?: (sectionId: string) => void;
}

export default function NavTabs({ tabs, activeSectionId, isMobile = false, onSectionSelect }: NavTabsProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md bg-[#10131A]",
        isMobile ? "flex-col space-y-2" : "flex-wrap gap-4"
      )}
    >
      {tabs.map((tab) => (
        <Tab
          text={tab.label}
          selected={activeSectionId === tab.sectionId}
          sectionId={tab.sectionId}
          key={tab.sectionId}
          isMobile={isMobile}
          onSelect={onSectionSelect ?? (() => {})}
        />
      ))}
    </div>
  );
}

const Tab = ({ text, selected, sectionId, isMobile, onSelect }: TabProps) => {
  const handleClick = () => {
    onSelect(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 30,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative rounded-md p-2 text-sm transition-all hover:border-[#2EB2D3] hover:bg-[#2eb2d32a]",
        selected ? "font-bold text-white" : "text-[#EFF0F2] hover:font-black",
        isMobile ? "w-full text-left" : "min-w-20"
      )}
    >
      <p className="relative z-50">{text}</p>
      {selected && (
        <motion.span
          layoutId="tabs"
          transition={{ type: "spring", duration: 0.5 }}
          className={cn(
            "absolute inset-0 rounded-sm bg-gradient-to-t from-[#087796] to-[#0096ba]",
            isMobile ? "left-0 h-full w-1" : ""
          )}
        />
      )}
    </button>
  );
};
