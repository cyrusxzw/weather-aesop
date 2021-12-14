import React from 'react';
import { Button } from 'antd';
import {
  useNavigate
} from 'react-router-dom';
import './index.css';

const Information = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/profile');
  }

  return (
    <>
      <div className='top-panel'><img onClick={handleBack} src="/back.png" alt="" /><h1>Edit profile</h1></div>
      <div className='info-wrapper'>
        <div className='single-section'>
          <div className='section-header'>
            <h3 className='title'>
              Personal information
            </h3>
            <Button>Edit</Button>
          </div>
          <div>
            <div>Mr XXX<br />xxx.xx@gmail.com</div>
          </div>
        </div>
        <div className='single-section'>
          <div className='section-header'>
            <h3 className='title'>
              Skin type
            </h3>
            <Button>Edit</Button>
          </div>
          <div>
            <div>{localStorage.getItem('skin-type')}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Information;