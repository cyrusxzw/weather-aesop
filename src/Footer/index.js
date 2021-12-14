import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


const Footer = () => {
  return (
    <NavLink to="/products">
      <div className='footer-wrapper'>
        <span className='footer-nav'>Recommended for you</span>
      </div>
    </NavLink>
  )
}


export default Footer;