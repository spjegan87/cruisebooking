import { Link } from "wouter";

interface Destination {
  id: string;
  name: string;
  image: string;
  cruiseCount: number;
}

const PopularDestinations = () => {
  const destinations: Destination[] = [
    {
      id: "caribbean",
      name: "Caribbean",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cruiseCount: 42
    },
    {
      id: "mediterranean",
      name: "Mediterranean",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cruiseCount: 38
    },
    {
      id: "alaska",
      name: "Alaska",
      image: "https://images.unsplash.com/photo-1531176175280-541fa342e0a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cruiseCount: 24
    },
    {
      id: "greek-islands",
      name: "Greek Islands",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cruiseCount: 29
    }
  ];

  return (
    <div className="py-12 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-poppins font-bold text-dark">Popular Destinations</h2>
            <p className="text-neutral-500 mt-2">Discover our top-rated cruise destinations</p>
          </div>
          <Link href="/cruises">
            <a className="text-primary font-medium hover:underline">View All</a>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link key={destination.id} href={`/cruises?destination=${destination.id}`}>
              <a className="rounded-lg overflow-hidden shadow-md group relative">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-poppins font-semibold text-lg">{destination.name}</h3>
                  <p className="text-sm text-white/80">{destination.cruiseCount} Cruises</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
