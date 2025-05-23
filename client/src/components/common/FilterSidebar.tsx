import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cruiseTypes, cabinTypes, amenities } from '@/lib/mockData';

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState({
    searchTerm: '',
    priceRange: [200, 3000],
    cabinTypes: [] as string[],
    amenities: [] as string[],
    rating: [] as number[],
    popular: [] as string[],
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchTerm: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setFilters({ ...filters, priceRange: [filters.priceRange[0], value] });
  };

  const handleCheckboxChange = (category: string, value: string | number) => {
    const updatedCategory = filters[category as keyof typeof filters] as any[];
    const index = updatedCategory.indexOf(value);
    
    if (index > -1) {
      updatedCategory.splice(index, 1);
    } else {
      updatedCategory.push(value);
    }
    
    setFilters({ ...filters, [category]: updatedCategory });
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  const resetFilters = () => {
    setFilters({
      searchTerm: '',
      priceRange: [200, 3000],
      cabinTypes: [],
      amenities: [],
      rating: [],
      popular: [],
    });
    onFilterChange({});
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 sticky top-20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Filters</h3>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={resetFilters}
          className="text-primary dark:text-primary hover:text-primary/90 dark:hover:text-primary/90"
        >
          Reset
        </Button>
      </div>
      
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">Search by Name</h4>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for cruise name..." 
            className="w-full rounded-md border-gray-300 dark:border-gray-700 py-2 pl-10 pr-3 text-gray-700 dark:text-gray-300 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm dark:bg-gray-900"
            value={filters.searchTerm}
            onChange={handleSearchChange}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">Popular</h4>
        </div>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 dark:border-gray-700 focus:ring-primary"
              checked={filters.popular.includes('Best Seller')}
              onChange={() => handleCheckboxChange('popular', 'Best Seller')}
            />
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">Best Seller</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 dark:border-gray-700 focus:ring-primary"
              checked={filters.popular.includes('Top Rated')}
              onChange={() => handleCheckboxChange('popular', 'Top Rated')}
            />
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">Top Rated</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 dark:border-gray-700 focus:ring-primary"
              checked={filters.popular.includes('Hot Promotions')}
              onChange={() => handleCheckboxChange('popular', 'Hot Promotions')}
            />
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">Hot Promotions</span>
          </label>
        </div>
      </div>
      
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">Price Range</h4>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">${filters.priceRange[0]} - ${filters.priceRange[1]}</span>
          </div>
          <input 
            type="range" 
            min="200" 
            max="5000" 
            value={filters.priceRange[1]} 
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">Cabin Type</h4>
        </div>
        <div className="space-y-2">
          {cabinTypes.map((cabin) => (
            <label key={cabin} className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 dark:border-gray-700 focus:ring-primary"
                checked={filters.cabinTypes.includes(cabin)}
                onChange={() => handleCheckboxChange('cabinTypes', cabin)}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">{cabin}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">Amenities</h4>
        </div>
        <div className="space-y-2">
          {amenities.slice(0, 5).map((amenity) => (
            <label key={amenity} className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 dark:border-gray-700 focus:ring-primary"
                checked={filters.amenities.includes(amenity)}
                onChange={() => handleCheckboxChange('amenities', amenity)}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">{amenity}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">Rating</h4>
        </div>
        <div className="space-y-2">
          {[5, 4, 3, 2].map((star) => (
            <label key={star} className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 dark:border-gray-700 focus:ring-primary"
                checked={filters.rating.includes(star)}
                onChange={() => handleCheckboxChange('rating', star)}
              />
              <span className="ml-2 flex text-yellow-400">
                {Array(star).fill(0).map((_, i) => (
                  <i key={i} className="fas fa-star text-sm"></i>
                ))}
                {star < 5 && Array(5 - star).fill(0).map((_, i) => (
                  <i key={i} className="far fa-star text-sm"></i>
                ))}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Button 
          onClick={applyFilters}
          className="w-full"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
