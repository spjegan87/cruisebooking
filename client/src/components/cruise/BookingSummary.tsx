import { formatCurrency } from "@/lib/utils";

interface BookingSummaryProps {
  cruise: {
    id: string;
    title: string;
    cruiseLine: string;
    image: string;
    location: string;
    rating: number;
    reviews: number;
    price: number;
  };
  bookingDetails: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    days: number;
    nights: number;
  };
  pricing: {
    subtotal: number;
    tax: number;
    bookingFees: number;
    discount?: number;
    total: number;
  };
}

const BookingSummary = ({ cruise, bookingDetails, pricing }: BookingSummaryProps) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-md p-6 sticky top-20">
      <h2 className="font-poppins font-semibold text-xl text-dark mb-4">Review Order Details</h2>
      
      <div className="mb-6">
        <img 
          src={cruise.image} 
          alt={`${cruise.title}`} 
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-dark">{cruise.title}</h3>
            <div className="flex items-center text-xs text-yellow-400 mt-1">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <span className="text-neutral-600 ml-1">({cruise.reviews} Reviews)</span>
            </div>
          </div>
          <div className="text-primary font-semibold">{formatCurrency(cruise.price)}</div>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Check In</span>
          <span className="font-medium text-dark">{bookingDetails.checkIn}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Check Out</span>
          <span className="font-medium text-dark">{bookingDetails.checkOut}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Adults</span>
          <span className="font-medium text-dark">{bookingDetails.adults}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Children</span>
          <span className="font-medium text-dark">{bookingDetails.children}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">No of Days</span>
          <span className="font-medium text-dark">{bookingDetails.days} Days, {bookingDetails.nights} Night</span>
        </div>
      </div>
      
      <div className="border-t border-neutral-200 pt-4 mb-6">
        <h3 className="font-medium text-dark mb-3">Payment Info</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Sub Total</span>
            <span className="font-medium text-dark">{formatCurrency(pricing.subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Tax (10%)</span>
            <span className="font-medium text-dark">{formatCurrency(pricing.tax)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Booking Fees</span>
            <span className="font-medium text-dark">{formatCurrency(pricing.bookingFees)}</span>
          </div>
          {pricing.discount && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Discount (10%)</span>
              <span className="font-medium text-green-600">-{formatCurrency(pricing.discount)}</span>
            </div>
          )}
          <div className="flex items-center justify-between text-medium pt-3 border-t border-neutral-200">
            <span className="font-semibold text-dark">Amount to Pay</span>
            <span className="font-semibold text-primary">{formatCurrency(pricing.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
