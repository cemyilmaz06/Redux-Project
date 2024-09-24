// src/pages/Home.jsx
import React from 'react';


import CategoryBar from '../component/CategoryBar';
import ProductCard from '../component/ProductCard';


const Home = () => {
  return (
    <div>
      <CategoryBar/>
      <ProductCard/>
    </div>
  );
};

export default Home;
