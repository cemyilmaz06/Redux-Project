// src/redux/index.jsx
import {legacy_createStore as createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';  // async işlemler için
import basketReducer from './reducer/basketReducer';
import productReducer from './reducer/productReducer';

const rootReducer = combineReducers({
  basket: basketReducer,
  products: productReducer,  // Ürün ve kategori verilerini yöneten reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const ReduxProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ReduxProvider;
