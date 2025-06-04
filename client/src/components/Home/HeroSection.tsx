import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const HeroSection = () => {
  const [_, navigate] = useLocation();
  
  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Adults'
  });

  const handleSearch = (params: any) => {
    // Update search parameters
    setSearchParams(params);
    
    // Navigate to cruise list page with search parameters
    navigate(`/cruise-list?destination=${params.destination}&checkIn=${params.checkIn}&checkOut=${params.checkOut}&guests=${params.guests}`);
  };

  return (
    <div className="relative">
      <div className="h-[500px] bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-dark/70"></div>
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover the World's Most Breathtaking Cruises</h1>
          <p className="text-xl mb-8 max-w-2xl">Unforgettable voyages to exotic destinations with premium amenities and exceptional service</p>
          
          {/* Search Form */}
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <Select value={searchParams.destination} onValueChange={(value) => setSearchParams({...searchParams, destination: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="caribbean">Caribbean</SelectItem>
                    <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    <SelectItem value="alaska">Alaska</SelectItem>
                    <SelectItem value="hawaii">Hawaii</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                <Input 
                  type="date" 
                  value={searchParams.checkIn}
                  onChange={(e) => setSearchParams({...searchParams, checkIn: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                <Input 
                  type="date" 
                  value={searchParams.checkOut}
                  onChange={(e) => setSearchParams({...searchParams, checkOut: e.target.value})}
                />
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={() => handleSearch(searchParams)}
                  className="w-full"
                >
                  Search Cruises
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
