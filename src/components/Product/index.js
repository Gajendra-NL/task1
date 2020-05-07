import React from 'react';
import './style.css';

const Product = ({ item, onDelete }) => (
    <div className='card'>
        <div className='row'>
            <p className='key'>ID:</p>
            <p className='key'>{item.id}</p>
        </div>
        <div className='row'>
            <p className='key'>Name:</p>
            <p className='key'>{item.name}</p>
        </div>
        <div className='row'>
            <p className='key'>Rate:</p>
            <p className='key'>{item.rate}</p>
        </div>
        <div className='row'>
            <p className='key'>Quality:</p>
            <p className='key'>{item.quality}</p>
        </div>
        <button className='del-btn' type='button' onClick={onDelete}>Delete</button>
    </div>
);

export default Product;
