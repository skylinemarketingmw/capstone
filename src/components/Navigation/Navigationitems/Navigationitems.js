import React from "react";
import Navigationitem from "./Navigationitem/Navigationitem";
import Cart from "../../../assets/img/shopping-cart.svg";
import classes from "./Navigationitems.css";
const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      
      <Navigationitem link="/shop" >
        SHOP
      </Navigationitem>
      <Navigationitem link="/about">ABOUT</Navigationitem>
      <Navigationitem link="/cart" cart="cart">
        <img src={Cart} alt="cart" className={classes.Cart}/>
      </Navigationitem>
    </ul>
  );
};

export default navigationItems;
