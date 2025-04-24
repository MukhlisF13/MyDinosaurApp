import React, { useState } from 'react';
import './Merch.css';

const merchItems = [
  { id: 1, name: "Dino T-Shirt", description: "A cool dinosaur-themed t-shirt.", price: 19.99 },
  { id: 2, name: "Dino Mug", description: "A mug with a dinosaur design.", price: 9.99 },
  { id: 3, name: "Dino Plushie", description: "A soft dinosaur plushie.", price: 14.99 }
];

const Merch = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart([...cart, id]);
    alert(`Added item to cart! Cart now has ${cart.length + 1} items.`);
  };

  return (
    <div>
      <h1 className="page-title">Dinosaur Merchandise</h1>

      <div className="cart-container">
        <button className="filter-button">
          Cart ({cart.length})
        </button>
      </div>

      <div className="merch-container">
        {merchItems.map((item) => (
          <div key={item.id} className="merch-item">
            <div className="merch-image">
              <p>[{item.name} Image]</p>
            </div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="merch-price">${item.price.toFixed(2)}</p>
            <button
              className="buy-button"
              onClick={() => addToCart(item.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merch;