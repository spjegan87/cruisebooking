import React from "react";
import { Modal, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface PaymentSuccessModalProps {
  visible: boolean;
  onClose: () => void;
  bookingReference: string;
  cruiseName: string;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({
  visible,
  onClose,
  bookingReference,
  cruiseName,
}) => {
  return (
    <Modal
      visible={visible}
      footer={null}
      closable={false}
      centered
      className="payment-success-modal"
    >
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircleOutlined className="text-2xl text-success" />
        </div>
        <h2 className="text-2xl font-poppins font-bold text-dark mb-2">Payment Successful</h2>
        <p className="text-neutral-600 mb-6">
          Booking on <span className="font-medium">{cruiseName}</span> has been successful with Reference Number <span className="text-primary font-medium">#{bookingReference}</span>
        </p>
        <Link to={`/confirmation/${bookingReference}`}>
          <Button
            type="primary"
            size="large"
            className="w-full sm:w-auto"
            onClick={onClose}
          >
            View Booking Details
          </Button>
        </Link>
      </div>
    </Modal>
  );
};

export default PaymentSuccessModal;
