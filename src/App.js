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
  const [detailProductImgIndex, setDetailProductImgIndex] = useState(0); // index detail product main image light box
  const [productCart, setProductCart] = useState([]); // product cart list
  const [detailProductQuantity, setDetailProductQuantity] = useState(1); // detail product cart quantity
  const [navProductQuantity, setNavProductQuantity] = useState(0); // Navigation cart quantity

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
        quantity: detailProductQuantity,
        total: product.price * detailProductQuantity,
      };
      setProductCart([...productCart, productData]);
      const addNavCartValue = navProductQuantity + detailProductQuantity;
      setNavProductQuantity(addNavCartValue);
    } else {
      for (var i = 0; i < productCart.length; ++i) {
        if (productCart[i].id === product.id) {
          productCart[i].quantity =
            productCart[i].quantity + detailProductQuantity;
          productCart[i].total =
            productCart[i].total + productCart[i].price * detailProductQuantity;
        }
      }
      const addNavCartValue = navProductQuantity + detailProductQuantity;
      setNavProductQuantity(addNavCartValue);
    }
  };

  const handleClearProductCart = (e, product) => {
    console.log(product);
    const filterProductCart = productCart.filter(
      (item) => item.id !== product.id
    );
    setProductCart(filterProductCart);
    const removeNavCartValue = navProductQuantity - product.quantity;
    setNavProductQuantity(removeNavCartValue);
  };

  const handleAddDetailProductCart = () => {
    var addValue = detailProductQuantity;
    setDetailProductQuantity(++addValue);
  };

  const handleRemoveDetailProductCart = () => {
    var removeValue = detailProductQuantity;
    if (removeValue === 1) {
      setDetailProductQuantity(1);
    } else {
      setDetailProductQuantity(--removeValue);
    }
  };

  return (
    <div className="App">
      <Router>
        <Nagivation navProductQuantity={navProductQuantity} />
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
          detailProductQuantity={detailProductQuantity}
          handleAddDetailProductCart={handleAddDetailProductCart}
          handleRemoveDetailProductCart={handleRemoveDetailProductCart}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
