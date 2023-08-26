import React from 'react';
import { Container } from '../components/container';
import { Hero } from '../components/hero';
import Content from '../components/content';

export function Schedule({ fetchContent, photos }) {
  return (
    <Container>
      <Hero textBig='График' textSmall='полётов' fetchContent={fetchContent} />
      <Content photos={photos} />
    </Container>
  );
}
