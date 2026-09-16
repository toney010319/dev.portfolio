import ServiceCardArt, { type ServiceVariant } from "../../ServiceCardArt";
import { cn } from "../../../libs/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  variant?: ServiceVariant;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
}

export default function FlipCard({
  image,
  variant,
  title,
  description,
  subtitle,
  rotate = "y",
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <div className={cn("group h-80 w-72 [perspective:1000px]", className)} {...props}>
      <div
        className={cn(
          "relative h-full rounded-2xl border-2 border-[rgba(46,178,211,0.45)] transition-transform duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front — hide on hover so art cannot bleed through the back face */}
        <div
          className={cn(
            "absolute inset-0 overflow-hidden rounded-2xl bg-[#10131a]",
            "[backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(1px)]",
            "opacity-100 transition-opacity duration-150 delay-200 group-hover:pointer-events-none group-hover:opacity-0 group-hover:delay-0"
          )}
        >
          {variant ? (
            <ServiceCardArt variant={variant} />
          ) : (
            <img
              src={image}
              alt={title}
              className="h-full w-full rounded-2xl object-cover"
            />
          )}
          <div className="absolute bottom-4 left-4 z-10 font-display text-xl font-bold text-white drop-shadow-md">
            {title}
          </div>
        </div>

        {/* Back — fully opaque so description stays readable */}
        <div
          className={cn(
            "absolute inset-0 overflow-hidden rounded-2xl bg-[#0c1218] p-4",
            "[backface-visibility:hidden] [-webkit-backface-visibility:hidden]",
            self[1]
          )}
        >
          <div className="flex h-full flex-col gap-2 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <h3 className="font-display text-xl font-bold text-white">{subtitle}</h3>
            <p className="mt-1 border-t border-[#2EB2D3]/30 py-4 text-sm font-medium leading-relaxed text-[#EFF0F2] md:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
