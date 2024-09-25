import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Clarusway_Logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-bootstrap";
const NavBar = () => {
  return (
    <div  className="navbar">
      <div >
        <Link to="/">
          <img src={logo} alt="logo" width="70px"/>
        </Link>
        <Link className="text" to="/">Clarus Shopping</Link>
      </div>
      <div className="icon" >
        <Link  to="/basket"><ShoppingCartIcon className="sepet"></ShoppingCartIcon></Link>
      </div>
    </div>
  );
};

export default NavBar;
