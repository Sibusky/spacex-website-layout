import React from 'react';
import './styles.css';
import { Link, useLocation } from 'react-router-dom';

export function Hero({ textBig, textSmall, fetchContent }) {
  let { pathname } = useLocation();
  const query = pathname.slice(1) ? pathname.slice(1) : 'space';

  return (
    <section className='hero section'>
      <div className='hero__container section__container'>
        <div className='hero__space-object-image'></div>
        <div className='hero__description'>
          <h1 className='hero__title text'>
            <span className='hero__span'>{textBig}</span>
            <br />
            {textSmall}
          </h1>
          <div className='hero__start'>
            <div className='hero__start-button'>
              <svg
                className='hero__start-svg'
                width='192'
                height='38'
                viewBox='0 0 192 38'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <defs>
                  <filter id='shadow' class='shadow'>
                    <feDropShadow dx='0' dy='0' stdDeviation='2' floodColor='white' />
                  </filter>
                </defs>
                <path d='M1 31.7059V37H6.27778' stroke='white' filter='url(#shadow)' />
                <path d='M191 6.2941L191 0.99998L185.722 0.99998' stroke='white' filter='url(#shadow)' />
              </svg>
              <button
                className='hero__start-button-container button text'
                onClick={() => fetchContent(query)}
              >
                Начать путешествие
              </button>
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
