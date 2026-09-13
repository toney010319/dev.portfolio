import { cn } from "../libs/utils";

type ServiceVariant = "frontend" | "uiux" | "backend" | "optimization";

interface ServiceCardArtProps {
  variant: ServiceVariant;
  className?: string;
}

const Shell = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={cn(
      "relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c1218] via-[#10131a] to-[#0f212c]",
      className
    )}
  >
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(#2EB2D3 1px, transparent 1px), linear-gradient(90deg, #2EB2D3 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
      aria-hidden
    />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2EB2D3_0%,transparent_55%)] opacity-20" aria-hidden />
    <div className="relative z-10 mb-8 w-[78%] max-w-[220px]">{children}</div>
  </div>
);

/** Browser chrome + UI blocks — building interfaces */
const FrontendArt = ({ className }: { className?: string }) => (
  <Shell className={className}>
    <div className="overflow-hidden rounded-lg border border-[#2EB2D3]/45 bg-[#10131a]">
      <div className="flex items-center gap-1.5 border-b border-[#2EB2D3]/25 bg-[#0f212c] px-2.5 py-2">
        <span className="h-2 w-2 rounded-full bg-[#2EB2D3]/70" />
        <span className="h-2 w-2 rounded-full bg-[#2EB2D3]/40" />
        <span className="h-2 w-2 rounded-full bg-[#2EB2D3]/25" />
        <div className="ml-2 h-3 flex-1 rounded-sm bg-[#2eb2d320]" />
      </div>
      <div className="space-y-2 p-3">
        <div className="flex items-center justify-between gap-2">
          <div className="h-2 w-10 rounded bg-[#2EB2D3]" />
          <div className="flex gap-1">
            <div className="h-1.5 w-5 rounded bg-[#EFF0F2]/30" />
            <div className="h-1.5 w-5 rounded bg-[#EFF0F2]/30" />
            <div className="h-1.5 w-5 rounded bg-[#2EB2D3]/60" />
          </div>
        </div>
        <div className="h-14 rounded-md border border-[#2EB2D3]/20 bg-gradient-to-br from-[#2eb2d330] to-transparent" />
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-8 rounded border border-[#2EB2D3]/25 bg-[#2eb2d315]" />
          <div className="h-8 rounded border border-[#2EB2D3]/25 bg-[#2eb2d315]" />
          <div className="h-8 rounded border border-[#2EB2D3]/25 bg-[#2eb2d315]" />
        </div>
        <div className="space-y-1">
          <div className="h-1.5 w-full rounded bg-[#EFF0F2]/20" />
          <div className="h-1.5 w-[80%] rounded bg-[#EFF0F2]/15" />
        </div>
      </div>
    </div>
  </Shell>
);

/** Artboard + swatches + wireframes — design / UX */
const UiuxArt = ({ className }: { className?: string }) => (
  <Shell className={className}>
    <div className="relative">
      <div className="absolute -left-2 -top-2 z-10 flex gap-1">
        <span className="h-3 w-3 rounded-full bg-[#2EB2D3]" />
        <span className="h-3 w-3 rounded-full bg-[#087796]" />
        <span className="h-3 w-3 rounded-full bg-[#EFF0F2]/50" />
      </div>
      <div className="overflow-hidden rounded-lg border border-dashed border-[#2EB2D3]/50 bg-[#0f212c]/80 p-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-6 w-6 rounded border border-[#2EB2D3]/40 bg-[#2eb2d320]" />
          <div className="space-y-1">
            <div className="h-1.5 w-16 rounded bg-[#EFF0F2]/35" />
            <div className="h-1 w-10 rounded bg-[#EFF0F2]/20" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded border border-[#2EB2D3]/30 p-2">
            <div className="mb-1.5 aspect-square rounded bg-[#2eb2d325]" />
            <div className="h-1 w-full rounded bg-[#EFF0F2]/25" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="min-h-[2.5rem] flex-1 rounded border border-dashed border-[#2EB2D3]/35" />
            <div className="h-6 rounded-full bg-[#2EB2D3]/80" />
          </div>
        </div>
        <div className="mt-2 flex gap-1">
          {["#2EB2D3", "#087796", "#EFF0F2", "#10131a"].map((c) => (
            <span
              key={c}
              className="h-4 w-4 rounded-sm border border-white/10"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
    </div>
  </Shell>
);

/** Terminal + DB — APIs / server-side */
const BackendArt = ({ className }: { className?: string }) => (
  <Shell className={className}>
    <div className="space-y-2">
      <div className="overflow-hidden rounded-lg border border-[#2EB2D3]/40 bg-[#0a0d12] font-mono text-[9px] leading-relaxed">
        <div className="border-b border-[#2EB2D3]/20 px-2.5 py-1.5 text-[#2EB2D3]/80">api · routes</div>
        <div className="space-y-0.5 p-2.5 text-[#EFF0F2]/85">
          <p>
            <span className="text-[#2EB2D3]">GET</span> /users
          </p>
          <p>
            <span className="text-[#2EB2D3]">POST</span> /auth
          </p>
          <p>
            <span className="text-[#EFF0F2]/40">{"{"}</span> status: <span className="text-[#2EB2D3]">200</span>{" "}
            <span className="text-[#EFF0F2]/40">{"}"}</span>
          </p>
          <p className="text-[#2EB2D3]/70">→ connected</p>
        </div>
      </div>
      <div className="mx-auto flex w-16 flex-col items-center">
        <div className="h-2 w-14 rounded-t-full border border-[#2EB2D3]/50 bg-[#2eb2d330]" />
        <div className="h-5 w-14 border-x border-[#2EB2D3]/40 bg-[#0f212c]" />
        <div className="h-2 w-14 rounded-b-full border border-[#2EB2D3]/50 bg-[#2eb2d330]" />
        <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-[#2EB2D3]/80">db</p>
      </div>
    </div>
  </Shell>
);

/** Score ring + metrics — speed / performance */
const OptimizationArt = ({ className }: { className?: string }) => (
  <Shell className={className}>
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#2EB2D320" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#2EB2D3"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="251"
            strokeDashoffset="25"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-2xl font-bold text-[#2EB2D3]">98</span>
          <span className="text-[8px] uppercase tracking-wide text-[#EFF0F2]/60">perf</span>
        </div>
      </div>
      <div className="w-full space-y-1.5">
        {[
          { label: "FCP", w: "w-[90%]" },
          { label: "LCP", w: "w-[82%]" },
          { label: "CLS", w: "w-[95%]" },
        ].map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            <span className="w-7 font-mono text-[8px] text-[#EFF0F2]/50">{m.label}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#2eb2d320]">
              <div className={cn("h-full rounded-full bg-[#2EB2D3]", m.w)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Shell>
);

const artByVariant = {
  frontend: FrontendArt,
  uiux: UiuxArt,
  backend: BackendArt,
  optimization: OptimizationArt,
} as const;

const ServiceCardArt = ({ variant, className }: ServiceCardArtProps) => {
  const Art = artByVariant[variant];
  return <Art className={className} />;
};

export default ServiceCardArt;
export type { ServiceVariant };
