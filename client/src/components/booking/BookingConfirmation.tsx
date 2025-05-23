import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Download, Mail, Check } from "lucide-react";

export interface BookingConfirmationProps {
  bookingId: string;
  cruiseLine: {
    name: string;
    image: string;
    rating: number;
    reviewCount: number;
    type: string;
    location: string;
  };
  cabin: {
    type: string;
    roomCount: number;
    price: number;
    guests: string;
  };
  booking: {
    from: string;
    to: string;
    days: string;
    departureDate: string;
    checkoutDate: string;
    bookedOn: string;
  };
  services: string[];
  billing: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  order: {
    id: string;
    paymentMethod: string;
    paymentStatus: string;
    paymentDate: string;
    tax: {
      percentage: number;
      amount: number;
    };
    discount: {
      percentage: number;
      amount: number;
    };
    bookingFees: number;
    totalPaid: number;
  };
}

const BookingConfirmation = ({
  bookingId,
  cruiseLine,
  cabin,
  booking,
  services,
  billing,
  order,
}: BookingConfirmationProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-white shadow-sm overflow-hidden mb-8">
        <CardContent className="p-6">
          {/* Cruise Info Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center mb-6 pb-6 border-b">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                {cruiseLine.image ? (
                  <img src={cruiseLine.image} alt={cruiseLine.name} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <span className="text-secondary text-xl">🚢</span>
                )}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{cruiseLine.name}</h2>
                <div className="flex items-center text-sm text-gray-600">
                  <span>{cruiseLine.type}</span>
                  <span className="mx-2">•</span>
                  <span>{cruiseLine.location}</span>
                  <div className="ml-2 flex items-center">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      {cruiseLine.rating}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">({cruiseLine.reviewCount} Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                Upcoming
              </span>
            </div>
          </div>

          {/* Booking Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Cabin Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Cabin Type</p>
                    <p className="font-medium">{cabin.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">No of Rooms</p>
                    <p className="font-medium">{cabin.roomCount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Room Price</p>
                    <p className="font-medium">${cabin.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Guests</p>
                    <p className="font-medium">{cabin.guests}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Booking Info</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">From</p>
                    <p className="font-medium">{booking.from}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">To</p>
                    <p className="font-medium">{booking.to}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">No of Days</p>
                    <p className="font-medium">{booking.days}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Departure Date & Time</p>
                    <p className="font-medium">{booking.departureDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Checkout Date & Time</p>
                    <p className="font-medium">{booking.checkoutDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Booked On</p>
                    <p className="font-medium">{booking.bookedOn}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Extra Service Info</h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Billing Info</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Name</p>
                    <p className="font-medium">{billing.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-medium">{billing.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="font-medium">{billing.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="font-medium">{billing.address}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Order Info</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Order Id</p>
                    <p className="font-medium text-primary">#{order.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Payment Method</p>
                    <p className="font-medium">{order.paymentMethod}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Payment Status</p>
                    <p className="font-medium text-green-600">{order.paymentStatus}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date of Payment</p>
                    <p className="font-medium">{order.paymentDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Tax</p>
                    <p className="font-medium">{order.tax.percentage}% (${order.tax.amount})</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Discount</p>
                    <p className="font-medium">{order.discount.percentage}% (${order.discount.amount})</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Booking Fees</p>
                    <p className="font-medium">${order.bookingFees}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Paid</p>
                    <p className="font-medium text-primary">${order.totalPaid}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Printer className="h-4 w-4" />
                  <span>Print</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/cruises">
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
            Browse More Cruises
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-medium">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;
