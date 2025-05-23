import React from "react";
import { Row, Col } from "antd";

const statsData = [
  { label: "Years of Experience", value: "4+" },
  { label: "Cruise Destinations", value: "668+" },
  { label: "Cruise Lines", value: "9+" },
  { label: "Cruise Categories", value: "8+" }
];

const Stats: React.FC = () => {
  return (
    <div className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <Row gutter={[24, 24]} justify="center">
          {statsData.map((stat, index) => (
            <Col key={index} xs={12} md={6} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Stats;