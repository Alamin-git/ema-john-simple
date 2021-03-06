import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css';

const Orders = () => {
   const [products, setProducts] = useProducts();
   const [cart, setCart] = useCart();

   const handelRemoveProduct = (product) => {
      const rest = cart.filter(pd => pd._id !== product._id);
      setCart(rest);
      removeFromDb(product._id)
   }

   return (
      <div className="shop-container">
         <div className="product-container">
            {
               cart.map(product => <ReviewItem
                  key={product._id}
                  product={product}
                  handelRemoveProduct={handelRemoveProduct}
               ></ReviewItem>)
            }
         </div>
         <div className="cart-container">
            <Cart cart={cart} >
               <Link to={'/shipment'}>
                  <button className="shipping-btn">Proceed shipping <FontAwesomeIcon className="card-icon" icon={faCreditCard}></FontAwesomeIcon></button>
               </Link>
            </Cart>
         </div>
      </div>
   );
};

export default Orders;
