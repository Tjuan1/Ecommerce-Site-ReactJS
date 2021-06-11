import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'


//products provider is in the context
//we should also wrap our app in filerprovider
//dev-qlhmm1ca.eu.auth0.com => domain
// GxSLJGCeU9rXBE9IhLO1ZVwTqRcoU0S3 => client


ReactDOM.render(
<Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'>
    <UserProvider>
      <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
      </ProductsProvider>
    </UserProvider>
</Auth0Provider>, document.getElementById('root'))
