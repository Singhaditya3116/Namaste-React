import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://images.crunchbase.com/c_lpad,f_auto,q_auto:eco,dpr_1/ciweynx3x1xu2ny9corc"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
