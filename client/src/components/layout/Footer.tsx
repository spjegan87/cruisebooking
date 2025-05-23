import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Pages */}
          <div>
            <h4 className="text-dark font-semibold text-lg mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Listings
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-dark font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Add Your Listing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Our Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-dark font-semibold text-lg mb-4">Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Hawaii
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Istanbul
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  San Diego
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Belgium
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Los Angeles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Newyork
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-dark font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Chat Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-500 hover:text-primary">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-wrap justify-between items-center border-t pt-8">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-dark font-poppins font-bold text-xl">
              Dreams<span className="text-primary">Tour</span>
            </Link>
            <div className="flex items-center mt-4">
              <span className="text-sm text-neutral-500 mr-3">Available on:</span>
              <a href="#" className="mr-2">
                <i className="fab fa-google-play text-neutral-700 text-xl"></i>
              </a>
              <a href="#">
                <i className="fab fa-apple text-neutral-700 text-xl"></i>
              </a>
            </div>
          </div>

          {/* Social media */}
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition duration-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition duration-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition duration-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition duration-200">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition duration-200">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t mt-8">
          <p className="text-neutral-500 text-sm">Copyright © 2023. All Rights Reserved, DreamsTour</p>
          <div className="flex mt-4 md:mt-0">
            <img src="https://via.placeholder.com/40x25?text=VISA" alt="Visa" className="h-6 mr-2" />
            <img src="https://via.placeholder.com/40x25?text=AMEX" alt="American Express" className="h-6 mr-2" />
            <img src="https://via.placeholder.com/40x25?text=DISC" alt="Discover" className="h-6 mr-2" />
            <img src="https://via.placeholder.com/40x25?text=MC" alt="Mastercard" className="h-6 mr-2" />
            <img src="https://via.placeholder.com/40x25?text=PP" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <a href="#" className="fixed bottom-6 right-6 bg-primary text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg transition-all hover:bg-primary/90">
        <i className="fas fa-arrow-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
