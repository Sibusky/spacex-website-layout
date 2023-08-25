import React from 'react';
import { Header } from '../header';
import { Outlet } from 'react-router';
import { Footer } from '../footer';
import './styles.css';

export function Layout() {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
