import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import {
  useNavigate
} from 'react-router-dom';
import Map from '../Information/Map';
import './index.css';


const Location = () => {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/profile');
  }

  const [mapOpen, setMapOpen] = useState(false);
  const [location, setLocation] = useState();

  const onFinish = (values) => {
    setLocation(values.location);
    setMapOpen(true);
  };

  const getLocation = () => {
    const location = localStorage.getItem('location');
    if (location && location !== 'Melbourne') {
      return location;
    } else {
      return 'Melbourne';
    }
  }

  useEffect(() => {
    setLocation(getLocation());
  }, [])

  return (
    <>
      <div className='top-panel'><img onClick={handleBack} src="/back.png" alt="" /><h1>Find a location</h1></div>
      <div className='location-section'>
        <div className='img-location'>
          <div className='location-border'>
            <img src="/location.png" alt="" />
          </div>
          <p>Your current location is {location}</p>
        </div>
        <div className='location-search'>
          <Form
            name="basic"
            onFinish={onFinish}
          >
            <Form.Item
              name="location"
            >
              <Input placeholder={getLocation()} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search new location
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Map mapOpen={mapOpen} location={location} />
      </div>
    </>
  )
}


export default Location;