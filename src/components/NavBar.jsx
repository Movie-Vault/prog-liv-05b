import { NavLink } from 'react-router-dom';
import React from 'react';
import SearchBar from './SearchBar';

function NavBar() {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()}></div>
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img src="/src/assets/logo-gold-allwhite.svg"></img>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={click ? handleClick : null}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/categories" activeClassName="active" className="nav-links" onClick={click ? handleClick : null}>
                                Categories
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/aboutus" activeClassName="active" className="nav-links" onClick={click ? handleClick : null}>
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="search-bar">
                        < SearchBar />
                    </div>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;