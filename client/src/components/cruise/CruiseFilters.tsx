import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CruiseFiltersProps {
  onFilterChange: (filters: any) => void;
}

const CruiseFilters = ({ onFilterChange }: CruiseFiltersProps) => {
  const [priceRange, setPriceRange] = useState([200, 3000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    popular: {
      bestSeller: true,
      topRated: false,
      hotPromotions: false
    },
    cabinType: {
      suite: true,
      balcony: false,
      oceanView: false,
      interior: false
    },
    amenities: {
      wifi: true,
      pool: true,
      spa: false,
      restaurant: false,
      bar: false
    },
    rating: {
      five: true,
      four: false,
      three: false,
      two: false
    }
  });

  const handlePriceChange = (value: any) => {
    setPriceRange(value);
    onFilterChange({ ...filters, priceRange: value });
  };

  const handleCheckboxChange = (category: string, item: string, checked: boolean) => {
    const newFilters = {
      ...filters,
      [category]: {
        ...filters[category as keyof typeof filters],
        [item]: checked
      }
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearch = () => {
    onFilterChange({ ...filters, searchTerm });
  };

  const handleReset = () => {
    setPriceRange([200, 3000]);
    setSearchTerm("");
    const resetFilters = {
      popular: {
        bestSeller: false,
        topRated: false,
        hotPromotions: false
      },
      cabinType: {
        suite: false,
        balcony: false,
        oceanView: false,
        interior: false
      },
      amenities: {
        wifi: false,
        pool: false,
        spa: false,
        restaurant: false,
        bar: false
      },
      rating: {
        five: false,
        four: false,
        three: false,
        two: false
      }
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-md p-4 sticky top-20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-poppins font-semibold text-lg text-dark">Filters</h3>
        <Button variant="ghost" size="sm" onClick={handleReset} className="text-primary text-sm">
          Reset
        </Button>
      </div>
      
      <div className="border-b border-neutral-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Search by Name</h4>
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for cruise name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pl-10 pr-3"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            <i className="fas fa-search"></i>
          </div>
          <Button 
            size="sm" 
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
            onClick={handleSearch}
          >
            Go
          </Button>
        </div>
      </div>
      
      <div className="border-b border-neutral-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Popular</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="best-seller" 
              checked={filters.popular.bestSeller}
              onCheckedChange={(checked) => 
                handleCheckboxChange("popular", "bestSeller", checked as boolean)
              }
            />
            <Label htmlFor="best-seller" className="text-sm text-neutral-600">Best Seller</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="top-rated" 
              checked={filters.popular.topRated}
              onCheckedChange={(checked) => 
                handleCheckboxChange("popular", "topRated", checked as boolean)
              }
            />
            <Label htmlFor="top-rated" className="text-sm text-neutral-600">Top Rated</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="hot-promotions" 
              checked={filters.popular.hotPromotions}
              onCheckedChange={(checked) => 
                handleCheckboxChange("popular", "hotPromotions", checked as boolean)
              }
            />
            <Label htmlFor="hot-promotions" className="text-sm text-neutral-600">Hot Promotions</Label>
          </div>
        </div>
      </div>
      
      <div className="border-b border-neutral-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Price Range</h4>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-600">${priceRange[0]} - ${priceRange[1]}</span>
          </div>
          <Slider
            defaultValue={priceRange}
            min={200}
            max={3000}
            step={100}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="mt-2"
          />
        </div>
      </div>
      
      <div className="border-b border-neutral-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Cabin Type</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="suite" 
              checked={filters.cabinType.suite}
              onCheckedChange={(checked) => 
                handleCheckboxChange("cabinType", "suite", checked as boolean)
              }
            />
            <Label htmlFor="suite" className="text-sm text-neutral-600">Suite</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="balcony" 
              checked={filters.cabinType.balcony}
              onCheckedChange={(checked) => 
                handleCheckboxChange("cabinType", "balcony", checked as boolean)
              }
            />
            <Label htmlFor="balcony" className="text-sm text-neutral-600">Balcony</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="ocean-view" 
              checked={filters.cabinType.oceanView}
              onCheckedChange={(checked) => 
                handleCheckboxChange("cabinType", "oceanView", checked as boolean)
              }
            />
            <Label htmlFor="ocean-view" className="text-sm text-neutral-600">Ocean View</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="interior" 
              checked={filters.cabinType.interior}
              onCheckedChange={(checked) => 
                handleCheckboxChange("cabinType", "interior", checked as boolean)
              }
            />
            <Label htmlFor="interior" className="text-sm text-neutral-600">Interior</Label>
          </div>
        </div>
      </div>
      
      <div className="border-b border-neutral-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Amenities</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="wifi" 
              checked={filters.amenities.wifi}
              onCheckedChange={(checked) => 
                handleCheckboxChange("amenities", "wifi", checked as boolean)
              }
            />
            <Label htmlFor="wifi" className="text-sm text-neutral-600">Wifi</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="pool" 
              checked={filters.amenities.pool}
              onCheckedChange={(checked) => 
                handleCheckboxChange("amenities", "pool", checked as boolean)
              }
            />
            <Label htmlFor="pool" className="text-sm text-neutral-600">Pool</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="spa" 
              checked={filters.amenities.spa}
              onCheckedChange={(checked) => 
                handleCheckboxChange("amenities", "spa", checked as boolean)
              }
            />
            <Label htmlFor="spa" className="text-sm text-neutral-600">Spa</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="restaurant" 
              checked={filters.amenities.restaurant}
              onCheckedChange={(checked) => 
                handleCheckboxChange("amenities", "restaurant", checked as boolean)
              }
            />
            <Label htmlFor="restaurant" className="text-sm text-neutral-600">Restaurant</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="bar" 
              checked={filters.amenities.bar}
              onCheckedChange={(checked) => 
                handleCheckboxChange("amenities", "bar", checked as boolean)
              }
            />
            <Label htmlFor="bar" className="text-sm text-neutral-600">Bar</Label>
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Rating</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="five-star" 
              checked={filters.rating.five}
              onCheckedChange={(checked) => 
                handleCheckboxChange("rating", "five", checked as boolean)
              }
            />
            <Label htmlFor="five-star" className="ml-2 flex text-yellow-400">
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="four-star" 
              checked={filters.rating.four}
              onCheckedChange={(checked) => 
                handleCheckboxChange("rating", "four", checked as boolean)
              }
            />
            <Label htmlFor="four-star" className="ml-2 flex text-yellow-400">
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="far fa-star text-sm"></i>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="three-star" 
              checked={filters.rating.three}
              onCheckedChange={(checked) => 
                handleCheckboxChange("rating", "three", checked as boolean)
              }
            />
            <Label htmlFor="three-star" className="ml-2 flex text-yellow-400">
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="far fa-star text-sm"></i>
              <i className="far fa-star text-sm"></i>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="two-star" 
              checked={filters.rating.two}
              onCheckedChange={(checked) => 
                handleCheckboxChange("rating", "two", checked as boolean)
              }
            />
            <Label htmlFor="two-star" className="ml-2 flex text-yellow-400">
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="far fa-star text-sm"></i>
              <i className="far fa-star text-sm"></i>
              <i className="far fa-star text-sm"></i>
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CruiseFilters;
