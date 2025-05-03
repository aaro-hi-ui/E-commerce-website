import React from 'react';
import ProductGrid from '../product/ProductGrid';
import { mockProducts } from '../../data/mockData';

const DealsSection: React.FC = () => {
  // Filter products to get only the ones with discounts
  const discountedProducts = mockProducts
    .filter(product => product.discount > 0)
    .slice(0, 4);

  return (
    <div id="deals" className="container mx-auto px-4 py-16">
      <div className="bg-gray-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Hot Deals <span className="text-red-500">& Promotions</span>
          </h2>
          <p className="text-gray-600">Special offers to save you more</p>
        </div>
        
        <ProductGrid products={discountedProducts} />
        
        <div className="text-center mt-8">
          <a
            href="/products?discount=true"
            className="inline-block bg-emerald-600 text-white font-medium py-3 px-6 rounded-full hover:bg-emerald-700 transition-colors"
          >
            View All Deals
          </a>
        </div>
      </div>
    </div>
  );
};

export default DealsSection;