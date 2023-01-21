// Core
import React from 'react';
// Styles
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Repellat iste vero placeat explicabo, ipsum nemo qui, temporibus 
            minus pariatur repudiandae consequatur laboriosam eaque dicta 
            ducimus unde soluta fuga aliquid iure!
          </p>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Fugiat consequatur facilis sed quo nam id dolore ipsum, 
            labore dignissimos! Consectetur!
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Super Store</span>
          <p className="copyright">&#169;	Copyright 2023. All Rights Reserved</p>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer