import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return <Wrapper>
    <div className="section-center">
      <article className="header">
        <h3>Cool Clothes<br />
        always suit you</h3>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return <article key={id} className="service">
              {/* icon is in the constants.js */}
              <h4>{title}</h4>
              <span className="icon">{icon}   
              </span>
              <p>{text}</p>
            </article> 
          })}
        </div>
      </article>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 2rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-1);
  }
  .services-center {
    margin-top: 2rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-3);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-1);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-2);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0rem 0rem 7rem 0rem;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
