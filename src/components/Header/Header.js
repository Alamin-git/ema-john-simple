import React from "react";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
   return (
      <nav className="header">
         <img src={logo} alt="" />
         <div className="nav-menu">
            <CustomLink className="nav" to={"/"}>
               Home
            </CustomLink>
            <CustomLink className="nav" to={"/shop"}>
               Shop
            </CustomLink>
            <CustomLink className="nav" to={"/orders"}>
               Orders
            </CustomLink>
            <CustomLink className="nav" to={"/about"}>
               About
            </CustomLink>
         </div>
      </nav>
   );
};

export default Header;
