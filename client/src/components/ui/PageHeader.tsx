import React from "react";
import { Typography, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface BreadcrumbItem {
  title: string;
  link?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs,
  backgroundImage = "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
}) => {
  return (
    <div className="page-header" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="page-header-overlay"></div>
      <div className="page-header-content">
        <div className="text-center">
          <Title level={1} className="!text-white font-bold text-4xl mb-4">{title}</Title>
          <Breadcrumb className="flex items-center justify-center !text-white [&_*]:!text-white [&_.ant-breadcrumb-separator]:!text-white">
            <Breadcrumb.Item>
              <Link to="/" className="!text-white hover:!text-white/90">
                <HomeOutlined className="!text-white" />
              </Link>
            </Breadcrumb.Item>
            {breadcrumbs.map((item, index) => (
              <Breadcrumb.Item key={index}>
                {item.link ? (
                  <Link to={item.link} className="!text-white hover:!text-white/90">
                    {item.title}
                  </Link>
                ) : (
                  <span className="!text-white">{item.title}</span>
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
