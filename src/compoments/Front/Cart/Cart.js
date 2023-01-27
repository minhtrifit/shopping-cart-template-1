import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./Cart.scss";

const Cart = (props) => {
  const { productCart, handleClearProductCart, handleDetailProduct } = props;

  console.log(productCart);

  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const fullDate = month + "/" + date + "/" + year;

  const grandTotal = productCart.reduce((total, item) => total + item.total, 0);

  return (
    <div>
      {productCart.length === 0 ? (
        <div className="product-cart-warning">Product cart is empty</div>
      ) : (
        <div className="cart">
          <div className="cart-left">
            <div className="cart-container">
              <p className="cart-container-title">My cart</p>
              {productCart.map((item) => {
                return (
                  <div className="cart-product" key={item.id}>
                    <div className="cart-product-left">
                      <div className="cart-product-content">
                        <Link
                          to={generatePath("/detail/product/:id", {
                            id: item.id,
                          })}
                        >
                          <img
                            src={item.image[0]}
                            alt={item.name}
                            className="card-product-image"
                            onClick={(e) => handleDetailProduct(e, item)}
                          />
                        </Link>
                        <i
                          className="fa-solid fa-trash cart-product-clear"
                          onClick={(e) => handleClearProductCart(e, item)}
                        ></i>
                      </div>
                      <div className="cart-product-title">
                        <p className="card-product-name">{item.name}</p>
                        <p className="card-product-quantity">
                          Quantity: {item.quantity}
                        </p>
                        <p className="card-product-price">
                          Price: {item.price}₫
                        </p>
                      </div>
                    </div>
                    <div className="cart-product-right">
                      <p className="cart-product-total">
                        Sub Total: {item.total}₫
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cart-right">
            <div className="cart-right-conatiner">
              <div className="cart-right-top">
                <p className="cart-right-top-title">Order Summary</p>
                <p>Shop: ShoppingHubz</p>
                <p>Date: {fullDate}</p>
              </div>
              <div className="cart-right-bot">
                <p className="cart-right-bot-total">
                  Grand Total: {grandTotal}₫
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
