import React, { Fragment, useRef, useEffect } from 'react';
import { Button } from 'antd';
import Quiz from './Quiz';
import './index.css';

const Onboarding = () => {
  const questions = [
    {
      id: 1,
      type: 'choice',
      title: 'Skin type',
      qn: 'How would you describe the skin on your face?',
      options: [
        'Normal',
        'Oily',
        'Dry',
        'Combination',
      ]
    },
    {
      id: 2,
      type: 'input',
      title: 'My products',
      qn: 'Add your current Aesop products to your profile',
    },
    {
      id: 3,
      type: 'choice',
      title: 'Others',
      qn: 'What is balabala?',
      options: [
        'A',
        'B',
        'C',
        'D'
      ]
    },
  ]

  const myRef = useRef(null);
  const total = questions.length;
  const questionsHtml = document.getElementsByClassName('question-container');
  const buttons = document.getElementsByClassName('next-btn');

  useEffect(() => {
    questionsHtml[0].style.display = 'block';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (id) => {
    if (id < total) {
      questionsHtml[id - 1].style.display = 'none';
      buttons[id - 1].style.display = 'none';
      questionsHtml[id].style.display = 'block';
      buttons[id].style.display = 'block';
    } else {
      myRef.current.style.display = 'none';
      localStorage.setItem('finishOnboarding', true);
    }
  }

  return (
    <div className='onboarding-wrapper' ref={myRef}>
      <p className='skip'>Skip</p>
      <div className='question-panel'>
        {
          questions.map((item, index) => {
            return (
              <Fragment>
                <Quiz key={index} question={item} />
                <Button className={`next-btn btn-${item.id}`} onClick={() => handleClick(item.id)}>{index === total - 1 ? 'Finsh' : 'Continue'}</Button>
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default Onboarding;