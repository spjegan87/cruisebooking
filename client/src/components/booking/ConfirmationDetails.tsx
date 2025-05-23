import React from "react";
import { Card, Divider, Button, Row, Col, Typography, Space, Tag } from "antd";
import { 
  EnvironmentOutlined, 
  PhoneOutlined, 
  MailOutlined, 
  CalendarOutlined,
  ClockOutlined,
  UserOutlined,
  HomeOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
  PrinterOutlined,
  DownloadOutlined,
  MailFilled
} from "@ant-design/icons";
import { IBookingConfirmation } from "@/data/bookingData";

const { Title, Text } = Typography;

interface ConfirmationDetailsProps {
  booking: IBookingConfirmation;
  onPrint: () => void;
  onDownload: () => void;
  onEmail: () => void;
}

const ConfirmationDetails: React.FC<ConfirmationDetailsProps> = ({
  booking,
  onPrint,
  onDownload,
  onEmail
}) => {
  const {
    id,
    cruiseLine,
    cruiseType,
    rating,
    reviewCount,
    location,
    cabinDetails,
    bookingInfo,
    extraServices,
    billingInfo,
    orderInfo,
    status
  } = booking;

  return (
    <div className="space-y-6">
      {/* Cruise Information Card */}
      <Card>
        <div className="flex flex-col md:flex-row">
          {/* Cruise Line Logo and Info */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-neutral-200 md:w-1/3">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <img src={cruiseLine.logo} alt={cruiseLine.name} className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-dark">{cruiseLine.name}</h3>
                <p className="text-sm text-neutral-500">{cruiseType}</p>
                <div className="flex items-center mt-1">
                  <span className="text-sm bg-yellow-400 text-dark font-medium px-1 rounded">{rating}</span>
                  <span className="text-xs text-neutral-500 ml-1">({reviewCount} Reviews)</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">{location}</p>
              </div>
            </div>
            <div className="mt-4">
              <Tag 
                color={status === 'upcoming' ? 'blue' : status === 'completed' ? 'green' : 'orange'}
                className="capitalize"
              >
                {status}
              </Tag>
            </div>
          </div>
          
          {/* Cabin Details */}
          <div className="p-6 flex-1">
            <Row gutter={24}>
              <Col span={24} md={12}>
                <Title level={5} className="mb-3 text-gray-700">Cabin Details</Title>
                <div className="space-y-1">
                  <p className="text-sm">
                    <Text strong>Cabin Type:</Text> {cabinDetails.type}
                  </p>
                  <p className="text-sm">
                    <Text strong>No of Rooms:</Text> {cabinDetails.roomCount}
                  </p>
                  <p className="text-sm">
                    <Text strong>Room Price:</Text> ${cabinDetails.roomPrice}
                  </p>
                  <p className="text-sm">
                    <Text strong>Guests:</Text> {cabinDetails.guestCount}
                  </p>
                </div>
              </Col>
              <Col span={24} md={12}>
                <Title level={5} className="mb-3 text-gray-700">Booking Info</Title>
                <div className="space-y-1">
                  <p className="text-sm">
                    <Text strong>From:</Text> {bookingInfo.from}
                  </p>
                  <p className="text-sm">
                    <Text strong>To:</Text> {bookingInfo.to}
                  </p>
                  <p className="text-sm">
                    <Text strong>Duration:</Text> {bookingInfo.duration}
                  </p>
                  <p className="text-sm">
                    <Text strong>Departure:</Text> {bookingInfo.departureDate}
                  </p>
                  <p className="text-sm">
                    <Text strong>Check-in:</Text> {bookingInfo.checkinDate}
                  </p>
                  <p className="text-sm">
                    <Text strong>Check-out:</Text> {bookingInfo.checkoutDate}
                  </p>
                </div>
              </Col>
            </Row>
            
            {extraServices && extraServices.length > 0 && (
              <div className="mt-4">
                <Title level={5} className="mb-3 text-gray-700">Extra Services</Title>
                <div className="flex flex-wrap gap-2">
                  {extraServices.map((service, index) => (
                    <Tag key={index} className="px-3 py-1">{service}</Tag>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
      
      {/* Billing & Order Information */}
      <Row gutter={16}>
        {/* Billing Information */}
        <Col span={24} md={12}>
          <Card title="Billing Info" className="h-full">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Text type="secondary" className="block mb-1">Name</Text>
                <Text strong>{billingInfo.name}</Text>
              </div>
              <div>
                <Text type="secondary" className="block mb-1">Email</Text>
                <Text>{billingInfo.email}</Text>
              </div>
              <div>
                <Text type="secondary" className="block mb-1">Phone</Text>
                <Text>{billingInfo.phone}</Text>
              </div>
              <div>
                <Text type="secondary" className="block mb-1">Address</Text>
                <Text>{billingInfo.address}</Text>
              </div>
            </div>
          </Card>
        </Col>
        
        {/* Order Information */}
        <Col span={24} md={12}>
          <Card title="Order Info" className="h-full">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Text type="secondary" className="block mb-1">Order Id</Text>
                <Text type="danger" strong>#{orderInfo.id}</Text>
              </div>
              <div>
                <Text type="secondary" className="block mb-1">Payment Method</Text>
                <Text>{orderInfo.paymentMethod}</Text>
              </div>
              <div>
                <Text type="secondary" className="block mb-1">Payment Status</Text>
                <Text type="success" strong>{orderInfo.paymentStatus}</Text>
              </div>
              <div>
                <Text type="secondary" className="block mb-1">Payment Date</Text>
                <Text>{orderInfo.paymentDate}</Text>
              </div>
              <div>
                <Text type="secondary" className="block mb-1">Tax</Text>
                <Text>{orderInfo.tax}</Text>
              </div>
              <div>
                <Text type="secondary" className="block mb-1">Discount</Text>
                <Text type="success">{orderInfo.discount}</Text>
              </div>
              <div>
                <Text type="secondary" className="block mb-1">Booking Fees</Text>
                <Text>${orderInfo.bookingFees}</Text>
              </div>
              <div>
                <Text type="secondary" className="block mb-1">Total Paid</Text>
                <Text type="danger" strong>${orderInfo.totalPaid}</Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      
      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          type="primary" 
          icon={<PrinterOutlined />} 
          onClick={onPrint}
        >
          Print Confirmation
        </Button>
        <Button 
          type="primary" 
          icon={<DownloadOutlined />} 
          onClick={onDownload}
          className="bg-secondary hover:bg-secondary/90"
        >
          Download PDF
        </Button>
        <Button 
          type="default" 
          icon={<MailFilled />} 
          onClick={onEmail}
        >
          Email Confirmation
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationDetails;
