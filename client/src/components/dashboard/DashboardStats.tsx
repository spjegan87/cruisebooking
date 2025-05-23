import React from "react";
import { Card, Row, Col, Typography, Badge, Progress, Statistic } from "antd";
import { CalendarOutlined, DollarOutlined, TagOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface StatisticData {
  totalBookings: number;
  totalTransactions: number;
  averageValue: number;
}

interface DashboardStatsProps {
  statistics: StatisticData;
  className?: string;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  statistics,
  className,
}) => {
  const { totalBookings, totalTransactions, averageValue } = statistics;

  return (
    <div className={className}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card className="flex items-start">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-100 mr-4">
              <CalendarOutlined className="text-primary text-xl" />
            </div>
            <div>
              <Text className="text-neutral-500 text-sm">Total Bookings</Text>
              <Title level={3} className="m-0">{totalBookings}</Title>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} sm={8}>
          <Card className="flex items-start">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-100 mr-4">
              <DollarOutlined className="text-green-600 text-xl" />
            </div>
            <div>
              <Text className="text-neutral-500 text-sm">Total Transactions</Text>
              <Title level={3} className="m-0">${totalTransactions}K</Title>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} sm={8}>
          <Card className="flex items-start">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-100 mr-4">
              <TagOutlined className="text-purple-600 text-xl" />
            </div>
            <div>
              <Text className="text-neutral-500 text-sm">Average Value</Text>
              <Title level={3} className="m-0">${averageValue}</Title>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardStats;
