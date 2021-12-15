import React from "react";
import Weather from "../Weather";
import Header from "../Header";
import './index.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <div className="home-body">
        <h2 className="home-hello">Good morning, James</h2>
        <Weather />
      </div>
    </div>
  );
};

export default Home;
