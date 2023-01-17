// Core
import React from 'react';
import { Link } from "react-router-dom";
// Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// Styles
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="item">
          <img src="/images/en.png" alt="lang" />
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <span>USD</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <Link to='/products/1'> Women </Link>
          <Link to='/products/2'> Men </Link>
          <Link to='/products/3'> Children </Link>
        </div>
      </div>
      <div className="center">
        <Link to='/'>Super Store</Link>
      </div>
      <div className="right">
        <Link to='/'> Home Page </Link>
        <Link to='/'> About </Link>
        <Link to='/'> Contact </Link>
        <Link to='/'> Stores </Link>
        <div className="icons">
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar