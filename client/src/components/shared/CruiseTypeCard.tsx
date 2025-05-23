import { CruiseType } from "@/data/mockData";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

interface CruiseTypeCardProps {
  cruiseType: CruiseType;
  selected?: boolean;
}

export default function CruiseTypeCard({ cruiseType, selected = false }: CruiseTypeCardProps) {
  const [, setLocation] = useLocation();
  const { id, name, icon, bgColor, iconColor } = cruiseType;

  const handleClick = () => {
    setLocation(`/cruises?type=${id}`);
  };

  return (
    <div 
      className={cn(
        "text-center cursor-pointer p-3 rounded-md transition duration-200",
        bgColor,
        selected ? "border-2 border-primary" : "border border-neutral-200 hover:border-primary"
      )}
      onClick={handleClick}
    >
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2", bgColor)}>
        <i className={cn(`fas fa-${icon}`, iconColor)}></i>
      </div>
      <span className="text-sm font-medium text-neutral-700">{name}</span>
    </div>
  );
}
