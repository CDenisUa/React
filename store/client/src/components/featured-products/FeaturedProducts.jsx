// Core
import React from 'react';
// Styles
import './FeaturedProducts.scss';
// Mock
import { featureProductsMockData } from 'mock/featuredProductsMock';
// Components
import { Card } from 'components';

const FeaturedProducts = ({ type }) => {
  return (
    <div className='featured-products'>
        <div className="top">
            <h1>{ type } product</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Velit placeat quasi, omnis fuga quo delectus nemo 
                voluptate aliquam laboriosam cumque, quia vitae rem 
                atque voluptatibus ex maiores voluptatem dignissimos hic.
            </p>
        </div>
        <div className="bottom">
            {/*  Mock render  */}
            { 
                featureProductsMockData.map(item => 
                    <Card 
                        key={item.id} 
                        item={item}
                    />
                )
            }
        </div>
    </div>
  )
}

export default FeaturedProducts;
