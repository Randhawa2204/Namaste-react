import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
//Custom Hook
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [searchText, setSearchText] = useState("");
  
  const [listOfRestaurants , listOfFilteredRestaurants,setListOfRestaurants, setListOfFilteredRestaurants] = useRestaurantsList()
  const status = useOnlineStatus()
  
  if(status === false){
    return <h1>You're Offline. Please Check your internet connection.</h1>
  }
  //console.log("Body Rendered")


  //console.log(typeof setListOfFilteredRestaurants)
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-button-container">
        <input
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            setListOfFilteredRestaurants(
              listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
            );
          }}
        >
          search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfFilteredRestaurants(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfFilteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            style={{textDecoration : "none"}}
          >
            <RestaurantCard resData={restaurant} error={restaurant?.error} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
