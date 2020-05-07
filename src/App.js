import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Products from './routes/Products';
import Login from './routes/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  const [user, updateUser] = useState();

  return (
    <Router>
      <ProtectedRoute
        exact path="/"
        component={Products}
        user={user}
        logoutUser={() => updateUser()}
      />
      <Route
        path="/login"
        render={(props) => <Login {...props} loginUser={(user) => updateUser(user)} />}
      />
    </Router>
  );
}

export default App;