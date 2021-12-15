import React from 'react';
import Weather from '../Weather';
import Header from '../Header';
import BackgroundT from '../bg.jpg';
import BackgroundM from '../Sun.png';
import './index.css';

const Home = () => {
  const location = localStorage.getItem('location');
  const Background = location === 'Melbourne' ? BackgroundM : BackgroundT;

  return (
    <div className="home-wrapper" style={{ backgroundImage: `url(${Background})` }}>
      <Header />
      <div className="home-body">
        <h2 className="home-hello">Good morning, James</h2>
        <Weather />
      </div>
    </div>
  );
};

export default Home;
