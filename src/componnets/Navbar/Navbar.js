import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = props => {
    return (
        <nav className='navbar fixed-top navbar-dark bg-primary navbar-expand-lg' >
            <div className='navbar-brand' >
                GitHub Search
            </div>
            <ul className='navbar-nav  ' >
                <li className='nav-item' >
                    <NavLink to={"/about"} className='nav-link' >  About</NavLink>
                </li>
                <li className='nav-item' >
                    <NavLink to={"/home"} className='nav-link' >  Home</NavLink>
                </li>
                <li className='nav-item' >
                    <NavLink to={"/contact"} className='nav-link' >  Contact</NavLink>
                </li>
            </ul>


        </nav>

    )
}

export default Navbar