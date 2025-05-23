import React, { useState, useEffect } from "react";
import { Row, Col, Card, Alert, Statistic, Button, Tabs, Table, Progress, List, Avatar, Badge } from "antd";
import { 
  BellOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
  GiftOutlined,
  ArrowUpOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardStats from "@/components/dashboard/DashboardStats";
import { dashboardData } from "@/data/bookingData";
import { formatPrice } from "@/lib/utils";

const { TabPane } = Tabs;

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("recent");
  
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }
  
  const { stats, recentBookings, monthlyBookings, serviceCategories } = dashboardData;
  
  // Format data for chart
  const chartData = monthlyBookings.map(item => ({
    month: item.month,
    bookings: item.bookings
  }));
  
  // Calculate chart height based on max value
  const maxBookings = Math.max(...monthlyBookings.map(item => item.bookings));
  
  return (
    <div>
      <PageHeader 
        title="Dashboard"
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Dashboard" }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      />
      
      <div className="container mx-auto px-4 py-8">
        <Alert
          message="Reminder about your upcoming booking Hotel Royal on 15 May 2023 at 09:30 AM. We look forward to seeing you!"
          type="success"
          showIcon
          closable
          className="mb-6"
        />
        
        <Row gutter={24}>
          {/* Sidebar */}
          <Col xs={24} md={8} lg={6}>
            <DashboardSidebar 
              userName="Jeffrey Wilson"
              userSince="01 May, 2023"
              userAvatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50"
            />
          </Col>
          
          {/* Main Content */}
          <Col xs={24} md={16} lg={18}>
            {/* Statistics */}
            <DashboardStats 
              statistics={stats}
              className="mb-6"
            />
            
            {/* Recent Bookings */}
            <Card className="mb-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Recent Bookings</h3>
                <div className="relative">
                  <Button type="text" icon={<InfoCircleOutlined />} size="small">
                    Filter
                  </Button>
                </div>
              </div>
              
              <List
                itemLayout="horizontal"
                dataSource={recentBookings}
                renderItem={booking => (
                  <List.Item
                    actions={[
                      <Badge color={booking.status === 'confirmed' ? 'green' : booking.status === 'upcoming' ? 'blue' : 'orange'} text={booking.status} />
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={booking.cruiseImage} />}
                      title={<a href="#">{booking.cruiseName}</a>}
                      description={
                        <div className="flex items-center text-xs text-gray-500">
                          <span>Date: {booking.departureDate}</span>
                          <span className="mx-2">•</span>
                          <span>Time: 09:30 AM</span>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
              
              <div className="mt-4 text-center">
                <Button type="link">View all bookings</Button>
              </div>
            </Card>
            
            {/* Statistics and Chart */}
            <Row gutter={24} className="mb-6">
              <Col xs={24} md={12}>
                <Card>
                  <h3 className="font-semibold text-lg mb-4">Booking Statistics</h3>
                  <div className="h-48 relative">
                    {/* Simple bar chart */}
                    <div className="flex h-full items-end gap-1">
                      {chartData.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex-1 bg-primary rounded-t"
                          style={{ height: `${(item.bookings / maxBookings) * 100}%` }}
                          title={`${item.month}: ${item.bookings} bookings`}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      {chartData.map((item, index) => (
                        <div key={index}>{item.month}</div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-center text-sm text-gray-600">
                    <p>Recent spending: <span className="font-semibold text-dark">${stats.totalTransactions}K</span></p>
                    <p className="text-green-600 mt-1">
                      <ArrowUpOutlined /> <span className="font-medium">+25%</span> increased compared to last year
                    </p>
                  </div>
                </Card>
              </Col>
              
              <Col xs={24} md={12}>
                <Card>
                  <Tabs activeKey={activeTab} onChange={setActiveTab}>
                    <TabPane tab="Recent" key="recent">
                      <h3 className="font-semibold text-lg mb-4">Recent Invoices</h3>
                      <List
                        itemLayout="horizontal"
                        dataSource={recentBookings}
                        renderItem={booking => (
                          <List.Item
                            actions={[
                              <span className={`text-${booking.status === 'confirmed' ? 'green' : booking.status === 'upcoming' ? 'blue' : 'gray'}-500`}>
                                ${booking.price}
                              </span>
                            ]}
                          >
                            <List.Item.Meta
                              avatar={<Avatar src={booking.cruiseImage} />}
                              title={booking.cruiseName}
                              description={`Date: ${booking.departureDate}`}
                            />
                          </List.Item>
                        )}
                      />
                    </TabPane>
                    <TabPane tab="Upcoming" key="upcoming">
                      <h3 className="font-semibold text-lg mb-4">Upcoming Payments</h3>
                      <div className="text-center py-8 text-gray-500">
                        No upcoming payments due.
                      </div>
                    </TabPane>
                  </Tabs>
                </Card>
              </Col>
            </Row>
            
            {/* Service Categories */}
            <Card className="mb-6">
              <h3 className="font-semibold text-lg mb-4">Service Categories</h3>
              <Row gutter={[16, 16]}>
                {serviceCategories.map(category => (
                  <Col key={category.id} xs={12} sm={8} md={4}>
                    <Card className="text-center">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-24 object-cover rounded mb-2"
                      />
                      <div className="font-medium">{category.count} {category.name}</div>
                      <Link to={`/${category.name.toLowerCase()}`}>
                        <Button type="link" size="small" className="text-primary p-0">
                          Book Now
                        </Button>
                      </Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
            
            {/* Notifications */}
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Notifications</h3>
                <Badge count={4} className="mr-2" />
              </div>
              
              <List
                itemLayout="horizontal"
                dataSource={[
                  {
                    id: 1,
                    title: "Pre-Tour Information",
                    description: "Your Caribbean trip details are ready! Please complete your check-in by 4 PM on arrival day.",
                    time: "2 hrs ago",
                    icon: <InfoCircleOutlined className="text-blue-500" />,
                    color: "blue"
                  },
                  {
                    id: 2,
                    title: "Price Matching",
                    description: "We found a lower price for your flight to Los Angeles. Contact us to adjust your fare!",
                    time: "12 hrs ago",
                    icon: <ExclamationCircleOutlined className="text-orange-500" />,
                    color: "orange"
                  },
                  {
                    id: 3,
                    title: "Booking Confirmation",
                    description: "Your reservation for Hotel Grand Palace has been confirmed for June 21-27, 2023.",
                    time: "1 day ago",
                    icon: <CheckCircleOutlined className="text-green-500" />,
                    color: "green"
                  },
                  {
                    id: 4,
                    title: "Special Offer",
                    description: "Book your next tour with us by Jan 30, 2023 and get a 20% discount!",
                    time: "2 days ago",
                    icon: <GiftOutlined className="text-purple-500" />,
                    color: "purple"
                  }
                ]}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <div className={`bg-${item.color}-100 p-2 rounded-full`}>
                          {item.icon}
                        </div>
                      }
                      title={item.title}
                      description={
                        <div>
                          <p>{item.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
