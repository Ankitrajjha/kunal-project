import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import "./index.css";

export const Buyproducts = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [buyModal, setIsbuyModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const buyOpenModal = (product) => {
    setSelectedProduct(product);
    setIsbuyModal(true);
  };

  const closebuyModal = () => {
    setIsbuyModal(false);
    setSelectedProduct(null);
  };

  if (!product)
    return <p className="no-product">No product information available</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="buy-products">
      <h2 className="product-name">{product.name}</h2>
      <Slider {...settings} className="product-slider">
        {Array.isArray(product.images) && product.images.length > 0 ? (
          product.images.map((image, index) => (
            <div key={index} className="slider-item">
              <img
                src={image}
                alt={`${product.name} ${index}`}
                className="slider-image"
              />
              <h1 className="content-desc">{product.description}</h1>
              <h1 className="price">{product.price}</h1>
              <button
                onClick={() => buyOpenModal(product)}
                className="buy-button"
              >
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <div className="no-images">No images available</div>
        )}
      </Slider>

      {buyModal && selectedProduct && (
        <div className="modal-overlay" onClick={closebuyModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closebuyModal}>
              ×
            </button>
            <h2 className="modal-title">{selectedProduct.name}</h2>
            <p className="modal-description">{selectedProduct.description}</p>
            <p className="modal-price">{selectedProduct.price}</p>
            <button className="modal-buy-button">Confirm Purchase</button>
          </div>
        </div>
      )}
    </div>
  );
};
