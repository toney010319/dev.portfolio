import { useEffect, useRef } from "react";

const MousePointer = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!precisePointer.matches) return;

    let frame = 0;
    let x = -100;
    let y = -100;
    let ringX = x;
    let ringY = y;

    const animate = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };
    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      document.documentElement.classList.add("custom-pointer-active");
    };
    const hover = (event: MouseEvent) => {
      const target = event.target as Element | null;
      ringRef.current?.classList.toggle("is-interactive", Boolean(target?.closest("a, button, [role='button']")));
    };
    const hide = () => document.documentElement.classList.remove("custom-pointer-active");

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", hover, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hover);
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.classList.remove("custom-pointer-active");
    };
  }, []);

  return (
    <div className="custom-pointer" aria-hidden="true">
      <div ref={ringRef} className="pointer-ring" />
      <div ref={dotRef} className="pointer-dot" />
    </div>
  );
};

export default MousePointer;
