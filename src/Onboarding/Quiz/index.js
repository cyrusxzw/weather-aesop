import React from 'react';
import { Input, Button } from 'antd';
import './index.css';

const { Search } = Input;

const Quiz = ({ question }) => {
  const type = question.type;
  const query = question.qn;
  const title = question.title;
  const options = question.options;

  const handleClick = e => {
    localStorage.setItem('skin-type', e.target.dataset.skintype);
  };

  const getOptions = () => {
    if (type === 'choice') {
      return (
        <div className='select-wrapper'>
          {options.map((item, index) => {
            return (
              <div className='select-container' key={index}>
                <Button onClick={handleClick} data-skintype={item}>{item}</Button>
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
          <img src='/Group-976.png' alt="" />
          <h2>{title}</h2>
          <h5>{query}</h5>
          {getOptions()}
        </div>
      )}
      {type === 'input' && (
        <>
          <div className='single-question'>
            <img src='/Group-976.png' alt="" />
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