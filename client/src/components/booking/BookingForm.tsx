import React, { useState } from "react";
import { Form, Input, Select, Checkbox, Button, Row, Col, Divider, Card, Alert } from "antd";
import { UserOutlined, MailOutlined, HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

interface BookingFormProps {
  cruiseId: string;
  onCouponApply: (code: string) => Promise<{success: boolean; message: string; discount: number}>;
}

const BookingForm: React.FC<BookingFormProps> = ({ cruiseId, onCouponApply }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [couponStatus, setCouponStatus] = useState<{
    applied: boolean;
    success?: boolean;
    message?: string;
  }>({ applied: false });
  
  const onFinish = (values: any) => {
    // In a real app, this would call an API to create the booking
    console.log("Booking form values:", values);
    
    // Navigate to the next step (payment)
    navigate(`/booking/${cruiseId}/payment`, { 
      state: { 
        bookingDetails: values,
        couponApplied: couponStatus.applied && couponStatus.success 
          ? { code: couponCode } 
          : undefined
      } 
    });
  };
  
  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      setCouponStatus({
        applied: true,
        success: false,
        message: "Please enter a coupon code"
      });
      return;
    }
    
    try {
      const result = await onCouponApply(couponCode);
      setCouponStatus({
        applied: true,
        success: result.success,
        message: result.message
      });
    } catch (error) {
      setCouponStatus({
        applied: true,
        success: false,
        message: "Error applying coupon. Please try again."
      });
    }
  };
  
  const handleRemoveCoupon = () => {
    setCouponCode("");
    setCouponStatus({ applied: false });
  };

  return (
    <Card title="Secure Checkout" className="mb-6">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        {/* Contact Info */}
        <h3 className="font-medium text-dark mb-4">Contact Info</h3>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" }
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Enter your email" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ required: true, message: "Please enter your phone number" }]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Enter your phone number" />
            </Form.Item>
          </Col>
        </Row>

        {/* Traveler Info */}
        <Divider />
        <h3 className="font-medium text-dark mb-4">Traveler Info</h3>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: "Please enter your first name" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: "Please enter your last name" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="age"
              label="Age"
              rules={[{ required: true, message: "Please select your age" }]}
            >
              <Select placeholder="Select age">
                <Option value="adult">Adult (18+)</Option>
                <Option value="child">Child (2-17)</Option>
                <Option value="infant">Infant (Under 2)</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true, message: "Please select your country" }]}
            >
              <Select placeholder="Select country">
                <Option value="us">United States</Option>
                <Option value="ca">Canada</Option>
                <Option value="uk">United Kingdom</Option>
                <Option value="au">Australia</Option>
                <Option value="de">Germany</Option>
                <Option value="fr">France</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="addressLine1"
              label="Address line 1"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input prefix={<HomeOutlined />} placeholder="Enter street address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="addressLine2"
              label="Address line 2"
            >
              <Input prefix={<HomeOutlined />} placeholder="Apt, suite, building (optional)" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: "Please enter your city" }]}
            >
              <Input placeholder="Enter city" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="state"
              label="State"
              rules={[{ required: true, message: "Please enter your state" }]}
            >
              <Input placeholder="Enter state/province" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="zipCode"
              label="Zip Code"
              rules={[{ required: true, message: "Please enter your zip code" }]}
            >
              <Input placeholder="Enter postal code" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="additionalInfo"
          label="Additional Info"
        >
          <Input.TextArea 
            rows={3} 
            placeholder="Any special requests or requirements" 
          />
        </Form.Item>

        {/* Coupon */}
        <Divider />
        <h3 className="font-medium text-dark mb-4">Coupon</h3>
        <div className="flex">
          <Input
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            disabled={couponStatus.applied && couponStatus.success}
            className="flex-grow"
          />
          <Button 
            type={couponStatus.applied && couponStatus.success ? "default" : "primary"}
            className="ml-2"
            onClick={couponStatus.applied && couponStatus.success ? handleRemoveCoupon : handleApplyCoupon}
          >
            {couponStatus.applied && couponStatus.success ? "Remove" : "Apply Coupon"}
          </Button>
        </div>
        
        {couponStatus.applied && (
          <Alert
            className="mt-3"
            message={couponStatus.message}
            type={couponStatus.success ? "success" : "error"}
            showIcon
            closable
            onClose={() => setCouponStatus({ applied: false })}
          />
        )}

        <Divider />
        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Continue to Payment
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BookingForm;
