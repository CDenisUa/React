// Core
import React from 'react';
// Styles
import './Home.scss';
// Components
import { FeaturedProducts, Slider } from 'components';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type='featured' />
      <FeaturedProducts type='trending' />
    </div>
  )
}

export default Home;