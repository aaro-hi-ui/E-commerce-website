import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Discover <span className="text-emerald-400">Quality</span> Shop with <span className="text-emerald-400">Confidence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our wide range of products from fashion to electronics and home goods.
              Quality products, competitive prices, fast delivery across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/products"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/#deals"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
              >
                View Deals
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Hero Shopping"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/60 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 font-medium">Special Offer</p>
                    <p className="text-emerald-600 font-bold">Get 20% off on your first order!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-emerald-400 font-bold text-xl md:text-2xl mb-2">10k+</div>
            <div className="text-gray-300 text-sm">Products</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-emerald-400 font-bold text-xl md:text-2xl mb-2">5k+</div>
            <div className="text-gray-300 text-sm">Customers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-emerald-400 font-bold text-xl md:text-2xl mb-2">15+</div>
            <div className="text-gray-300 text-sm">Brands</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-emerald-400 font-bold text-xl md:text-2xl mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Support</div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-emerald-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[50%] -left-[5%] w-[30%] h-[30%] bg-blue-500/20 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default Hero;