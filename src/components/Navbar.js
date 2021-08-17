import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  const { openSidebar } = useProductsContext()
  const { isSidebarOpen } = useProductsContext()
  const { myUser } = useUserContext()
  
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" 
          className={`${isSidebarOpen ? 'nav-toggle  hidden' : 'nav-toggle'}`}
          onClick={openSidebar}>
            Menu
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          })}
          { 
            myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>)
          }
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      position: absolute;
      top: 10px;
      left: 40px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: 2px solid var(--clr-primary-10);
    color: var(--clr-primary-10);
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
    border-radius: 5px;
    opacity: 1;
    transition: var(--transition); 
  }
  .nav-toggle:focus,
  .nav-toggle:active{
    outline: none;
  }

  .hidden {
    opacity: 0;
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        font-family: 'Righteous';
        font-weight:600
        
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: flex;
      position: absolute;
      top: 20px;
      right: 40px;  
    }
  }
`

export default Nav
