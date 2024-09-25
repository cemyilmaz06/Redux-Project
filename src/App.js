// src/App.js
import React from 'react';
import ReduxProvider from './redux';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ReduxProvider>
      <AppRouter />
    </ReduxProvider>

 
  
  );
}

export default App;
