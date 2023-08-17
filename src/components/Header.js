import { LOGO_URL } from "../utils/constants";
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//Context
import UserContext from "../utils/UserContext";

//Selector
import {useSelector} from 'react-redux'

const Header = () => {

  const [loginValue , setLoginValue] = useState("Login")
  const status = useOnlineStatus()

  const {loggedInUser} = useContext(UserContext)

  //Subscribing to the Store
  const cartItems = useSelector((store) => store.cart.items)
  
  return (
    <div className="flex justify-between items-center shadow-lg mb-10">
      <div className="h-20 w-20 m-4 ml-10">
        <img src={LOGO_URL} />
      </div>
      <div className="navbar text-lg mr-12">
        <ul className="flex items-center">
          <li className="mr-8">Online Status : {status ? '🟢' : '🔴'}</li>
          <li className="px-4 py-2 rounded hover:bg-gray-50"><Link to="/">Menu</Link></li>
          <li className="px-4 py-2 rounded hover:bg-gray-50"><Link to="/about">About Us</Link></li>
          <li className="px-4 py-2 rounded hover:bg-gray-50"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 py-2 rounded hover:bg-gray-50"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 py-2 rounded hover:bg-gray-50"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
          <button className="ml-8 bg-blue-400 hover:bg-blue-600 px-4 py-2 font-bold text-white rounded" onClick={() => {
            loginValue === "Login" ? setLoginValue("Logout") : setLoginValue("Login")
          }}>
            {loginValue}
          </button>
          <li className="px-4 py-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
