import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function SearchForm({ className }: { className?: string }) {
  const [, setLocation] = useLocation();
  
  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    travelers: "2 Adults",
  });

  const destinations = [
    { value: "", label: "Any Destination" },
    { value: "caribbean", label: "Caribbean" },
    { value: "mediterranean", label: "Mediterranean" },
    { value: "alaska", label: "Alaska" },
    { value: "europe", label: "Europe" },
  ];

  const travelers = [
    { value: "1 Adult", label: "1 Adult" },
    { value: "2 Adults", label: "2 Adults" },
    { value: "2 Adults, 1 Child", label: "2 Adults, 1 Child" },
    { value: "2 Adults, 2 Children", label: "2 Adults, 2 Children" },
    { value: "4 Adults", label: "4 Adults" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate query parameters
    const params = new URLSearchParams();
    if (formData.destination) params.append("destination", formData.destination);
    if (formData.checkIn) params.append("checkIn", formData.checkIn);
    if (formData.checkOut) params.append("checkOut", formData.checkOut);
    if (formData.travelers) params.append("travelers", formData.travelers);
    
    setLocation(`/cruises?${params.toString()}`);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`bg-white rounded-lg shadow-lg p-5 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="destination" className="block text-neutral-600 text-sm font-medium mb-2">
            Destination
          </Label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            className="block w-full rounded-md border-neutral-300 py-2 pl-3 pr-10 text-neutral-700 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
          >
            {destinations.map((destination) => (
              <option key={destination.value} value={destination.value}>
                {destination.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <Label htmlFor="checkIn" className="block text-neutral-600 text-sm font-medium mb-2">
            Date
          </Label>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                className="block w-full rounded-md border-neutral-300 py-2 pl-3 pr-10 text-neutral-700 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
              />
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="travelers" className="block text-neutral-600 text-sm font-medium mb-2">
            Travelers
          </Label>
          <div className="relative">
            <select
              id="travelers"
              name="travelers"
              value={formData.travelers}
              onChange={handleInputChange}
              className="block w-full rounded-md border-neutral-300 py-2 pl-3 pr-10 text-neutral-700 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
            >
              {travelers.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <Button type="submit" className="bg-primary hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition">
          Search Cruises
        </Button>
      </div>
    </form>
  );
}
