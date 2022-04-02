import React from "react";
import "./Cart.css";

const Cart = (props) => {
   const { cart } = props;
   // console.log(cart);
   let total = 0;
   let shipping = 0;
   let quantity = 0;
   for (const product of cart) {
      quantity = quantity + product.quantity;
      total = total + product.price * product.quantity;
      shipping = shipping + product.shipping;
   }
   const tex = (total * 0.1).toFixed(2);
   const grandTotal = total + shipping + parseFloat(tex);
   return (
      <div className="cart">
         <h3 className="cart-header">Order Summary</h3>
         <div className="cart-info">
            <p>Selected Items:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tex}</p>
            <h4 className="g-total">Grand Total: ${grandTotal}</h4>
         </div>
         {props.children}
      </div>
   );
};

export default Cart;
