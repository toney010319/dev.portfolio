import React from "react";
import AnimatedBorderTrail from "./border-trails";

interface WorkButtonProps {
  text: string;
  className?: string; // Add className as an optional prop
  href?: string;
  download?: boolean | string;
  onClick?: () => void;
}
const WorkButton: React.FC<WorkButtonProps> = ({
  text,
  className = " bg-gradient-to-t from-[#087796] to-[#0096ba] px-14 py-4 text-lg",
  href,
  onClick,
  download = false,
}) => {
  return (
    <AnimatedBorderTrail
      className="rounded-full bg-zinc-600 hover:bg-zinc-500"
      contentClassName="rounded-full bg-zinc-800"
      trailColor="white"
      trailSize="lg"
    >
      <button
        type="button"
        className={`group relative overflow-hidden rounded-full bg-gradient-to-t from-[#087796] to-[#0096ba] ${className} transition-all`}
        onClick={onClick}
      >
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" download={download || undefined}>
            <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/50 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
            <span className="font-semibold text-[#EFF0F2]">{text}</span>
          </a>
        ) : (
          <>
            <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/50 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
            <span className="font-semibold text-[#EFF0F2]">{text}</span>
          </>
        )}
      </button>
    </AnimatedBorderTrail>
  );
};

export default WorkButton;
