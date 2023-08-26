import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className='hero section'>
      <div className='hero__container section__container'>
        <div className='hero__space-object-image'></div>
        <div className='hero__description'>
          <h1 className='hero__title text'>
            <span className='hero__span'>Путешествие</span> на красную планету
          </h1>
          <div className='hero__start'>
            <div className='hero__start-button'>
              <button className='hero__start-button-container button text'>Начать путешествие</button>
            </div>
            <div className='hero__start-line' />
          </div>
        </div>
        <div className='hero__summary'>
          <ul className='hero__summary-list'>
            <li className='hero__summary-item'>
              <Link to='/about' className='text'>
                мы <span className='hero__span'>1</span> на рынке
              </Link>
            </li>
            <li className='hero__summary-item'>
              <Link to='/guarantee' className='text'>
                гарантируем <span className='hero__span'>50%</span> безопасность
              </Link>
            </li>
            <li className='hero__summary-item'>
              <Link to='/technology' className='text'>
                календарик за <span className='hero__span'>2001г.</span> в подарок
              </Link>
            </li>
            <li className='hero__summary-item'>
              <Link to='/schedule' className='text'>
                путешествие <span className='hero__span'>597</span> дней
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
