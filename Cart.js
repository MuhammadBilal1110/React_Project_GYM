import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  // Sample cart items for demonstration; replace with your own logic
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 1,
      image: "/images/led.jpg", // Replace with actual image path
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      quantity: 2,
      image: "/images/home appliances.webp", // Replace with actual image path
    },
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    min="1"
                    className="quantity-input"
                  />
                  <button onClick={() => handleRemove(item.id)} className="remove-button">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
