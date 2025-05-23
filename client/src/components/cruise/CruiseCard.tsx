import React from "react";
import { Link } from "react-router-dom";
import { Card, Tag, Rate, Button, Tooltip } from "antd";
import { 
  FiHeart, 
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiShoppingBag,
  FiWifi,
  FiCoffee,
  FiClock
} from "react-icons/fi";
import { formatPrice } from "@/lib/utils";
import { ICruise } from "@/data/cruiseData";

interface CruiseCardProps {
  cruise: ICruise;
  layout?: "grid" | "list";
  onFavoriteToggle?: (id: string, isFavorite: boolean) => void;
}

const CruiseCard: React.FC<CruiseCardProps> = ({ 
  cruise, 
  layout = "grid", 
  onFavoriteToggle 
}) => {
  const {
    id,
    name,
    image,
    price,
    location,
    rating,
    reviewCount,
    discountPercentage,
    cruiseLine,
    duration,
    departurePort,
    isFavorite,
    cabinType,
    amenities,
    featured,
  } = cruise;

  const isListView = layout === "list";
  const discountedPrice = discountPercentage
    ? price - (price * (discountPercentage / 100))
    : price;

  const renderAmenities = () => {
    if (!isListView) return null;
    
    return (
      <div className="flex flex-wrap gap-3 text-xs text-neutral-500 mb-4">
        {amenities.map((amenity, index) => {
          let icon;
          switch (amenity.toLowerCase()) {
            case "wifi":
              icon = <FiWifi />;
              break;
            case "pool":
              icon = <i className="fas fa-swimming-pool mr-1"></i>;
              break;
            case "restaurant":
              icon = <FiCoffee />;
              break;
            case "gym":
              icon = <i className="fas fa-dumbbell mr-1"></i>;
              break;
            default:
              icon = <FiShoppingBag />;
          }
          
          return (
            <div key={index} className="flex items-center">
              {icon}
              <span className="ml-1">{amenity}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderFavoriteButton = () => (
    <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
      <Button
        type="text"
        shape="circle"
        className="absolute top-2 right-2 bg-white/80 hover:bg-white shadow-sm"
        icon={isFavorite ? <FiHeart className="text-primary fill-current" /> : <FiHeart />}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onFavoriteToggle && onFavoriteToggle(id, !isFavorite);
        }}
      />
    </Tooltip>
  );

  if (isListView) {
    return (
      <Card hoverable className="cruise-card overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <img src={image} alt={name} className="w-full h-56 md:h-full object-cover" />
            {discountPercentage > 0 && (
              <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                {discountPercentage}% OFF
              </span>
            )}
            {featured && (
              <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Featured
              </span>
            )}
            {renderFavoriteButton()}
          </div>
          <div className="p-4 md:p-6 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Tag color="blue">{cabinType}</Tag>
              <div className="flex items-center ml-auto">
                <Rate disabled defaultValue={rating} size="small" className="text-yellow-400" />
                <span className="text-neutral-600 text-xs ml-1">({reviewCount})</span>
              </div>
            </div>
            <h3 className="font-poppins font-semibold text-lg text-dark mb-1">{name}</h3>
            <div className="flex items-center text-sm text-neutral-500 mb-3">
              <FiMapPin className="text-primary mr-1" />
              <span>{location}</span>
              <span className="mx-2">•</span>
              <span>{duration}</span>
            </div>
            <p className="text-sm text-neutral-600 mb-4">{cruise.description}</p>
            {renderAmenities()}
            <div className="flex flex-wrap justify-between items-center mt-auto pt-3 border-t border-neutral-200">
              <div>
                {discountPercentage > 0 && (
                  <span className="line-through text-neutral-400 text-sm mr-2">
                    {formatPrice(price)}
                  </span>
                )}
                <span className="font-poppins font-semibold text-dark text-lg">
                  {formatPrice(discountedPrice)}
                </span>
                <span className="text-neutral-500 text-sm">/person</span>
              </div>
              <Link to={`/cruises/${id}`}>
                <Button type="primary">View Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Link to={`/cruises/${id}`}>
      <Card hoverable className="cruise-card h-full">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          {discountPercentage > 0 && (
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
              {discountPercentage}% OFF
            </span>
          )}
          {featured && (
            <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
              Featured
            </span>
          )}
          {renderFavoriteButton()}
        </div>
        <div className="p-4">
          <div className="flex items-center mb-2">
            <Tag color="blue">{cabinType}</Tag>
            <div className="flex items-center ml-auto">
              <Rate disabled defaultValue={rating} size="small" className="text-yellow-400" />
              <span className="text-neutral-600 text-xs ml-1">({reviewCount})</span>
            </div>
          </div>
          <h3 className="font-poppins font-semibold text-lg text-dark mb-1">{name}</h3>
          <p className="text-sm text-neutral-500 mb-3">
            <FiMapPin className="text-primary mr-1" />
            {location}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gray-100 text-xs px-2 py-1 rounded-sm flex items-center">
              <FiCalendar className="mr-1 text-gray-400" /> {duration}
            </span>
            <span className="bg-gray-100 text-xs px-2 py-1 rounded-sm flex items-center">
              <FiUsers className="mr-1 text-gray-400" /> {cruiseLine}
            </span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-neutral-200">
            <div>
              {discountPercentage > 0 && (
                <span className="line-through text-neutral-400 text-sm mr-2">
                  {formatPrice(price)}
                </span>
              )}
              <span className="font-poppins font-semibold text-dark text-lg">
                {formatPrice(discountedPrice)}
              </span>
              <span className="text-neutral-500 text-sm">/person</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CruiseCard;
