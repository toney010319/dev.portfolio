import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  link: string;
  Technologies: string[];
};

type ProjectDetailOverlayProps = {
  project: ProjectItem | null;
  index: number;
  isDesktop: boolean;
  onClose: () => void;
};

const formatIndex = (index: number) => String(index + 1).padStart(2, "0");

export default function ProjectDetailOverlay({
  project,
  index,
  isDesktop,
  onClose,
}: ProjectDetailOverlayProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-detail-overlay"
          className="fixed inset-0 z-[100] flex items-end justify-center md:items-center md:p-6"
          role="presentation"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <motion.button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-[#0c0e14]/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            initial={isDesktop ? { opacity: 0, scale: 0.94, y: 16 } : { y: "100%" }}
            animate={isDesktop ? { opacity: 1, scale: 1, y: 0 } : { y: 0 }}
            exit={isDesktop ? { opacity: 0, scale: 0.96, y: 12 } : { y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-[rgba(46,178,211,0.35)] bg-[#10131a] shadow-2xl md:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} application`}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#10131a] to-transparent" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 rounded-md border border-white/20 bg-[#10131a]/70 p-2 text-[#EFF0F2] backdrop-blur transition hover:bg-[#10131a]/90"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 id="project-detail-title" className="font-display text-2xl font-bold text-[#EFF0F2]">
                  {project.title}
                </h2>
                <span className="shrink-0 font-display text-sm font-semibold text-[#2EB2D3]">{formatIndex(index)}</span>
              </div>

              <p className="text-sm leading-relaxed text-[#EFF0F2]/90 md:text-base">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.Technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#2EB2D3]/50 bg-[#2eb2d320] px-2.5 py-1 text-xs font-semibold text-[#EFF0F2]"
                  >
                    <img src={`/images/${tech}.svg`} alt="" width={14} height={14} className="shrink-0" />
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#2EB2D3] px-5 py-2.5 font-display text-base font-semibold text-[#10131a] transition hover:bg-[#2095B3]"
              >
                Visit project
                <ArrowUpRight size={18} aria-hidden />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
