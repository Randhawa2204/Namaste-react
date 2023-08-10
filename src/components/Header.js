import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [loginValue , setLoginValue] = useState("Login")
  const status = useOnlineStatus()

  
  return (
    <div className="heading">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li>Online Status : {status ? '🟢' : '🔴'}</li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
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
