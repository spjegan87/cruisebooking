import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface PaymentSuccessModalProps {
  onClose: () => void;
  bookingId?: string;
}

export function PaymentSuccessModal({ onClose, bookingId = '12559845' }: PaymentSuccessModalProps) {
  // Handle ESC key and backdrop click to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Auto close after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-dark/50 z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 mx-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-2xl text-success"></i>
          </div>
          <h2 className="text-2xl font-bold text-dark mb-2">Payment Successful</h2>
          <p className="text-neutral-600 mb-6">
            Booking on <span className="font-medium">"Coral Cruiser - Balcony"</span> has been successful with Reference Number <span className="text-primary font-medium">#{bookingId}</span>
          </p>
          <Link href={`/confirmation/${bookingId}`}>
            <Button className="w-full sm:w-auto">
              View Booking Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
