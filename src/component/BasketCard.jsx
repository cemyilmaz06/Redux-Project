// src/components/BasketCard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromBasket } from '../redux/action/basketAction';

const BasketCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{item.title}</h3>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>Increase</button>
      <button onClick={() => dispatch(decreaseQuantity(item.id))}>Decrease</button>
      <button onClick={() => dispatch(removeFromBasket(item.id))}>Remove</button>
    </div>
  );
};

export default BasketCard;
