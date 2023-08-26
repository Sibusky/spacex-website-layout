import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

export function NavbarHorizontal() {
  return (
    <nav className='navbar-horizontal'>
      <ul className='navbar-horizontal__list'>
        <li className='navbar-horizontal__item'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'navbar-horizontal__link navbar-horizontal__link_active text link'
                : 'navbar-horizontal__link text link'
            }
          >
            Главная
          </NavLink>
        </li>
        <li className='navbar-horizontal__item'>
          <NavLink
            to='/technology'
            className={({ isActive }) =>
              isActive
                ? 'navbar-horizontal__link navbar-horizontal__link_active text link'
                : 'navbar-horizontal__link text link'
            }
          >
            Технология
          </NavLink>
        </li>
        <li className='navbar-horizontal__item'>
          <NavLink
            to='/schedule'
            className={({ isActive }) =>
              isActive
                ? 'navbar-horizontal__link navbar-horizontal__link_active text link'
                : 'navbar-horizontal__link text link'
            }
          >
            График полётов
          </NavLink>
        </li>
        <li className='navbar-horizontal__item'>
          <NavLink
            to='/guarantee'
            className={({ isActive }) =>
              isActive
                ? 'navbar-horizontal__link navbar-horizontal__link_active text link'
                : 'navbar-horizontal__link text link'
            }
          >
            Гарантия
          </NavLink>
        </li>
        <li className='navbar-horizontal__item'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? 'navbar-horizontal__link navbar-horizontal__link_active text link'
                : 'navbar-horizontal__link text link'
            }
          >
            О компании
          </NavLink>
        </li>
        <li className='navbar-horizontal__item'>
          <NavLink
            to='/contacts'
            className={({ isActive }) =>
              isActive
                ? 'navbar-horizontal__link navbar-horizontal__link_active text link'
                : 'navbar-horizontal__link text link'
            }
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
