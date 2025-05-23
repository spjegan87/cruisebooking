import { useQuery } from '@tanstack/react-query';

const CruiseTypes = () => {
  const { data: cruiseTypes, isLoading } = useQuery({
    queryKey: ['/api/cruise-types'],
  });

  if (isLoading) {
    return (
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 w-64 mx-auto rounded-md mb-4"></div>
            <div className="h-4 bg-gray-200 w-96 mx-auto rounded-md"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col items-center">
                <div className="rounded-full bg-gray-200 w-20 h-20 mb-4"></div>
                <div className="h-4 bg-gray-200 w-20 rounded-md"></div>
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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Explore Our Cruise Types</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cruiseTypes?.map((type: any) => (
            <div key={type.id} className="text-center group">
              <div className={`rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center ${type.bgColor} group-hover:${type.hoverBgColor} transition`}>
                <i className={`${type.icon} ${type.iconColor} text-2xl`}></i>
              </div>
              <h3 className="font-medium">{type.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CruiseTypes;
