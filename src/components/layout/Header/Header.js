import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import {FaSearchengin,FaIdBadge, FaDashcube} from "react-icons/fa6"

 
const options = {
 
  
  burgerColorHover: "#B21EAF",
  logo,
  logoWidth: "20vmax",
  

  navColor1: "white",
  navColor2: "#E8C8E8",
 

  logoHoverSize: "10px",
  logoHoverColor: "#B21EAF",
  link1Text: "Home",
  link2Text: "Lectures",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/lectures",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.6vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#B21EAF",
  link1Margin: "1vmax",
  profileIcon:true,
  ProfileIconElement:FaIdBadge,
  cartIcon:true,
  CartIconElement:FaDashcube,
  searchIcon:true,
  SearchIconElement:FaSearchengin,
  backgroundColor1: "red",


  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#B21EAF",
  searchIconColorHover: "#B21EAF",
  cartIconColorHover: "#B21EAF",
  cartIconMargin: "1vmax",

  
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;