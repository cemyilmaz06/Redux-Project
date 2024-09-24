// src/components/ProductCard.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/action/productAction";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from "@mui/material";
import { addToBasket } from "../redux/action/basketAction";
import CategoryBar from "./CategoryBar";
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
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px" }}
            />
            <div >
       
              <h3>{product.title}</h3>
              <p>{product.price} $</p>
            </div>
            <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>dispatch(addToBasket())}>
        <AddShoppingCartIcon />
      </IconButton>
          </div>
        ))}
      </div>
      <CategoryBar filteredProducts={filteredProducts}/>
    </div>
  );
};

export default ProductCard;
