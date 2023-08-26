import React from 'react';
import { Container } from '../components/container';
import { Hero } from '../components/hero';
import Content from '../components/content';

export function Contacts({ fetchContent, photos, setPhotos }) {
  return (
    <Container>
      <Hero textBig='Контакты' textSmall='решают' fetchContent={fetchContent} />
      <Content photos={photos} setPhotos={setPhotos} />
    </Container>
  );
}
