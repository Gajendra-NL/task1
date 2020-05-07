import React, { useState } from 'react';
import './style.css';
import Header from '../../components/Header';
import ProductCard from '../../components/Product';

const itemsOnLoad = [
  {
    id: 100001,
    name: 'Product 1',
    rate: 17,
    quality: 2,
  },
  {
    id: 100002,
    name: 'Product 2',
    rate: 22,
    quality: 3,
  }
];

function Products(props) {
  const [items, updateItems] =  useState(itemsOnLoad);
  const [isModal, showOrHideModal] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [rate, setRate] = useState('');
  const [quality, setQuality] = useState('');

  const onDelete = index => {
    const currentItems = [...items];
    currentItems.splice(index, 1);
    updateItems(currentItems);
  }

  const toggleModal = () => {
    isModal ? showOrHideModal(false) : showOrHideModal(true);
    clearFields();
  }

  const clearFields = () => {
    setId('');
    setName('');
    setRate('');
    setQuality('');
  }

  const addProduct = () => {
    updateItems([...items, { id, name, rate, quality }]);
    toggleModal();
  }

  return (
   <div>
    <Header {...props} />
    <button className='add-product' type='button' onClick={toggleModal}>Add Product</button>
    {items.map((item, index) => <ProductCard item={item} onDelete={() => onDelete(index)}/>)}
    {isModal && <div className='addModal'>
      <div className='modalContent'>
        <p className='title'>Add Product Details</p>
        <input
          type="text"
          name="id"
          value={id}
          onChange={e => setId(e.target.value)}
          placeholder="ID"
          required="required"
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required="required"
        />
        <input
          type="text"
          name="rate"
          value={rate}
          onChange={e => setRate(e.target.value)}
          placeholder="Rate"
          required="required"
        />
        <input
          type="text"
          name="quality"
          value={quality}
          onChange={e => setQuality(e.target.value)}
          placeholder="Quality"
          required="required"
        />
        <button className='cancel-btn' onClick={toggleModal}>Cancel</button>
        <button className='add-btn' onClick={addProduct}>Add</button>
      </div>
    </div>}
   </div>
  );
}

export default Products;