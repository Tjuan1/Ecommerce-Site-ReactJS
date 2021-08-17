import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'

const Hero = () => {
  return <Wrapper className="section-center">
    <article className="content">
      <h1>Chilly Clothes <br />
    <span>for cool people</span></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel sagittis tortor, id tincidunt est. Donec ut risus magna. In semper sapien sit amet bibendum faucibus.</p>
      <Link to="/products" className="btn hero-btn">shop now</Link>
    </article>
    <article className="img-container">
      <img src={heroBcg} alt="table" className="main-img" />
    </article>
  </Wrapper>
}

const Wrapper = styled.section`

  .section-center{
    height: 100vh;
    margin-top:-5rem;
    place-items: center;
    display: flex;
    justify-content: center;
  }
  
  .img-container {
    display: block;
    position: relative;
    z-index:-1;
    height:100vh;
    width:100vw;
    object-fit:none;
    margin-top: -5rem;
    
  }


  .main-img{
    height: 100vh;
    overflow-y:none;
    margin-left: 0;
  }

  .accent-img {
    display: none;
  }

  h1 {
    display: none;
  }

  span{
    padding-left: 10px;
    font-size: 1.3rem;
  }

  p {
    line-height: 2;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
    color: white;
    display: none;
  }

  .content{
    height:100px;
    position: absolute;
    overflow-y:none;
    top:50%;
    left: calc(50% - 50px);
  }


  @media (min-width: 992px) {

    .section-center{
      height: calc(100vh - 5rem);
      grid-template-columns: 1fr 1fr;
      gap: 8rem;
      min-height: 60vh;
    }
   
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
      position: relative;
      display: inline-block;
    }
    p {
      font-size: 1.25rem;
      display: inline-block;
      color: var(--clr-primary-1);
    }

    span{
      padding-left: 0px;
    }

    .content{
      width: 50%;
      max-width: 500px;
      top:30%;
      left: 20%;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      height:800px;
      width:600px;
      object-fit:none;
      grid-column-start: 2;
      display: initial;
    }

    .main-img {
      width: 100%;
      height: 800px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
      margin-left: 50%;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
  }
`

export default Hero
