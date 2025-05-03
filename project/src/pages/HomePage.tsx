import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import NewArrivals from '../components/home/NewArrivals';
import PromoSection from '../components/home/PromoSection';
import DealsSection from '../components/home/DealsSection';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Aventramart - Your One-Stop Shopping Destination';
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
      <PromoSection />
      <DealsSection />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;