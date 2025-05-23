import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Pages */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Pages</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Our Team</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Pricing Plans</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Gallery</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Settings</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Profile</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Listings</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Affiliate Program</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Add Your Listing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Our Partners</Link></li>
            </ul>
          </div>
          
          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Destinations</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Hawaii</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Istanbul</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">San Diego</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Belgium</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Los Angeles</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Newyork</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Legal Notice</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Terms and Conditions</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Chat Support</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary text-sm">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-dark font-bold text-xl">Dreams<span className="text-primary">Tour</span></span>
            </Link>
            <div className="ml-6 flex items-center">
              <span className="text-xs text-gray-500">Available on:</span>
              <a href="#" className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600">
                  <path d="M18.7118,10.8808L5.4255,2.9757c-0.188-0.1116-0.4169-0.1125-0.6056-0.0026C4.6313,3.0829,4.5,3.285,4.5,3.5v17c0,0.215,0.1313,0.4171,0.3199,0.5269c0.0941,0.0558,0.2001,0.0835,0.3059,0.0835c0.1031,0,0.2057-0.0264,0.2997-0.0791L18.744,13.125H18.744c0.1885-0.1111,0.3059-0.3149,0.3059-0.5328C19.0499,12.3741,18.9325,10.9918,18.7118,10.8808z"></path>
                </svg>
              </a>
              <a href="#" className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600">
                  <path d="M17.5968,11.5021l-2.1116-3.0885c-0.1299-0.1897-0.3493-0.3022-0.5812-0.3022h-5.7958c-0.2319,0-0.4523,0.1126-0.5812,0.3022l-2.1648,3.164c-0.1289,0.1888-0.1299,0.436-0.001,0.6258l2.1658,3.1781c0.1289,0.1888,0.3493,0.3022,0.5812,0.3022h5.7968c0.2319,0,0.4523-0.1135,0.5812-0.3022l2.1116-3.0885C17.7277,11.9371,17.7277,11.6899,17.5968,11.5021z M7.6858,11.5425l1.0762-1.5879c0.065-0.0954,0.1748-0.1516,0.2905-0.1516h2.9057c0.1157,0,0.2255,0.0562,0.2905,0.1516l1.0762,1.5879c0.065,0.0954,0.065,0.2183,0,0.3138l-1.0762,1.5879c-0.065,0.0954-0.1748,0.1526-0.2905,0.1526H9.0525c-0.1157,0-0.2255-0.0573-0.2905-0.1526l-1.0762-1.5879C7.6209,11.7609,7.6209,11.638,7.6858,11.5425z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
        
        {/* Copyright & Payment Methods */}
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">Copyright © 2023. All Rights Reserved, DreamsTour</p>
            <div className="flex space-x-3">
              <div className="text-gray-400"><i className="fab fa-cc-visa fa-lg"></i></div>
              <div className="text-gray-400"><i className="fab fa-cc-amex fa-lg"></i></div>
              <div className="text-gray-400"><i className="fab fa-cc-discover fa-lg"></i></div>
              <div className="text-gray-400"><i className="fab fa-cc-mastercard fa-lg"></i></div>
              <div className="text-gray-400"><i className="fab fa-cc-paypal fa-lg"></i></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
