import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateManager";
import { auth } from "./firebase";

function Header() {
  // get the current cart from StateManager
  const [{ cart, user }, dispatch] = useStateValue();

  // get number of items in the cart by summing up the quantities
  const numOfItems = cart.map(cartItem => cartItem.quantity).reduce((sum, current) => sum + current, 0);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="./images/grocerystorelogo.png"
          alt=""
        ></img>
      </Link>
      <div className="header__nav" text-decoration="none">
        <div className="header__foodOptions">
          <Link to="/poultry">
            <div className="header__option">
              <span className="header__optionLineOne">Meat and Seafood</span>
            </div>
          </Link>
          <Link to="/vegetable">
            <div className="header__option">
              <span className="header__optionLineOne">Vegetables</span>
            </div>
          </Link>
          <Link to="/fruit">
            <div className="header__option">
              <span className="header__optionLineOne">Fruits</span>
            </div>
          </Link>
        </div>
        <div className="header__AuthCart">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__authLineOne">
                {user ? "Hello " + user.email : "Hello, Guest"}
              </span>
              <span className="header__authLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header__optionShoppingCart">
              <ShoppingCartIcon />
              <span className="header__authLineTwo header__ShoppingCartCount">
                {numOfItems}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
