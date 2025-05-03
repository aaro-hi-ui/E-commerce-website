import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, Zap } from 'lucide-react';

const PromoSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Summer Collection <span className="text-emerald-600">2025</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Discover our newest summer collection with the latest trends and styles.
              Perfect for the season with breathable fabrics and vibrant colors.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <Truck className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fast & Free Shipping</h3>
                  <p className="text-gray-600 text-sm">Free shipping on all orders over ₹4,999</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <Clock className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">30-Day Returns</h3>
                  <p className="text-gray-600 text-sm">Shop with confidence with our easy return policy</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <Zap className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">New Arrivals Daily</h3>
                  <p className="text-gray-600 text-sm">Fresh styles updated regularly</p>
                </div>
              </div>
            </div>
            
            <Link
              to="/products/fashion"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
            >
              Shop Collection
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Summer Collection"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-4 right-4 bg-emerald-600 text-white text-lg font-bold px-4 py-2 rounded-full">
                Up to 40% Off
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;