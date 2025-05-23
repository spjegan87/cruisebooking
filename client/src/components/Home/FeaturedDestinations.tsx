import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';

const FeaturedDestinations = () => {
  const { data: destinations, isLoading } = useQuery({
    queryKey: ['/api/destinations/featured'],
  });

  if (isLoading) {
    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 w-64 mx-auto rounded-md mb-4"></div>
            <div className="h-4 bg-gray-200 w-96 mx-auto rounded-md"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse h-48 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Popular Destinations</h2>
        <p className="text-center text-gray-600 mb-8">Discover our most sought-after cruise destinations</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations?.map((destination: any) => (
            <Link href={`/cruise-list?destination=${destination.name}`} key={destination.id}>
              <div className="relative rounded-lg overflow-hidden shadow-md group h-48 cursor-pointer">
                <img src={destination.image} alt={destination.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{destination.name}</h3>
                  <p className="text-sm">{destination.cruiseCount} Cruises</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestinations;
