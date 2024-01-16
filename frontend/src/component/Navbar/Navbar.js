import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <header>
                <div className="navbar">
                    <div className="logo"><a href="http://">Soumi's ArtWork🕊</a></div>
                    <ul className="links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <a href="#" className="action-button">Get Started</a>
                    <div className="toggle-button">
                    <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

                <div className="dropdown-menu">
            <li><a href="http://">Home</a></li>
            <li><a href="http://">About</a></li>
            <li><a href="http://">Services</a></li>
            <li><a href="http://">Contact</a></li>
            <a href="" className="action-button">Get Started</a>
        </div>
                <div className="searchbox">
                    <div className="boxcontainer">
                        <input type="text" name="" id="" />
                        <label htmlFor="">🔍</label>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
