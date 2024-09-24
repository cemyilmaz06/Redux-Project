// src/redux/action/basketAction.js
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../type/basketType';

// Ürünü sepete ekleme
export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product,
});

// Ürünü sepetten çıkarma
export const removeFromBasket = (id) => ({
  type: REMOVE_FROM_BASKET,
  payload: id,
});

// Ürünün miktarını artırma
export const increaseQuantity = (id) => ({
  type: INCREASE_QUANTITY,
  payload: id,
});

// Ürünün miktarını azaltma
export const decreaseQuantity = (id) => ({
  type: DECREASE_QUANTITY,
  payload: id,
});