import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type ChartMonthType = "january" | "february" | "march" | "april" | "may" | "june" | "july" | "august" | "september" | "october" | "november" | "december";

interface ChartData {
  month: ChartMonthType;
  data: { name: string; value: number }[];
  totalBookings: number;
  growthPercentage: number;
}

interface BookingChartProps {
  chartData: ChartData[];
}

const BookingChart = ({ chartData }: BookingChartProps) => {
  const [selectedMonth, setSelectedMonth] = useState<ChartMonthType>("march");
  
  const selectedData = chartData.find(item => item.month === selectedMonth) || chartData[0];
  
  return (
    <Card className="bg-white border border-neutral-200 rounded-md">
      <CardHeader className="flex items-center justify-between pb-6">
        <CardTitle className="font-semibold text-dark">Booking Statistics</CardTitle>
        <Select value={selectedMonth} onValueChange={(value: ChartMonthType) => setSelectedMonth(value)}>
          <SelectTrigger className="text-sm border-neutral-300 rounded-md py-1 px-2 text-neutral-700 w-32">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            {chartData.map((month) => (
              <SelectItem key={month.month} value={month.month}>
                {month.month.charAt(0).toUpperCase() + month.month.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-48 relative mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={selectedData.data}>
              <XAxis 
                dataKey="name" 
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, "Revenue"]}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
              <CartesianGrid 
                vertical={false} 
                stroke="#f0f0f0" 
              />
              <Bar 
                dataKey="value" 
                fill="var(--primary)" 
                barSize={20} 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="text-sm text-neutral-500 text-center">
          <p>Total bookings for {selectedMonth}: <span className="font-medium text-dark">${selectedData.totalBookings}</span></p>
          <p className="text-green-600 mt-1">
            <span className="font-medium">+{selectedData.growthPercentage}%</span> increased compared to last year
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingChart;
