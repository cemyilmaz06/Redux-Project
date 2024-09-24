// src/router/AppRouter.jsx
import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Basket from '../pages/Basket';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />

      <Route path="/basket" component={Basket} />
      <Route component={NotFound} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
