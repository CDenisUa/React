// Core
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// Styles
import './Products.scss';
// Components
import { List } from 'components';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [ maxPrice, setMaxPrice ] = useState(1000);
  const [ sort, setSort ] = useState(null);

  return (
    <div className='products'>
      <div className="left">
        <div className="filter-item">
          <h2>Product Categories</h2>
          <div className="input-item">
            <input id='1' value={1} type="checkbox" />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="input-item">
            <input id='2' value={2} type="checkbox" />
            <label htmlFor="1">Skirts</label>
          </div>
          <div className="input-item">
            <input id='3' value={3} type="checkbox" />
            <label htmlFor="1">Coats</label>
          </div>
        </div>
        <div className="filter-item">
          <h2>Filter by price</h2>
          <span>0</span>
          <input 
            type='range' 
            min='0' 
            max='1000'  
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>
        <div className="filter-item">
          <h2>Sort by</h2>
          <div className="input-item">
            <input 
              type="radio" 
              id='asc'  
              value='asc' 
              name='price'
              onChange={(e) => setSort('asc') }
             />
            <label htmlFor="asc">Price (Lowest first)</label> 
          </div>
          <div className="input-item">
            <input 
              type="radio" 
              id='desc'  
              value='desc' 
              name='price' 
              onChange={(e) => setSort('desc') }
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/images/products/products-1074535.jpeg" alt="item" />
        <List 
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
        />
      </div>
    </div>
  )
}

export default Products;