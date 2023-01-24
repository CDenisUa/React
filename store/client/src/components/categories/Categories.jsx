// Core
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import './Categories.scss';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="item-block sale">
            <div className="shadow" />
            <img src='/images/categories/categories-sale.webp' alt='category-sale' className="sale" />
            <button>
                <Link className="link" to="/products/1">Sale</Link>
            </button>
        </div>
        <div className="item-block women">
            <div className="shadow" />
            <img src='/images/categories/categories-women.jpeg' alt='category-women' className="women" />
            <button>
                <Link className="link" to="/products/2">Women</Link>
            </button>
        </div>
        <div className="item-block new-season">
            <div className="shadow" />
            <img src='/images/categories/categories-new-season.jpeg' alt='categories' className="new-season" />
            <button>
                <Link className="link" to="/products/3">New Season</Link>
             </button>
        </div>
        <div className="item-block men">
            <div className="shadow" />
            <img src='/images/categories/categories-men.jpeg' alt='categories' className="men" />
            <button>
                <Link className="link" to="/products/4">Men</Link>
            </button>
        </div>
        <div className="item-block accessories">
            <div className="shadow" />
            <img src='/images/categories/categories-accessories.webp' alt='categories' className="accessories" />
            <button>
                <Link className="link" to="/products/5">Accessories</Link>
            </button>
        </div>
        <div className="item-block shoes">
            <div className="shadow" />
            <img src='/images/categories/categories-shoes.webp' alt='categories' className="shoes" />
            <button>
                <Link className="link" to="/products/6">Shoes</Link>
            </button>
        </div>
    </div>
  )
}

export default Categories;