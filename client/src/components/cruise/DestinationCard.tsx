import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface Destination {
  id: string;
  name: string;
  image: string;
  cruiseCount: number;
  slug: string;
}

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  className,
}) => {
  const { id, name, image, cruiseCount, slug } = destination;

  return (
    <Link to={`/cruises?destination=${slug}`}>
      <div 
        className={cn(
          "rounded-lg overflow-hidden shadow-md group relative h-48",
          className
        )}
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="font-poppins font-semibold text-lg">{name}</h3>
          <p className="text-sm text-white/80">{cruiseCount} Cruises</p>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
