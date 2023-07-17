import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [loginValue , setLoginValue] = useState("Login")

  return (
    <div className="heading">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => {
            loginValue === "Login" ? setLoginValue("Logout") : setLoginValue("Login")
          }}>
            {loginValue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
