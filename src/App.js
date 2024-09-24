// src/App.js
import React from 'react';
import ReduxProvider from './redux';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <ReduxProvider>
      <AppRouter />
    </ReduxProvider>

 
  
  );
}

export default App;
