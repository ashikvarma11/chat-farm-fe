import React from 'react';
import './navbar.css';
import logo from '../../icons/logo.svg';

const Navbar = ()=>{
    return (
        <div className="navbar">
            <img src={logo} width="40" height="40"/>
            <span>CHAT FARM</span>
        </div>
    )
};

export default Navbar;