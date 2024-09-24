// src/components/CategoryBar.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/action/productAction';
import Typography from "@mui/material/Typography";
import { Button, Container } from '@mui/material';
const CategoryBar = ({filteredProducts}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
 
    

  useEffect(() => {
    dispatch(fetchCategories()); // Kategorileri yükle
  }, [dispatch]);

  return (
    <Container  >
      <Typography align='center' >Categories</Typography>
     
        {categories.map((category,index) => (
           
             <Button variant="contained" key={index}  onClick={()=>dispatch(filteredProducts(category)) }>{category}</Button>
     ))}
      </Container>
   
  );
};

export default CategoryBar;
