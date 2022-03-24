import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [cart, setCart] = useState([]);
    const handelAddToAddCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className='shop'>
            <div className="shop-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToAddCart={handelAddToAddCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;