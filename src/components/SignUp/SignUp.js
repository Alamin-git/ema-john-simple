import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import gLogo from '../../images/google-icon.png';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');
   const [createUserWithEmailAndPassword, loading, user] = useCreateUserWithEmailAndPassword(auth);
   const navigate = useNavigate();
   const handelEmailBlur = (event) => {
      setEmail(event.target.value);
   };
   const handelPasswordBlur = (event) => {
      setPassword(event.target.value);
   };
   const handelConfirmPasswordBlur = (e) => {
      setConfirmPassword(e.target.value);
   };


   if (loading) {
      return <p>Loading...</p>;
   }
   if (user) {
      navigate('/shop');
   }

   const handelCreatUser = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         setError("Your confirm password did'n match");
         return;
      }
      if (password.length < 6) {
         setError('Password must be 6 character or more.');
         return;
      }
      createUserWithEmailAndPassword(email, password)
   }
   return (
      <div className="login-container">
         <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handelCreatUser}>
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                     onBlur={handelEmailBlur}
                     type="email" name="email"
                     id="" required
                  />
               </div>
               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <br />
                  <input
                     onBlur={handelPasswordBlur}
                     type="password"
                     name="password"
                     id=""
                     required
                  />
               </div>
               <div className="input-group">
                  <label htmlFor="password">Confirm Password</label>
                  <br />
                  <input
                     onBlur={handelConfirmPasswordBlur}
                     type="password"
                     name="confirm-password"
                     id=""
                     required
                  />
               </div>

               <p style={{ color: 'red', marginBottom: '20px' }}>{error}</p>


               <input className='submit-btn' type="submit" value="Sign Up" />
            </form>
            <p className='new-ema'>Already have an account?
               <Link className='sign-link' to={"/login"}>
                  Login
               </Link >
            </p>
            <p className='login-or'>or</p>
            <btn className="g-sign-btn"><img src={gLogo} alt="" /> Continue with Google
            </btn>
         </div>
      </div>
   );
};

export default SignUp;