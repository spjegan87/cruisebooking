import React, { useState } from "react";
import { 
  Card, 
  Input, 
  Checkbox, 
  Slider, 
  Divider, 
  Button, 
  Rate,
  Typography,
  Space
} from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

interface CruiseFilterProps {
  onFilter: (filters: any) => void;
  cabinTypes: FilterOption[];
  cruiseLines: FilterOption[];
  amenities: FilterOption[];
  destinations: FilterOption[];
  durations: FilterOption[];
}

const CruiseFilter: React.FC<CruiseFilterProps> = ({
  onFilter,
  cabinTypes,
  cruiseLines,
  amenities,
  destinations,
  durations
}) => {
  const [filters, setFilters] = useState({
    search: "",
    priceRange: [200, 3000],
    cabinTypes: [],
    cruiseLines: [],
    amenities: [],
    destinations: [],
    durations: [],
    rating: 0,
    popular: []
  });
  
  const handleSearch = (value: string) => {
    const updatedFilters = { ...filters, search: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };
  
  const handlePriceChange = (value: [number, number]) => {
    const updatedFilters = { ...filters, priceRange: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };
  
  const handleCheckboxChange = (field: string) => (values: any) => {
    const updatedFilters = { ...filters, [field]: values };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };
  
  const handleRatingChange = (value: number) => {
    const updatedFilters = { ...filters, rating: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };
  
  const handleReset = () => {
    const resetFilters = {
      search: "",
      priceRange: [200, 3000],
      cabinTypes: [],
      cruiseLines: [],
      amenities: [],
      destinations: [],
      durations: [],
      rating: 0,
      popular: []
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <Card className="sticky top-20">
      <div className="flex justify-between items-center mb-4">
        <Title level={5} className="m-0">Filters</Title>
        <Button type="link" onClick={handleReset} className="text-primary">Reset</Button>
      </div>
      
      <div className="border-b pb-4 mb-4">
        <div className="font-medium text-neutral-700 mb-2">Search by Name</div>
        <Input
          placeholder="Search cruise name..."
          prefix={<SearchOutlined className="text-gray-400" />}
          value={filters.search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      
      <div className="border-b pb-4 mb-4">
        <div className="font-medium text-neutral-700 mb-2">Popular</div>
        <Checkbox.Group
          options={[
            { label: 'Best Seller', value: 'best_seller' },
            { label: 'Top Rated', value: 'top_rated' },
            { label: 'Hot Promotions', value: 'promotions' }
          ]}
          value={filters.popular}
          onChange={handleCheckboxChange('popular')}
        />
      </div>
      
      <div className="border-b pb-4 mb-4">
        <div className="font-medium text-neutral-700 mb-2">Price Range</div>
        <div className="flex justify-between text-sm text-neutral-600 mb-2">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
        <Slider
          range
          min={200}
          max={5000}
          value={filters.priceRange}
          onChange={handlePriceChange as any}
          tipFormatter={(value) => `$${value}`}
        />
      </div>
      
      <div className="border-b pb-4 mb-4">
        <div className="font-medium text-neutral-700 mb-2">Cabin Type</div>
        <Checkbox.Group
          options={cabinTypes.map(item => ({ label: item.label, value: item.value }))}
          value={filters.cabinTypes}
          onChange={handleCheckboxChange('cabinTypes')}
        />
      </div>
      
      <div className="border-b pb-4 mb-4">
        <div className="font-medium text-neutral-700 mb-2">Amenities</div>
        <Checkbox.Group
          options={amenities.map(item => ({ label: item.label, value: item.value }))}
          value={filters.amenities}
          onChange={handleCheckboxChange('amenities')}
        />
      </div>
      
      <div className="border-b pb-4 mb-4">
        <div className="font-medium text-neutral-700 mb-2">Rating</div>
        <Space direction="vertical" className="w-full">
          {[5, 4, 3, 2].map(star => (
            <Checkbox
              key={star}
              checked={filters.rating === star}
              onChange={() => handleRatingChange(filters.rating === star ? 0 : star)}
            >
              <Rate disabled defaultValue={star} className="text-sm" />
            </Checkbox>
          ))}
        </Space>
      </div>
      
      <div className="border-b pb-4 mb-4">
        <div className="font-medium text-neutral-700 mb-2">Cruise Line</div>
        <Checkbox.Group
          options={cruiseLines.map(item => ({ label: item.label, value: item.value }))}
          value={filters.cruiseLines}
          onChange={handleCheckboxChange('cruiseLines')}
        />
      </div>
      
      <div className="border-b pb-4 mb-4">
        <div className="font-medium text-neutral-700 mb-2">Duration</div>
        <Checkbox.Group
          options={durations.map(item => ({ label: item.label, value: item.value }))}
          value={filters.durations}
          onChange={handleCheckboxChange('durations')}
        />
      </div>
      
      <div>
        <div className="font-medium text-neutral-700 mb-2">Destination</div>
        <Checkbox.Group
          options={destinations.map(item => ({ label: item.label, value: item.value }))}
          value={filters.destinations}
          onChange={handleCheckboxChange('destinations')}
        />
      </div>
    </Card>
  );
};

export default CruiseFilter;
