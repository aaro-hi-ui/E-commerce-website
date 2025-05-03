import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
  path: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, count, path }) => {
  return (
    <Link
      to={path}
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="relative pb-[75%] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm">{count} Products</span>
          <span className="flex items-center text-emerald-300 text-sm font-medium group-hover:translate-x-1 transition-transform">
            Shop Now <ArrowRight className="h-4 w-4 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;