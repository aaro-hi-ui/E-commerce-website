import React from 'react';
import ProductGrid from '../product/ProductGrid';
import { mockProducts } from '../../data/mockData';

const NewArrivals: React.FC = () => {
  // Filter products to get only the new ones
  const newProducts = mockProducts.filter(product => product.isNew).slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">New Arrivals</h2>
          <p className="text-gray-600">The latest products just for you</p>
        </div>
        <a
          href="/products?sort=newest"
          className="text-emerald-600 font-medium hover:text-emerald-700 hidden md:block"
        >
          View All
        </a>
      </div>
      
      <ProductGrid products={newProducts} />
      
      <div className="text-center mt-8 md:hidden">
        <a
          href="/products?sort=newest"
          className="inline-block bg-white border border-emerald-600 text-emerald-600 font-medium py-2 px-6 rounded-full hover:bg-emerald-50 transition-colors"
        >
          View All New Arrivals
        </a>
      </div>
    </div>
  );
};

export default NewArrivals;