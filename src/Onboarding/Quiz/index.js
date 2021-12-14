import React from 'react';
import { Input } from 'antd';
import './index.css';

const { Search } = Input;

const Quiz = ({ question }) => {
  const type = question.type;
  const query = question.qn;
  const title = question.title;
  const options = question.options;

  const handleClick = e => {
    const skinType = e.target.alt;
    const imgContainer = document.getElementsByClassName('img-active');
    Array.from(imgContainer).forEach((el) => {
      el.classList.remove('img-active');
    });
    console.log(skinType);
    e.target.parentElement.classList.toggle('img-active');
    if (question.id === 1) {
      localStorage.setItem("skin-type", skinType);
    }
  };

  const getOptions = () => {
    if (type === 'choice') {
      return (
        <div className='select-wrapper'>
          {options.map((item, index) => {
            return (
              <div className='select-container' key={index}>
                <div className='img-container'> <img src='/people-icon.png' onClick={handleClick} alt={item} /></div>
                <h5>{item}</h5>
              </div>
            )
          })}
        </div>
      );
    }
  }

  return (
    <div className='question-container'>
      {type === 'choice' && (
        <div className='single-question'>
          <img src='/skin-icon.png' alt="" />
          <h2>{title}</h2>
          <h5>{query}</h5>
          {getOptions()}
        </div>
      )}
      {type === 'input' && (
        <>
          <div className='single-question'>
            <img src='/skin-icon.png' alt="" />
            <h2>{title}</h2>
            <h5>{query}</h5>
            <Search placeholder='Example: Ressurection Hand Balm' style={{ width: 300 }} />
          </div>
          <p>Do this step later</p>
        </>
      )}
    </div >
  )
}

export default Quiz;