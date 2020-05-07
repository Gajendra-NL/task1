import React from 'react';
import './style.css';

const Header = ({ user, logoutUser }) => (
    <header>
        <p className='email'>Hi {user.slice(0, user.indexOf('@'))}</p>
        <button type="button" onClick={logoutUser} className='btn'>Logout</button>
    </header>
);

export default Header;
