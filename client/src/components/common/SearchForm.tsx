import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

interface SearchFormProps {
  isHero?: boolean;
  isCompact?: boolean;
}

export default function SearchForm({ isHero = false, isCompact = false }: SearchFormProps) {
  const [, setLocation] = useLocation();
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('2 Adults');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    if (destination) searchParams.append('destination', destination);
    if (departDate) searchParams.append('departDate', departDate);
    if (returnDate) searchParams.append('returnDate', returnDate);
    if (travelers) searchParams.append('travelers', travelers);
    
    setLocation(`/cruises?${searchParams.toString()}`);
  };

  if (isCompact) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Destination</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-gray-100"
              placeholder="Any Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Depart Date</label>
            <input 
              type="date" 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-gray-100"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Return Date</label>
            <input 
              type="date" 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-gray-100"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <Button className="w-full" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isHero ? 'bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 max-w-4xl' : 'w-full'}`}>
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Destination</label>
            <div className="relative">
              <select 
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 py-2 pl-3 pr-10 text-gray-700 dark:text-gray-300 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm border dark:bg-gray-900"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">Any Destination</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Alaska">Alaska</option>
                <option value="Europe">Europe</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Hawaii">Hawaii</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <input 
                  type="date" 
                  className="block w-full rounded-md border-gray-300 dark:border-gray-700 py-2 pl-3 pr-10 text-gray-700 dark:text-gray-300 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm border dark:bg-gray-900"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                />
              </div>
              <div className="relative flex-1">
                <input 
                  type="date" 
                  className="block w-full rounded-md border-gray-300 dark:border-gray-700 py-2 pl-3 pr-10 text-gray-700 dark:text-gray-300 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm border dark:bg-gray-900"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-end">
            <Button type="submit" className="w-full">
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
