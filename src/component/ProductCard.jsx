import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/action/productAction";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from "@mui/material";
import { addToBasket } from "../redux/action/basketAction";
import { Card, Container } from "react-bootstrap";

const ProductCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [productData, setProductData] = useState(products);

  // Ürünler çekildikten sonra productData'yı güncelle
  useEffect(() => {
    dispatch(fetchProducts()); // API'den ürünleri çek
  }, [dispatch]);

  useEffect(() => {
    setProductData(products); // Ürünler değiştiğinde productData'yı güncelle
  }, [products]);

  // Kategorilere göre filtreleme fonksiyonu
  

  return (
    <Container >
      <Card className="rounded-2 m-auto card mb-5" role="button">
        <h2 className="text-center">Ürünler</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((product) => ( // filteredProducts değil, productData kullanılmalı
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                width: "400px",
                height: "450px",
                marginLeft: "20px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "200px", height: "250px", marginLeft: "80px" }}
              />
              <div className="title">
                <h3 style={{ fontSize: "20px", width: "200px" }}>{product.title}</h3>
                <p>{product.price} $</p>
              </div>
              <div className="d-flex justify-content-between">
                {product.category}
                <IconButton
                  color="black"
                  aria-label="add to shopping cart"
                  onClick={() => dispatch(addToBasket(product))}
                >
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
