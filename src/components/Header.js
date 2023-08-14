import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img
        data-testid="logo"
        className="logo h-24"
        alt="logo"
        src="https://images.crunchbase.com/c_lpad,f_auto,q_auto:eco,dpr_1/ciweynx3x1xu2ny9corc"
      />
    </a>
  );
};

const Header = () => {
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between px-3 bg-orange-300">
      <Title />

      <div className="nav-items">
        <ul className="flex py-8">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About us</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact us</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <span className="font-bold text-green-700">{user.name}</span>
          <Link to="/cart">
            <li className="px-2" data-testid="cart">
              Cart - {cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
