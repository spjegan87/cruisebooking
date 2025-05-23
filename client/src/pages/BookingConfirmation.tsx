import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import PageHeader from "@/components/ui/PageHeader";
import ConfirmationDetails from "@/components/booking/ConfirmationDetails";
import { bookingConfirmationData } from "@/data/bookingData";
import { IBookingConfirmation } from "@/data/bookingData";

const BookingConfirmation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [booking, setBooking] = useState<IBookingConfirmation | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    // In a real app, this would be an API call to get booking details
    // For now, just use the sample data
    setTimeout(() => {
      setBooking(bookingConfirmationData);
      setLoading(false);
    }, 500);
  }, [id]);
  
  const handlePrint = () => {
    window.print();
  };
  
  const handleDownload = () => {
    // In a real app, this would call an API to generate a PDF
    message.success("Booking confirmation PDF is being generated and will download shortly.");
    setTimeout(() => {
      message.info("Download complete!");
    }, 2000);
  };
  
  const handleEmail = () => {
    // In a real app, this would call an API to send an email
    message.loading("Sending email...", 1.5);
    setTimeout(() => {
      message.success("Confirmation email has been sent to your email address.");
    }, 1500);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }
  
  if (!booking) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Error</p>
          <p>Booking information could not be found.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <PageHeader 
        title="Cruise Booking Confirmation"
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Cruise", link: "/cruises" },
          { title: "Cruise Booking" }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      />
      
      <div className="container mx-auto px-4 py-8">
        <ConfirmationDetails 
          booking={booking}
          onPrint={handlePrint}
          onDownload={handleDownload}
          onEmail={handleEmail}
        />
      </div>
    </div>
  );
};

export default BookingConfirmation;
