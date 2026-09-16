import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CycleText() {
  const words = ["Frontend Engineer", "Backend Engineer", "Full-Stack Developer"];
  const [index, setIndex] = useState(0);

  const total = words.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 1300);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="text-center lg:text-left">
      <h1 className="font-mono text-2xl font-extrabold leading-tight text-[#EFF0F2] sm:text-4xl lg:text-[2.75rem]">
        Anthony Bautista
      </h1>
      <p className="mt-1 font-mono text-2xl font-extrabold leading-tight text-[#EFF0F2] sm:text-4xl lg:text-[2.75rem]">
        {/* Mobile: reserve 2-line height so wrap doesn't shift layout. Desktop: original inline flow. */}
        <span className="inline-flex min-h-[2.75em] w-full flex-wrap items-baseline justify-center lg:min-h-0 lg:w-auto lg:justify-start">
          I&apos;m
          <AnimatePresence mode="wait">
            <motion.span
              key={`words_${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.08 }}
              className="inline-block font-mono font-extrabold text-[#2EB2D3]"
            >
              &nbsp;{words[index]}&nbsp;
            </motion.span>
          </AnimatePresence>
        </span>
      </p>
    </div>
  );
}
