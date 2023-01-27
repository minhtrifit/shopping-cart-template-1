import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./Home.scss";

const Home = (props) => {
  const { productItems, handleDetailProduct, detailProduct, setDetailProduct } =
    props;
  // console.log("Home check:", productItems);

  return (
    <div className="home">
      <div className="product-container">
        {productItems.map((item) => {
          return (
            <Link
              to={generatePath("/detail/product/:id", {
                id: item.id,
              })}
              className="product-card"
              key={item.id}
              onClick={(e) => handleDetailProduct(e, item)}
            >
              <div className="product-card-image">
                <p className="product-card-category">{item.category}</p>
                <img src={item.image[0]} alt={item.name} />
              </div>
              <div className="product-cart-content">
                <p className="product-cart-title">{item.name}</p>
                <p className="product-cart-price">{item.price}₫</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
