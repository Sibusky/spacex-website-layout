import React, { useEffect } from 'react';
import './styles.css';
import { useLocation } from 'react-router';

export default function Content({ photos, setPhotos }) {
  let { pathname } = useLocation();
  useEffect(() => {
    setPhotos([]);
  }, [pathname, setPhotos]);
  return (
    <section className='content section'>
      {photos.length ? (
        <ul className='content__container section__container'>
          {photos.map((item) => (
            <li className='content__item' key={item.id}>
              <div className='content__image-container'>
                <img className='content__image' src={item?.urls.regular} alt={item?.alt_description} />
              </div>
              <p className='content__text text'>
                {item?.alt_description} by {item.user.name}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text'>
          Нажмите кнопку "Начать путешествие" 🚀
          <br />
          На каждой странице свой контент, который загружается с сайта <a className='link' href='https://unsplash.com/'>Unsplash</a>
        </p>
      )}
    </section>
  );
}
