import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url } from '../utils/constants'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  //useParams gets the product id
  const { id } = useParams();
  const history = useHistory();
  const { single_product_loading: loading, 
    single_product_error: error, 
    single_product: product, 
    fetchSingleProduct} = useProductsContext()
  
  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`)
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if(error) {
      setTimeout(()=> {
        history.push('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])

  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }
  // sku is the alias of id
 const { name, 
    price, 
    description, 
    stock, 
    id: sku, 
    company, 
    image} = product
  return (
  <Wrapper>
    <div className="section section-center page">
     <Link to="/products" className='btn'>back to Products</Link>
     <div className="product-center">
       <ProductImages images={image}/>
       <section className="content">
         <h2>{name}</h2>
         <h5 className='price'>{price}€</h5>
         <p className='description'>{description}</p>
         <p className='info'>
           <span>Brand: </span>
           {company}
         </p>
         <p className='info'>
           <span>Product Ref.: </span>
           {sku}
         </p>
         <p className='info'>
           <span>Available: </span>
           {stock > 0 ? 'In Stock': 'Out of Stock'}
         </p>
         <hr />
         {stock > 0 && <AddToCart product={product}/>} 
       </section>
     </div>
    </div>
     
  </Wrapper>)
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
