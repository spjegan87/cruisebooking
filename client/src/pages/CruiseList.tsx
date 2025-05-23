import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Button, Select, Input, Pagination, Space, Card, Radio, Empty, DatePicker, Form } from "antd";
import { SearchOutlined, FilterOutlined, AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import CruiseFilter from "@/components/cruise/CruiseFilter";
import CruiseCard from "@/components/cruise/CruiseCard";
import CruiseTypeCard from "@/components/cruise/CruiseTypeCard";
import { cruiseData, cruiseTypes, filterOptions } from "@/data/cruiseData";
import { ICruise } from "@/data/cruiseData";
import { format } from "date-fns";

const { Title } = Typography;
const { Option } = Select;
const { Search } = Input;

const CruiseList: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // State
  const [filteredCruises, setFilteredCruises] = useState<ICruise[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCruiseType, setSelectedCruiseType] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchForm] = Form.useForm();
  
  // Get initial destination from URL if present
  const initialDestination = queryParams.get('destination');
  const initialType = queryParams.get('type');
  
  // Get search params from location state (if coming from the home page search)
  const searchParams = location.state?.searchParams;
  
  // Apply initial filters based on URL params or search params
  useEffect(() => {
    setLoading(true);
    
    let filtered = [...cruiseData];
    
    // If we have search params from home page, use those
    if (searchParams) {
      console.log("Search params from home:", searchParams);
      
      // Set form values
      searchForm.setFieldsValue({
        destination: searchParams.destination,
        checkIn: searchParams.checkIn,
        checkOut: searchParams.checkOut,
        guests: searchParams.guests || 2
      });
      
      // Filter by destination
      if (searchParams.destination) {
        filtered = filtered.filter(cruise => 
          cruise.location.toLowerCase().includes(searchParams.destination.toLowerCase())
        );
      }
      
      // Additional filters can be applied here based on dates, guests, etc.
    }
    // Otherwise use URL params
    else if (initialDestination) {
      filtered = filtered.filter(cruise => 
        cruise.location.toLowerCase().includes(initialDestination.toLowerCase())
      );
      
      // Set destination in form
      searchForm.setFieldsValue({
        destination: initialDestination
      });
    }
    
    if (initialType) {
      setSelectedCruiseType(initialType);
      // In a real implementation, we would filter by cruise type
    }
    
    // Add favorite status to cruises
    filtered = filtered.map(cruise => ({
      ...cruise,
      isFavorite: favorites.includes(cruise.id)
    }));
    
    setFilteredCruises(filtered);
    setLoading(false);
  }, [initialDestination, initialType, favorites, searchParams, searchForm]);
  
  const handleFilter = (filters: any) => {
    setLoading(true);
    
    let filtered = [...cruiseData];
    
    // Apply search filter
    if (filters.search) {
      filtered = filtered.filter(cruise => 
        cruise.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        cruise.cruiseLine.toLowerCase().includes(filters.search.toLowerCase()) ||
        cruise.location.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    // Apply price range filter
    if (filters.priceRange && filters.priceRange.length === 2) {
      filtered = filtered.filter(cruise => 
        cruise.price >= filters.priceRange[0] && cruise.price <= filters.priceRange[1]
      );
    }
    
    // Apply cabin type filter
    if (filters.cabinTypes && filters.cabinTypes.length > 0) {
      filtered = filtered.filter(cruise => 
        filters.cabinTypes.includes(cruise.cabinType.toLowerCase())
      );
    }
    
    // Apply cruise line filter
    if (filters.cruiseLines && filters.cruiseLines.length > 0) {
      filtered = filtered.filter(cruise => 
        filters.cruiseLines.some((line: string) => 
          cruise.cruiseLine.toLowerCase().includes(line.toLowerCase())
        )
      );
    }
    
    // Apply amenities filter
    if (filters.amenities && filters.amenities.length > 0) {
      filtered = filtered.filter(cruise => 
        filters.amenities.every((amenity: string) => 
          cruise.amenities.some(a => a.toLowerCase().includes(amenity.toLowerCase()))
        )
      );
    }
    
    // Apply rating filter
    if (filters.rating && filters.rating > 0) {
      filtered = filtered.filter(cruise => 
        cruise.rating >= filters.rating
      );
    }
    
    // Add favorite status
    filtered = filtered.map(cruise => ({
      ...cruise,
      isFavorite: favorites.includes(cruise.id)
    }));
    
    setFilteredCruises(filtered);
    setCurrentPage(1);
    setLoading(false);
  };
  
  const handleSortChange = (value: string) => {
    let sorted = [...filteredCruises];
    
    switch (value) {
      case "price_low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price_high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "duration":
        sorted.sort((a, b) => a.durationDays - b.durationDays);
        break;
      default:
        // Default is "recommended", no specific sort
        break;
    }
    
    setFilteredCruises(sorted);
  };
  
  const handleFavoriteToggle = (id: string, isFavorite: boolean) => {
    setFavorites(prev => 
      isFavorite 
        ? [...prev, id] 
        : prev.filter(item => item !== id)
    );
    
    setFilteredCruises(prev => 
      prev.map(cruise => 
        cruise.id === id ? { ...cruise, isFavorite } : cruise
      )
    );
  };
  
  const handleCruiseTypeClick = (id: string) => {
    setSelectedCruiseType(prevId => prevId === id ? null : id);
    // In a real implementation, we would filter by cruise type
  };
  
  // Pagination
  const paginatedCruises = filteredCruises.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  
  return (
    <div>
      <PageHeader 
        title="Cruise"
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Cruise" }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <Card className="mb-6">
          <Form 
            form={searchForm}
            onFinish={handleFilter}
            layout="vertical"
          >
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} md={6}>
                <Form.Item name="destination" label="From" className="mb-1">
                  <Select placeholder="Where to?" allowClear>
                    {filterOptions.destinations.map(dest => (
                      <Option key={dest.value} value={dest.value}>{dest.label}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item name="checkIn" label="Check In" className="mb-1">
                  <DatePicker className="w-full" format="DD/MM/YYYY" />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item name="checkOut" label="Check Out" className="mb-1">
                  <DatePicker className="w-full" format="DD/MM/YYYY" />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item name="guests" label="Guests" className="mb-1">
                  <div className="flex">
                    <Select className="flex-grow" style={{ borderRadius: "4px 0 0 4px" }}>
                      <Option value={1}>1 Person</Option>
                      <Option value={2}>2 Persons</Option>
                      <Option value={4}>4 Persons</Option>
                      <Option value={6}>6 Persons</Option>
                    </Select>
                    <Button 
                      type="primary"
                      htmlType="submit"
                      style={{ borderRadius: "0 4px 4px 0" }}
                      className="bg-red-500 hover:bg-red-600 border-red-500"
                    >
                      Search
                    </Button>
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        
        {/* Cruise Types */}
        <div className="mb-6">
          <Title level={4} className="mb-4">Choose type of Cruise you are interested</Title>
          <Row gutter={[12, 12]}>
            {cruiseTypes.map((type) => (
              <Col key={type.id} xs={12} md={4} lg={2.4}>
                <CruiseTypeCard 
                  cruiseType={type} 
                  selected={selectedCruiseType === type.id}
                  onClick={handleCruiseTypeClick}
                />
              </Col>
            ))}
          </Row>
        </div>
        
        <Row gutter={24}>
          {/* Filters Sidebar */}
          <Col xs={24} lg={6}>
            <CruiseFilter 
              onFilter={handleFilter}
              cabinTypes={filterOptions.cabinTypes}
              cruiseLines={filterOptions.cruiseLines}
              amenities={filterOptions.amenities}
              destinations={filterOptions.destinations}
              durations={filterOptions.durations}
            />
          </Col>
          
          {/* Cruise Listings */}
          <Col xs={24} lg={18}>
            {/* Results Header */}
            <Card className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <span className="text-gray-600">
                    <span className="font-medium text-dark">{filteredCruises.length}</span> Cruises Found on Your Search
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Radio.Group 
                    value={viewMode}
                    onChange={e => setViewMode(e.target.value)}
                    className="mr-2"
                  >
                    <Radio.Button value="grid"><AppstoreOutlined /></Radio.Button>
                    <Radio.Button value="list"><BarsOutlined /></Radio.Button>
                  </Radio.Group>
                  <Select 
                    defaultValue="recommended" 
                    style={{ width: 180 }}
                    onChange={handleSortChange}
                  >
                    <Option value="recommended">Sort By: Recommended</Option>
                    <Option value="price_low">Price: Low to High</Option>
                    <Option value="price_high">Price: High to Low</Option>
                    <Option value="rating">Rating: High to Low</Option>
                    <Option value="duration">Duration: Short to Long</Option>
                  </Select>
                </div>
              </div>
            </Card>
            
            {/* Cruise Items */}
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="spinner"></div>
              </div>
            ) : paginatedCruises.length > 0 ? (
              <div className="space-y-6">
                {viewMode === 'grid' ? (
                  <Row gutter={[16, 16]}>
                    {paginatedCruises.map((cruise) => (
                      <Col key={cruise.id} xs={24} md={12} xl={8}>
                        <CruiseCard 
                          cruise={cruise} 
                          onFavoriteToggle={handleFavoriteToggle}
                        />
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <div className="space-y-6">
                    {paginatedCruises.map((cruise) => (
                      <CruiseCard 
                        key={cruise.id}
                        cruise={cruise} 
                        layout="list"
                        onFavoriteToggle={handleFavoriteToggle}
                      />
                    ))}
                  </div>
                )}
                
                {/* Pagination */}
                <div className="flex justify-center mt-8">
                  <Pagination 
                    current={currentPage}
                    pageSize={pageSize}
                    total={filteredCruises.length}
                    onChange={setCurrentPage}
                    showSizeChanger={false}
                  />
                </div>
              </div>
            ) : (
              <Card>
                <Empty 
                  description="No cruises found matching your criteria" 
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
              </Card>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CruiseList;
