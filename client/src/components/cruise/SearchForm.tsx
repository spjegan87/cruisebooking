import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Select, DatePicker, Button, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import moment, { Moment } from 'moment';

const { Option } = Select;
const { RangePicker } = DatePicker;

interface SearchFormProps {
  className?: string;
  destinations: { label: string; value: string }[];
  vertical?: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({
  className,
  destinations,
  vertical = false,
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Moment | null>(null);

  const disablePastDates = (current: Moment) => {
    return current && current < moment().startOf('day');
  };

  const disableCheckoutDates = (current: Moment) => {
    if (!checkInDate) return disablePastDates(current);
    return current && current < checkInDate;
  };

  const onCheckInChange = (date: Moment | null) => {
    setCheckInDate(date);
    form.setFieldValue('dateRange', [date, null]);
  };

  const handleSearch = (values: any) => {
    const queryParams = new URLSearchParams();

    if (values.destination) {
      queryParams.append("destination", values.destination);
    }

    if (values.dateRange && Array.isArray(values.dateRange) && values.dateRange.length === 2) {
      const [startDate, endDate] = values.dateRange;
      if (startDate?.isValid() && endDate?.isValid()) {
        queryParams.append("startDate", startDate.format("YYYY-MM-DD"));
        queryParams.append("endDate", endDate.format("YYYY-MM-DD"));
      }
    }

    if (values.passengers) {
      queryParams.append("passengers", values.passengers);
    }

    navigate(`/cruises?${queryParams.toString()}`);
  };

  return (
    <Card className={className}>
      <Form
        form={form}
        layout={vertical ? "vertical" : "horizontal"}
        onFinish={handleSearch}
        className={`${vertical ? "" : "flex flex-wrap"}`}
      >
        <Form.Item
          name="destination"
          label="Destination"
          className={vertical ? "w-full" : "flex-1 mr-4"}
        >
          <Select placeholder="Any Destination">
            <Option value="">Any Destination</Option>
            {destinations.map((destination) => (
              <Option key={destination.value} value={destination.value}>
                {destination.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="dateRange"
          label="Date"
          className={vertical ? "w-full" : "flex-1 mr-4"}
        >
          <RangePicker
                className="w-full"
                format="YYYY-MM-DD"
                placeholder={['Check-in', 'Check-out']}
                disabledDate={(current) => {
                  // Can not select days before today
                  return current && current < moment().startOf('day');
                }}
                onChange={(dates) => {
                  if (dates && dates[0]) {
                    onCheckInChange(dates[0]);
                  }
                }}
              />
        </Form.Item>

        <Form.Item
          name="passengers"
          label="Travelers"
          className={vertical ? "w-full" : "flex-1 mr-4"}
        >
          <Select placeholder="Select Travelers">
            <Option value="1">1 Adult</Option>
            <Option value="2">2 Adults</Option>
            <Option value="3">2 Adults, 1 Child</Option>
            <Option value="4">2 Adults, 2 Children</Option>
            <Option value="5">4 Adults</Option>
            <Option value="6">4 Adults, 2 Children</Option>
          </Select>
        </Form.Item>

        <Form.Item
          className={vertical ? "w-full" : "flex items-end mb-4"}
        >
          <Button 
            type="primary" 
            htmlType="submit" 
            icon={<SearchOutlined />}
            className="w-full"
          >
            Search
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SearchForm;