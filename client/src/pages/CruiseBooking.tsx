import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Steps, message } from "antd";
import {
  UserOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import PageHeader from "@/components/ui/PageHeader";
import BookingForm from "@/components/booking/BookingForm";
import PaymentForm from "@/components/booking/PaymentForm";
import { cruiseData } from "@/data/cruiseData";
import { ICruise } from "@/data/cruiseData";

const { Step } = Steps;

const CruiseBooking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cruise, setCruise] = useState<ICruise | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
  } | null>(null);

  useEffect(() => {
    setLoading(true);
    // In a real app, this would be an API call
    const foundCruise = cruiseData.find((cruise) => cruise.id === id);

    if (foundCruise) {
      setCruise(foundCruise);

      // Calculate initial price
      const basePrice = foundCruise.discountPercentage
        ? foundCruise.price -
          foundCruise.price * (foundCruise.discountPercentage / 100)
        : foundCruise.price;

      const total = basePrice * 2 + basePrice * 0.1 + 200; // 2 adults + taxes + port fees
      setTotalPrice(total);
    }

    setLoading(false);
  }, [id]);

  const handleCouponApply = async (
    code: string,
  ): Promise<{ success: boolean; message: string; discount: number }> => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (code.toLowerCase() === "dreams20") {
          const discount = 20; // $20 discount
          setAppliedCoupon({ code, discount });
          setTotalPrice((prev) => prev - discount);
          resolve({
            success: true,
            message: `Coupon Code ${code} ($${discount}) has been applied successfully.`,
            discount,
          });
        } else {
          resolve({
            success: false,
            message: "Invalid coupon code. Please try again.",
            discount: 0,
          });
        }
      }, 500);
    });
  };

  const handleBookingSubmit = (values: any) => {
    setBookingDetails(values);
    setCurrentStep(1);
  };

  const handlePaymentComplete = (paymentId: string) => {
    message.success(
      `Payment successful! Your booking reference is: ${paymentId}`,
    );
    // In a real app, you'd redirect to a confirmation page with the booking reference
    navigate(`/confirmation/${paymentId}`);
  };

  if (loading || !cruise) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="text-white">
      <PageHeader
        title="Cruise Booking"
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Cruise", link: "/cruises" },
          { title: "Cruise Booking" },
        ]}
        backgroundImage={cruise.image}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Steps current={currentStep}>
            <Step title="Personal Details" icon={<UserOutlined />} />
            <Step title="Payment" icon={<CreditCardOutlined />} />
            <Step title="Confirmation" icon={<CheckCircleOutlined />} />
          </Steps>
        </div>

        <Row gutter={24}>
          {/* Left Section - Form */}
          <Col xs={24} lg={16}>
            {currentStep === 0 && (
              <BookingForm cruiseId={id} onCouponApply={handleCouponApply} />
            )}

            {currentStep === 1 && bookingDetails && (
              <PaymentForm
                cruiseId={id}
                bookingDetails={bookingDetails}
                totalAmount={totalPrice}
                onPaymentComplete={handlePaymentComplete}
              />
            )}
          </Col>

          {/* Right Section - Booking Summary */}
          <Col xs={24} lg={8}>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Review Order Details</h2>

              <div className="mb-6">
                <img
                  src={cruise.image}
                  alt={cruise.name}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />

                <div className="mb-3">
                  <h3 className="font-bold text-lg">
                    {cruise.name} - {cruise.cabinType}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <div className="flex text-yellow-400 mr-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star${i >= Math.floor(cruise.rating) ? (i === Math.floor(cruise.rating) && cruise.rating % 1 > 0 ? "-half-alt" : "-o") : ""}`}
                          ></i>
                        ))}
                    </div>
                    <span>({cruise.reviewCount} Reviews)</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm border-b pb-4 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check In</span>
                    <span className="font-medium">
                      {cruise.departureDate || "May 15, 2024 at 10:15 AM"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check Out</span>
                    <span className="font-medium">
                      {cruise.returnDate || "May 22, 2024 at 09:15 AM"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Adults</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Children</span>
                    <span className="font-medium">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{cruise.duration}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm border-b pb-4 mb-4">
                <h3 className="font-bold mb-2">Payment Info</h3>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cruise Fare (2 Adults)</span>
                  <span className="font-medium">${cruise.price * 2}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="font-medium">
                    ${(cruise.price * 2 * 0.1).toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Port Fees</span>
                  <span className="font-medium">$200</span>
                </div>
                {cruise.discountPercentage && (
                  <div className="flex justify-between text-green-600">
                    <span>Cruise Discount ({cruise.discountPercentage}%)</span>
                    <span>
                      -$
                      {(
                        cruise.price *
                        2 *
                        (cruise.discountPercentage / 100)
                      ).toFixed(0)}
                    </span>
                  </div>
                )}
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Coupon Discount</span>
                    <span>-${appliedCoupon.discount}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-base pt-2 border-t">
                  <span>Amount to Pay</span>
                  <span className="text-primary">${totalPrice.toFixed(0)}</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CruiseBooking;
