import React from "react";
import '../style.css'
import logo from '../images/pngegg.png'
function Main()
{
    return(
        <div className="body-sec">
            <p className="body-header">Fun facts about React</p>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>has well over 100k stars on GitHub</li>
                <li>Is maintained Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            {/* <img src={logo} alt="logo"></img> */}
        </div>
    )
        
}

export default Main;