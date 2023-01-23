// Core
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import './Card.scss';

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
      <div className="card">
        <div className="image">
          {
            item.isNew && <span>New Season</span>
          }
          <img 
            src={item.img} 
            alt="product" 
            className="main-image" 
          />
          <img 
            src={item.img} 
            alt="product" 
            className="second-image" 
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
      </div>
    </Link>
  )
}

export default Card;