import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CycleText() {
  const words = ["Frontend Engineer",  "Backend Engineer","Full-Stack Web Developer", ];
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
      <span className="font-mono text-2xl font-extrabold text-[#EFF0F2] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        Anthony Bautista <br />
        I'm
        <AnimatePresence mode="wait">
          <motion.h1
            key={`words_${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.08 }}
            className="inline-block font-mono font-extrabold text-[#2EB2D3]"
          >
            &nbsp;{words[index]}&nbsp;
          </motion.h1>
        </AnimatePresence>
      </span>
    </div>
  );
}
