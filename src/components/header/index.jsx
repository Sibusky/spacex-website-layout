import React from 'react';
import './styles.css';
import { Logo } from '../logo';
import { NavbarHorizontal } from '../navbar-horizontal';

export function Header() {
  return (
    <header className='header section'>
      <div className='header__container section__container'>
        <Logo />
        <NavbarHorizontal />
        <button className='header__menu-button button'></button>
      </div>
    </header>
  );
}
