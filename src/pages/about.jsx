import React from 'react';
import { Container } from '../components/container';
import { Hero } from '../components/hero';
import Content from '../components/content';

export function About({ fetchContent, photos }) {
  return (
    <Container>
      <Hero textBig='Компания' textSmall='наша любимая' fetchContent={fetchContent} />
      <Content photos={photos} />
    </Container>
  );
}
