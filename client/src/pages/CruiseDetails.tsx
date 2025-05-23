import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Tabs,
  Tag,
  Rate,
  Divider,
  List,
  Avatar,
  Image,
  Descriptions,
  Alert,
} from "antd";
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  HeartOutlined,
  HeartFilled,
  GiftOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  FiCheck,
  FiClock,
  FiUser,
  FiMapPin,
  FiHeart,
  FiGift,
  FiInfo,
  FiAnchor,
  FiX,
  FiAlertCircle,
} from "react-icons/fi";
import { formatPrice, formatDate, formatDuration } from "@/lib/utils";
import PageHeader from "@/components/ui/PageHeader";
import { cruiseData } from "@/data/cruiseData";
import { ICruise } from "@/data/cruiseData";

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const CruiseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cruise, setCruise] = useState<ICruise | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedTab, setSelectedTab] = useState("overview");

  useEffect(() => {
    setLoading(true);
    // In a real app, this would be an API call
    const foundCruise = cruiseData.find((cruise) => cruise.id === id);

    if (foundCruise) {
      setCruise(foundCruise);
      setIsFavorite(foundCruise.isFavorite || false);
    }

    setLoading(false);
  }, [id]);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!cruise) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Alert
          message="Cruise Not Found"
          description="The cruise you are looking for does not exist."
          type="error"
          showIcon
          action={
            <Link to="/cruises">
              <Button size="small" type="primary">
                Return to Cruises
              </Button>
            </Link>
          }
        />
      </div>
    );
  }

  const {
    name,
    cruiseLine,
    image,
    gallery,
    location,
    price,
    discountPercentage,
    rating,
    reviewCount,
    duration,
    cabinType,
    amenities,
    description,
    longDescription,
    departureDate,
    returnDate,
    itinerary,
    highlights,
    inclusions,
    exclusions,
    reviews,
  } = cruise;

  const discountedPrice = discountPercentage
    ? price - price * (discountPercentage / 100)
    : price;

  return (
    <div>
      <PageHeader
        title="Cruise Details"
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Cruise", link: "/cruises" },
          { title: "Cruise Details" },
        ]}
        backgroundImage={image}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Cruise Header */}
        <Card className="mb-6 overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <Title level={3} className="mr-3 mb-0">
                    {name}
                  </Title>
                  <Tag color="green">VERIFIED</Tag>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <FiMapPin className="text-primary mr-2" />
                  <span>{location}</span>
                  <div className="flex items-center ml-4">
                    <Rate disabled defaultValue={rating} className="text-sm" />
                    <span className="ml-1">({reviewCount} Reviews)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Tag color="blue">Upcoming</Tag>
              </div>
            </div>
          </div>

          {/* Cruise Images */}
          <div className="grid grid-cols-4 gap-1">
            <div className="col-span-4 md:col-span-2 overflow-hidden h-64">
              <Image
                src={image}
                alt={name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            {gallery &&
              gallery.slice(0, 2).map((img, index) => (
                <div
                  key={index}
                  className="hidden md:block col-span-1 overflow-hidden h-64"
                >
                  <Image
                    src={img}
                    alt={`${name} - ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
          </div>
        </Card>

        <Row gutter={24}>
          {/* Main Content */}
          <Col xs={24} lg={16}>
            <Card className="mb-6">
              <Tabs defaultActiveKey="overview" onChange={setSelectedTab}>
                <TabPane tab="Overview" key="overview">
                  <div className="p-4">
                    <Title level={4}>About This Cruise</Title>
                    <Paragraph className="text-gray-600 mb-6">
                      {longDescription || description}
                    </Paragraph>

                    {highlights && highlights.length > 0 && (
                      <>
                        <Title level={5}>Highlights</Title>
                        <List
                          itemLayout="horizontal"
                          dataSource={highlights}
                          className="mb-6"
                          renderItem={(item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={
                                  <FiCheck className="text-green-500 mt-1" />
                                }
                                title={
                                  <Text className="text-gray-600">{item}</Text>
                                }
                              />
                            </List.Item>
                          )}
                        />
                      </>
                    )}

                    {inclusions && inclusions.length > 0 && (
                      <>
                        <Title level={5}>What's Included</Title>
                        <List
                          grid={{ gutter: 16, column: 2 }}
                          dataSource={inclusions}
                          className="mb-6"
                          renderItem={(item) => (
                            <List.Item>
                              <div className="flex items-center">
                                <CheckCircleOutlined className="text-green-500 mr-2" />
                                <Text>{item}</Text>
                              </div>
                            </List.Item>
                          )}
                        />
                      </>
                    )}

                    {exclusions && exclusions.length > 0 && (
                      <>
                        <Title level={5}>Not Included</Title>
                        <List
                          grid={{ gutter: 16, column: 2 }}
                          dataSource={exclusions}
                          className="mb-6"
                          renderItem={(item) => (
                            <List.Item>
                              <div className="flex items-center">
                                <InfoCircleOutlined className="text-red-500 mr-2" />
                                <Text>{item}</Text>
                              </div>
                            </List.Item>
                          )}
                        />
                      </>
                    )}

                    <Alert
                      message="Special Offer Available"
                      description="Book now and receive a free beverage package worth $499 per person!"
                      type="info"
                      showIcon
                      icon={<GiftOutlined />}
                      className="mb-6"
                    />
                  </div>
                </TabPane>

                <TabPane tab="Cabin Details" key="cabin">
                  <div className="p-4">
                    <Title level={4}>Cabin Information</Title>
                    <Row gutter={24}>
                      <Col span={12}>
                        <Title level={5}>{cabinType} Cabin Features:</Title>
                        <List
                          dataSource={[
                            "Private balcony with ocean views",
                            "King-size bed (convertible to twins)",
                            "Sitting area with sofa",
                            "Private bathroom with shower",
                            "Mini-refrigerator and safe",
                          ]}
                          renderItem={(item) => (
                            <List.Item>
                              <div className="flex items-center">
                                <CheckCircleOutlined className="text-green-500 mr-2" />
                                <Text>{item}</Text>
                              </div>
                            </List.Item>
                          )}
                        />
                      </Col>
                      <Col span={12}>
                        <div className="mb-6">
                          <Title level={5}>Cabin Size:</Title>
                          <Text>220 sq. ft. with 40 sq. ft. balcony</Text>
                        </div>
                        <div>
                          <Title level={5}>Occupancy:</Title>
                          <Text>Up to 4 guests (2 adults, 2 children)</Text>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </TabPane>

                <TabPane tab="Itinerary" key="itinerary">
                  <div className="p-4">
                    <Title level={4}>Cruise Itinerary</Title>
                    {itinerary ? (
                      <List
                        itemLayout="horizontal"
                        dataSource={itinerary}
                        renderItem={(item) => (
                          <List.Item>
                            <Card className="w-full">
                              <div className="flex flex-col md:flex-row">
                                <div className="font-semibold text-lg w-24">
                                  Day {item.day}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">{item.port}</div>
                                  <div className="text-gray-500 text-sm">
                                    {item.arrival && (
                                      <span>Arrival: {item.arrival}</span>
                                    )}
                                    {item.arrival && item.departure && (
                                      <span> | </span>
                                    )}
                                    {item.departure && (
                                      <span>Departure: {item.departure}</span>
                                    )}
                                  </div>
                                  <Paragraph className="mt-2">
                                    {item.description}
                                  </Paragraph>
                                </div>
                              </div>
                            </Card>
                          </List.Item>
                        )}
                      />
                    ) : (
                      <Alert
                        message="Itinerary information is not available for this cruise."
                        type="info"
                        showIcon
                      />
                    )}
                  </div>
                </TabPane>

                <TabPane tab="Amenities" key="amenities">
                  <div className="p-4">
                    <Title level={4}>Onboard Amenities</Title>
                    <Row gutter={[24, 24]}>
                      {amenities.map((amenity, index) => (
                        <Col key={index} xs={24} md={12} lg={8}>
                          <Card className="text-center h-full">
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                <FiAnchor className="text-blue-500 text-2xl" />
                              </div>
                              <Title level={5}>{amenity}</Title>
                              <Text className="text-gray-500">
                                Enjoy premium {amenity.toLowerCase()} services
                                during your cruise.
                              </Text>
                            </div>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </TabPane>

                <TabPane tab="Reviews" key="reviews">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                      <Title level={4}>Customer Reviews</Title>
                      <Rate disabled defaultValue={rating} />
                    </div>

                    {reviews ? (
                      <List
                        itemLayout="horizontal"
                        dataSource={reviews}
                        renderItem={(review) => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Avatar src={review.user.avatar} />}
                              title={
                                <div className="flex justify-between">
                                  <span>{review.user.name}</span>
                                  <Rate
                                    disabled
                                    defaultValue={review.rating}
                                    className="text-sm"
                                  />
                                </div>
                              }
                              description={
                                <div>
                                  <div className="text-gray-400 text-sm mb-2">
                                    {review.date}
                                  </div>
                                  <div>{review.comment}</div>
                                </div>
                              }
                            />
                          </List.Item>
                        )}
                      />
                    ) : (
                      <List
                        itemLayout="horizontal"
                        dataSource={[
                          {
                            user: { name: "Sarah Johnson", avatar: "" },
                            rating: 5,
                            date: "March 15, 2023",
                            comment:
                              "Absolutely amazing cruise experience! The staff was incredibly attentive, the food was delicious, and the excursions were well-organized. Would definitely recommend.",
                          },
                          {
                            user: { name: "Michael Thompson", avatar: "" },
                            rating: 4,
                            date: "February 22, 2023",
                            comment:
                              "Great value for the price. The cabin was comfortable and clean. Only downside was that some activities were overbooked.",
                          },
                          {
                            user: { name: "Jessica Williams", avatar: "" },
                            rating: 5,
                            date: "January 10, 2023",
                            comment:
                              "This was our third time on this cruise and it never disappoints. The new restaurant options are excellent and the evening entertainment was top-notch.",
                          },
                        ]}
                        renderItem={(review) => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Avatar icon={<UserOutlined />} />}
                              title={
                                <div className="flex justify-between">
                                  <span>{review.user.name}</span>
                                  <Rate
                                    disabled
                                    defaultValue={review.rating}
                                    className="text-sm"
                                  />
                                </div>
                              }
                              description={
                                <div>
                                  <div className="text-gray-400 text-sm mb-2">
                                    {review.date}
                                  </div>
                                  <div>{review.comment}</div>
                                </div>
                              }
                            />
                          </List.Item>
                        )}
                      />
                    )}
                  </div>
                </TabPane>
              </Tabs>
            </Card>
          </Col>

          {/* Sidebar */}
          <Col xs={24} lg={8}>
            {/* Price Card */}
            <Card className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Text className="text-gray-500 block">Starting from</Text>
                  <div className="flex items-end">
                    {discountPercentage > 0 && (
                      <Text delete className="text-gray-400 mr-2">
                        {formatPrice(price)}
                      </Text>
                    )}
                    <Title level={2} className="mb-0 text-primary">
                      {formatPrice(discountedPrice)}
                    </Title>
                  </div>
                  <Text className="text-gray-500">per person</Text>
                </div>
                <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-md">
                  <Rate
                    disabled
                    defaultValue={rating}
                    className="text-sm mr-1"
                  />
                  <Text strong>{rating}</Text>
                </div>
              </div>

              <Divider className="my-4" />

              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <Text type="secondary" className="block">
                    Check In
                  </Text>
                  <Text strong>
                    {departureDate ? formatDate(departureDate) : "May 15, 2024"}
                  </Text>
                </div>
                <div>
                  <Text type="secondary" className="block">
                    Check Out
                  </Text>
                  <Text strong>
                    {returnDate ? formatDate(returnDate) : "May 22, 2024"}
                  </Text>
                </div>
                <div>
                  <Text type="secondary" className="block">
                    Adults
                  </Text>
                  <Text strong>2</Text>
                </div>
                <div>
                  <Text type="secondary" className="block">
                    Children
                  </Text>
                  <Text strong>0</Text>
                </div>
                <div>
                  <Text type="secondary" className="block">
                    Duration
                  </Text>
                  <Text strong>{duration}</Text>
                </div>
              </div>

              <Divider className="my-4" />

              <div className="mb-6">
                <Title level={5}>Price Details</Title>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Text>Cruise Fare (2 Adults)</Text>
                    <Text>{formatPrice(discountedPrice * 2)}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Taxes & Fees</Text>
                    <Text>{formatPrice(discountedPrice * 0.1)}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Port Charges</Text>
                    <Text>{formatPrice(200)}</Text>
                  </div>
                  {discountPercentage > 0 && (
                    <div className="flex justify-between text-success">
                      <Text>Discount ({discountPercentage}%)</Text>
                      <Text>-{formatPrice((price - discountedPrice) * 2)}</Text>
                    </div>
                  )}
                  <Divider className="my-2" />
                  <div className="flex justify-between font-bold">
                    <Text>Total</Text>
                    <Text className="text-primary">
                      {formatPrice(
                        discountedPrice * 2 + discountedPrice * 0.1 + 200,
                      )}
                    </Text>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link to={`/booking/${id}`}>
                  <Button type="primary" block size="large">
                    Book Now
                  </Button>
                </Link>

                <Button
                  block
                  icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
                  onClick={handleFavoriteToggle}
                  className={isFavorite ? "border-primary text-primary" : ""}
                >
                  {isFavorite ? "Saved to Favorites" : "Add to Favorites"}
                </Button>
              </div>
            </Card>

            {/* Cruise Line Info */}
            <Card className="mb-6">
              <Title level={5} className="mb-4">
                {cruiseLine}
              </Title>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <FiAnchor className="text-blue-600 text-xl" />
                </div>
                <div>
                  <Text className="font-medium block">Luxury Cruise</Text>
                  <Rate disabled defaultValue={rating} className="text-sm" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <CheckCircleOutlined className="text-green-500 mt-1 mr-2" />
                  <Text>Identity verified</Text>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone text-gray-400 mt-1 mr-2"></i>
                  <Text>24/7 customer support</Text>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-shield-alt text-gray-400 mt-1 mr-2"></i>
                  <Text>Secure payment processing</Text>
                </div>
              </div>

              <Button block className="mt-4">
                View Cruise Line Profile
              </Button>
            </Card>

            {/* Similar Cruises */}
            <Card>
              <Title level={5} className="mb-4">
                You Might Also Like
              </Title>

              <div className="space-y-4">
                {cruiseData
                  .filter((c) => c.id !== id)
                  .slice(0, 3)
                  .map((cruise) => (
                    <Link to={`/cruises/${cruise.id}`} key={cruise.id}>
                      <div className="flex">
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={cruise.image}
                            alt={cruise.name}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="ml-3">
                          <Text strong className="block">
                            {cruise.name}
                          </Text>
                          <Rate
                            disabled
                            defaultValue={cruise.rating}
                            className="text-xs"
                          />
                          <Text className="text-primary font-medium block">
                            {formatPrice(cruise.price)}
                          </Text>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CruiseDetails;
