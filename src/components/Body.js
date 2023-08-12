import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
//Custom Hook
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [
    listOfRestaurants,
    listOfFilteredRestaurants,
    setListOfRestaurants,
    setListOfFilteredRestaurants,
  ] = useRestaurantsList();
  const status = useOnlineStatus();

  if (status === false) {
    return <h1>You're Offline. Please Check your internet connection.</h1>;
  }
  //console.log("Body Rendered")

  //console.log(typeof setListOfFilteredRestaurants)
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="ml-4">
      <div className="flex mb-4">
        <div className="relative mr-8">
          <input
            className="block w-96 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="text-white absolute right-1.5 bottom-1  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
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
        </div>

        <button
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold  px-4 border border-gray-400 rounded shadow"
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
      <div className="flex flex-wrap">
        {listOfFilteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            style={{ textDecoration: "none" }}
          >
            <RestaurantCard resData={restaurant} error={restaurant?.error} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
