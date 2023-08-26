import { Route, Routes } from 'react-router';
import './App.css';
import { PageNotFound } from './pages/page-not-found';
import { Main } from './pages/main';
import { Layout } from './components/layout/layout';
import { Technology } from './pages/technology';
import { Schedule } from './pages/schedule';
import { Guarantee } from './pages/guarantee';
import { About } from './pages/about';
import { Contacts } from './pages/contacts';
import { Menu } from './components/menu';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route element={<Layout handleOpen={handleMenuOpen}/>}>
            <Route index element={<Main />} />
            <Route path='technology' element={<Technology />} />
            <Route path='schedule' element={<Schedule />} />
            <Route path='guarantee' element={<Guarantee />} />
            <Route path='about' element={<About />} />
            <Route path='contacts' element={<Contacts />} />
          </Route>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Menu isOpen={isMenuOpen} handleClose={handleMenuClose}/>
    </div>
  );
}

export default App;
