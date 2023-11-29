import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import '/src/css/Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <div className={click ? "main-container" : ""} onClick={() => closeMobileMenu()}></div>
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img src="/src/assets/logo-gold-allwhite.svg"></img>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/home" className="nav-links" onClick={click ? handleClick : null}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <NavLink exact to="/categories" className="nav-links" onClick={click ? handleClick : null}>
                                Categories <i className="fa-solid fa-chevron-down"></i>
                            </NavLink>
                            <Link>
                                {dropdown && <Dropdown />}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/aboutus" className="nav-links" onClick={click ? handleClick : null}>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="search-bar">
                                < SearchBar />
                            </NavLink>
                        </li>
                        <div>
                            <img
                                className="notif-icon"
                                src="/src/assets/notif-icon.svg">
                            </img>
                            <img
                                className="account-icon"
                                src="/src/assets/account-icon.svg">
                            </img>
                        </div>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;