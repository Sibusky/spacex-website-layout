import React from 'react';
import { Container } from '../components/container';
import { Hero } from '../components/hero';
import Content from '../components/content';

export function Main({ fetchContent, photos }) {
  return (
    <Container>
      <Hero textBig='Путешествие' textSmall='на красную планету' fetchContent={fetchContent} />
      <Content photos={photos} />
    </Container>
  );
}
