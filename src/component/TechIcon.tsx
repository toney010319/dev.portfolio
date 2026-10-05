const availableIcons = import.meta.glob("/public/images/*.svg");

type TechIconProps = {
  name: string;
  size: number;
  className?: string;
};

export default function TechIcon({ name, size, className }: TechIconProps) {
  if (!(`/public/images/${name}.svg` in availableIcons)) return null;

  return <img src={`/images/${name}.svg`} alt="" width={size} height={size} className={className} />;
}
