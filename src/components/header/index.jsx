import React from 'react';
import './styles.css';
import { Logo } from '../logo';
import { NavbarHorizontal } from '../navbar-horizontal';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='header section'>
      <div className='header__container section__container'>
        <Link to='/' className='header__logo link'>
          <div className='header__logo-container'>
            <Logo />
          </div>
        </Link>
        <NavbarHorizontal />
        <button className='header__menu-button button'>
          <svg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd' d='M36 14L8 14V11L36 11V14Z' fill='lightgray' />
            <path fillRule='evenodd' clipRule='evenodd' d='M36 24L8 24V21L36 21V24Z' fill='lightgray' />
            <path fillRule='evenodd' clipRule='evenodd' d='M36 34L8 34V31L36 31V34Z' fill='lightgray' />
          </svg>
        </button>
      </div>
    </header>
  );
}
