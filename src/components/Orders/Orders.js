import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'

const Orders = () => {
   const [products, setProducts] = useProducts();
   const [cart, setCart] = useCart(products);

   const handelRemoveProduct = (product) => {
      const rest = cart.filter(pd => pd.id !== product.id);
      setCart(rest);
      removeFromDb(product.id)
   }

   return (
      <div className="shop-container">
         <div className="product-container">
            {
               cart.map(product => <ReviewItem
                  key={product.id}
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
