import React, { useState } from "react";
import { Form, Input, Radio, Button, Row, Col, Card, Divider, message } from "antd";
import { 
  CreditCardOutlined, 
  SecurityScanOutlined, 
  UserOutlined,
  CalendarOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PaymentSuccessModal from "@/components/ui/PaymentSuccessModal";

interface PaymentFormProps {
  cruiseId: string;
  bookingDetails: any;
  totalAmount: number;
  onPaymentComplete?: (paymentId: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ 
  cruiseId, 
  bookingDetails, 
  totalAmount,
  onPaymentComplete
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingReference, setBookingReference] = useState("");

  const onFinish = async (values: any) => {
    setLoading(true);
    
    try {
      // In a real app, this would call an API to process payment
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      const paymentData = {
        method: paymentMethod,
        amount: totalAmount,
        cardDetails: paymentMethod === "credit_card" ? {
          cardNumber: values.cardNumber,
          cardHolder: values.cardHolder,
          expiryDate: values.expiryDate,
          cvv: values.cvv
        } : undefined,
        bookingDetails
      };
      
      console.log("Payment data:", paymentData);
      
      // Generate a random booking reference
      const reference = `BK${Math.floor(Math.random() * 1000000)}`;
      setBookingReference(reference);
      
      // Show success modal
      setShowSuccessModal(true);
      
      if (onPaymentComplete) {
        onPaymentComplete(reference);
      }
    } catch (error) {
      message.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    navigate(`/confirmation/${bookingReference}`, { replace: true });
  };

  useEffect(() => {
    if (bookingReference) {
      const timer = setTimeout(() => {
        navigate(`/confirmation/${bookingReference}`, { replace: true });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [bookingReference, navigate]);

  return (
    <>
      <Card title="Payment Details" className="mb-6">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <div className="mb-4">
            <Radio.Group 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="flex flex-wrap gap-4"
            >
              <Radio value="credit_card">
                <span className="flex items-center">
                  <CreditCardOutlined className="mr-1" /> Credit / Debit Card
                </span>
              </Radio>
              <Radio value="paypal">
                <span className="flex items-center">
                  <i className="fab fa-paypal mr-1"></i> PayPal
                </span>
              </Radio>
              <Radio value="stripe">
                <span className="flex items-center">
                  <i className="fab fa-stripe-s mr-1"></i> Stripe
                </span>
              </Radio>
            </Radio.Group>
          </div>
          
          {paymentMethod === "credit_card" && (
            <div className="border-t pt-4">
              <h4 className="font-medium text-dark mb-3">Payment With Credit Card</h4>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-6 bg-neutral-100 border border-neutral-200 rounded flex items-center justify-center text-blue-700">
                  <i className="fab fa-cc-visa"></i>
                </div>
                <div className="w-10 h-6 bg-neutral-100 border border-neutral-200 rounded flex items-center justify-center text-red-500">
                  <i className="fab fa-cc-mastercard"></i>
                </div>
                <div className="w-10 h-6 bg-neutral-100 border border-neutral-200 rounded flex items-center justify-center text-blue-500">
                  <i className="fab fa-cc-amex"></i>
                </div>
              </div>
              
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="cardHolder"
                    label="Card Holder Name"
                    rules={[{ required: true, message: "Please enter the card holder name" }]}
                  >
                    <Input 
                      prefix={<UserOutlined />} 
                      placeholder="Name on card"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="cardNumber"
                    label="Card Number"
                    rules={[
                      { required: true, message: "Please enter the card number" },
                      { pattern: /^\d{16}$/, message: "Card number must be 16 digits" }
                    ]}
                  >
                    <Input 
                      prefix={<CreditCardOutlined />} 
                      placeholder="1234 5678 9012 3456"
                      maxLength={16}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="expiryDate"
                    label="Expiry Date"
                    rules={[
                      { required: true, message: "Please enter the expiry date" },
                      { pattern: /^(0[1-9]|1[0-2])\/\d{2}$/, message: "Format: MM/YY" }
                    ]}
                  >
                    <Input 
                      prefix={<CalendarOutlined />} 
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="cvv"
                    label="CVV"
                    rules={[
                      { required: true, message: "Please enter the CVV" },
                      { pattern: /^\d{3,4}$/, message: "CVV must be 3 or 4 digits" }
                    ]}
                  >
                    <Input 
                      prefix={<SecurityScanOutlined />} 
                      placeholder="123"
                      maxLength={4}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          )}
          
          {paymentMethod === "paypal" && (
            <div className="border-t pt-4">
              <div className="bg-blue-50 p-4 rounded-md text-center mb-4">
                <p className="mb-2">You will be redirected to PayPal to complete your payment securely.</p>
                <i className="fab fa-paypal text-blue-500 text-4xl"></i>
              </div>
            </div>
          )}
          
          {paymentMethod === "stripe" && (
            <div className="border-t pt-4">
              <div className="bg-blue-50 p-4 rounded-md text-center mb-4">
                <p className="mb-2">You will be redirected to Stripe to complete your payment securely.</p>
                <i className="fab fa-stripe text-blue-500 text-4xl"></i>
              </div>
            </div>
          )}
          
          <Divider />
          
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              size="large"
              loading={loading}
            >
              {`Confirm & Pay ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalAmount)}`}
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <PaymentSuccessModal
        visible={showSuccessModal}
        onClose={handleSuccessModalClose}
        bookingReference={bookingReference}
        cruiseName="Coral Cruiser - Balcony"
      />
    </>
  );
};

export default PaymentForm;
