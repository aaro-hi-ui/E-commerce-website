import React from 'react';
import CategoryCard from '../product/CategoryCard';

const FeaturedCategories: React.FC = () => {
  const categories = [
    {
      name: 'Fashion',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      count: 1250,
      path: '/products/fashion',
    },
    {
      name: 'Electronics',
      image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      count: 850,
      path: '/products/electronics',
    },
    {
      name: 'Home Goods',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      count: 920,
      path: '/products/home',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
      <p className="text-gray-600 mb-8">Explore our wide range of products by category</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
            count={category.count}
            path={category.path}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;