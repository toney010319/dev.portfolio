import { cn } from "../../../libs/utils";

interface ButtonProps {
  item: string;
  index?: number;
  activeIndex: number | null;
  onTabClick: () => void;
}

const Button = ({ item, index, activeIndex, onTabClick }: ButtonProps) => {
  return (
    <div
      className={cn("rounded-md bg-[#2EB2D3] sm:rounded-lg", {
        "border-b-2 border-b-[#2EB2D3]": index === activeIndex,
      })}
      onClick={onTabClick}
    >
      <div
        className={cn(
          "flex h-8 cursor-pointer items-center justify-center rounded-md border border-transparent bg-white px-2 py-1 text-[#10131a] transition-all sm:h-10 sm:border-2 sm:px-3 sm:py-2",
          {
            "border-[#2EB2D3] text-[#0a6f8a] sm:border-2": index === activeIndex,
            "origin-top-right ease-in hover:rotate-6": index !== activeIndex,
          }
        )}
      >
        <p className="px-1 text-center font-display text-xs font-semibold sm:px-2 sm:text-sm md:text-base">{item}</p>
      </div>
    </div>
  );
};

interface ShiftTabsProps {
  setActiveTab: (tab: number | null) => void;
  activeTab: number | null;
  items: string[];
  onTabClick: (tab: number | null) => void;
}

export default function ShiftTabs({ setActiveTab, activeTab, items, onTabClick }: ShiftTabsProps) {
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onTabClick(index);
  };

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
      {items.map((item, index) => (
        <Button
          onTabClick={() => handleTabClick(index)}
          item={item}
          activeIndex={activeTab}
          index={index}
          key={`shift_tab_${index}`}
        />
      ))}
    </div>
  );
}
