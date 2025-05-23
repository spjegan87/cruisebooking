import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookingId: string;
  cruiseName: string;
  redirectUrl: string;
}

const SuccessModal = ({
  open,
  onOpenChange,
  bookingId,
  cruiseName,
  redirectUrl,
}: SuccessModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-2">Payment Successful</DialogTitle>
            <DialogDescription className="text-gray-600 text-base">
              Booking on <span className="font-medium">"{cruiseName}"</span> has been successful with Reference Number{" "}
              <span className="text-primary font-medium">#{bookingId}</span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6 sm:justify-center">
            <Link href={redirectUrl}>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                View Booking Details
              </Button>
            </Link>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
