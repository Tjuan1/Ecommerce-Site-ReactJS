import React from 'react'
import styled from 'styled-components'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Services = () => {
  return <Wrapper>
    <div className="section-center">
      <article className="header">
        <div className="img-container">
          <h3>Our vision</h3>
          <img src={heroBcg2} alt="clothes" />
          
        </div>
        <div className="services-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla eget orci et porta. Morbi a accumsan velit, vitae elementum erat. Curabitur vitae ante augue. Cras vestibulum risus neque, id venenatis felis facilisis at. Mauris sit amet ante sem. In faucibus semper nunc, ut efficitur sapien vehicula vel. In hac habitasse platea dictumst. Donec et posuere sem. Etiam vitae blandit augue. Sed a lorem malesuada orci mattis faucibus. </p>
        </div>
      </article>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  height: 100vh;
  position: relative;
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  top: 30px;


  .header h3 {
    margin-bottom: 1rem;
    text-align:center;
    color: var(--clr-primary-1);
    font-weight: bolder;
  }

  .section-center{
    margin: 0 0;
    width: 100vw;
  }

  .img-container img{
    width: 100vw;
    height: 100px;
    object-fit: cover;
  }

  .img-container h3{
    position: relative;
    top: 75px;


  }


  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-1);
    padding: 0 50px;
  }
  .services-center {
    margin-top: 2rem;
    display: grid;
    gap: 2.5rem;
    text-align: center;
  }
  .service {
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

    .section-center{
      margin: 0 auto;
      width: 90vw;
      max-width: 800px;
    }


    .header {
      display: flex;
      justify-content: center;
    }
  }
  @media (min-width: 576px) {
    .section-center{
      margin: 0 auto;
    }
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
