import React from 'react';
import './ReviewItem.css'
import { TrashIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
   const { product, handelRemoveProduct } = props;
   const { name, price, shipping, quantity, img } = product;
   return (
      <div>
         <div className='review-item-box'>
            <div>
               <img src={img} alt="" />
            </div>

            <div className='details-box'>
               <div className='item-detail'>
                  <h4 title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h4>
                  <p>Price: <span className='price'>${price}</span></p>
                  <p>Shipping: <span className='price'>${shipping}</span></p>
                  <p>Quantity: <span className='price'>{quantity}</span></p>
               </div>
               <div className='dlt-container'>
                  <button onClick={() => handelRemoveProduct(product)} className='dlt-btn'>
                     <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ReviewItem;