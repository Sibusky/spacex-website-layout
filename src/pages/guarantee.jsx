import React from 'react';
import { Container } from '../components/container';
import { Hero } from '../components/hero';
import Content from '../components/content';

export function Guarantee({ fetchContent, photos, setPhotos }) {
  return (
    <Container>
      <Hero textBig='Железная' textSmall='гарантия 50%' fetchContent={fetchContent} />
      <Content photos={photos} setPhotos={setPhotos} />
    </Container>
  );
}
