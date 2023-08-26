import React from 'react';
import './styles.css';

export default function Content({ photos }) {
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
        <p className='text'>Нажмите кнопку "Начать путешествие" 🚀<br />На каждой странице свой контент</p>
      )}
    </section>
  );
}
