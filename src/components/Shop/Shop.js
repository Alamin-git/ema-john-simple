import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";



const Shop = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useCart();
   const [pageCount, setPageCount] = useState(0);
   const [page, setPage] = useState(0);
   const [size, setSize] = useState(10);


   useEffect(() => {
      // page= কত নাম্বার পেজে আছে সেটা দেয়া । size= কত গুলো data লোড হবে সেটার জন্য। এইটা key=value  হিসাবে কাজ করে । 
      
      const url =`http://localhost:5000/product?page=${page}&size=${size}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => setProducts(data));

      // যেহেতু কত number page আছি এবং কইটা data lode হবে  তার ওপর নির্ভর করে data lode করবে । তাই ডিপেন্ডেন্সি দেয়া হয়েছে।
   }, [page, size]);



   useEffect(()=>{
      fetch('http://localhost:5000/productcount')
      .then(res => res.json())
      .then(data => {
         const count = data.count;
         const pages = Math.ceil(count/10);
         setPageCount(pages);
      })
   },[]);

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
            <div className="pagination">
               {
                  // 1 line ও করা যেত , সুবিধার জন্য 2 line করা হইছে ;
                  [...Array(pageCount).keys()]
                  .map(number => <button 
                     className={page === number ? 'selected' : ''}
                     onClick={() => {setPage(number)}}
                  >{number + 1}</button>)
               }
               {size}
               <select onClick={e => setSize(e.target.value)}>
                  <option value="5">5</option>
                  <option value="10" selected>10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
               </select>
            </div>
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
