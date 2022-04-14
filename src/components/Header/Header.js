import React from "react";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
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
            <CustomLink to={"/about"}>
               About
            </CustomLink>
            <CustomLink to={"/login"}>
               Login
            </CustomLink>
         </div>
      </nav>
   );
};

export default Header;
