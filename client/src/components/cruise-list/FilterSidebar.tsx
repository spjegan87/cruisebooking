import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CruiseType } from "@/data/mockData";

interface FilterSidebarProps {
  onFilter: (filters: any) => void;
  cruiseTypes: CruiseType[];
  initialFilters?: any;
}

export default function FilterSidebar({ onFilter, cruiseTypes, initialFilters = {} }: FilterSidebarProps) {
  const [filters, setFilters] = useState({
    searchTerm: initialFilters.searchTerm || "",
    priceRange: initialFilters.priceRange || [200, 3000],
    cabinTypes: initialFilters.cabinTypes || [],
    amenities: initialFilters.amenities || [],
    ratings: initialFilters.ratings || [],
    popular: initialFilters.popular || [],
  });

  const handleChange = (type: string, value: any) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [type]: value };
      onFilter(newFilters);
      return newFilters;
    });
  };

  const handleCheckboxChange = (type: string, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[type] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v: string) => v !== value)
        : [...currentValues, value];
      
      const newFilters = { ...prev, [type]: newValues };
      onFilter(newFilters);
      return newFilters;
    });
  };

  const handleReset = () => {
    const resetFilters = {
      searchTerm: "",
      priceRange: [200, 3000],
      cabinTypes: [],
      amenities: [],
      ratings: [],
      popular: [],
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-md p-4 sticky-sidebar">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-dark">Filters</h3>
        <button 
          className="text-primary text-sm hover:underline"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      
      <div className="border-b border-neutral-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Search by Name</h4>
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for cruise name..."
            value={filters.searchTerm}
            onChange={(e) => handleChange("searchTerm", e.target.value)}
            className="w-full rounded-md border-neutral-300 py-2 pl-10 pr-3 text-neutral-700 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
      
      <div className="border-b border-neutral-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Popular</h4>
        </div>
        <div className="space-y-2">
          {["Best Seller", "Top Rated", "Hot Promotions"].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`popular-${option}`}
                checked={filters.popular.includes(option)}
                onCheckedChange={() => handleCheckboxChange("popular", option)}
              />
              <Label
                htmlFor={`popular-${option}`}
                className="text-sm font-normal cursor-pointer"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-b border-neutral-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Price Range</h4>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-600">${filters.priceRange[0]} - ${filters.priceRange[1]}</span>
          </div>
          <Slider
            defaultValue={filters.priceRange}
            min={200}
            max={3000}
            step={100}
            onValueChange={(value) => handleChange("priceRange", value)}
            className="h-2 bg-neutral-200 rounded-full"
          />
        </div>
      </div>
      
      <div className="border-b border-neutral-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Cabin Type</h4>
        </div>
        <div className="space-y-2">
          {["Suite", "Balcony", "Ocean View", "Interior"].map((cabin) => (
            <div key={cabin} className="flex items-center space-x-2">
              <Checkbox
                id={`cabin-${cabin}`}
                checked={filters.cabinTypes.includes(cabin)}
                onCheckedChange={() => handleCheckboxChange("cabinTypes", cabin)}
              />
              <Label
                htmlFor={`cabin-${cabin}`}
                className="text-sm font-normal cursor-pointer"
              >
                {cabin}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-b border-neutral-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Amenities</h4>
        </div>
        <div className="space-y-2">
          {["Wifi", "Pool", "Spa", "Restaurant", "Bar"].map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={`amenity-${amenity}`}
                checked={filters.amenities.includes(amenity)}
                onCheckedChange={() => handleCheckboxChange("amenities", amenity)}
              />
              <Label
                htmlFor={`amenity-${amenity}`}
                className="text-sm font-normal cursor-pointer"
              >
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-neutral-700">Rating</h4>
        </div>
        <div className="space-y-2">
          {[5, 4, 3, 2].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={filters.ratings.includes(rating)}
                onCheckedChange={() => handleCheckboxChange("ratings", rating)}
              />
              <Label
                htmlFor={`rating-${rating}`}
                className="flex items-center cursor-pointer"
              >
                <span className="ml-2 flex text-yellow-400">
                  {[...Array(rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-sm"></i>
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <i key={i} className="far fa-star text-sm"></i>
                  ))}
                </span>
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
