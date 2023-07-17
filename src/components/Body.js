import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  //console.log("Body Rendered")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8045665&lng=86.2028754&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();

      setListOfRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
      setListOfFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      setListOfFilteredRestaurants([{ error: true }]);
    }
  };

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
                restaurant.data.name
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
              (res) => res.data.avgRating >= 4
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
            to={"/restaurant/" + restaurant?.data?.id}
            key={restaurant?.data?.id}
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
