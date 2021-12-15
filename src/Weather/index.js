import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Today from './Today';
import './index.css';

const Weather = () => {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();
  const [cityId, setCityId] = useState();

  const fetchWeather = () => {
    const city = cityId;
    const API_KEY = 'd0f74ee2b252941d10e4a89d81fb639e';
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API_KEY}&units=metric`;
    axios.get(url)
      .then(res => setWeather(res.data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getLocation();
    getCityId();
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityId]);

  const getLocation = () => {
    const location = localStorage.getItem('location');
    if (location && location !== 'Melbourne') {
      setLocation(location);
    } else {
      setLocation('Melbourne');
    }
  }

  const getCityId = () => {
    const location = localStorage.getItem('location');
    if (location && location !== 'Melbourne') {
      setCityId('1850147');
    } else {
      setCityId('2158177');
    }
  }

  const currentTemp = weather ? weather.main.temp.toFixed() : '';
  const maxTemp = weather && weather.main.temp_max.toFixed();
  const minTemp = weather && weather.main.temp_min.toFixed();
  const humidity = weather ? weather.main.humidity.toFixed() : '';
  const description = weather && weather.weather[0].main;
  const icon = weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <>
      <div className='weather-panel'>
        <div className='panel-top'>
          <NavLink to="/findLocation" style={{ color: '#333' }}>
            <img className='profile-icon' src='/Vector.png' alt='' /><span>{location}</span><img className='profile-arrow' src='/arrow.png' alt='' />
          </NavLink>
        </div>
        <div className='panel-main'>
          <div className='panel-img'>
            <div className='img-left'>
              <img src={icon} alt="" />
            </div>
            <div className='img-right'>
              <h2 className='currentTemp'>{`${currentTemp}°`}</h2>
              <p>{description}</p>
              <p>{`${maxTemp}°/${minTemp}°`}</p>
            </div>
          </div>
          <div className='panel-bottom'>
            <div className='panel-bottom-single'>
              <div className='panel-bottom-title'>10</div>
              <div className='panel-bottom-content'>UV Index</div>
            </div>
            <div className='panel-bottom-single'>
              <div className='panel-bottom-title'>5</div>
              <div className='panel-bottom-content'>Air Quality</div>
            </div>
            <div className='panel-bottom-single'>
              <div className='panel-bottom-title'>{`${humidity}%`}</div>
              <div className='panel-bottom-content'>Humidity</div>
            </div>
          </div>
        </div>
      </div>
      <Today />
    </>
  )
}

export default Weather;