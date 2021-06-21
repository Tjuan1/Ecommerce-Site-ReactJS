import React, { useState } from 'react'
import styled from 'styled-components'


// we do url : '' because initially images is undefined so it creates an error
const ProductImages = ({images = [{url : ''}]}) => {
  const [ main, setMain] = useState(images[0])
  //there is only one image and we use it for the thumbnail as well
  // we could set up more images in Airtable
  return <Wrapper>
    <img src={main.url} alt="main" className='main'/>
    <div className="gallery">
      {images.map((image, index) => {
        return <img src={image.url} alt={image.filename}
         key={index} onClick={() => {
           setMain(images[index])
         }}
         className={`${image.url === main.url ? 'active' : null}`}/>
      })}
    </div>

  </Wrapper>
}

const Wrapper = styled.section`
  .main {
    height: 600px;
    display: inline-block;
  }
  img {
    width: auto;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: inline-block;
    grid-template-rows: repeat(5,1fr);
    -webkit-column-gap: 1rem;
    column-gap: 1rem;
    margin-left: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
