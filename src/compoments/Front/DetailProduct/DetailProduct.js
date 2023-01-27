import React from "react";
import "./DetailProduct.scss";
// import { useParams } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const DetailProduct = (props) => {
  const {
    // productItems,
    handleDetailSubProduct,
    detailProduct,
    // setDetailProduct,
    detailProductImg,
    isOpenDetailProductImg,
    setIsOpenDetailProductImg,
    detailProductImgIndex,
    setDetailProductImgIndex,
    handleAddProductCart,
  } = props;

  // const routeParams = useParams();
  // const targetID = routeParams.id;
  // const targetProduct = productItems.find((item) => item.id === targetID);
  // console.log("Check target:", targetProduct);
  var isEmpty = false;
  var updateImages = [];

  // console.log("Check detailProduct:", detailProduct);

  if (
    Object.keys(detailProduct).length === 0 &&
    detailProduct.constructor === Object
  ) {
    isEmpty = true;
  }

  if (isEmpty === false) {
    const images = detailProduct.image;
    updateImages = images.map((item) => "../../" + item);
    // console.log(updateImages);
    // console.log(detailProductImgIndex);
  }

  return (
    <div>
      {isEmpty === true ? (
        <div className="detail-product-warning">
          No products selected for viewing
        </div>
      ) : (
        <div className="detail">
          <div className="detail-left">
            <div className="detail-product">
              <div className="detail-main-product">
                <img
                  src={`../../${detailProductImg}`}
                  alt={detailProduct.name}
                  onClick={(e) => setIsOpenDetailProductImg(true)}
                />
              </div>
              <div className="detail-sub-product">
                {detailProduct.image.map((item) => {
                  return (
                    <div
                      className={
                        detailProductImg === item
                          ? "detail-sub-product-card active"
                          : "detail-sub-product-card"
                      }
                      key={item}
                      onClick={(e) => handleDetailSubProduct(e, item)}
                    >
                      <img src={`../../${item}`} alt={detailProduct.name} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="detail-right">
            <div className="detail-right-container">
              <p className="detail-product-title">{detailProduct.name}</p>
              <p className="detail-product-price">
                Price: {detailProduct.price}₫
              </p>
              <p className="detail-product-category">
                Category: {detailProduct.category}
              </p>
            </div>
            <div className="detail-right-option">
              <div className="detail-right-amount">Amount</div>
              <button
                className="add-to-cart-btn"
                onClick={(e) => handleAddProductCart(e, detailProduct)}
              >
                Add to cart
              </button>
            </div>
          </div>
          {isOpenDetailProductImg && (
            <Lightbox
              mainSrc={updateImages[detailProductImgIndex]}
              nextSrc={
                updateImages[(detailProductImgIndex + 1) % updateImages.length]
              }
              prevSrc={
                updateImages[
                  (detailProductImgIndex + updateImages.length - 1) %
                    updateImages.length
                ]
              }
              onCloseRequest={() => setIsOpenDetailProductImg(false)}
              onMovePrevRequest={() =>
                setDetailProductImgIndex(
                  (detailProductImgIndex + updateImages.length - 1) %
                    updateImages.length
                )
              }
              onMoveNextRequest={() => {
                setDetailProductImgIndex(
                  (detailProductImgIndex + 1) % updateImages.length
                );
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
