import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [travelers, setTravelers] = useState("2");

  const destinations = [
    { value: "", label: "Any Destination" },
    { value: "caribbean", label: "Caribbean" },
    { value: "mediterranean", label: "Mediterranean" },
    { value: "alaska", label: "Alaska" },
    { value: "europe", label: "Europe" },
  ];

  const travelerOptions = [
    { value: "1", label: "1 Adult" },
    { value: "2", label: "2 Adults" },
    { value: "3", label: "2 Adults, 1 Child" },
    { value: "4", label: "2 Adults, 2 Children" },
  ];

  const handleSearch = () => {
    toast({
      title: "Searching Cruises",
      description: `Searching for cruises to ${destination || 'all destinations'} on ${date} for ${travelers} traveler(s).`,
    });
    setLocation("/cruises");
  };

  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800')` }}>
      <div className="absolute inset-0 bg-dark/50"></div>
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-white font-poppins font-bold text-4xl md:text-5xl mb-4">Discover the World's Most Breathtaking Cruises</h1>
          <p className="text-white/80 text-lg mb-8">Unforgettable journeys across oceans and seas with luxury accommodations and world-class service</p>
        </div>
        
        {/* Search Form */}
        <Card className="max-w-4xl shadow-lg">
          <CardContent className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="block text-neutral-600 text-sm font-medium mb-2">Destination</Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="block text-neutral-600 text-sm font-medium mb-2">Date</Label>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <input
                      type="date"
                      className="block w-full rounded-md border border-neutral-300 py-2 pl-3 pr-10 focus:border-secondary focus:outline-none focus:ring-secondary"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <Label className="block text-neutral-600 text-sm font-medium mb-2">Travelers</Label>
                <Select value={travelers} onValueChange={setTravelers}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select travelers" />
                  </SelectTrigger>
                  <SelectContent>
                    {travelerOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6"
                onClick={handleSearch}
              >
                Search Cruises
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
