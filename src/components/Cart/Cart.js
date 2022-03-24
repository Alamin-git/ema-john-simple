import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <h3 className='cart-header'>Order Summary</h3>
            <div className='cart'>
                <p>Selected Items:</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h4 className='g-total'>Grand Total: $</h4>
            </div>
        </div>
    );
};

export default Cart;