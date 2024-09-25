// src/components/ProductCard.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/action/productAction";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from "@mui/material";
import { addToBasket } from "../redux/action/basketAction";
import CategoryBar from "./CategoryBar";
import { filteredProducts } from '../redux/action/productAction';
import { Card, Container } from "react-bootstrap";
const ProductCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [productData, setProductData] = useState(products)
  const filteredProducts=(category)=>{
  if(category === "all"){
    setProductData(products);
  }else{
const selectedProducts=()=>(products.filter((product)=>product.category === category))
setProductData(selectedProducts);
  }
  }

  useEffect(() => {
    dispatch(fetchProducts()); // Ürünleri yükle
  }, [dispatch]);

  return (
    <Container className="d-flex align-item-center justify-content-center">
    <Card  className="rounded-2 m-auto card mb-5" role="button">
      <h2 className="text-center">Products</h2>
      <div style={{ display: "flex" ,flexWrap:"wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
              width:"400px",
              height:"450px",
              marginLeft:"20px"
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "200px",height:"250px",marginLeft:"80px"}}
            />
            <div className="title" >
       
              <h3 style={{fontSize:"20px",width:"200px"}}>{product.title}</h3>
              <p>{product.price} $</p>
            </div>
            <div className="d-flex justify-content-between ">{product.category}
            <IconButton color="black" aria-label="add to shopping cart" onClick={()=>dispatch(addToBasket())}>
        <AddShoppingCartIcon />
      </IconButton>
      </div>
          </div>
        ))}
      </div>
     
    </Card>
    </Container>
  );
};

export default ProductCard;
