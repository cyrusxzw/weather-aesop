import React from 'react';
import { NavLink } from "react-router-dom";
import './index.css';

const Header = () => {
  return (
    <div className="home-top">
      <NavLink to="/profile">
        <div className="home-profile-container">
          <img src="/profile.png" alt="" />
        </div>
      </NavLink>
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
    </div>
  )
}

export default Header;