import { useQuery } from '@tanstack/react-query';

const Stats = () => {
  const { data: stats } = useQuery({
    queryKey: ['/api/stats'],
  });

  return (
    <div className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">{stats?.yearsExperience || '4+'}+</div>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{stats?.cruiseShips || '665'}+</div>
            <p className="text-gray-300">Cruise Ships</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{stats?.cruiseLines || '9'}+</div>
            <p className="text-gray-300">Cruise Lines</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{stats?.destinations || '8'}+</div>
            <p className="text-gray-300">Destinations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
