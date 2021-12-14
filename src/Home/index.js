import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-top">
        <NavLink to="/profile">
          <div className="home-profile-container">
            <img src="/people_alt.png" alt="" />
          </div>
        </NavLink>
        <div className="logo">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
