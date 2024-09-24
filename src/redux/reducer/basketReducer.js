// src/redux/reducer/basketReducer.js
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../type/basketType';

const initialState = {
  basket: [], // Başlangıçta sepet boş
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      // Eğer ürün sepette varsa miktarını artırın
      const existingProduct = state.basket.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      // Ürün yoksa sepete ekleyin
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

export default basketReducer;
