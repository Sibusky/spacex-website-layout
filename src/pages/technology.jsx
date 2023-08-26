import React from 'react';
import { Container } from '../components/container';
import Content from '../components/content';
import { Hero } from '../components/hero';

export function Technology({ fetchContent, photos }) {
  return (
    <Container>
      <Hero textBig='Технология' textSmall='путешествия' fetchContent={fetchContent} />
      <Content photos={photos} />
    </Container>
  );
}
