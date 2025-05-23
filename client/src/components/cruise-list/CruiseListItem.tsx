import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Cruise } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

interface CruiseListItemProps {
  cruise: Cruise;
}

export default function CruiseListItem({ cruise }: CruiseListItemProps) {
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
    arrival,
    duration,
    description,
    cabinType,
    amenities,
    featured,
    discount,
  } = cruise;

  const displayRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star text-xs"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt text-xs"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-xs"></i>);
    }
    
    return stars;
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-md overflow-hidden hover:shadow-md transition duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-56 md:h-full object-cover"
          />
          {featured && (
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">Featured</span>
          )}
          {discount && (
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">{discount}% OFF</span>
          )}
          <button className="absolute top-4 right-4 bg-white/80 hover:bg-white text-neutral-700 rounded-full p-2">
            <i className="far fa-heart"></i>
          </button>
        </div>
        <div className="p-4 md:p-6 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
              {cabinType}
            </Badge>
            <div className="flex items-center text-yellow-400">
              {displayRating(rating)}
              <span className="text-neutral-600 text-xs ml-1">({reviewCount})</span>
            </div>
          </div>
          <h3 className="font-semibold text-lg text-dark mb-1">{name}</h3>
          <div className="flex items-center text-sm text-neutral-500 mb-3">
            <i className="fas fa-map-marker-alt text-primary mr-1"></i>
            <span>{cruiseLine} - {departure} to {arrival}</span>
            <span className="mx-2">•</span>
            <span>{duration.days} Nights, {duration.days + 1} Days</span>
          </div>
          <p className="text-sm text-neutral-600 mb-4">{description}</p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center">
                <i className={`fas fa-${amenity.toLowerCase().includes('wifi') ? 'wifi' : amenity.toLowerCase().includes('spa') ? 'spa' : amenity.toLowerCase().includes('pool') ? 'swimming-pool' : amenity.toLowerCase().includes('dining') ? 'utensils' : 'check'} mr-1`}></i>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-between items-center mt-auto pt-3 border-t border-neutral-200">
            <div>
              {originalPrice && (
                <span className="line-through text-neutral-400 text-sm mr-2">${originalPrice}</span>
              )}
              <span className="font-semibold text-dark text-lg">{formatCurrency(price)}</span>
              <span className="text-neutral-500 text-sm">/person</span>
            </div>
            <Link href={`/cruise/${id}`}>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
