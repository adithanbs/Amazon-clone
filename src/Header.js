import React from 'react'
import Header from "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';

export const Header = () => {
    return (
        <div classname="header">
<Link to="/">
<img
    classname="header__logo"
    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
    alt=""
/>            
</Link>  
<div classname="header__search">
<input type="text" classname="header__SearchInput"/>
<SearchIcon classname="SearchIcon" />
</div>
        </div>
        // search box
        // 3 links
        // Basket icon with number
        )}
        
export default Header