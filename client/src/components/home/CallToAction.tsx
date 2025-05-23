import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative wave pattern */}
          <div className="absolute right-0 bottom-0 w-64 h-64 opacity-10">
            <i className="fas fa-water text-9xl"></i>
          </div>
          
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Set Sail to Paradise?</h2>
            <p className="text-white/80 text-lg mb-6">Book your dream cruise vacation today and get exclusive early booking discounts!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="white">
                <Link href="/cruises">Browse Cruises</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
