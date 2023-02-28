import React from "react";
import '../style.css'
import logo from '../images/pngegg.png'

function Navbar()
{
    return(
        <div className="nav-bar">
            <img src={logo} alt="logo" className="logo-img"></img>
            <p className="nav-two">ReactFacts</p>
            <p className="nav-three">React Course - Project 1</p>
        </div>
    )
} 

export default Navbar;