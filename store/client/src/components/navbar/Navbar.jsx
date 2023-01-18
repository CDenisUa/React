// Core
import React from 'react';
import { Link } from "react-router-dom";
// Styles
import './Navbar.scss';
// Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
        <div className="item">
          <img src="/images/en.png" alt="lang" />
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <span>USD</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="left">
          <Link className='link' to='/products/1'> Women </Link>
          <Link className='link' to='/products/2'> Men </Link>
          <Link className='link' to='/products/3'> Children </Link>
        </div>
      </div>
      <div className="center">
        <Link className='link' to='/'>Super Store</Link>
      </div>
      <div className="right">
        <Link className='link' to='/'> Home Page</Link>
        <Link className='link' to='/'> About </Link>
        <Link className='link' to='/'> Contact </Link>
        <Link className='link' to='/'> Stores </Link>
        <div className="icons">
          <div className="item">
            <SearchIcon />
          </div>
          <div className="item">
            <PersonOutlineOutlinedIcon />
          </div>
          <div className="item">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className='item cart-icon'>
            <ShoppingCartOutlinedIcon />
            <span>2</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar