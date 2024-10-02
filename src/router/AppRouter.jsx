// src/router/AppRouter.jsx
import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Basket from '../pages/Basket';
import NotFound from '../pages/NotFound';
import NavBar from '../component/NavBar';
import BasketCard from '../component/BasketCard';

const AppRouter = () => (
  <BrowserRouter>
  <NavBar/>
    <Routes>
    <Route path="/" element={<Home />} />

      <Route path="/basket" element={<BasketCard/>} />
      <Route component={NotFound} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
