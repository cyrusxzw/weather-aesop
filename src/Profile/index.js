import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


const Profile = () => {

  return (
    <div className='profile-wrapper'>
      <div className='profile-head'>
        <h1>
          James Smith
        </h1>
        <div className='profile-top'>
          <div className='top-single-section'>
            <img src="/top-icon.png" alt="" />
            <h5>Skin type</h5>
          </div>
          <div className='top-single-section'>
            <img src="/top-icon.png" alt="" />
            <h5>Location</h5>
          </div>
          <div className='top-single-section'>
            <img src="/top-icon.png" alt="" />
            <h5>Skin type</h5>
          </div>
        </div>
      </div>
      <div className='profile-content'>
        <div className='profile-block'>
          <img className='profile-icon' src='/notifications.png' alt='' /><span>Notifications</span><img className='profile-arrow' src='/arrow.png' alt='' />
        </div>
        <div className='profile-block'>
          <NavLink to="/findLocation" style={{ color: '#333' }}>
            <img className='profile-icon' src='/Vector.png' alt='' /><span>Find a new location</span><img className='profile-arrow' src='/arrow.png' alt='' />
          </NavLink>
        </div>
        <div className='profile-block'>
          <span>Your current products</span><img className='profile-arrow' src='/arrow.png' alt='' />
        </div>
        <div className='profile-block'>
          <NavLink to="/editPorfile" style={{ color: '#333' }}>
            <span>Edit profile</span><img className='profile-arrow' src='/arrow.png' alt='' />
          </NavLink>
        </div>
      </div>
    </div>
  )
}


export default Profile;