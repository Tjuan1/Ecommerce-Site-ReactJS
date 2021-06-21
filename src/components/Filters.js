import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {filters: {
    text, 
    category, 
    company, 
    color, 
    min_price, 
    max_price, 
    price, 
    shipping
  }, 
  updateFilters,
  clearFilters,
  all_products
} = useFilterContext()


// this is looking for two values (it´s in utils/helpers)
// it creates an array of all the categories, companies or colors that we have
const categories = getUniqueValues(all_products, 'category')

const companies = getUniqueValues(all_products, 'company')

const colors = getUniqueValues(all_products, 'colors')


  return <Wrapper>
   <div className="content">
     {/* we prevent default so that the page doesnt reload whenever we change something in the form */}
     <form onSubmit={(e) => e.preventDefault()}>
        {/* {search input} */}
          <div className="form-control">
              <input 
                type="text" 
                name="text" 
                placeholder='search'
                className='search-input'
                value={text}
                onChange={updateFilters}
              />
          </div>
        {/* {end search input} */}
        {/* {categories} */}
        <div className="form-control">
          <h5>Category</h5>
          <div>
            {categories.map((cat, index) => {
              return <button key={index}
              onClick={updateFilters}
              type="button"
              name="category"
              className={`${category === cat ? 'active' : null}`}
              >{cat}</button>
              
            })}
          </div>
        </div>
        {/* {end categories} */}

        {/* {Companies} */}
        <div className="form-control">
          <h5>Company</h5>
          <select name="company" 
          value={company} 
          onChange={updateFilters}
          className="company"
          >
            {companies.map((comp, index) => {
              return <option key={index} value={comp}>{comp}</option>
            })
            }
          </select>
        </div>
        {/* {end Companies} */}

        {/* {Colors} */}
        <div className="form-control">
          <h5>Colors</h5>
          <div className="colors">
              {colors.map((col, index) => {
                if(col === 'All') {
                  return <button key={index} name='color' onClick={updateFilters} data-color='All'
                  className={`${color === 'All' ? 'all-btn active': 'all-btn'}`}>All</button>
                }
                return <button key={index} name="color" style={{background: col}}
                className={`${color === col ? 'color-btn active': 'color-btn'}`}
                data-color={col} onClick={updateFilters}>
                    {color === col ? <FaCheck /> : null}
                </button>
              })}
          </div>
        </div>
        {/* {end Colors} */}

        {/* {Price} */}
        <div className="form-control">
          <h5>Price</h5>
          <p className="price">{price}€</p>
          <input type="range" name="price" onChange={updateFilters}
          min={min_price} 
          max={max_price} 
          value={price}/>

        </div>
        {/* {end Price} */}

        {/* {Shipping} */}
        <div className="form-control shipping">
          <label htmlFor ="shipping">Free Shipping</label>
          <input type="checkbox" name="shipping" id="shipping"
          onChange={updateFilters} checked={shipping}/>
        </div>
        {/* {end Shipping} */}

     </form>
     <button type="button" className="clear-btn" onClick={clearFilters}>Clear filters</button>
   </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: 0.5px solid gray;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-grey-8);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
