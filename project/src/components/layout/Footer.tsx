import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, CreditCard, Truck, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-10 mb-10">
          <div className="flex items-center justify-center md:justify-start">
            <CreditCard className="h-8 w-8 text-emerald-400 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Secure Payment</h3>
              <p className="text-gray-400 text-sm">Multiple payment options</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Truck className="h-8 w-8 text-emerald-400 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">Nationwide shipping</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Shield className="h-8 w-8 text-emerald-400 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Buyer Protection</h3>
              <p className="text-gray-400 text-sm">Easy returns & refunds</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Aventramart</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for fashion, electronics, and home goods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/fashion" className="text-gray-400 hover:text-white transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/products/electronics" className="text-gray-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products/home" className="text-gray-400 hover:text-white transition-colors">
                  Home Goods
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/#deals" className="text-gray-400 hover:text-white transition-colors">
                  Deals & Promotions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Commerce St, Shopping City, SC 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-gray-400">support@aventramart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Aventramart. All rights reserved.</p>
          <p className="mt-2">
            Payment methods accepted: Visa, Mastercard, American Express, PayPal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;