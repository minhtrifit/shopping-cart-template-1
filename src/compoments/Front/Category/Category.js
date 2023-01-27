import React from "react";
import "./Category.scss";
import { useParams, Link, generatePath } from "react-router-dom";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Category = (props) => {
  const { productItems, handleDetailProduct, detailProduct, setDetailProduct } =
    props;
  const routeParams = useParams();

  const sortProductItems = productItems.filter((item) => {
    return item.category === capitalizeFirstLetter(routeParams.id);
  });

  return (
    <div className="home">
      <div className="product-container">
        {sortProductItems.map((item) => {
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
                <img src={`../${item.image[0]}`} alt={item.name} />
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

export default Category;
