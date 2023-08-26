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
import { useCallback, useState } from 'react';
import { getPhotos } from './js/api';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchContent = useCallback(
    (query) => {
      getPhotos(query).then((res) => setPhotos(res.results));
    },
    [setPhotos]
  );

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
          <Route element={<Layout handleOpen={handleMenuOpen} />}>
            <Route index element={<Main fetchContent={fetchContent} photos={photos} />} />
            <Route path='technology' element={<Technology fetchContent={fetchContent} photos={photos} />} />
            <Route path='schedule' element={<Schedule fetchContent={fetchContent} photos={photos} />} />
            <Route path='guarantee' element={<Guarantee fetchContent={fetchContent} photos={photos} />} />
            <Route path='about' element={<About fetchContent={fetchContent} photos={photos} />} />
            <Route path='contacts' element={<Contacts fetchContent={fetchContent} photos={photos} />} />
          </Route>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Menu isOpen={isMenuOpen} handleClose={handleMenuClose} />
    </div>
  );
}

export default App;
