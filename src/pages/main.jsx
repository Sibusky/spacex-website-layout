import React from 'react';
import { Container } from '../components/container';
import { Hero } from '../components/hero';
import Content from '../components/content';

export function Main({ fetchContent, photos, setPhotos }) {
  return (
    <Container>
      <Hero textBig='Путешествие' textSmall='на красную планету' fetchContent={fetchContent} />
      <Content photos={photos} setPhotos={setPhotos} />
    </Container>
  );
}
