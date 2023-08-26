import React from 'react';
import { Container } from '../components/container';
import { Hero } from '../components/hero';
import Content from '../components/content';

export function Contacts({ fetchContent, photos }) {
  return (
    <Container>
      <Hero textBig='Контакты' textSmall='решают' fetchContent={fetchContent} />
      <Content photos={photos} />
    </Container>
  );
}
