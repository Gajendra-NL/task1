import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Products from './Products';
import Login from './Login';
import './App.css';

function App() {
  return (
    <Router>
      <ProtectedRoute exact path="/" component={Products} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;


// Protected Route wrapper
const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
