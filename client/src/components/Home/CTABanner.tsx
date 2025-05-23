import { Link } from 'wouter';

const CTABanner = () => {
  return (
    <div className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to set sail in luxury?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Book your dream cruise today and enjoy exclusive deals, personalized service, and unforgettable experiences.</p>
        <Link href="/cruise-list" className="inline-block bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-md font-bold transition">
          Find Your Perfect Cruise
        </Link>
      </div>
    </div>
  );
};

export default CTABanner;
