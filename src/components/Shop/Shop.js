import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
   const [products, setProducts] = useProducts();

   const [cart, setCart] = useState([]);

   useEffect(() => {
      const storedCart = getStoredCart();
      const saveCart = [];
      for (const id in storedCart) {
         const addedProduct = products.find((product) => product._id === id);
         if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
         }
      }
      setCart(saveCart);
   }, [products]);

   const handelAddToAddCart = (selectedProduct) => {
      // console.log(product);
      let newCart = [];
      const exists = cart.find((product) => product._id === selectedProduct._id);
      if (!exists) {
         selectedProduct.quantity = 1;
         newCart = [...cart, selectedProduct];
      } else {
         const rest = cart.filter(
            (product) => product._id !== selectedProduct._id
         );
         exists.quantity = exists.quantity + 1;
         newCart = [...rest, exists];
      }
      setCart(newCart);
      addToDb(selectedProduct._id);
   };

   return (
      <div className="shop">
         <div className="shop-container">
            {products.map((product) => (
               <Product
                  key={product._id}
                  product={product}
                  handelAddToAddCart={handelAddToAddCart}
               ></Product>
            ))}
         </div>
         <div className="cart-container">
            <Cart cart={cart}>
               <Link to="/orders">
                  <button className="review-btn">Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
               </Link>
            </Cart>
         </div>
      </div>
   );
};

export default Shop;
