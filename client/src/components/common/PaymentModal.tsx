import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
}

export default function PaymentModal({ isOpen, onClose, bookingId }: PaymentModalProps) {
  const [, setLocation] = useLocation();

  if (!isOpen) return null;

  const handleViewDetails = () => {
    setLocation(`/confirmation/${bookingId}`);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" 
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-2xl text-green-600 dark:text-green-400"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Payment Successful</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Booking on <span className="font-medium">"Coral Cruiser - Balcony"</span> has been successful with Reference Number <span className="text-primary font-medium">{bookingId}</span>
          </p>
          <Button 
            onClick={handleViewDetails}
            className="w-full sm:w-auto"
          >
            View Booking Details
          </Button>
        </div>
      </div>
    </div>
  );
}
