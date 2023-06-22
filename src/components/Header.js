import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  const [loginValue , setLoginValue] = useState("Login")
  //console.log("Header Rendered")
  return (
    <div className="heading">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
