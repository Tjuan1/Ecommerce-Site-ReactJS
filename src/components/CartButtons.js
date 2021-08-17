import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()
  return (
    //we didn´t define cart-btn-warapper in the styles below, but it´s included in the
    //navbar compoenent tha includes this component (it is display: none if width > 992px)
    <div>
    <Wrapper className='cart-btn-wrapper'>
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          Cart <FaShoppingCart />
          <span className="cart-value">
            {total_items}
          </span>
        </span>
      </Link>
      {myUser ? 
      <button type="button" className="auth-btn" onClick={() => logout(
        /* check Auth0 docs to see more */
        {returnTo:window.location.origin}
      )}>
        Logout <FaUserMinus />
      </button> :  
      <button type="button" className="auth-btn" onClick={loginWithRedirect}>
        Login <FaUserPlus /></button>
      }
    </Wrapper>
   </div>
  )
}

const Wrapper = styled.div`
  .cart-btn-wrapper {
    display: grid;
    grid-template-columns: 2fr;
    align-items: center;
    width: 225px;
    padding-left:10px;
  }


  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    height: 50px;
    width: 150px;

    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: 0;
    right: 75px;
    background: var(--clr-primary-10);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
    @media screen and (min-width: 992px) {
      
    .cart-btn-wrapper {
      display: flex;
      align-items: center;
      width: 225px;
      padding-left:10px;
    }
      
    .auth-btn {
      font-size: 1.5rem;
    }

    .cart-btn {
      font-size: 1.5rem;
    }

    .cart-value{
      top: -10px;
      right: -16px;
    }


  }
`
export default CartButtons
