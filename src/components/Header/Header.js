import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
   const [user] = useAuthState(auth);

   // const logOut = () => {
   //    signOut(auth);
   // }

   return (
      <nav className="header">
         <img src={logo} alt="" />
         <div className="nav-menu">
            <CustomLink to={"/"}>
               Home
            </CustomLink>
            <CustomLink to={"/shop"}>
               Shop
            </CustomLink>
            <CustomLink to={"/orders"}>
               Orders
            </CustomLink>
            <CustomLink to={"/shipment"}>
               Shipment
            </CustomLink>
            <CustomLink to={"/about"}>
               About
            </CustomLink>
            {
               user ?
                  <CustomLink onClick={() => { signOut(auth) }} to={''}>
                     Sign Out
                  </CustomLink>
                  :
                  <CustomLink to={"/login"}>
                     Login
                  </CustomLink>}
         </div>
      </nav>
   );
};

export default Header;
