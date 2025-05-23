import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';

interface CruiseCardProps {
  id: number;
  name: string;
  cruiseLine: string;
  location: string;
  image: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  discount?: number;
  featured?: boolean;
  className?: string;
  horizontal?: boolean;
}

export default function CruiseCard({
  id,
  name,
  cruiseLine,
  location,
  image,
  duration,
  rating,
  reviews,
  price,
  discount = 0,
  featured = false,
  className = '',
  horizontal = false,
}: CruiseCardProps) {
  const displayPrice = discount ? price * (1 - discount / 100) : price;
  
  if (horizontal) {
    return (
      <Card className={`overflow-hidden hover:shadow-md transition duration-300 ${className}`}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <img src={image} alt={name} className="w-full h-56 md:h-full object-cover" />
            {featured && (
              <div className="absolute top-2 left-2">
                <Badge variant="featured">Featured</Badge>
              </div>
            )}
            {discount > 0 && (
              <div className="absolute top-2 left-2">
                <Badge variant="sale">{discount}% OFF</Badge>
              </div>
            )}
            <button className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-500 hover:text-primary rounded-full p-2 transition">
              <i className="far fa-heart"></i>
            </button>
          </div>
          <div className="p-4 md:p-6 flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-xl">{name}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <i className="fas fa-map-marker-alt text-primary mr-1"></i>
                  <span>{cruiseLine} - {location}</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-1">
                    {Array(Math.floor(rating)).fill(0).map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                    {rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                  </div>
                  <span className="text-sm text-gray-600">({reviews} Reviews)</span>
                </div>
              </div>
              <div className="text-right">
                {discount > 0 && (
                  <div className="line-through text-gray-400 text-sm">{formatCurrency(price)}</div>
                )}
                <div className="text-xl font-bold text-primary">{formatCurrency(displayPrice)}</div>
                <div className="text-sm text-gray-600">per person</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <i className="far fa-calendar-alt mr-1"></i>
                <span>{duration}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-users mr-1"></i>
                <span>10 Groups</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-ship mr-1"></i>
                <span>{cruiseLine}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-utensils mr-1"></i>
                <span>All Inclusive</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-3 border-t border-gray-200">
              <div className="flex">
                <div className="mr-3 flex items-center text-sm text-gray-600">
                  <i className="far fa-clock mr-1"></i>
                  <span>10 hours, 30 mins</span>
                </div>
              </div>
              <Button asChild>
                <Link href={`/cruise/${id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  
  return (
    <Card className={`cruise-card overflow-hidden ${className}`}>
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {featured && (
          <div className="absolute top-2 left-2">
            <Badge variant="featured">Featured</Badge>
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-2 left-2">
            <Badge variant="sale">{discount}% OFF</Badge>
          </div>
        )}
        <button className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-500 hover:text-primary rounded-full p-2 transition">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center">
            <span className="flex items-center text-yellow-400 mr-1">
              <i className="fas fa-star text-xs"></i>
            </span>
            <span className="font-medium">{rating}</span>
            <span className="text-gray-400 text-xs ml-1">({reviews})</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <i className="fas fa-map-marker-alt mr-1 text-primary"></i>
          <span>{location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
            <i className="fas fa-calendar-alt mr-1 text-gray-400"></i> {duration}
          </span>
          <span className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
            <i className="fas fa-ship mr-1 text-gray-400"></i> {cruiseLine}
          </span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t">
          <div>
            {discount > 0 && (
              <span className="line-through text-gray-400 text-sm mr-1">{formatCurrency(price)}</span>
            )}
            <span className="text-primary font-bold">{formatCurrency(displayPrice)}</span>
            <span className="text-gray-400 text-sm"> / person</span>
          </div>
          <Button asChild size="sm">
            <Link href={`/cruise/${id}`}>Book Now</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
