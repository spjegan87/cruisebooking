import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Rating } from '@/components/ui/Rating';

const FeaturedCruises = () => {
  const { data: cruises, isLoading } = useQuery({
    queryKey: ['/api/cruises/featured'],
  });

  if (isLoading) {
    return (
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 w-64 mx-auto rounded-md mb-4"></div>
            <div className="h-4 bg-gray-200 w-96 mx-auto rounded-md"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded-md mb-3 w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded-md mb-3 w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded-md mb-3 w-full"></div>
                  <div className="h-6 bg-gray-200 rounded-md w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Featured Cruises</h2>
        <p className="text-center text-gray-600 mb-8">Handpicked cruise experiences you'll love</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cruises?.map((cruise: any) => (
            <div key={cruise.id} className="cruise-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="relative">
                <img src={cruise.image} alt={cruise.name} className="w-full h-48 object-cover" />
                {cruise.discount && (
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">{cruise.discount}% OFF</span>
                )}
                <button className="absolute top-4 right-4 bg-white/80 hover:bg-white text-neutral-700 rounded-full p-2">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{cruise.name}</h3>
                    <p className="text-sm text-gray-600">{cruise.company}</p>
                  </div>
                  <Rating rating={cruise.rating} reviewCount={cruise.reviewCount} />
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <i className="fas fa-map-marker-alt text-primary mr-1"></i>
                  <span>{cruise.route}</span>
                </div>
                
                <div className="flex justify-between text-sm mb-3">
                  <div className="flex items-center">
                    <i className="far fa-clock mr-1"></i>
                    <span>{cruise.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-ship mr-1"></i>
                    <span>{cruise.shipName}</span>
                  </div>
                </div>
                
                <div className="border-t pt-3 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Starting from</p>
                    <p className="text-xl font-bold text-primary">${cruise.price}</p>
                  </div>
                  <Link href={`/cruise-details/${cruise.id}`} className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/cruise-list" className="inline-block bg-white border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-md transition font-medium">
            View All Cruises
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCruises;
