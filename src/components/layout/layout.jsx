import React from 'react';
import { Header } from '../header';
import { Outlet } from 'react-router';
import { Footer } from '../footer';
import './styles.css';

export function Layout({ handleOpen }) {
  return (
    <div className='layout'>
      <Header handleOpen={handleOpen}/>
      <Outlet />
      <Footer />
    </div>
  );
}
