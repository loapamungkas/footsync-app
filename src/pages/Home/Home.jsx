import React from 'react';
import { assets, brand_list, products_list } from '../../assets/menu';
import Banner from '../../components/Banner';
import Categories from '../../components/Categories';
import ProductsList from '../../components/ProductsList';
import Testimonial from '../../components/Testimonial';
import Services from '../../components/Services';

const Home = () => {
  return (
    <>
      <Banner assets={assets} />

      <Categories brand_list={brand_list} />

      <ProductsList products_list={products_list} />

      <Testimonial />
      <Services />
    </>
  );
};

export default Home;
