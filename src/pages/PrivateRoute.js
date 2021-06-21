import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'


//rest operator is gathering everything we pass in the props of PrivateRoute (so path: "/checkout", isExact... and so on)
const PrivateRoute = ({children, ...rest}) => {
  const { user} = useAuth0()

  //we render the checkout or we redirect depending if there´s a user
  return <Route {...rest} render={() => {
    return user ? children : <Redirect to="/"></Redirect>
    }
  }></Route>
};
export default PrivateRoute;