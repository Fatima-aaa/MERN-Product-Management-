import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = { name, brand, price: Number(price) };

    try {
      const response = await axios.post('http://localhost:5001/register', newProduct);
      setMessage(response.data.message);
      setName('');
      setBrand('');
      setPrice('');
    } catch (error) {
      setMessage('⚠️ Error adding product');
      console.error(error);
    }
  };

  return (
    <div className="card">
      <h2>Add a New Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price ($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">➕ Add Product</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddProductForm;
