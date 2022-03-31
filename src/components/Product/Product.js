import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";
const Product = (props) => {
   const { product, handelAddToAddCart } = props;
   const { name, price, img, ratings, seller } = product;
   return (
      <div className="product">
         <img src={img} alt="" />
         <div className="product-info">
            <h2 className="product-name">{name}</h2>
            <h4 className="product-price">price:${price}</h4>
            <p className="seller-rating">Manufacturer:{seller}</p>
            <p className="seller-rating">Rating:{ratings}stars</p>
         </div>
         <button
            onClick={() => handelAddToAddCart(product)}
            className="cart-btn"
         >
            Add to Cart{" "}
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
         </button>
      </div>
   );
};

export default Product;
