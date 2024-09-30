// src/redux/action/productAction.js
import axios from 'axios';

// Ürün verilerini çekme aksiyonu
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://fakestoreapi.com/products');
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
   
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Kategorileri çekme aksiyonu
export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};
