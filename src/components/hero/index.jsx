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
            <span className='hero__span'>Путешествие</span>
            <br />
            на красную планету
          </h1>
          <div className='hero__start'>
            <div className='hero__start-button'>
              <button className='hero__start-button-container button text'>Начать путешествие</button>
            </div>
          </div>
          <div className='hero__line' />
        </div>
        <div className='hero__summary'>
          <ul className='hero__summary-list'>
            <li className='hero__summary-item hero__summary-item-1'>
              <Link to='/about' className='hero__summary-item-text text'>
                мы
                <br />
                <br />
                <span className='hero__span'>1</span>
                <br />
                на рынке
              </Link>
            </li>
            <li className='hero__summary-item hero__summary-item-2'>
              <Link to='/guarantee' className='hero__summary-item-text text'>
                гарантируем
                <br />
                <br />
                <span className='hero__span'>50%</span>
                <br />
                безопасность
              </Link>
            </li>
            <li className='hero__summary-item hero__summary-item-3'>
              <Link to='/technology' className='hero__summary-item-text text'>
                календарик за
                <br />
                <br />
                <span className='hero__span'>
                  2001<span className='hero__span_small'>г.</span>
                </span>
                <br />в подарок
              </Link>
            </li>
            <li className='hero__summary-item hero__summary-item-4'>
              <Link to='/schedule' className='hero__summary-item-text text'>
                путешествие
                <br />
                <br />
                <span className='hero__span'>597</span>
                <br />
                дней
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
