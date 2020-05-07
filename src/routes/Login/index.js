import React, { useState } from 'react';
import './style.css';

function Login({ loginUser, history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    if (password.toLowerCase() === password) {
      alert('Please check your password');
    } else {
      loginUser(email);
      history.push('/');
    }
  }

  return (
   <div className='login'>
     <form className='container' onSubmit={onSubmit}>
       <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Your Email"
        required="required"
      />
       <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        class="input-form"
        placeholder="Your Password"
        required="required"
      />
      <button className='login-button' type="submit">Login</button>
     </form>
   </div>
  );
}

export default Login;