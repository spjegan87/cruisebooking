import { useState } from "react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Booking {
  id: string;
  image: string;
  title: string;
  date: string;
  time: string;
  status: "confirmed" | "upcoming" | "completed";
}

interface RecentBookingsProps {
  bookings: Booking[];
}

const RecentBookings = ({ bookings }: RecentBookingsProps) => {
  return (
    <Card className="bg-white border border-neutral-200 rounded-md">
      <CardHeader className="flex justify-between items-center pb-0">
        <CardTitle className="font-semibold text-dark">Recent Bookings</CardTitle>
        <div className="relative">
          <Button variant="ghost" size="sm" className="flex items-center text-sm text-neutral-500 hover:text-neutral-700">
            <i className="fas fa-filter mr-1"></i> Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
                <img src={booking.image} alt={booking.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-dark">{booking.title}</h4>
                <div className="flex items-center text-xs text-neutral-500">
                  <span>Date: {formatDate(booking.date)}</span>
                  <span className="mx-2">•</span>
                  <span>Time: {booking.time}</span>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded 
                ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                booking.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-700'}`}
              >
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Button variant="link" className="text-sm text-primary hover:underline">
            Show all bookings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentBookings;
