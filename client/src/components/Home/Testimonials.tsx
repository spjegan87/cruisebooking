import { useQuery } from '@tanstack/react-query';
import { Rating } from '@/components/ui/Rating';

const Testimonials = () => {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['/api/testimonials'],
  });

  if (isLoading) {
    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 w-64 mx-auto rounded-md mb-4"></div>
            <div className="h-4 bg-gray-200 w-96 mx-auto rounded-md"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-gray-200 w-24 rounded-md mb-2"></div>
                    <div className="h-3 bg-gray-200 w-32 rounded-md"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded-md mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded-md mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded-md mb-2 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">What Our Users Say</h2>
        <p className="text-center text-gray-600 mb-8">Hear from travelers who booked with us</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials?.map((testimonial: any) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4 overflow-hidden">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user text-gray-600"></i>
                  )}
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <Rating rating={testimonial.rating} reviewCount={0} showCount={false} />
                </div>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
