import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { FiAnchor, FiCompass, FiUsers, FiMap, FiShield, FiCoffee } from "react-icons/fi";
import { cn } from "@/lib/utils";

export interface CruiseType {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface CruiseTypeCardProps {
  cruiseType: CruiseType;
  selected?: boolean;
  onClick?: (id: string) => void;
}

const CruiseTypeCard: React.FC<CruiseTypeCardProps> = ({
  cruiseType,
  selected = false,
  onClick
}) => {
  const { id, name, icon, color } = cruiseType;

  const renderIcon = () => {
    switch (icon) {
      case "luxury":
        return <FiAnchor className="text-xl" />;
      case "adventure":
        return <FiCompass className="text-xl" />;
      case "family":
        return <FiUsers className="text-xl" />;
      case "river":
        return <FiMap className="text-xl" />;
      case "yacht":
        return <FiShield className="text-xl" />;
      case "themed":
        return <FiCoffee className="text-xl" />;
      default:
        return <FiAnchor className="text-xl" />;
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <Card
      className={cn(
        "text-center cursor-pointer hover:border-primary transition duration-200",
        selected && "border-primary"
      )}
      onClick={handleClick}
    >
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mx-auto mb-2`}>
        {renderIcon()}
      </div>
      <span className="text-sm font-medium text-neutral-700">{name}</span>
    </Card>
  );
};

export default CruiseTypeCard;
