import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import gLogo from '../../images/google-icon.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error2, setError] = useState('');
   const [signInWithEmailAndPassword,
      user,
      loading,
      error
   ] = useSignInWithEmailAndPassword(auth);

   const navigate = useNavigate();

   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   if (user) {
      navigate(from, { replace: true });
   }
   const handelUserSignIn = (e) => {
      e.preventDefault();
      if (password.length < 6) {
         setError('Password must be 6 character or more.');
         return;
      }
      setError('');
      signInWithEmailAndPassword(email, password);
   }

   return (
      <div className="login-container">
         <div>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handelUserSignIn}>
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input onBlur={(e) => { setEmail(e.target.value) }} type="email" name="email" id="" required />
               </div>
               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <br />
                  <input onBlur={e => { setPassword(e.target.value) }} type="password" name="" id="" required />
               </div>
               <p style={{ color: 'red' }}>{error2}</p>
               <p style={{ color: 'red' }}>{error?.message}</p>
               {
                  loading && <p>Loading...</p>
               }
               <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p className='new-ema'>New to Ema-john? <Link className='sign-link' to={"/signup"}>Create New Account</Link ></p>
            <p className='login-or'>or</p>
            <btn className="g-sign-btn"><img src={gLogo} alt="" /> Continue with Google
            </btn>
         </div>
      </div>
   );
};

export default Login;