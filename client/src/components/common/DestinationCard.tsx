import { Link } from 'wouter';

interface DestinationCardProps {
  id: number;
  name: string;
  cruises: number;
  image: string;
}

export default function DestinationCard({ id, name, cruises, image }: DestinationCardProps) {
  return (
    <Link href={`/cruises?destination=${name}`}>
      <div className="rounded-lg overflow-hidden shadow-md group relative h-48 cursor-pointer">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm">{cruises} Cruises</p>
        </div>
      </div>
    </Link>
  );
}
