import React from 'react'
import SearchIcon from "@material-ui/icons/Search";

import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon"     
                />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                 <SearchIcon className="header__searchIcon"/>
            </div>
        </div>
    )
}

export default Header
