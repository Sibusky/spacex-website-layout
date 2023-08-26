import React from 'react';
import './styles.css';
import { NavbarVertical } from '../navbar-vertical';

export function Menu({ isOpen, handleClose }) {
  return (
    <div
      className={`menu ${isOpen ? 'menu_opened' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className={`menu__container ${isOpen ? 'menu__container_opened' : ''}`}>
        <button className='menu__button-close' onClick={handleClose}>
          <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect
              x='7.16016'
              y='9.28249'
              width='3'
              height='22'
              transform='rotate(-45 7.16016 9.28249)'
              fill='#2E3D41'
            />
            <rect
              x='22.7168'
              y='7.16117'
              width='3'
              height='22'
              transform='rotate(45 22.7168 7.16117)'
              fill='#2E3D41'
            />
          </svg>
        </button>
        <NavbarVertical handleClose={handleClose} />
      </div>
    </div>
  );
}
