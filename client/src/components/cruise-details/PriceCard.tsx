import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Cruise } from "@/data/mockData";

interface PriceCardProps {
  cruise: Cruise;
}

export default function PriceCard({ cruise }: PriceCardProps) {
  const {
    id,
    price,
    originalPrice,
    rating,
    reviewCount,
  } = cruise;

  // Mock booking data
  const bookingDetails = {
    checkIn: "15 Sep 2024 at 10:15 AM",
    checkOut: "21 Sep 2024 at 09:15 AM",
    adults: 2,
    children: 2,
    daysNights: "5 Days, 4 Night",
    subTotal: 8565,
    tax: 85,
    bookingFees: 89,
    discount: 20,
    total: 9569,
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky-sidebar">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-600">Starting from</p>
            <p className="text-3xl font-bold text-primary">{formatCurrency(price)}</p>
            <p className="text-sm text-gray-600">per person</p>
          </div>
          <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-md">
            <div className="flex text-yellow-400 mr-1">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        
        <div className="border-t border-b py-4 mb-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Check In</p>
              <p className="font-medium">{bookingDetails.checkIn}</p>
            </div>
            <div>
              <p className="text-gray-600">Check Out</p>
              <p className="font-medium">{bookingDetails.checkOut}</p>
            </div>
            <div>
              <p className="text-gray-600">Adults</p>
              <p className="font-medium">{bookingDetails.adults}</p>
            </div>
            <div>
              <p className="text-gray-600">Children</p>
              <p className="font-medium">{bookingDetails.children}</p>
            </div>
            <div>
              <p className="text-gray-600">No of Days</p>
              <p className="font-medium">{bookingDetails.daysNights}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-bold mb-3">Payment Info</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sub Total</span>
              <span className="font-medium">${bookingDetails.subTotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax (10%)</span>
              <span className="font-medium">${bookingDetails.tax}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Booking Fees</span>
              <span className="font-medium">${bookingDetails.bookingFees}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount (10%)</span>
              <span>-${bookingDetails.discount}</span>
            </div>
            <div className="flex justify-between font-bold text-base pt-2 border-t">
              <span>Amount to Pay</span>
              <span className="text-primary">${bookingDetails.total}</span>
            </div>
          </div>
        </div>
        
        <Link href={`/booking/${id}`}>
          <Button className="w-full mb-3">
            Book Now
          </Button>
        </Link>
        
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
          Contact Host
        </Button>
      </div>
    </div>
  );
}
