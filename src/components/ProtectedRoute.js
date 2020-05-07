import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

// Protected Route wrapper
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          rest.user ? (
            <Component {...rest} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  };
  
export default ProtectedRoute;
