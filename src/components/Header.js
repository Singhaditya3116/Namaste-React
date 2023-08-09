import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo h-24"
        alt="logo"
        src="https://images.crunchbase.com/c_lpad,f_auto,q_auto:eco,dpr_1/ciweynx3x1xu2ny9corc"
      />
    </a>
  );
};

const Header = () => {
  const { user } = useContext(UserContext);

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
          <li className="px-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
