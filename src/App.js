import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Nagivation from "./compoments/Front/Nagivation/Navigation";
import Footer from "./compoments/Front/Footer/Footer";
import Routes from "./compoments/Front/Routes/Routes";
import db from "./compoments/Back/db.js";

function App() {
  const data = db.productItems;
  const [productItems, setProductItems] = useState(data);
  const [detailProduct, setDetailProduct] = useState({}); // detail product
  const [detailProductImg, setDetailProductImg] = useState(); // detail product main image
  const [isOpenDetailProductImg, setIsOpenDetailProductImg] = useState(false); // view detail product main image light box
  const [detailProductImgIndex, setDetailProductImgIndex] = useState(0);
  const [productCart, setProductCart] = useState([]);

  const handleDetailProduct = (e, item) => {
    setProductItems(data); // Comment if error
    setDetailProduct(item);
    setDetailProductImg(item.image[0]);
    setDetailProductImgIndex(0);
  };

  const handleDetailSubProduct = (e, image) => {
    const index = detailProduct.image.findIndex((item) => {
      return item === image;
    });
    const targetSubImg = detailProduct.image[index];

    setDetailProductImg(targetSubImg);
    setDetailProductImgIndex(index);
    // console.log(detailProductImg);
  };

  const handleAddProductCart = (e, product) => {
    const isExist = productCart.find((item) => item.id === product.id);
    if (!isExist) {
      const productData = {
        ...product,
        quantity: 1,
        total: product.price,
      };
      setProductCart([...productCart, productData]);
    } else {
      for (var i = 0; i < productCart.length; ++i) {
        if (productCart[i].id === product.id) {
          ++productCart[i].quantity;
          productCart[i].total =
            productCart[i].total +
            productCart[i].price * productCart[i].quantity;
        }
      }
    }
  };

  const handleClearProductCart = (e, product) => {
    console.log(product);
    const filterProductCart = productCart.filter(
      (item) => item.id !== product.id
    );
    setProductCart(filterProductCart);
  };

  return (
    <div className="App">
      <Router>
        <Nagivation />
        <Routes
          productItems={productItems}
          handleDetailProduct={handleDetailProduct}
          handleDetailSubProduct={handleDetailSubProduct}
          detailProduct={detailProduct}
          setDetailProduct={setDetailProduct}
          detailProductImg={detailProductImg}
          isOpenDetailProductImg={isOpenDetailProductImg}
          setIsOpenDetailProductImg={setIsOpenDetailProductImg}
          detailProductImgIndex={detailProductImgIndex}
          setDetailProductImgIndex={setDetailProductImgIndex}
          handleAddProductCart={handleAddProductCart}
          productCart={productCart}
          handleClearProductCart={handleClearProductCart}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
