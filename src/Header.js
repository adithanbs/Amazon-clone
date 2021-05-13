import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import "./Header.css";
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
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__Link">
          <div className="header__option">
            <span className="header__optionone">Hello</span>
            <span className="header__optiontwo">Signin</span>
          </div>
        </Link>

        <Link to="/login" className="header__Link">
          <div className="header__option">
            <span className="header__optionone">Return</span>
            <span className="header__optiontwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__Link">
          <div className="header__option">
            <span className="header__optionone">Your</span>
            <span className="header__optiontwo">Prime</span>
          </div>
        </Link>
<Link to="/checkout" className="header__Link">
    <div className="header__optionBasket">
        <ShoppingBasketIcon/>
        <span className="header__basketcount">0</span>
    </div>
</Link>

      </div>
    </div>
  );
};

export default Header;
