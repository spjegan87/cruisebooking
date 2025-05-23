import { useState } from 'react';
import { useLocation } from 'wouter';
import { SearchBar } from '@/components/ui/SearchBar';

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
            <SearchBar 
              destination={searchParams.destination}
              checkIn={searchParams.checkIn}
              checkOut={searchParams.checkOut}
              guests={searchParams.guests}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
