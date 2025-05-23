import { Link } from "wouter";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cruise } from "@/data/mockData";

interface CruiseCardProps {
  cruise: Cruise;
  featured?: boolean;
}

export default function CruiseCard({ cruise, featured = false }: CruiseCardProps) {
  const {
    id,
    name,
    cruiseLine,
    image,
    price,
    originalPrice,
    rating,
    reviewCount,
    destination,
    departure,
    duration,
    cabinType,
    amenities,
    discount,
  } = cruise;

  return (
    <div className="cruise-card bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {discount && (
          <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
        {featured && !discount && (
          <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
        <button className="absolute top-4 right-4 bg-white/80 hover:bg-white text-neutral-700 rounded-full p-2">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
            {cabinType} Cabin
          </Badge>
          <div className="flex items-center ml-auto">
            <i className="fas fa-star text-yellow-400 text-xs"></i>
            <span className="text-neutral-600 text-sm ml-1">{rating}</span>
            <span className="text-neutral-500 text-xs ml-1">({reviewCount})</span>
          </div>
        </div>
        <h3 className="font-semibold text-lg text-dark mb-1">{name}</h3>
        <p className="text-sm text-neutral-600 mb-3">{cruiseLine} - {destination}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-sm">
              {amenity}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-neutral-500 border-t border-neutral-200 pt-3">
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-primary mr-1"></i>
            <span>{departure}</span>
          </div>
          <div>
            {originalPrice && (
              <span className="line-through text-neutral-400 text-sm mr-2">
                {formatCurrency(originalPrice)}
              </span>
            )}
            <span className="font-medium text-dark text-lg">{formatCurrency(price)}</span>
            <span className="text-xs">/person</span>
          </div>
        </div>
        <div className="mt-4">
          <Link href={`/cruise/${id}`}>
            <Button className="w-full">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
