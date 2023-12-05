import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import '/src/css/Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

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
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/signup" className="paul-signup-icon">
                        <img src="/src/assets/Paul.svg"></img>
                    </NavLink>
                    <NavLink exact to="/" className="nav-logo">
                        <img src="/src/assets/logo-gold-allwhite.svg"></img>
                    </NavLink>
                    <NavLink exact to="/" className="nav-logo-mobile">
                        <img src="/src/assets/favicon-mv.svg"></img>
                    </NavLink>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/home" className="nav-links" onClick={click ? handleClick : null}>
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Link
                                to="/categories"
                                className="nav-links"
                                onClick={Close}
                            >
                                CATEGORIES <i className="fa-solid fa-chevron-down" />
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className="nav-item aboutus">
                            <NavLink exact to="/aboutus" className="nav-links" onClick={click ? handleClick : null}>
                                ABOUT US
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="search-bar">
                                <SearchBar />
                            </NavLink>
                        </li>
                        <li>
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
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;