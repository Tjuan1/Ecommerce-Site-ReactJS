import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'


const FeaturedProducts = () => {
  const {products_loading: loading, 
    products_error: error,
    featured_products } = useProductsContext();
  if(loading) {
    return <Loading />
  }
  if(error) {
    return <Error />
  }
  return <Wrapper className="section">
    <div className="title">
      <h2>Featured products</h2>
      <div className="section-center featured">
        {featured_products.slice(0,3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </div>
    <Link to="/products" className="btn">All products</Link>
    
  </Wrapper>
}

const Wrapper = styled.section`
  height: 100vh;
  position:relative;
  .featured {
    margin: 4rem 0;
    display: grid;
    gap: 0rem;
    img {
      height: 120px;
      width:100vw;
    }
  }
  
  .title h2 {
    margin-top: 5rem;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      gap: 2.5rem;
      margin: 4rem auto;
      grid-template-columns: 1fr;
    }

    @media (min-width: 1020px) {
      .featured {
        grid-template-columns: repeat(auto-fit, minmax(220px, 3fr));
      }
      .featured img {
        height: 360px;
        width: 100%;
      }
  }
`

export default FeaturedProducts
