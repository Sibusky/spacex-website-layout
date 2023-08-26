import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

export function NavbarVertical({ handleClose }) {
  return (
    <nav className='navbar-vertical'>
      <ul className='navbar-vertical__list'>
        <li className='navbar-vertical__item'>
          <NavLink
            onClick={handleClose}
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'navbar-vertical__link navbar-vertical__link_active text link'
                : 'navbar-vertical__link text link'
            }
          >
            Главная
          </NavLink>
        </li>
        <li className='navbar-vertical__item'>
          <NavLink
            onClick={handleClose}
            to='/technology'
            className={({ isActive }) =>
              isActive
                ? 'navbar-vertical__link navbar-vertical__link_active text link'
                : 'navbar-vertical__link text link'
            }
          >
            Технология
          </NavLink>
        </li>
        <li className='navbar-vertical__item'>
          <NavLink
            onClick={handleClose}
            to='/schedule'
            className={({ isActive }) =>
              isActive
                ? 'navbar-vertical__link navbar-vertical__link_active text link'
                : 'navbar-vertical__link text link'
            }
          >
            График полётов
          </NavLink>
        </li>
        <li className='navbar-vertical__item'>
          <NavLink
            onClick={handleClose}
            to='/guarantee'
            className={({ isActive }) =>
              isActive
                ? 'navbar-vertical__link navbar-vertical__link_active text link'
                : 'navbar-vertical__link text link'
            }
          >
            Гарантия
          </NavLink>
        </li>
        <li className='navbar-vertical__item'>
          <NavLink
            onClick={handleClose}
            to='/about'
            className={({ isActive }) =>
              isActive
                ? 'navbar-vertical__link navbar-vertical__link_active text link'
                : 'navbar-vertical__link text link'
            }
          >
            О компании
          </NavLink>
        </li>
        <li className='navbar-vertical__item'>
          <NavLink
            onClick={handleClose}
            to='/contacts'
            className={({ isActive }) =>
              isActive
                ? 'navbar-vertical__link navbar-vertical__link_active text link'
                : 'navbar-vertical__link text link'
            }
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
