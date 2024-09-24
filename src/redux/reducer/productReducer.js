// src/redux/reducer/productReducer.js

const initialState = {
    products: [],
    categories: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload,
        };
      case 'FETCH_CATEGORIES_SUCCESS':
        return {
          ...state,
          categories: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  