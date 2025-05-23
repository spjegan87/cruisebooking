import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BookingConfirmationProps {
  bookingDetails: {
    id: string;
    cruiseInfo: {
      name: string;
      cruiseLine: string;
      image?: string;
      address: string;
      rating: number;
      reviews: number;
    };
    cabinDetails: {
      type: string;
      rooms: number;
      price: number;
      adults: number;
      children: number;
    };
    trip: {
      from: string;
      to: string;
      days: number;
      nights: number;
      departureDate: string;
      departureTime: string;
      checkoutDate: string;
      checkoutTime: string;
      bookedOn: string;
    };
    extraServices: string[];
    billing: {
      name: string;
      email: string;
      phone: string;
      address: string;
    };
    order: {
      orderId: string;
      paymentMethod: string;
      paymentStatus: string;
      paymentDate: string;
      tax: string;
      discount: string;
      bookingFees: number;
      totalPaid: number;
    };
  };
}

const BookingConfirmation = ({ bookingDetails }: BookingConfirmationProps) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-md overflow-hidden mb-6">
      <div className="flex flex-col md:flex-row">
        {/* Cruise Line Logo and Info */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-neutral-200 md:w-1/3">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              {bookingDetails.cruiseInfo.image ? (
                <img 
                  src={bookingDetails.cruiseInfo.image} 
                  alt={bookingDetails.cruiseInfo.cruiseLine} 
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <i className="fas fa-ship text-blue-500 text-xl"></i>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-dark">{bookingDetails.cruiseInfo.cruiseLine}</h3>
              <p className="text-sm text-neutral-500">Luxury Cruise</p>
              <div className="flex items-center mt-1">
                <span className="text-sm bg-yellow-400 text-dark font-medium px-1 rounded">{bookingDetails.cruiseInfo.rating}</span>
                <span className="text-xs text-neutral-500 ml-1">({bookingDetails.cruiseInfo.reviews} Reviews)</span>
              </div>
              <p className="text-xs text-neutral-500 mt-1">{bookingDetails.cruiseInfo.address}</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Upcoming</span>
          </div>
        </div>
        
        {/* Cabin Details */}
        <div className="p-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <h4 className="text-xs font-semibold uppercase text-neutral-500 mb-1">Cabin Details</h4>
              <div className="space-y-1">
                <p className="text-sm text-neutral-700"><span className="font-medium">Cabin Type:</span> {bookingDetails.cabinDetails.type}</p>
                <p className="text-sm text-neutral-700"><span className="font-medium">No of Rooms:</span> {bookingDetails.cabinDetails.rooms}</p>
                <p className="text-sm text-neutral-700"><span className="font-medium">Room Price:</span> {formatCurrency(bookingDetails.cabinDetails.price)}</p>
                <p className="text-sm text-neutral-700"><span className="font-medium">Guests:</span> {bookingDetails.cabinDetails.adults} Adults, {bookingDetails.cabinDetails.children} Child</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-semibold uppercase text-neutral-500 mb-1">Booking Info</h4>
              <div className="space-y-1">
                <p className="text-sm text-neutral-700"><span className="font-medium">From:</span> {bookingDetails.trip.from}</p>
                <p className="text-sm text-neutral-700"><span className="font-medium">To:</span> {bookingDetails.trip.to}</p>
                <p className="text-sm text-neutral-700"><span className="font-medium">No of Days:</span> {bookingDetails.trip.days} Days, {bookingDetails.trip.nights} Nights</p>
                <p className="text-sm text-neutral-700"><span className="font-medium">Departure Date & Time:</span> {bookingDetails.trip.departureDate}, {bookingDetails.trip.departureTime}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-semibold uppercase text-neutral-500 mb-1">Extra Service Info</h4>
              <div className="flex flex-wrap gap-2">
                {bookingDetails.extraServices.map((service, index) => (
                  <span key={index} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded">{service}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-semibold uppercase text-neutral-500 mb-1">Booking Date</h4>
              <div className="space-y-1">
                <p className="text-sm text-neutral-700"><span className="font-medium">Booked On:</span> {bookingDetails.trip.bookedOn}</p>
                <p className="text-sm text-neutral-700"><span className="font-medium">Checkout Date & Time:</span> {bookingDetails.trip.checkoutDate}, {bookingDetails.trip.checkoutTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
