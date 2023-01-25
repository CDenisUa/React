// Core
import React from 'react';
// Styles
import './Home.scss';
// Components
import { 
  Categories, 
  FeaturedProducts, 
  Slider,
  Contact 
 } from 'components';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type='featured' />
      <Categories />
      <FeaturedProducts type='trending' />
      <Contact />
    </div>
  )
}

export default Home;