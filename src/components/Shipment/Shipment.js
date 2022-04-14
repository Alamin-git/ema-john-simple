import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Shipment.css'

const Shipment = () => {
   const [name, setName] = useState('');
   const [address, setAddress] = useState('');
   const [phone, setPhone] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();
   const [user] = useAuthState(auth);
   const handelNameBlur = (event) => {
      setName(event.target.value);
   };
   const handelAddressBlur = (event) => {
      setAddress(event.target.value);
   };
   const handelPhoneBlur = (e) => {
      setPhone(e.target.value);
   };

   const handelCreatUser = (e) => {
      e.preventDefault();
      const shipping = { name, address, phone };
      console.log(shipping);
   }
   return (
      <div className="login-container">
         <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handelCreatUser}>
               <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <br />
                  <input
                     onBlur={handelNameBlur}
                     type="text" name="name"
                     id=""
                     required
                  />
               </div>
               <div className='input-group'>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                     value={''}
                     readOnly
                     type="text" name="name"
                     id=""
                     placeholder={user?.email}
                  />
               </div>
               <div className="input-group">
                  <label htmlFor="address">Address</label>
                  <br />
                  <input
                     onBlur={handelAddressBlur}
                     type="text"
                     name="address"
                     id=""
                     required
                  />
               </div>
               <div className="input-group">
                  <label htmlFor="phone">Phone</label>
                  <br />
                  <input
                     onBlur={handelPhoneBlur}
                     type="text"
                     name="phone"
                     id=""
                     required
                  />
               </div>

               <input className='shipping-btn' type="submit" value="Add Shipping" />
            </form>
         </div>
      </div>
   );
};

export default Shipment;