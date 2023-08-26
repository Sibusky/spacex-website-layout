import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../components/container';

export function PageNotFound() {
  let navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Container>
      <section className='page-not-found section'>
        <div className='page-not-found__container section__container'>
          <h2 className='text title'>404</h2>
          <p className='text'>Page is not found</p>
          <Link className='link text' onClick={goBack}>
            Go back
          </Link>
        </div>
      </section>
    </Container>
  );
}
