import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Category from "../Category/Category";
import Cart from "../Cart/Cart";
import DetailProduct from "../DetailProduct/DetailProduct";

const Routes = (props) => {
  const {
    productItems,
    handleDetailProduct,
    handleDetailSubProduct,
    detailProduct,
    setDetailProduct,
    detailProductImg,
    isOpenDetailProductImg,
    setIsOpenDetailProductImg,
    detailProductImgIndex,
    setDetailProductImgIndex,
    handleAddProductCart,
    productCart,
    handleClearProductCart,
    detailProductQuantity,
    handleAddDetailProductCart,
    handleRemoveDetailProductCart,
  } = props;

  //   console.log("Routes check", productItems);

  return (
    <Switch>
      <Route path="/category/:id">
        <Category
          productItems={productItems}
          handleDetailProduct={handleDetailProduct}
          detailProduct={detailProduct}
          setDetailProduct={setDetailProduct}
        />
      </Route>
      <Route path="/cart">
        <Cart
          productCart={productCart}
          handleClearProductCart={handleClearProductCart}
          handleDetailProduct={handleDetailProduct}
        />
      </Route>
      <Route path="/detail/product/:id">
        <DetailProduct
          productItems={productItems}
          handleDetailSubProduct={handleDetailSubProduct}
          detailProduct={detailProduct}
          setDetailProduct={setDetailProduct}
          detailProductImg={detailProductImg}
          isOpenDetailProductImg={isOpenDetailProductImg}
          setIsOpenDetailProductImg={setIsOpenDetailProductImg}
          detailProductImgIndex={detailProductImgIndex}
          setDetailProductImgIndex={setDetailProductImgIndex}
          handleAddProductCart={handleAddProductCart}
          detailProductQuantity={detailProductQuantity}
          handleAddDetailProductCart={handleAddDetailProductCart}
          handleRemoveDetailProductCart={handleRemoveDetailProductCart}
        />
      </Route>
      <Route path="/">
        <Home
          productItems={productItems}
          handleDetailProduct={handleDetailProduct}
          detailProduct={detailProduct}
          setDetailProduct={setDetailProduct}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
