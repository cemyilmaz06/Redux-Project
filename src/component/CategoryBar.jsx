// src/components/CategoryBar.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/action/productAction';
import { filteredProducts } from '../redux/action/productAction';
import Typography from "@mui/material/Typography";
import { Button, Container } from '@mui/material';
const CategoryBar = ({filteredProducts,}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
 

  useEffect(() => {
    dispatch(fetchCategories()); // Kategorileri yükle
  }, [dispatch]);

  return (
    <Container  >
      <h1 className='baslik mb-4' align='center' >Categories</h1>
     
        {["all", ...categories].map((category,index) => (
          
             <button style={{color:"black",border:"none",marginLeft:"100px",display:"inline",justifyContent:"center",alignItems:"center",marginBottom:"60px", padding:"10px", borderRadius:"10px"}} key={index}  
           >{category}</button>
     ))}
      </Container>
   
  );
};

export default CategoryBar;
