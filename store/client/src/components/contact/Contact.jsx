// Core
import { Google, Instagram, Twitter, Pinterest, Facebook } from '@mui/icons-material';
import React from 'react';
// Styles
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder="Enter your e-mail..." />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <Facebook className='facebook' />
                <Instagram className='instagram' />
                <Twitter className='twitter' />
                <Google className='google' />
                <Pinterest className='pinterest' />
            </div>
        </div>
    </div>
  )
}

export default Contact;
